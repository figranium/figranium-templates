"use client";

import { useEffect, useState } from "react";

interface AccountSettings {
    displayName: string;
    profilePicture: string;
}

export function PresetAuthor({ username, isAdmin }: { username: string; isAdmin?: boolean }) {
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
                    <span title="Verified Admin">
                        <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </span>
                )}
            </span>
        </div>
    );
}
