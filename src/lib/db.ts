import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL?.replace('?sslmode=require', ''),
    ssl: {
        rejectUnauthorized: false
    }
});

export default pool;

let isInitialized = false;
let initializingPromise: Promise<void> | null = null;

async function initializeDatabase() {
    try {
        // Check if the users table exists
        const tableCheck = await pool.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables
                WHERE table_schema = 'public'
                AND table_name = 'users'
            );
        `);

        const tableExists = tableCheck.rows[0]?.exists;

        if (!tableExists) {
            console.log("Database tables do not exist. Initializing schema...");
            const schemaPath = path.join(process.cwd(), 'db/schema.sql');
            if (fs.existsSync(schemaPath)) {
                const schemaSql = fs.readFileSync(schemaPath, 'utf8');
                await pool.query(schemaSql);
                console.log("Database schema initialized successfully.");
            } else {
                console.error("schema.sql file not found at:", schemaPath);
            }
        }
        isInitialized = true;
    } catch (err) {
        console.error("Error during database initialization:", err);
        // Reset initializingPromise so subsequent requests can try again if the connection recovers
        initializingPromise = null;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const query = async (text: string, params?: any[]) => {
    if (!isInitialized) {
        if (!initializingPromise) {
            initializingPromise = initializeDatabase();
        }
        await initializingPromise;
    }
    return pool.query(text, params);
};
