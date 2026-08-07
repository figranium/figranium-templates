"use client";

import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";
import { useState, memo, useEffect } from "react";

export interface PresetProps {
    id: string; // Added ID
    title: string;
    description: string;
    author: string;
    authorRole?: string;
    downloads: string;
    time: string;
    type: "SCRAPE" | "AGENT";
    icon: string;
}

interface AccountSettings {
    displayName: string;
    profilePicture: string;
}

function useAuthorInfo(username: string): { displayName: string; profilePicture: string } {
    const [info, setInfo] = useState({ displayName: username, profilePicture: "" });

    useEffect(() => {
        const stored = window.localStorage.getItem(`figranium-account-settings:${username}`);
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as AccountSettings;
                setInfo({
                    displayName: parsed.displayName || username,
                    profilePicture: parsed.profilePicture || "",
                });
            } catch { /* ignore */ }
        }
    }, [username]);

    return info;
}

function PresetIcon({ icon }: { icon: string }) {
    const [error, setError] = useState(false);

    const isDataUrl = icon && icon.startsWith("data:image/");
    const isDomain = icon && icon.includes(".") && !isDataUrl;

    if (isDataUrl) {
        return <img src={icon} alt="Icon" className="w-8 h-8 object-cover rounded" width="32" height="32" loading="lazy" onError={() => setError(true)} />
    }

    if (!isDomain) {
        return <MaterialIcon name={icon || "public"} className="text-3xl text-foreground" aria-hidden="true" />;
    }

    if (error || !icon) {
        return <MaterialIcon name="public" className="text-3xl text-foreground" aria-hidden="true" />;
    }

    return (
        <img
            src={`https://www.google.com/s2/favicons?domain=${icon}&sz=64`}
            alt="Favicon"
            className="w-8 h-8 object-contain"
            width="32"
            height="32"
            loading="lazy"
            onError={() => setError(true)}
        />
    );
}

function AuthorCell({ username, isAdmin }: { username: string; isAdmin?: boolean }) {
    const { displayName, profilePicture } = useAuthorInfo(username);
    const [dbDisplayName, setDbDisplayName] = useState<string | null>(null);
    const [dbProfilePicture, setDbProfilePicture] = useState<string | null>(null);
    const initial = (displayName || username).trim().charAt(0).toUpperCase();

    // Fetch from database
    useEffect(() => {
        let mounted = true;
        
        async function loadFromDb() {
            try {
                const res = await fetch(`/api/auth/user?username=${encodeURIComponent(username)}`);
                if (res.ok && mounted) {
                    const data = await res.json();
                    setDbDisplayName(data.displayName);
                    setDbProfilePicture(data.profilePicture);
                }
            } catch { /* ignore */ }
        }
        
        loadFromDb();
        return () => { mounted = false; };
    }, [username]);

    // Use database values if available, otherwise fall back to localStorage
    const finalDisplayName = dbDisplayName || displayName || username;
    const finalProfilePicture = dbProfilePicture || profilePicture || "";

    return (
        <div className="flex items-center gap-2 mt-1">
            <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 flex items-center justify-center text-[10px] font-semibold border border-[#262626] bg-[#121212] text-muted-foreground">
                {finalProfilePicture ? (
                    <img src={finalProfilePicture} alt="" className="w-full h-full object-cover" />
                ) : (
                    initial
                )}
            </div>
            <span className="text-xs text-muted-foreground truncate max-w-[140px] flex items-center gap-1">
                {finalDisplayName}
                {isAdmin && (
                    <span title="Verified Admin">
                        <svg className="w-3.5 h-3.5 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </span>
                )}
            </span>
        </div>
    );
}

export const PresetCard = memo(function PresetCard({ id, title, description, author, authorRole, downloads, time, type, icon }: PresetProps) {
    return (
        <div className="group bg-[#0a0a0a] border border-[#262626] rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col h-full relative overflow-hidden">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                        <PresetIcon icon={icon} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground text-base">{title}</h3>
                        <AuthorCell username={author} isAdmin={authorRole === 'admin'} />
                    </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-[#262626] text-muted-foreground bg-[#121212]">
                    {type}
                </span>
            </div>

            <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                {description}
            </p>

            <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                    <div className="flex items-center gap-1.5">
                        <MaterialIcon name="download" className="text-xs" aria-hidden="true" />
                        <span>{downloads}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MaterialIcon name="schedule" className="text-xs" aria-hidden="true" />
                        <span>{time}</span>
                    </div>
                </div>

                <Link
                    href={`/presets/${id}`}
                    className="text-xs font-semibold bg-[#171717] hover:bg-[#262626] text-foreground px-3 py-1.5 rounded-md transition-colors border border-[#262626] cursor-pointer inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                    aria-label={`Use ${title} preset`}
                >
                    Use Preset
                </Link>
            </div>
        </div>
    );
});