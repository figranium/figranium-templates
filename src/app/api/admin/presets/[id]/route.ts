import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { requireAdmin } from '@/lib/current-user';

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        try { await requireAdmin(); } catch (error) {
            return NextResponse.json({ error: error instanceof Error && error.message === 'UNAUTHORIZED' ? 'Unauthorized' : 'Forbidden' }, { status: error instanceof Error && error.message === 'UNAUTHORIZED' ? 401 : 403 });
        }

        const result = await query('DELETE FROM templates WHERE id = $1', [id]);

        if (result.rowCount === 0) {
            return NextResponse.json({ error: 'Template not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Template deleted successfully' });
    } catch (error) {
        console.error('Delete template error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
