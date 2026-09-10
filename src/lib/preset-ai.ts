import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { createGateway, generateText, Output } from "ai";
import { z } from "zod";
import { PRESET_CATEGORIES, type PresetCategory } from "./template-import";
import { normalizeMarkdown } from "./markdown";

const generatedPresetSchema = z.object({
    suggestedTitle: z.string().min(3).max(100),
    category: z.enum(PRESET_CATEGORIES),
    description: z.string().min(20).max(600),
    readme: z.string().min(600).max(8000).describe("A substantial 300–500 word Markdown README with section headings and useful bullet lists."),
    gettingStarted: z.string().min(80).max(900).describe("A concise plain-text in-canvas getting-started note with practical first-run instructions for this task."),
});

function getAiModel() {
    const provider = (process.env.AI_PROVIDER || "gateway").toLowerCase();
    const apiKey = process.env.AI_API_KEY;
    const modelId = process.env.AI_MODEL;

    if (!apiKey) throw new Error("AI_API_KEY is not configured.");
    if (!modelId) throw new Error("AI_MODEL is not configured.");

    if (provider === "gateway" || provider === "ai-gateway") {
        return createGateway({ apiKey })(modelId);
    }

    if (provider === "gemini" || provider === "google") {
        return createGoogleGenerativeAI({ apiKey })(modelId);
    }

    if (provider === "openai-compatible" || provider === "compatible") {
        const baseURL = process.env.AI_BASE_URL;
        if (!baseURL) throw new Error("AI_BASE_URL is required for an OpenAI-compatible provider.");
        const compatible = createOpenAICompatible({
            name: process.env.AI_PROVIDER_NAME || "custom",
            apiKey,
            baseURL,
            supportsStructuredOutputs: process.env.AI_STRUCTURED_OUTPUTS !== "false",
        });
        return compatible(modelId);
    }

    throw new Error(`Unsupported AI_PROVIDER: ${provider}`);
}

export async function generatePresetCopy(input: {
    title: string;
    type: "AGENT" | "SCRAPE";
    targetUrl: string;
    taskJson: string;
}): Promise<{
    suggestedTitle: string;
    category: PresetCategory;
    description: string;
    readme: string;
    gettingStarted: string;
}> {
    let targetHostname = "not specified";
    try {
        targetHostname = new URL(input.targetUrl).hostname;
    } catch { /* omit invalid or private path data */ }

    const { output } = await generateText({
        model: getAiModel(),
        output: Output.object({ schema: generatedPresetSchema }),
        system: [
            "You write accurate marketplace copy for Figranium browser automation templates.",
            "Inspect the complete task JSON carefully. Use its URLs, selectors, variables, actions, scripts, options, and their relationships to understand exactly what the automation does and where each operation occurs.",
            "Never invent capabilities, websites, outputs, setup requirements, or guarantees that are not supported by the supplied task.",
            "Write a substantial 300–500 word README in valid GitHub-flavored Markdown.",
            "The README must use these exact second-level headings: ## Overview, ## What it does, ## Inputs, ## Output, ## How to use, and ## Notes.",
            "Use bullet lists where they improve scanning. Put identifiers in inline code. Do not return an unformatted wall of text.",
            "Also write a concise gettingStarted note for the task canvas. It must begin with 'Getting started', use plain text with short numbered steps or bullets, and focus only on what the user should configure before the first run, how to run it, and what output to expect.",
            "Keep gettingStarted compact enough for a sticky note, ideally 80–140 words. Mention the actual task variables or important prerequisites when relevant. Do not mention the Templates Hub, previews, marketplace metadata, or the existence of the sticky note itself.",
            "Do not reproduce secrets, credentials, private values, or unnecessary internal implementation details in marketplace copy or gettingStarted.",
            `Category must be one of: ${PRESET_CATEGORIES.join(", ")}.`,
        ].join(" "),
        prompt: `Create the authored marketplace metadata and getting-started guidance for this template.\n\nDeterministic title: ${input.title}\nType: ${input.type}\nTarget hostname: ${targetHostname}\n\nComplete task JSON (credential-like fields are redacted):\n\`\`\`json\n${input.taskJson}\n\`\`\``,
    });

    return { ...output, readme: normalizeMarkdown(output.readme) };
}
