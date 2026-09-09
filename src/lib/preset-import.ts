export const PRESET_CATEGORIES = [
    "QA Testing", "Lead Gen", "Social Media", "Shopping", "Monitoring", "AI",
    "Jobs", "News", "Videos", "Reviews", "Developer Tools", "SEO",
    "Real Estate", "Travel", "Other",
] as const;

export type PresetCategory = (typeof PRESET_CATEGORIES)[number];
export type PresetType = "AGENT" | "SCRAPE";

type JsonObject = Record<string, unknown>;

export const GETTING_STARTED_NOTE_ID = "template_getting_started";
export const GETTING_STARTED_NOTE_LAYOUT = {
    x: -200,
    y: 120,
    width: 240,
    height: 220,
} as const;

const SECRET_KEY = /(api[-_]?key|token|secret|password|passphrase|cookie|authorization|credential|session)/i;

function isObject(value: unknown): value is JsonObject {
    return !!value && typeof value === "object" && !Array.isArray(value);
}

export function resolvePresetTask(input: unknown): { task: JsonObject; taskCount: number } {
    if (!isObject(input)) throw new Error("The JSON must contain a Figranium task object.");

    const tasks = Array.isArray(input.tasks) ? input.tasks : [input];
    if (tasks.length === 0 || !isObject(tasks[0])) {
        throw new Error("No valid task was found in this export.");
    }

    const task = tasks[0];
    if (task.mode !== "agent" && task.mode !== "scrape") {
        throw new Error('The task must have a mode of "agent" or "scrape".');
    }

    return { task, taskCount: tasks.length };
}

export function withGettingStartedStickyNote(task: JsonObject, content: string): JsonObject {
    const existingNotes = Array.isArray(task.stickyNotes)
        ? task.stickyNotes.filter(note => !isObject(note) || note.id !== GETTING_STARTED_NOTE_ID)
        : [];

    return {
        ...task,
        stickyNotes: [
            ...existingNotes,
            {
                id: GETTING_STARTED_NOTE_ID,
                ...GETTING_STARTED_NOTE_LAYOUT,
                content: content.trim(),
                color: "default",
            },
        ],
    };
}

export function sanitizePresetConfiguration(value: unknown): unknown {
    if (Array.isArray(value)) return value.map(sanitizePresetConfiguration);
    if (!isObject(value)) return value;

    const result: JsonObject = {};
    for (const [key, child] of Object.entries(value)) {
        if (key === "versions") {
            result[key] = [];
        } else if (SECRET_KEY.test(key)) {
            result[key] = "[redacted]";
        } else {
            result[key] = sanitizePresetConfiguration(child);
        }
    }
    return result;
}

function hostnameFrom(value: unknown): string | null {
    if (typeof value !== "string") return null;
    try {
        return new URL(value).hostname;
    } catch {
        return null;
    }
}

function readableHostname(hostname: string): string {
    const base = hostname.replace(/^www\./, "").split(".")[0] || hostname;
    return base.charAt(0).toUpperCase() + base.slice(1);
}

function explicitDuration(task: JsonObject): string | null {
    for (const key of ["timeEstimate", "time_estimate", "estimatedTime", "duration"]) {
        const value = task[key];
        if (typeof value === "string" && value.trim()) return value.trim().slice(0, 40);
        if (typeof value === "number" && Number.isFinite(value) && value > 0) return `~${Math.ceil(value)}s`;
    }
    return null;
}

export function derivePresetMetadata(task: JsonObject) {
    const hostname = hostnameFrom(task.url);
    const type: PresetType = task.mode === "agent" ? "AGENT" : "SCRAPE";
    const suppliedName = typeof task.name === "string" ? task.name.trim() : "";
    const fallbackName = hostname ? `${readableHostname(hostname)} ${type === "AGENT" ? "automation" : "scraper"}` : "Figranium preset";

    return {
        title: (suppliedName || fallbackName).slice(0, 100),
        type,
        icon: hostname || "extension",
        time_estimate: explicitDuration(task) || "Variable",
        target_url: typeof task.url === "string" ? task.url : "",
    };
}

export function createAiTaskContext(task: JsonObject): string {
    const redactSecrets = (value: unknown): unknown => {
        if (Array.isArray(value)) return value.map(redactSecrets);
        if (!isObject(value)) return value;

        return Object.fromEntries(Object.entries(value).map(([key, child]) => [
            key,
            SECRET_KEY.test(key) ? "[redacted]" : redactSecrets(child),
        ]));
    };

    return JSON.stringify(redactSecrets(task), null, 2);
}
