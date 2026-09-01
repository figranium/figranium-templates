import { NextResponse } from 'next/server';

// Email verification is handled by the configured Neon Auth provider.
export async function GET() {
    return NextResponse.redirect(new URL('/auth/signin', process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'));
}
