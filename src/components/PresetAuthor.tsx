"use client";

import { useEffect, useState } from "react";

interface AccountSettings {
    displayName: string;
    profilePicture: string;
}

export function PresetAuthor({ username }: { username: string }) {
    const [displayName, setDisplayName] = useState(username);
    const [profilePicture, setProfilePicture] = useState("");

    useEffect(() => {
        const stored = window.localStorage.getItem(`figranium-account-settings:${username}`);
        if (stored) {
            try {
                const parsed = JSON.parse(stored) as AccountSettings;
                setDisplayName(parsed.displayName || username);
                setProfilePicture(parsed.profilePicture || "");
            } catch { /* ignore */ }
        }
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
            <span className="text-muted-foreground text-sm">{displayName}</span>
        </div>
    );
}