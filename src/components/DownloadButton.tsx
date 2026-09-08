"use client";

import { useState, useRef } from "react";
import MaterialIcon from "@/components/MaterialIcon";

interface DownloadButtonProps {
    presetId: string;
    presetTitle: string;
    configJson: string;
    isAuthenticated?: boolean;
}

export default function DownloadButton({ presetId, presetTitle, configJson }: DownloadButtonProps) {
    const [copied, setCopied] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const downloadCooldown = useRef(false);
    const copyCooldown = useRef(false);

    const getTrackedConfiguration = async () => {
        try {
            const response = await fetch(`/api/presets/${presetId}/download`, { method: "POST" });
            if (!response.ok) return null;
            const data = await response.json();
            return typeof data.configuration === "string" ? data.configuration : null;
        } catch {
            return null;
        }
    };

    const handleAction = async (action: 'download' | 'copy') => {
        const isDownload = action === 'download';
        const cooldownRef = isDownload ? downloadCooldown : copyCooldown;

        let resolvedConfig = configJson;

        if (!cooldownRef.current || !resolvedConfig) {
            if (!cooldownRef.current) {
                cooldownRef.current = true;
                setTimeout(() => { cooldownRef.current = false; }, 30000);
            }

            const trackedConfig = await getTrackedConfiguration();
            if (!resolvedConfig && trackedConfig) {
                resolvedConfig = trackedConfig;
            }
        }

        if (!resolvedConfig) return;

        if (isDownload) {
            const blob = new Blob([resolvedConfig], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${presetTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'preset'}.json`;
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
    };

    return (
        <div className="flex flex-col gap-2 sm:flex-row">
            <button
                onClick={() => handleAction('download')}
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
                onClick={() => handleAction('copy')}
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
