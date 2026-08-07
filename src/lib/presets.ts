import { query } from "@/lib/db";
import { unstable_noStore as noStore, unstable_cache as cache } from 'next/cache';
import { searchPresets, algoliaConfig } from "@/lib/algolia";

// Shape of an Algolia preset record
interface AlgoliaPreset {
    objectID: string;
    [key: string]: unknown;
}

// Cache the category counts for 1 hour to reduce database load
const getCategoryCounts = cache(async () => {
    const result = await query(`
        SELECT
            COALESCE(NULLIF(category, ''), 'QA Testing') as cat,
            COUNT(*) as count
        FROM presets
        GROUP BY COALESCE(NULLIF(category, ''), 'QA Testing')
    `);
    return result.rows;
}, ['category-counts'], { revalidate: 3600, tags: ['preset-counts'] });

export async function getPresets(category?: string, sort?: string, search?: string) {
    noStore(); // Disable caching for now to see updates immediately

    try {
        // Query 1: Get counts (cached)
        const countsPromise = getCategoryCounts();

        // Prepare Query 2: Get filtered data
        // We only select the columns we need, avoiding potentially large JSON blobs
        let orderBy = 'downloads DESC';
        if (sort === 'newest') {
            orderBy = 'created_at DESC';
        } else if (sort === 'oldest') {
            orderBy = 'created_at ASC';
        }

        const conditions: string[] = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params: any[] = [];
        let paramIndex = 1;

        // Filter by category
        if (category && category !== "All Presets") {
            conditions.push(`COALESCE(NULLIF(category, ''), 'QA Testing') = $${paramIndex}`);
            params.push(category);
            paramIndex++;
        }

        // Filter by search — use Algolia when configured, otherwise fall back to SQL ILIKE
        const searchTerm = search?.trim();
        let algoliaIds: string[] | null = null;

        if (searchTerm) {
            if (algoliaConfig.isConfigured) {
                // Search Algolia for matching preset object IDs
                try {
                    const response = await searchPresets<AlgoliaPreset>(searchTerm, { hitsPerPage: 1000 });
                    algoliaIds = response.hits.map((hit) => hit.objectID);
                } catch (err) {
                    console.error("Algolia search failed, falling back to SQL search:", err);
                    algoliaIds = null;
                }
            }

            if (algoliaIds) {
                if (algoliaIds.length === 0) {
                    // No Algolia matches — return empty set
                    conditions.push(`1 = 0`);
                } else {
                    // Filter by the matched preset IDs (cast id to text for comparison)
                    const idPlaceholders = algoliaIds.map((_, i) => `$${paramIndex + i}`).join(', ');
                    conditions.push(`id::text = ANY(ARRAY[${idPlaceholders}]::text[])`);
                    params.push(...algoliaIds);
                    paramIndex += algoliaIds.length;
                }
            } else {
                // Fallback to SQL ILIKE search
                conditions.push(`(title ILIKE $${paramIndex} OR description ILIKE $${paramIndex})`);
                params.push(`%${searchTerm}%`);
                paramIndex++;
            }
        }

        const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

        // Select only necessary columns
        const dataQuery = `
        SELECT
            p.id,
            p.title,
            p.description,
            p.author_name,
            p.downloads,
            p.time_estimate,
            p.type,
            p.icon,
            p.target_url,
            p.category,
            u.role as author_role
        FROM presets p
        LEFT JOIN users u ON p.user_id = u.id
        ${whereClause}
        ORDER BY ${orderBy}
    `;

        // Execute queries in parallel
        const [countsRows, dataResult] = await Promise.all([
            countsPromise,
            query(dataQuery, params)
        ]);

        // Process counts
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const totalPresets = countsRows.reduce((sum: number, row: any) => sum + parseInt(row.count), 0);
        const counts: Record<string, number> = { "All Presets": totalPresets };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        countsRows.forEach((row: any) => {
            counts[row.cat] = parseInt(row.count);
        });

        // Process presets
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const presets = dataResult.rows.map((r: any) => ({
            id: r.id,
            title: r.title,
            author: r.author_name || "Unknown",
            authorRole: r.author_role || "user",
            description: r.description,
            downloads: String(r.downloads || "0"),
            time: r.time_estimate || "—",
            type: r.type as "SCRAPE" | "AGENT",
            icon: r.icon || r.target_url || "public"
        }));

        return { presets, counts };
    } catch (error) {
        console.error("Failed to fetch presets:", error);
        return { presets: [], counts: {} };
    }
}
