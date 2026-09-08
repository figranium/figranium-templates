CREATE TABLE IF NOT EXISTS preset_download_ips (
    preset_id UUID REFERENCES presets(id) ON DELETE CASCADE,
    ip_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (preset_id, ip_hash)
);
