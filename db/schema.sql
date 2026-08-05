-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create app schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS app;

-- Users Table
CREATE TABLE IF NOT EXISTS app.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT, -- Nullable if we support OAuth later
    email_verified TIMESTAMP WITH TIME ZONE,
    verification_token TEXT,
    image TEXT,
    role TEXT DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Verification Tokens (for email verification)
CREATE TABLE IF NOT EXISTS app.verification_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES app.users(id) ON DELETE CASCADE,
    token TEXT NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Presets Table
CREATE TABLE IF NOT EXISTS app.presets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES app.users(id) ON DELETE CASCADE,
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
    file_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Preset Downloads
CREATE TABLE IF NOT EXISTS app.preset_downloads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    preset_id UUID REFERENCES app.presets(id) ON DELETE CASCADE,
    user_id UUID REFERENCES app.users(id) ON DELETE CASCADE,
    downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (preset_id, user_id)
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_presets_type ON app.presets(type);
CREATE INDEX IF NOT EXISTS idx_users_email ON app.users(email);
CREATE INDEX IF NOT EXISTS idx_users_username ON app.users(username);

-- Performance: Indexes for frequent sorting and filtering
CREATE INDEX IF NOT EXISTS idx_presets_downloads ON app.presets(downloads DESC);
CREATE INDEX IF NOT EXISTS idx_presets_created_at ON app.presets(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_presets_category ON app.presets(category);