import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getCurrentUser } from '@/lib/current-user';

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        const user = await getCurrentUser();
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Try to insert a new download record
        const insertResult = await query(
            `INSERT INTO preset_downloads (preset_id, user_id) 
             VALUES ($1, $2) 
             ON CONFLICT DO NOTHING RETURNING *`,
            [id, user.id]
        );

        // If a row was inserted, it's a new unique download, increment the count
        if (insertResult.rows.length > 0) {
            await query('UPDATE presets SET downloads = COALESCE(downloads, 0) + 1 WHERE id = $1', [id]);
        }

        return NextResponse.json({ message: 'Download tracked' });
    } catch (error) {
        console.error('Download count error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
