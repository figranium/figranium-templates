import { config as loadEnv } from "dotenv";
import { Pool } from "pg";
import { createGateway, generateText, Output } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { z } from "zod";

loadEnv({ path: ".env.local" });

const NOTE_ID = "template_getting_started";
const NOTE_LAYOUT = { x: -200, y: 120, width: 240, height: 220 };
const SECRET_KEY = /(api[-_]?key|token|secret|password|passphrase|cookie|authorization|credential|session)/i;
const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const force = args.has("--force");
const limitArg = process.argv.find(value => value.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : null;
const offsetArg = process.argv.find(value => value.startsWith("--offset="));
const offset = offsetArg ? Number(offsetArg.split("=")[1]) : 0;

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not configured.");
if (!process.env.AI_API_KEY) throw new Error("AI_API_KEY is not configured.");
if (!process.env.AI_MODEL) throw new Error("AI_MODEL is not configured.");

const provider = (process.env.AI_PROVIDER || "gateway").toLowerCase();
const apiKey = process.env.AI_API_KEY;
const modelId = process.env.AI_MODEL;

function getModel() {
    if (provider === "gateway" || provider === "ai-gateway") return createGateway({ apiKey })(modelId);
    if (provider === "gemini" || provider === "google") return createGoogleGenerativeAI({ apiKey })(modelId);
    if (provider === "openai-compatible" || provider === "compatible") {
        if (!process.env.AI_BASE_URL) throw new Error("AI_BASE_URL is required for an OpenAI-compatible provider.");
        return createOpenAICompatible({
            name: process.env.AI_PROVIDER_NAME || "custom",
            apiKey,
            baseURL: process.env.AI_BASE_URL,
            supportsStructuredOutputs: process.env.AI_STRUCTURED_OUTPUTS !== "false",
        })(modelId);
    }
    throw new Error(`Unsupported AI_PROVIDER: ${provider}`);
}

const model = getModel();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL.replace("?sslmode=require", ""),
    ssl: { rejectUnauthorized: false },
});

const schema = z.object({
    gettingStarted: z.string().min(80).max(900),
});

const isObject = value => !!value && typeof value === "object" && !Array.isArray(value);
const pause = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

function resolveTask(input) {
    if (!isObject(input)) throw new Error("Invalid task object");
    const tasks = Array.isArray(input.tasks) ? input.tasks : [input];
    if (!isObject(tasks[0])) throw new Error("No task found");
    if (tasks[0].mode !== "agent" && tasks[0].mode !== "scrape") throw new Error("Unsupported task mode");
    return tasks[0];
}

function redact(value) {
    if (Array.isArray(value)) return value.map(redact);
    if (!isObject(value)) return value;
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [
        key,
        SECRET_KEY.test(key) ? "[redacted]" : redact(child),
    ]));
}

function sanitize(value) {
    if (Array.isArray(value)) return value.map(sanitize);
    if (!isObject(value)) return value;
    return Object.fromEntries(Object.entries(value).map(([key, child]) => {
        if (key === "versions") return [key, []];
        if (SECRET_KEY.test(key)) return [key, "[redacted]"];
        return [key, sanitize(child)];
    }));
}

function getManagedNote(task) {
    return Array.isArray(task.stickyNotes)
        ? task.stickyNotes.find(note => isObject(note) && note.id === NOTE_ID)
        : undefined;
}

function hasManagedNote(task) {
    return !!getManagedNote(task);
}

function managedNoteNeedsLayoutUpdate(task) {
    const note = getManagedNote(task);
    if (!note) return false;
    return note.x !== NOTE_LAYOUT.x || note.y !== NOTE_LAYOUT.y || note.width !== NOTE_LAYOUT.width || note.height !== NOTE_LAYOUT.height;
}

function withManagedNote(task, content) {
    const existingNotes = Array.isArray(task.stickyNotes)
        ? task.stickyNotes.filter(note => !isObject(note) || note.id !== NOTE_ID)
        : [];
    return {
        ...task,
        stickyNotes: [
            ...existingNotes,
            { id: NOTE_ID, ...NOTE_LAYOUT, content: content.trim(), color: "default" },
        ],
    };
}

async function generateGettingStarted(task) {
    const { output } = await generateText({
        model,
        abortSignal: AbortSignal.timeout(180_000),
        output: Output.object({ schema }),
        system: [
            "Write a concise getting-started note for a Figranium browser automation task.",
            "Inspect the complete task JSON and stay strictly grounded in its variables, URLs, actions, extraction logic, settings, and output.",
            "Begin exactly with 'Getting started'. Use plain text with short numbered steps or bullets.",
            "Focus on what the user should configure before the first run, how to run it, and what output to expect.",
            "Keep it compact enough for a sticky note, ideally 80–140 words.",
            "Do not mention the Templates Hub, previews, marketplace metadata, or the existence of the sticky note itself.",
            "Never reproduce secrets, credentials, private values, or unsupported assumptions.",
        ].join(" "),
        prompt: `Create the getting-started guidance for this task:\n\n\`\`\`json\n${JSON.stringify(redact(task), null, 2)}\n\`\`\``,
    });
    return output.gettingStarted;
}

async function main() {
    const { rows } = await pool.query("SELECT id, title, configuration FROM presets ORDER BY created_at ASC");
    const eligible = rows
        .map(row => ({ ...row, task: resolveTask(typeof row.configuration === "string" ? JSON.parse(row.configuration) : row.configuration) }))
        .filter(row => force || !hasManagedNote(row.task) || managedNoteNeedsLayoutUpdate(row.task))
        .slice(offset, limit && Number.isFinite(limit) && limit > 0 ? offset + Math.floor(limit) : undefined);

    console.log(`${eligible.length} preset${eligible.length === 1 ? "" : "s"} ready for getting-started note backfill/normalization.`);
    if (dryRun || eligible.length === 0) return;

    let completed = 0;
    let skipped = 0;
    for (const preset of eligible) {
        try {
            const existingManagedNote = getManagedNote(preset.task);
            const existingContent = isObject(existingManagedNote) && typeof existingManagedNote.content === "string"
                ? existingManagedNote.content.trim()
                : "";
            const gettingStarted = !force && existingContent
                ? existingContent
                : await generateGettingStarted(preset.task);
            const updatedTask = withManagedNote(preset.task, gettingStarted);
            await pool.query(
                "UPDATE presets SET configuration=$2, updated_at=CURRENT_TIMESTAMP WHERE id=$1",
                [preset.id, JSON.stringify(sanitize(updatedTask))],
            );
            completed += 1;
            console.log(`[${completed}/${eligible.length}] Updated ${preset.title}`);
            await pause(500);
        } catch (error) {
            skipped += 1;
            console.error(`Skipped ${preset.title}: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
    }

    console.log(`Backfill complete: ${completed} updated, ${skipped} skipped.`);
    if (skipped > 0) process.exitCode = 1;
}

main()
    .catch(error => { console.error(error); process.exitCode = 1; })
    .finally(() => pool.end());
