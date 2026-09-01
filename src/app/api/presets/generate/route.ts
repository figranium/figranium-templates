import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { generatePresetCopy } from "@/lib/preset-ai";
import {
    createAiTaskContext,
    derivePresetMetadata,
    resolvePresetTask,
    sanitizePresetConfiguration,
} from "@/lib/preset-import";

export const runtime = "nodejs";

export async function POST(request: Request) {
    try {
        const token = (await cookies()).get("token")?.value;
        if (!token || !(await verifyToken(token))) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const rawConfiguration = typeof body.configuration === "string"
            ? JSON.parse(body.configuration)
            : body.configuration;
        const { task, taskCount } = resolvePresetTask(rawConfiguration);
        const deterministic = derivePresetMetadata(task);
        const generated = await generatePresetCopy({
            title: deterministic.title,
            type: deterministic.type,
            targetUrl: deterministic.target_url,
            taskJson: createAiTaskContext(task),
        });

        const titleWasProvided = typeof task.name === "string" && task.name.trim().length >= 3;
        const safeConfiguration = sanitizePresetConfiguration(task);

        return NextResponse.json({
            draft: {
                ...deterministic,
                title: titleWasProvided ? deterministic.title : generated.suggestedTitle,
                icon: "",
                category: generated.category,
                description: generated.description,
                expected_output: "",
                readme: generated.readme,
                configuration: JSON.stringify(safeConfiguration, null, 2),
            },
            note: taskCount > 1 ? `This export contains ${taskCount} tasks. The first task was prepared for publishing.` : null,
        });
    } catch (error) {
        console.error("Generate preset metadata error:", error);
        const message = error instanceof SyntaxError
            ? "The selected file is not valid JSON."
            : error instanceof Error && /AI_(API_KEY|MODEL|BASE_URL)|Unsupported AI_PROVIDER/.test(error.message)
                ? error.message
                : error instanceof Error && /task|mode|JSON/.test(error.message)
                    ? error.message
                    : "AI metadata generation failed. Check the provider configuration and try again.";
        return NextResponse.json({ error: message }, { status: 400 });
    }
}
