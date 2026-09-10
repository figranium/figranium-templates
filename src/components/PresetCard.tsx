"use client";

import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";
import { useState, memo, useEffect } from "react";

export interface PresetProps {
    id: string;
    title: string;
    description: string;
    author: string;
    downloads: string;
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
        return <img src={icon} alt="" className="h-8 w-8 rounded-[8px] object-cover" width="32" height="32" loading="lazy" onError={() => setError(true)} />
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
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 shrink-0" title="Verified Admin">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#1f1f1f">
                            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/>
                        </svg>
                    </span>
                )}
            </span>
        </div>
    );
}

export const PresetCard = memo(function PresetCard({ id, title, description, author, downloads, type, icon, adminUsername }: PresetProps & { adminUsername?: string }) {
    const isAdmin = adminUsername ? author === adminUsername : false;
    
    return (
        <Link
            href={`/presets/${id}`}
            aria-label={`Open ${title} template`}
            className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[16px] border border-transparent bg-[#080808] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white/[0.18] hover:bg-[#0b0b0b] hover:shadow-[0_20px_50px_rgba(0,0,0,.28)] focus-visible:border-white/[0.24] focus-visible:outline-none"
        >

            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-[11px] border border-white/[0.08] bg-white/[0.03]">
                        <PresetIcon icon={icon} />
                    </div>
                    <div>
                        <h3 className="text-[15px] font-semibold tracking-[-0.015em] text-white">{title}</h3>
                        <AuthorCell username={author} isAdmin={isAdmin} />
                    </div>
                </div>
                <span className="rounded-[7px] border border-white/[0.085] bg-black/30 px-2 py-1 font-mono text-[9px] text-white/42">
                    {type}
                </span>
            </div>

            <p className="mb-6 line-clamp-3 text-[13px] leading-6 text-white/42">
                {description}
            </p>

            <div className="mt-auto flex items-center">
                <div className="flex items-center font-mono text-[10px] text-white/32">
                    <div className="flex items-center gap-1.5">
                        <MaterialIcon name="download" className="text-xs" aria-hidden="true" />
                        <span>{downloads}</span>
                    </div>
                </div>

            </div>
        </Link>
    );
});
