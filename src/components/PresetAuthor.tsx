"use client";

import { useEffect, useState } from "react";

interface AccountSettings {
    displayName: string;
    profilePicture: string;
}

export function PresetAuthor({ username }: { username: string }) {
    const isAdmin = username === process.env.NEXT_PUBLIC_ADMIN_USERNAME || username === process.env.ADMIN_USERNAME;
    const [displayName, setDisplayName] = useState(username);
    const [profilePicture, setProfilePicture] = useState("");

    useEffect(() => {
        let mounted = true;

        async function loadProfile() {
            // Try to fetch from database first
            try {
                const res = await fetch(`/api/auth/user?username=${encodeURIComponent(username)}`);
                if (res.ok) {
                    const data = await res.json();
                    if (mounted) {
                        setDisplayName(data.displayName || username);
                        setProfilePicture(data.profilePicture || "");
                        // Cache in localStorage for faster subsequent loads
                        if (data.displayName || data.profilePicture) {
                            window.localStorage.setItem(
                                `figranium-account-settings:${username}`,
                                JSON.stringify({
                                    displayName: data.displayName || username,
                                    profilePicture: data.profilePicture || "",
                                })
                            );
                        }
                    }
                    return;
                }
            } catch { /* ignore */ }

            // Fallback to localStorage
            const stored = window.localStorage.getItem(`figranium-account-settings:${username}`);
            if (stored && mounted) {
                try {
                    const parsed = JSON.parse(stored) as AccountSettings;
                    setDisplayName(parsed.displayName || username);
                    setProfilePicture(parsed.profilePicture || "");
                } catch { /* ignore */ }
            }
        }

        loadProfile();

        return () => { mounted = false; };
    }, [username]);

    const initial = (displayName || username).trim().charAt(0).toUpperCase();

    return (
        <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 flex items-center justify-center text-xs font-semibold border border-[#262626] bg-[#121212] text-muted-foreground">
                {profilePicture ? (
                    <img src={profilePicture} alt="" className="w-full h-full object-cover" />
                ) : (
                    initial
                )}
            </div>
            <span className="text-muted-foreground text-sm flex items-center gap-1.5">
                {displayName}
                {isAdmin && (
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500" title="Verified Admin">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#1f1f1f">
                            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/>
                        </svg>
                    </span>
                )}
            </span>
        </div>
    );
}
