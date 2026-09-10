import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { requireAdmin } from '@/lib/current-user';

export async function GET(req: Request) {
    try {
        try { await requireAdmin(); } catch (error) {
            return NextResponse.json({ error: error instanceof Error && error.message === 'UNAUTHORIZED' ? 'Unauthorized' : 'Forbidden' }, { status: error instanceof Error && error.message === 'UNAUTHORIZED' ? 401 : 403 });
        }

        // Fetch all presets, including author details directly from users table using JOIN
        const { rows } = await query(`
            SELECT p.*, u.username as author_username 
            FROM templates p
            LEFT JOIN users u ON p.user_id = u.id
            ORDER BY p.created_at DESC
        `);

        return NextResponse.json(rows);
    } catch (error) {
        console.error('Fetch all templates error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
