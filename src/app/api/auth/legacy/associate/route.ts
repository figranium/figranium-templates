import { NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/lib/neon-auth';
import { query } from '@/lib/db';
import { verifyLegacyPassword } from '@/lib/auth';

const input = z.object({ oldPassword: z.string().min(1) });

// Associates a newly established Neon identity with its existing application user.
// The caller must prove control of both identities; no provider-managed tables are written.
export async function POST(request: Request) {
  const { data } = await auth.getSession();
  const parsed = input.safeParse(await request.json());
  if (!data?.user?.id || !data.user.email || !parsed.success) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { rows } = await query(
    'SELECT id, password_hash, neon_auth_user_id FROM public.users WHERE lower(email) = lower($1)',
    [data.user.email],
  );
  const legacy = rows[0];
  if (!legacy?.password_hash || !(await verifyLegacyPassword(parsed.data.oldPassword, legacy.password_hash))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  if (legacy.neon_auth_user_id && legacy.neon_auth_user_id !== data.user.id) {
    return NextResponse.json({ error: 'This legacy account is already linked.' }, { status: 409 });
  }
  await query('UPDATE public.users SET neon_auth_user_id = $1 WHERE id = $2', [data.user.id, legacy.id]);
  return NextResponse.json({ success: true });
}
