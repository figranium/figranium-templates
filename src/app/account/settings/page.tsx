"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MaterialIcon from "@/components/MaterialIcon";
import { authClient } from "@/lib/auth-client";

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
    const [profileMapped, setProfileMapped] = useState(true);
    const [githubLoading, setGithubLoading] = useState(false);

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
                setProfileMapped(!!data.profileMapped);

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
            const response = profileMapped ? await fetch("/api/auth/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ displayName: trimmedDisplayName, profilePicture: trimmedProfilePicture }),
            }) : await fetch("/api/auth/onboard", {
                method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: trimmedDisplayName }),
            });

            if (!response.ok) {
                throw new Error("Failed to save");
            }

            if (!profileMapped) setProfileMapped(true);

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

    const connectGitHub = async () => {
        setGithubLoading(true);
        const result = await authClient.linkSocial({ provider: "github", callbackURL: "/account/settings" });
        if (result.error) {
            setGithubLoading(false);
            alert(result.error.message || "Could not connect GitHub. Your existing account was not changed.");
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
                        <span className="font-medium text-white">{profileMapped ? "Display name" : "Username"}</span>
                        <input
                            value={displayName}
                            onChange={(event) => setDisplayName(event.target.value)}
                            placeholder={profileMapped ? "How you want to appear" : "Choose a username"}
                            className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
                        />
                    </label>

                    {profileMapped && <label className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#121212] p-4 text-sm text-white/70">
                        <span className="font-medium text-white">Profile picture URL</span>
                        <input
                            value={profilePicture}
                            onChange={(event) => setProfilePicture(event.target.value)}
                            placeholder="https://example.com/avatar.jpg"
                            className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-white/30"
                        />
                    </label>}

                    <div className="rounded-2xl border border-white/10 bg-[#121212] p-5 text-sm text-white/60">
                        <div className="mb-3 font-medium text-white">GitHub connection</div>
                        <p className="mb-4">Connect GitHub to this Neon Auth account. If the GitHub account is already linked elsewhere, nothing in your Figranium profile changes.</p>
                        <button type="button" onClick={connectGitHub} disabled={githubLoading} className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm text-white hover:bg-white/10 disabled:opacity-50">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                                <path d="M12 2C6.477 2 2 6.586 2 12.246c0 4.528 2.865 8.37 6.839 9.727.5.096.683-.223.683-.494 0-.243-.009-.888-.014-1.744-2.782.62-3.369-1.369-3.369-1.369-.455-1.185-1.11-1.5-1.11-1.5-.908-.638.069-.625.069-.625 1.004.072 1.532 1.057 1.532 1.057.892 1.565 2.341 1.113 2.91.851.091-.667.349-1.113.635-1.369-2.221-.259-4.555-1.139-4.555-5.07 0-1.12.39-2.036 1.03-2.753-.104-.259-.447-1.303.098-2.715 0 0 .84-.276 2.75 1.052A9.38 9.38 0 0 1 12 6.932a9.37 9.37 0 0 1 2.504.348c1.909-1.328 2.748-1.052 2.748-1.052.546 1.412.203 2.456.1 2.715.64.717 1.028 1.633 1.028 2.753 0 3.94-2.338 4.808-4.566 5.062.359.32.678.951.678 1.917 0 1.384-.012 2.5-.012 2.84 0 .274.18.595.688.493C19.139 20.612 22 16.773 22 12.246 22 6.586 17.523 2 12 2Z" />
                            </svg>
                            {githubLoading ? "Connecting…" : "Connect GitHub"}
                        </button>
                    </div>

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
