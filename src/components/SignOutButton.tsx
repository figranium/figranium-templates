"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MaterialIcon from "./MaterialIcon";

interface AccountSettingsState {
    displayName: string;
    profilePicture: string;
}

interface SignOutButtonProps {
    username?: string | null;
    isAdmin?: boolean;
}

export function SignOutButton({ username, isAdmin }: SignOutButtonProps) {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [avatarColor, setAvatarColor] = useState<string>("#3b82f6");
    const [displayName, setDisplayName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const storageKey = `figranium-avatar-color:${username || "default"}`;
        const storedColor = window.localStorage.getItem(storageKey);

        if (storedColor) {
            setAvatarColor(storedColor);
        } else {
            const palette = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#14b8a6", "#ec4899", "#6366f1"];
            const nextColor = palette[Math.floor(Math.random() * palette.length)];
            window.localStorage.setItem(storageKey, nextColor);
            setAvatarColor(nextColor);
        }
    }, [username]);

    useEffect(() => {
        const storageKey = `figranium-account-settings:${username || "default"}`;
        const storedSettings = window.localStorage.getItem(storageKey);

        if (storedSettings) {
            try {
                const parsed = JSON.parse(storedSettings) as AccountSettingsState;
                setDisplayName(parsed.displayName || "");
                setProfilePicture(parsed.profilePicture || "");
            } catch {
                setDisplayName("");
                setProfilePicture("");
            }
        }
    }, [username]);

    useEffect(() => {
        const handleSettingsUpdated = () => {
            const storageKey = `figranium-account-settings:${username || "default"}`;
            const storedSettings = window.localStorage.getItem(storageKey);
            if (storedSettings) {
                try {
                    const parsed = JSON.parse(storedSettings) as AccountSettingsState;
                    setDisplayName(parsed.displayName || "");
                    setProfilePicture(parsed.profilePicture || "");
                } catch {
                    setDisplayName("");
                    setProfilePicture("");
                }
            }
        };

        window.addEventListener("figranium-account-settings-updated", handleSettingsUpdated);
        return () => window.removeEventListener("figranium-account-settings-updated", handleSettingsUpdated);
    }, [username]);

    const handleSignOut = async () => {
        setIsOpen(false);
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/");
        router.refresh();
    };

    const initials = (username || "U").trim().charAt(0).toUpperCase();

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold text-white ring-1 ring-white/15 transition-colors hover:brightness-110 overflow-hidden"
                style={{ backgroundColor: profilePicture ? "transparent" : avatarColor }}
                aria-label="Open account menu"
                aria-expanded={isOpen}
                title="Account menu"
            >
                {profilePicture ? (
                    <img src={profilePicture} alt="Profile avatar" className="h-10 w-10 rounded-full object-cover" />
                ) : (
                    initials
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-[#0f0f0f] p-2 shadow-2xl shadow-black/40">
                    <div className="px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-white/45 flex items-center gap-1.5">
                        <span>{username ? `Hi, ${displayName || username}` : "Account"}</span>
                        {isAdmin && (
                            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white" title="Verified Admin">
                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <Link href="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                            <MaterialIcon name="dashboard" className="text-base" />
                            <span>Dashboard</span>
                        </Link>
                        <Link href="/account/settings" onClick={() => setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                            <MaterialIcon name="settings" className="text-base" />
                            <span>Account settings</span>
                        </Link>
                        <div className="my-1 border-t border-white/10" />
                        <Link href="/presets/new" onClick={() => setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                            <MaterialIcon name="add_circle" className="text-base" />
                            <span>Create preset</span>
                        </Link>
                        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                            <MaterialIcon name="search" className="text-base" />
                            <span>Browse presets</span>
                        </Link>
                        {isAdmin && (
                            <Link href="/admin" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2 text-sm text-red-400 transition-colors hover:bg-white/10 hover:text-red-300">
                                Admin dashboard
                            </Link>
                        )}
                    </div>

                    <div className="mt-2 border-t border-white/10 pt-2">
                        <button
                            onClick={handleSignOut}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            <MaterialIcon name="logout" className="text-base" />
                            <span>Log out</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
