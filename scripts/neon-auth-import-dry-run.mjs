import { Pool } from 'pg';

const sourceUrl = process.env.LEGACY_SOURCE_DATABASE_URL;
const targetUrl = process.env.NEON_TEST_DATABASE_URL;

if (!sourceUrl || !targetUrl) {
    console.error('Refusing to run: set LEGACY_SOURCE_DATABASE_URL and NEON_TEST_DATABASE_URL. DATABASE_URL is never used.');
    process.exit(2);
}

const makePool = (connectionString) => new Pool({ connectionString, ssl: { rejectUnauthorized: false } });
const source = makePool(sourceUrl);
const target = makePool(targetUrl);

try {
    const [sourceResult, columnResult] = await Promise.all([
        source.query(`SELECT count(*)::int AS users, count(*) FILTER (WHERE password_hash ~ '^\\$2[aby]\\$[0-9]{2}\\$')::int AS bcrypt_users, count(*) FILTER (WHERE password_hash IS NULL)::int AS no_password_hash FROM public.users`),
        target.query(`SELECT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'neon_auth_user_id') AS mapping_column_present`),
    ]);
    const mapping = columnResult.rows[0]?.mapping_column_present
        ? (await target.query(`SELECT (count(*) FILTER (WHERE neon_auth_user_id IS NOT NULL))::int AS mapped_users, (count(*) FILTER (WHERE neon_auth_user_id IS NULL))::int AS unmapped_users, ((count(*) FILTER (WHERE neon_auth_user_id IS NOT NULL)) - (count(DISTINCT neon_auth_user_id) FILTER (WHERE neon_auth_user_id IS NOT NULL)))::int AS duplicate_mappings FROM public.users`)).rows[0]
        : null;
    console.log(JSON.stringify({
        mode: 'dry-run only',
        source: sourceResult.rows[0],
        target: { ...columnResult.rows[0], mapping },
        result: 'blocked',
        reason: 'No supported Better Auth-based Neon Auth bcrypt import mechanism has been confirmed. No user records, hashes, emails, mappings, or provider data were read or written.',
    }, null, 2));
    process.exitCode = 2;
} finally {
    await Promise.all([source.end(), target.end()]);
}
