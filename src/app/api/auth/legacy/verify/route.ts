import { NextResponse } from 'next/server';
import { z } from 'zod';
import { query } from '@/lib/db';
import { verifyLegacyPassword } from '@/lib/auth';

const input = z.object({ email: z.string().email(), password: z.string().min(1) });

// Transitional proof only. It never creates a session or an application cookie.
export async function POST(request: Request) {
  const parsed = input.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  const { rows } = await query('SELECT password_hash FROM public.users WHERE lower(email) = lower($1)', [parsed.data.email]);
  const valid = Boolean(rows[0]?.password_hash) && await verifyLegacyPassword(parsed.data.password, rows[0].password_hash);
  return NextResponse.json({ valid }, { status: valid ? 200 : 401 });
}
