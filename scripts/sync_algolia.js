 /**
 * Sync presets from the database into the Algolia index.
 *
 * Usage:
 *   node scripts/sync_algolia.js
 *
 * Requires the following env vars (in .env.local):
 *   DATABASE_URL
 *   NEXT_PUBLIC_ALGOLIA_APP_ID
 *   NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
 *   NEXT_PUBLIC_ALGOLIA_INDEX_NAME
 */
const { Client } = require('pg');
const { algoliasearch } = require('algoliasearch');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const apiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || 'figranium_presets';

if (!appId || !apiKey || appId === 'YOUR_ALGOLIA_APP_ID' || apiKey === 'YOUR_ALGOLIA_SEARCH_API_KEY') {
    console.error('⚠️  Algolia credentials not configured. Set NEXT_PUBLIC_ALGOLIA_APP_ID and NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY in .env.local');
    process.exit(1);
}

const dbClient = new Client({
    // Preserve remaining query params by replacing '?sslmode=require' with '?'
    connectionString: process.env.DATABASE_URL?.replace('?sslmode=require', '?'),
    ssl: { rejectUnauthorized: false }
});

async function sync() {
    try {
        await dbClient.connect();
        console.log('📦 Connected to database...');

        // Fetch all presets
        const result = await dbClient.query(`
            SELECT
                id,
                title,
                description,
                author_name,
                downloads,
                time_estimate,
                type,
                icon,
                target_url,
                category,
                created_at
            FROM presets
        `);
        console.log(`🔍 Found ${result.rows.length} presets`);

        // Map DB records to Algolia records.
        // objectID = preset UUID so we can filter back to DB rows.
        const records = result.rows.map((row) => ({
            objectID: row.id,
            title: row.title,
            description: row.description,
            author: row.author_name || "Unknown",
            downloads: row.downloads || 0,
            time: row.time_estimate || "—",
            type: row.type,
            icon: row.icon || row.target_url || "public",
            category: row.category || "QA Testing",
            createdAt: row.created_at,
            // Hint for relevance ranking
            _tags: [row.category || "QA Testing", row.type].filter(Boolean),
        }));

        // Save records to Algolia
        const client = algoliasearch(appId, apiKey);
        await client.saveObjects({
            indexName,
            objects: records,
            waitForTasks: true,
        });

        console.log(`✅ Successfully indexed ${records.length} presets into Algolia index "${indexName}"`);
    } catch (err) {
        console.error('❌ Sync error:', err);
        process.exitCode = 1;
    } finally {
        await dbClient.end();
    }
}

sync();