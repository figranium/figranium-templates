import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getCurrentUser } from '@/lib/current-user';

export async function GET(req: Request) {
    try {
        const user = await getCurrentUser();
        if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { rows } = await query(
            'SELECT * FROM presets WHERE user_id = $1 ORDER BY created_at DESC',
            [user.id]
        );

        return NextResponse.json(rows);
    } catch (error) {
        console.error('Fetch my presets error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
