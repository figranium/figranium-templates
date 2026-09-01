import { Pool } from 'pg';

const databaseUrl = process.env.NEON_TEST_DATABASE_URL;
const authBaseUrl = process.env.NEON_AUTH_BASE_URL;

if (!databaseUrl || !authBaseUrl) {
    console.error('Refusing to run: set NEON_TEST_DATABASE_URL and NEON_AUTH_BASE_URL. DATABASE_URL is never used by this script.');
    process.exit(2);
}

try {
    new URL(authBaseUrl);
} catch {
    console.error('Refusing to run: NEON_AUTH_BASE_URL must be a valid URL.');
    process.exit(2);
}

const pool = new Pool({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false } });

try {
    const client = await pool.connect();
    try {
        await client.query('BEGIN READ ONLY');
        const [identity, schemas, tables, columns, constraints] = await Promise.all([
            client.query('SELECT current_database() AS database, current_user AS role'),
            client.query("SELECT schema_name FROM information_schema.schemata WHERE schema_name IN ('public', 'neon_auth') ORDER BY schema_name"),
            client.query("SELECT table_schema, table_name, table_type FROM information_schema.tables WHERE table_schema IN ('public', 'neon_auth') ORDER BY 1, 2"),
            client.query("SELECT table_schema, table_name, column_name, data_type, is_nullable FROM information_schema.columns WHERE table_schema IN ('public', 'neon_auth') ORDER BY 1, 2, ordinal_position"),
            client.query("SELECT table_schema, table_name, constraint_name, constraint_type FROM information_schema.table_constraints WHERE table_schema IN ('public', 'neon_auth') ORDER BY 1, 2, 3"),
        ]);
        await client.query('ROLLBACK');
        if (!schemas.rows.some((row) => row.schema_name === 'neon_auth')) {
            throw new Error('Target does not expose a neon_auth schema. Refusing to treat it as the Neon Auth test branch.');
        }
        console.log(JSON.stringify({
            mode: 'read-only schema discovery',
            database: identity.rows[0]?.database,
            role: identity.rows[0]?.role,
            authBaseUrlOrigin: new URL(authBaseUrl).origin,
            schemas: schemas.rows,
            tables: tables.rows,
            columns: columns.rows,
            constraints: constraints.rows,
            passwordHashImport: {
                status: 'blocked',
                reason: 'No supported Better Auth-based Neon Auth bcrypt import mechanism has been confirmed. This tool never imports users or writes neon_auth.',
            },
        }, null, 2));
    } finally {
        client.release();
    }
} finally {
    await pool.end();
}
