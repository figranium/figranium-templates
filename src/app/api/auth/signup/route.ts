import { NextResponse } from 'next/server';

// Account creation is handled by Neon Auth's managed route handler.
export async function POST() {
    return NextResponse.json({ error: 'Use /auth/signup to create an account with Neon Auth.' }, { status: 410 });
}
