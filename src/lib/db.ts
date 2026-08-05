import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    options: '-c search_path=app,public'
});

// Ensure search_path is set on every new connection
pool.on('connect', (client) => {
    client.query('SET search_path TO app, public').catch((err) => {
        console.error('Failed to set search_path:', err);
    });
});

export default pool;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const query = (text: string, params?: any[]) => pool.query(text, params);