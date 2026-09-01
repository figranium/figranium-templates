import { NextResponse } from 'next/server';
import { z } from 'zod';
import { query } from '@/lib/db';
import { getAuthSession, getCurrentUser } from '@/lib/current-user';

const onboardingSchema = z.object({
    username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/, 'Username must be alphanumeric'),
});

export async function POST(request: Request) {
    const session = await getAuthSession();
    if (!session?.user?.id || !session.user.email) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (await getCurrentUser()) {
        return NextResponse.json({ error: 'Profile already exists' }, { status: 409 });
    }

    const parsed = onboardingSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message || 'Invalid username' }, { status: 400 });

    try {
        await query(
            `INSERT INTO users (username, email, neon_auth_user_id, email_verified)
             VALUES ($1, $2, $3, NOW())`,
            [parsed.data.username, session.user.email, session.user.id],
        );
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Username or email is already in use' }, { status: 409 });
    }
}
