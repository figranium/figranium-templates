"use client";

import Link from "next/link";
import TablerIcon from "@/components/TablerIcon";
import { useState, memo, useEffect } from "react";

export interface PresetProps {
    id: string;
    title: string;
    description: string;
    author: string;
    downloads: string;
    type: "SCRAPE" | "AGENT";
    icon: string;
    category?: string;
    targetUrl?: string;
    actionCount?: number | null;
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
        return <img src={icon} alt="" className="h-8 w-8 rounded-[8px] object-cover" width="32" height="32" loading="lazy" onError={() => setError(true)} />;
    }

    if (!isDomain) {
        return <TablerIcon name={icon || "public"} className="text-3xl text-foreground" />;
    }

    if (error || !icon) {
        return <TablerIcon name="public" className="text-3xl text-foreground" />;
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

    const finalDisplayName = dbDisplayName || displayName || username;
    const finalProfilePicture = dbProfilePicture || profilePicture || "";

    return (
        <div className="flex items-center gap-2 mt-1">
            <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 flex items-center justify-center text-[10px] font-semibold border border-[#dce3ed] bg-[#f4f6f9] text-muted-foreground">
                {finalProfilePicture ? <img src={finalProfilePicture} alt="" className="w-full h-full object-cover" /> : initial}
            </div>
            <span className="text-xs text-muted-foreground truncate max-w-[140px] flex items-center gap-1">
                {finalDisplayName}
                {isAdmin && (
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 shrink-0" title="Verified Admin">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ffffff">
                            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/>
                        </svg>
                    </span>
                )}
            </span>
        </div>
    );
}

export const PresetCard = memo(function PresetCard({ id, title, description, author, icon, category, targetUrl, actionCount, adminUsername }: PresetProps & { adminUsername?: string }) {
    const isAdmin = adminUsername ? author === adminUsername : false;
    let host = "Web automation";
    if (targetUrl) {
        try { host = new URL(targetUrl.startsWith("http") ? targetUrl : `https://${targetUrl}`).hostname; } catch { host = targetUrl; }
    }
    return (
        <Link href={`/presets/${id}`} aria-label={`Open ${title} template`} className="catalog-card">
            <div className="catalog-card-top"><div className="catalog-card-icon"><PresetIcon icon={icon} /></div><span className="catalog-category">{category || "Other"}</span></div>
            <h2>{title}</h2>
            <p className="catalog-description">{description || "A community automation template."}</p>
            <div className="catalog-meta"><span><TablerIcon name="public" /> {host}</span>{actionCount != null && <span><TablerIcon name="format_list_numbered" /> {actionCount} steps</span>}</div>
            <div className="catalog-card-footer"><AuthorCell username={author} isAdmin={isAdmin} /><span className="card-action">View template <TablerIcon name="arrow_forward" /></span></div>
        </Link>
    );
});
