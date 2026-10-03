-- Apply to existing hub databases before enabling in-app import tracking.
CREATE TABLE IF NOT EXISTS preset_import_instances (
    preset_id UUID NOT NULL REFERENCES presets(id) ON DELETE CASCADE,
    instance_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (preset_id, instance_hash)
);
