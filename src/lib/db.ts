import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL?.replace('?sslmode=require', ''),
    ssl: {
        rejectUnauthorized: false
    }
});

export default pool;

let isInitialized = false;
let initializingPromise: Promise<void> | null = null;

const SCHEMA_SQL = `
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT, -- Nullable if we support OAuth later
    email_verified TIMESTAMP WITH TIME ZONE,
    verification_token TEXT,
    image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Verification Tokens (for email verification)
CREATE TABLE IF NOT EXISTS verification_tokens (
    identifier TEXT NOT NULL,
    token TEXT NOT NULL,
    expires TIMESTAMP WITH TIME ZONE NOT NULL,
    PRIMARY KEY (identifier, token)
);

-- Presets Table
CREATE TABLE IF NOT EXISTS presets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    author_name TEXT NOT NULL, -- Cache username or allowing custom author name
    type TEXT NOT NULL CHECK (type IN ('AGENT', 'SCRAPE')),
    icon TEXT NOT NULL DEFAULT 'extension', -- Material Icon name
    downloads INTEGER DEFAULT 0,
    time_estimate TEXT, -- e.g. "12s"
    category TEXT,
    configuration JSONB,
    target_url TEXT,
    expected_output TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Preset Downloads
CREATE TABLE IF NOT EXISTS preset_downloads (
    preset_id UUID REFERENCES presets(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (preset_id, user_id)
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_presets_type ON presets(type);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);

-- Performance: Indexes for frequent sorting and filtering
CREATE INDEX IF NOT EXISTS idx_presets_downloads ON presets(downloads DESC);
CREATE INDEX IF NOT EXISTS idx_presets_created_at ON presets(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_presets_category ON presets(category);
`;

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
            await pool.query(SCHEMA_SQL);
            console.log("Database schema initialized successfully.");
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
