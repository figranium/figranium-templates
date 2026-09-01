import { NextResponse } from 'next/server';

// Neon Auth owns sign-out and all authentication cookies.
export async function POST() {
    return NextResponse.json({ error: 'Use Neon Auth sign-out.' }, { status: 410 });
}
