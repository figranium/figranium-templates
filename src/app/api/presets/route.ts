import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sanitizeUrl } from '@/lib/utils';
import { z } from 'zod';
import { getCurrentUser } from '@/lib/current-user';
import { revalidateTag } from 'next/cache';
import { PRESET_CATEGORIES } from '@/lib/preset-import';

export const createPresetSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    type: z.enum(['AGENT', 'SCRAPE']),
    category: z.enum(PRESET_CATEGORIES),
    icon: z.string().min(1, "Choose an icon before publishing."),
    time_estimate: z.string(),
    configuration: z.string().refine((val) => {
        try {
            const json = JSON.parse(val);
            if (json.mode === 'agent' || json.mode === 'scrape') {
                return true;
            }
            if (Array.isArray(json.tasks) && json.tasks.length > 0) {
                const taskMode = json.tasks[0]?.mode;
                return taskMode === 'agent' || taskMode === 'scrape';
            }
            return false;
        } catch {
            return false;
        }
    }, "Invalid JSON configuration"),
    expected_output: z.string().optional(),
    readme: z.string().min(80).max(8000),
});

export async function GET() {
    try {
        const { rows } = await query('SELECT * FROM presets ORDER BY created_at DESC');
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Fetch presets error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const user = await getCurrentUser();
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const result = createPresetSchema.safeParse(body);

        if (!result.success) {
            console.error('Validation error:', result.error);
            const errorMessage = result.error.issues?.[0]?.message || "Invalid request data";
            return NextResponse.json({ error: errorMessage }, { status: 400 });
        }

        const { title, description, type, category, icon, time_estimate, configuration, expected_output, readme } = result.data;

        // Extract URL from configuration
        let targetUrl = "";
        try {
            const config = JSON.parse(configuration);
            const task = Array.isArray(config?.tasks) && config.tasks.length > 0 ? config.tasks[0] : config;
            targetUrl = sanitizeUrl(task?.url) || "";
        } catch {
            // Should be caught by Zod refine, but safe fallback
        }

        await query(
            `INSERT INTO presets (user_id, title, description, author_name, type, category, icon, time_estimate, configuration, target_url, expected_output, readme)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
            [user.id, title, description, user.username || user.email, type, category, icon, time_estimate, configuration, targetUrl, expected_output, readme]
        );

        revalidateTag('preset-counts', { expire: 0 });

        return NextResponse.json({ message: 'Preset created' });
    } catch (error: unknown) {
        console.error('Create preset error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
