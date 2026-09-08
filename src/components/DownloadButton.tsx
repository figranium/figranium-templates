"use client";

import { useState, useRef } from "react";
import MaterialIcon from "@/components/MaterialIcon";

interface DownloadButtonProps {
    presetId: string;
    presetTitle: string;
    configJson: string;
    isAuthenticated?: boolean;
}

function redactVersions(value: unknown): unknown {
    if (Array.isArray(value)) return value.map(redactVersions);
    if (value && typeof value === "object") {
        const result: Record<string, unknown> = {};
        for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
            result[key] = key === "versions" ? [] : redactVersions(child);
        }
        return result;
    }
    return value;
}

export default function DownloadButton({ presetId, presetTitle, configJson }: DownloadButtonProps) {
    const [copied, setCopied] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const trackingCooldown = useRef(false);

    const getConfiguration = async () => {
        if (configJson) return configJson;

        // Public viewers intentionally receive an empty config prop from the legacy
        // page component. Fetch the already-public preset API instead of doing nothing.
        const response = await fetch(`/api/presets/${presetId}`);
        if (!response.ok) throw new Error("Unable to load template configuration");
        const preset = await response.json();
        let configuration = preset.configuration;

        if (typeof configuration === "string") {
            try {
                configuration = JSON.parse(configuration);
            } catch {
                return configuration;
            }
        }

        return JSON.stringify(redactVersions(configuration ?? {}), null, 2);
    };

    const trackDownload = () => {
        if (trackingCooldown.current) return;
        trackingCooldown.current = true;
        setTimeout(() => { trackingCooldown.current = false; }, 30000);

        // Analytics is deliberately fire-and-forget and cannot block the action.
        void fetch(`/api/presets/${presetId}/download`, { method: "POST" }).catch(() => {});
    };

    const handleAction = async (action: "download" | "copy") => {
        try {
            const resolvedConfig = await getConfiguration();
            if (!resolvedConfig) return;

            trackDownload();

            if (action === "download") {
                const blob = new Blob([resolvedConfig], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `${presetTitle.replace(/[^a-z0-9]/gi, "_").toLowerCase() || "preset"}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);

                setDownloaded(true);
                setTimeout(() => setDownloaded(false), 2000);
            } else {
                await navigator.clipboard.writeText(resolvedConfig);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch (error) {
            console.error("Template action failed:", error);
        }
    };

    return (
        <div className="flex flex-col gap-2 sm:flex-row">
            <button
                onClick={() => void handleAction("download")}
                aria-label={downloaded ? "Download complete" : `Download ${presetTitle} configuration`}
                className={`flex min-h-10 flex-1 items-center justify-center gap-2 rounded-[10px] border px-3 text-[10px] font-bold uppercase tracking-[0.1em] transition ${downloaded
                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                    : "bg-[#171717] hover:bg-[#262626] text-foreground border-[#262626]"
                    }`}
            >
                <MaterialIcon name={downloaded ? "check" : "download"} className="text-lg" aria-hidden="true" />
                {downloaded ? "Downloaded!" : "Download"}
            </button>
            <button
                onClick={() => void handleAction("copy")}
                aria-label={copied ? "Copied to clipboard" : `Copy ${presetTitle} configuration to clipboard`}
                className={`flex min-h-10 flex-1 items-center justify-center gap-2 rounded-[10px] border px-3 text-[10px] font-bold uppercase tracking-[0.1em] transition ${copied
                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                    : "bg-[#171717] hover:bg-[#262626] text-foreground border-[#262626]"
                    }`}
            >
                <MaterialIcon name={copied ? "check" : "content_copy"} className="text-lg" aria-hidden="true" />
                {copied ? "Copied!" : "Copy JSON"}
            </button>
        </div>
    );
}
