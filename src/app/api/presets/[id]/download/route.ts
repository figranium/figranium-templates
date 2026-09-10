import { createHmac } from 'crypto';
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

function getClientIp(req: Request) {
    const forwarded = req.headers.get('x-forwarded-for');
    if (forwarded) return forwarded.split(',')[0]?.trim() || null;
    return req.headers.get('x-real-ip')?.trim() || null;
}

function hashIp(ip: string) {
    const secret = process.env.DOWNLOAD_IP_HASH_SECRET || process.env.NEON_AUTH_COOKIE_SECRET || process.env.JWT_SECRET;
    if (!secret) return null;
    return createHmac('sha256', secret).update(ip).digest('hex');
}

function deepRedactVersions(obj: unknown) {
    if (!obj || typeof obj !== 'object') return;
    if (Array.isArray(obj)) {
        for (const item of obj) deepRedactVersions(item);
        return;
    }

    const record = obj as Record<string, unknown>;
    if ('versions' in record) record.versions = [];
    for (const value of Object.values(record)) deepRedactVersions(value);
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const presetResult = await query('SELECT configuration FROM templates WHERE id = $1', [id]);

        if (presetResult.rows.length === 0) {
            return NextResponse.json({ error: 'Template not found' }, { status: 404 });
        }

        const ip = getClientIp(req);
        const ipHash = ip ? hashIp(ip) : null;

        if (ipHash) {
            const insertResult = await query(
                `INSERT INTO preset_download_ips (preset_id, ip_hash)
                 VALUES ($1, $2)
                 ON CONFLICT DO NOTHING RETURNING preset_id`,
                [id, ipHash]
            );

            if (insertResult.rows.length > 0) {
                await query('UPDATE templates SET downloads = COALESCE(downloads, 0) + 1 WHERE id = $1', [id]);
            }
        }

        let configuration = presetResult.rows[0].configuration;
        if (typeof configuration === 'string') {
            try {
                configuration = JSON.parse(configuration);
            } catch {
                // Keep the original string if it is not valid JSON.
            }
        }

        deepRedactVersions(configuration);

        return NextResponse.json({
            message: 'Download tracked',
            configuration: typeof configuration === 'string'
                ? configuration
                : JSON.stringify(configuration ?? {}, null, 2),
        });
    } catch (error) {
        console.error('Download count error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
