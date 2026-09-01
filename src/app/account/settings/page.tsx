"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MaterialIcon from "@/components/MaterialIcon";

interface AccountSettings {
    displayName: string;
    profilePicture: string;
}

function getStorageKey(username: string | null) {
    return `figranium-account-settings:${username || "default"}`;
}

export default function AccountSettingsPage() {
    const router = useRouter();
    const [displayName, setDisplayName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [username, setUsername] = useState<string | null>(null);
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAccount = async () => {
            try {
                const res = await fetch("/api/auth/me");
                if (!res.ok) {
                    router.replace("/auth/signin");
                    return;
                }

                const data = await res.json();
                const resolvedUsername = data.username || null;
                setUsername(resolvedUsername);

                const stored = window.localStorage.getItem(getStorageKey(resolvedUsername));
                if (stored) {
                    const parsed = JSON.parse(stored) as AccountSettings;
                    setDisplayName(parsed.displayName || "");
                    setProfilePicture(parsed.profilePicture || "");
                }
            } catch {
                router.replace("/auth/signin");
                return;
            } finally {
                setLoading(false);
            }
        };

        loadAccount();
    }, [router]);

    const handleSave = async (event: React.FormEvent) => {
        event.preventDefault();
        const trimmedDisplayName = displayName.trim();
        const trimmedProfilePicture = profilePicture.trim();

        // Save to database
        try {
            const res = await fetch("/api/auth/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    displayName: trimmedDisplayName,
                    profilePicture: trimmedProfilePicture,
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to save");
            }

            // Also keep localStorage for backward compatibility and instant UI updates
            const nextSettings: AccountSettings = {
                displayName: trimmedDisplayName,
                profilePicture: trimmedProfilePicture,
            };
            window.localStorage.setItem(getStorageKey(username), JSON.stringify(nextSettings));
            window.dispatchEvent(new CustomEvent("figranium-account-settings-updated", { detail: nextSettings }));
            setSaved(true);
        } catch (error) {
            console.error("Failed to save profile:", error);
            alert("Failed to save profile. Please try again.");
        }
    };

    if (loading) {
        return <div className="flex min-h-[60vh] items-center justify-center gap-3 text-xs text-white/35"><MaterialIcon name="progress_activity" className="animate-spin text-[20px]" />Loading settings…</div>;
    }

    const previewInitial = (displayName || username || "U").trim().charAt(0).toUpperCase();

    return (
        <div className="min-h-screen px-5 py-9 text-white sm:px-8 lg:px-10 lg:py-11">
            <div className="product-panel mx-auto flex max-w-4xl flex-col gap-8 p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xl font-semibold">
                        {profilePicture ? (
                            <img src={profilePicture} alt="Profile preview" className="h-12 w-12 rounded-full object-cover" />
                        ) : (
                            previewInitial
                        )}
                    </div>
                    <div>
                        <p className="page-kicker">Account / Profile</p>
                        <h1 className="mt-1 text-2xl font-semibold tracking-[-0.035em]">Settings</h1>
                    </div>
                </div>

                <form onSubmit={handleSave} className="flex flex-col gap-6">
                    <label className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#121212] p-4 text-sm text-white/70">
                        <span className="font-medium text-white">Display name</span>
                        <input
                            value={displayName}
                            onChange={(event) => setDisplayName(event.target.value)}
                            placeholder="How you want to appear"
                            className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
                        />
                    </label>

                    <label className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#121212] p-4 text-sm text-white/70">
                        <span className="font-medium text-white">Profile picture URL</span>
                        <input
                            value={profilePicture}
                            onChange={(event) => setProfilePicture(event.target.value)}
                            placeholder="https://example.com/avatar.jpg"
                            className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
                        />
                    </label>

                    <div className="rounded-2xl border border-white/10 bg-[#121212] p-5 text-sm leading-6 text-white/60">
                        Your display name and profile picture appear in the account dropdown and around the app once saved.
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            className="primary-action flex items-center gap-2 px-4 transition hover:bg-white/88"
                        >
                            <MaterialIcon name="save" className="text-base" />
                            Save changes
                        </button>
                        {saved && <span className="text-sm text-emerald-400">Saved successfully</span>}
                    </div>
                </form>
            </div>
        </div>
    );
}
