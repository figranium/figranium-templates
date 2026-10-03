import { createHmac } from 'crypto';
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Called by the Figranium server only after a template was successfully saved.
// A persistent installation ID is independent of optional product telemetry.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
        return NextResponse.json({ error: 'Invalid template ID' }, { status: 400 });
    }

    const secret = process.env.TEMPLATE_IMPORT_HASH_SECRET;
    if (!secret) return NextResponse.json({ error: 'Import tracking unavailable' }, { status: 503 });

    let body: unknown;
    try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }
    const instanceId = (body as Record<string, unknown> | null)?.instance_id;
    if (typeof instanceId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(instanceId)) {
        return NextResponse.json({ error: 'Invalid instance ID' }, { status: 400 });
    }

    const instanceHash = createHmac('sha256', secret).update(instanceId.toLowerCase()).digest('hex');
    try {
        // One atomic statement: concurrent/repeated imports cannot double count.
        const { rows } = await query(
            `WITH inserted AS (
                INSERT INTO preset_import_instances (preset_id, instance_hash)
                SELECT id, $2 FROM presets WHERE id = $1
                ON CONFLICT DO NOTHING
                RETURNING preset_id
            ), incremented AS (
                UPDATE presets SET downloads = COALESCE(downloads, 0) + 1
                WHERE id IN (SELECT preset_id FROM inserted)
                RETURNING id
            )
            SELECT EXISTS(SELECT 1 FROM presets WHERE id = $1) AS found,
                   EXISTS(SELECT 1 FROM incremented) AS counted`,
            [id, instanceHash]
        );
        if (!rows[0]?.found) return NextResponse.json({ error: 'Template not found' }, { status: 404 });
        return NextResponse.json({ counted: rows[0].counted });
    } catch (error) {
        console.error('Template import tracking error:', error);
        return NextResponse.json({ error: 'Import tracking unavailable' }, { status: 503 });
    }
}
