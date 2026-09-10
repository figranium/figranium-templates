"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MaterialIcon from "./MaterialIcon";
import { authClient } from "@/lib/auth-client";

interface AccountSettingsState {
    displayName: string;
    profilePicture: string;
}

interface SignOutButtonProps {
    username?: string | null;
    displayName?: string | null;
    profilePicture?: string | null;
    isAdmin?: boolean;
    sidebar?: boolean;
}

export function SignOutButton({ username, displayName: initialDisplayName, profilePicture: initialProfilePicture, isAdmin, sidebar = false }: SignOutButtonProps) {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [displayName, setDisplayName] = useState(initialDisplayName || "");
    const [profilePicture, setProfilePicture] = useState(initialProfilePicture || "");

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
        const handleSettingsUpdated = (event: Event) => {
            const detail = (event as CustomEvent<AccountSettingsState>).detail;
            if (detail) {
                setDisplayName(detail.displayName || "");
                setProfilePicture(detail.profilePicture || "");
                return;
            }
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
        await authClient.signOut();
        router.push("/");
        router.refresh();
    };

    const resolvedName = displayName || initialDisplayName || username || "Account";
    const initials = resolvedName.trim().charAt(0).toUpperCase();
    const palette = ["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#14b8a6", "#ec4899", "#6366f1"];
    const colorSeed = (username || resolvedName).split("").reduce((sum, character) => sum + character.charCodeAt(0), 0);
    const avatarColor = palette[colorSeed % palette.length];

    return (
        <div className={sidebar ? "relative w-full" : "relative"} ref={containerRef}>
            <button
                onClick={() => setIsOpen((open) => !open)}
                className={sidebar
                    ? "flex h-12 w-full items-center justify-center gap-0 overflow-hidden rounded-[10px] px-1 text-left transition-all hover:bg-white/[0.05] group-hover/sidebar:justify-start group-hover/sidebar:gap-3 group-hover/sidebar:px-1"
                    : "flex min-h-11 w-full items-center gap-3 rounded-[10px] px-2 text-left transition hover:bg-white/[0.05]"}
                aria-label="Open account menu"
                aria-expanded={isOpen}
                title="Account menu"
            >
                <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full text-lg font-semibold text-white ring-1 ring-white/15"
                    style={{ backgroundColor: profilePicture ? "transparent" : avatarColor }}
                >
                    {profilePicture ? <img src={profilePicture} alt="Profile avatar" className="h-10 w-10 rounded-full object-cover" /> : initials}
                </span>
                <span className={sidebar
                    ? "min-w-0 max-w-0 translate-x-2 overflow-hidden opacity-0 transition-all duration-200 group-hover/sidebar:max-w-[164px] group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100"
                    : "min-w-0 flex-1"}
                >
                    <span className="block truncate text-[13px] font-semibold text-white">{resolvedName}</span>
                    <span className="mt-0.5 block truncate text-[10px] text-white/35">{username ? `@${username}` : "Account"}</span>
                </span>
            </button>

            {isOpen && (
                <div className={sidebar
                    ? "fixed left-[76px] top-3 z-50 w-56 rounded-xl border border-white/10 bg-[#0f0f0f] p-2 shadow-2xl shadow-black/40 transition-[left] duration-300 group-hover/sidebar:left-[252px]"
                    : "absolute right-0 z-50 mt-2 w-56 rounded-xl border border-white/10 bg-[#0f0f0f] p-2 shadow-2xl shadow-black/40"}
                >
                    <div className="px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-white/45">
                        {username ? `Hi, ${resolvedName}` : "Account"}
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
                            <span>Create template</span>
                        </Link>
                        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                            <MaterialIcon name="search" className="text-base" />
                            <span>Browse templates</span>
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
