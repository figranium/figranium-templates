import { config as loadEnv } from "dotenv";
import { Pool } from "pg";
import { createGateway, generateText, Output } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { z } from "zod";

loadEnv({ path: ".env.local" });

const CATEGORIES = ["QA Testing", "Lead Gen", "Social Media", "Shopping", "Monitoring", "AI", "Jobs", "News", "Videos", "Reviews", "Developer Tools", "SEO", "Real Estate", "Travel", "Other"];
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

const pool = new Pool({ connectionString: process.env.DATABASE_URL.replace("?sslmode=require", ""), ssl: { rejectUnauthorized: false } });
const provider = (process.env.AI_PROVIDER || "gateway").toLowerCase();
const model = provider === "gemini" || provider === "google"
    ? createGoogleGenerativeAI({ apiKey: process.env.AI_API_KEY })(process.env.AI_MODEL)
    : provider === "gateway" || provider === "ai-gateway"
        ? createGateway({ apiKey: process.env.AI_API_KEY })(process.env.AI_MODEL)
        : (() => { throw new Error(`Unsupported AI_PROVIDER for backfill: ${provider}`); })();
const schema = z.object({
    suggestedTitle: z.string().min(3).max(100),
    category: z.enum(CATEGORIES),
    description: z.string().min(20).max(600),
    readme: z.string().min(600).max(8000).describe("A substantial 300–500 word Markdown README with section headings and useful bullet lists."),
});

const isObject = value => !!value && typeof value === "object" && !Array.isArray(value);
const pause = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
const hostname = value => { try { return new URL(value).hostname; } catch { return null; } };
const readableHostname = value => { const base = value.replace(/^www\./, "").split(".")[0] || value; return base.charAt(0).toUpperCase() + base.slice(1); };
const normalizeMarkdown = value => value.replace(/\\#/g, "#").replace(/\\`/g, "`").replace(/\\([*_>\[\]()~-])/g, "$1");

function resolveTask(input) {
    if (!isObject(input)) throw new Error("Invalid task object");
    const tasks = Array.isArray(input.tasks) ? input.tasks : [input];
    if (!isObject(tasks[0])) throw new Error("No task found");
    if (tasks[0].mode !== "agent" && tasks[0].mode !== "scrape") throw new Error("Unsupported task mode");
    return tasks[0];
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

function deterministic(task) {
    const targetHostname = hostname(task.url);
    const type = task.mode === "agent" ? "AGENT" : "SCRAPE";
    const suppliedName = typeof task.name === "string" ? task.name.trim() : "";
    return {
        title: (suppliedName || (targetHostname ? `${readableHostname(targetHostname)} ${type === "AGENT" ? "automation" : "scraper"}` : "Figranium preset")).slice(0, 100),
        type,
        icon: targetHostname || "extension",
        targetUrl: typeof task.url === "string" ? task.url : "",
        targetHostname: targetHostname || "not specified",
        timeEstimate: "Variable",
    };
}

function aiTaskContext(value) {
    if (Array.isArray(value)) return value.map(aiTaskContext);
    if (!isObject(value)) return value;
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [
        key,
        SECRET_KEY.test(key) ? "[redacted]" : aiTaskContext(child),
    ]));
}

async function generateCopy(meta, task) {
    const { output } = await generateText({
        model,
        abortSignal: AbortSignal.timeout(180_000),
        output: Output.object({ schema }),
        system: `Write accurate marketplace copy for Figranium browser automation presets. Inspect the complete task JSON carefully and use its URLs, selectors, variables, actions, scripts, options, and their relationships to understand exactly what the automation does and where each operation occurs. Never invent unsupported capabilities or guarantees, and never reproduce secrets, private values, or unnecessary internal implementation details. Write a substantial 300–500 word README in valid GitHub-flavored Markdown. It must use these exact second-level headings: ## Overview, ## What it does, ## Inputs, ## Output, ## How to use, and ## Notes. Use bullet lists where they improve scanning, put identifiers in inline code, and never return an unformatted wall of text. Category must be one of: ${CATEGORIES.join(", ")}.`,
        prompt: `Create marketplace metadata.\n\nTitle: ${meta.title}\nType: ${meta.type}\nTarget hostname: ${meta.targetHostname}\n\nComplete task JSON (credential-like fields are redacted):\n\`\`\`json\n${JSON.stringify(aiTaskContext(task), null, 2)}\n\`\`\``,
    });
    return { ...output, readme: normalizeMarkdown(output.readme) };
}

async function main() {
    await pool.query("ALTER TABLE presets ADD COLUMN IF NOT EXISTS readme TEXT NOT NULL DEFAULT ''");
    const conditions = force ? "" : "WHERE COALESCE(TRIM(readme), '') = ''";
    const limitClause = limit && Number.isFinite(limit) && limit > 0 ? `LIMIT ${Math.floor(limit)}` : "";
    const offsetClause = offset && Number.isFinite(offset) && offset > 0 ? `OFFSET ${Math.floor(offset)}` : "";
    const { rows } = await pool.query(`SELECT id, title, configuration FROM presets ${conditions} ORDER BY created_at ASC ${limitClause} ${offsetClause}`);
    console.log(`${rows.length} preset${rows.length === 1 ? "" : "s"} ready for AI treatment.`);
    if (dryRun || rows.length === 0) return;

    let completed = 0;
    let skipped = 0;
    for (const preset of rows) {
        try {
            const task = resolveTask(typeof preset.configuration === "string" ? JSON.parse(preset.configuration) : preset.configuration);
            const meta = deterministic(task);
            const generated = await generateCopy(meta, task);
            await pool.query(
                `UPDATE presets SET title=$2, description=$3, type=$4, category=$5, time_estimate=$6, configuration=$7, target_url=$8, readme=$9, updated_at=CURRENT_TIMESTAMP WHERE id=$1`,
                [preset.id, meta.title || generated.suggestedTitle, generated.description, meta.type, generated.category, meta.timeEstimate, JSON.stringify(sanitize(task)), meta.targetUrl, generated.readme],
            );
            completed += 1;
            console.log(`[${completed}/${rows.length}] Updated ${preset.title}`);
            await pause(750);
        } catch (error) {
            skipped += 1;
            console.error(`Skipped ${preset.title}: ${error instanceof Error ? error.message : "Unknown error"}`);
        }
    }
    console.log(`Backfill complete: ${completed} updated, ${skipped} skipped.`);
    if (skipped > 0) process.exitCode = 1;
}

main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => pool.end());
