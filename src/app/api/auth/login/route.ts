import { NextResponse } from 'next/server';
import { z } from 'zod';
import { query } from '@/lib/db';
import { signLegacyToken, verifyLegacyPassword } from '@/lib/auth';

const loginSchema = z.object({ email: z.string().email(), password: z.string() });

/** Temporary compatibility path; disabled by default and never for Neon Auth test. */
export async function POST(request: Request) {
    if (process.env.NEON_AUTH_BASE_URL || process.env.LEGACY_PASSWORD_LOGIN_ENABLED !== 'true') {
        return NextResponse.json({ error: 'Legacy password login is disabled. Use /auth/signin.' }, { status: 410 });
    }
    const parsed = loginSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 });

    const { rows } = await query('SELECT id, username, password_hash, email_verified FROM users WHERE email = $1', [parsed.data.email]);
    const user = rows[0];
    if (!user?.password_hash || !(await verifyLegacyPassword(parsed.data.password, user.password_hash))) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    if (!user.email_verified) return NextResponse.json({ error: 'Please verify your email first' }, { status: 403 });

    const response = NextResponse.json({ message: 'Login successful' });
    response.cookies.set('token', await signLegacyToken({ sub: user.id, username: user.username }), {
        httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60 * 24, path: '/',
    });
    return response;
}
