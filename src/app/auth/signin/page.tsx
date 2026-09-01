"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import MaterialIcon from "@/components/MaterialIcon";

function SigninContent() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const verified = searchParams.get("verified");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Invalid credentials");
            }

            // Check if user has set up their profile (first-time login detection)
            const meRes = await fetch("/api/auth/me");
            const meData = await meRes.json();
            
            // If no display name set, redirect to account settings
            if (!meData.displayName) {
                router.replace("/account/settings");
            } else {
                router.replace("/dashboard");
            }
            router.refresh(); // Refresh to update Navbar
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="product-panel w-full max-w-md p-7 sm:p-9">
            <div className="text-center mb-8">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-[13px] border border-white/[0.09] bg-white/[0.035]"><MaterialIcon name="login" className="text-[22px] text-white/65" /></div>
                <p className="page-kicker mb-3">Account access</p><h1 className="text-2xl font-bold tracking-[-0.035em] mb-2">Welcome back</h1>
                <p className="text-sm text-muted-foreground">
                    Sign in to your Figranium account
                </p>
            </div>

            {verified && (
                <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 text-green-500 text-sm rounded-lg flex items-center gap-2">
                    <MaterialIcon name="check_circle" className="text-sm" />
                    Email verified! You can now sign in.
                </div>
            )}

            {error && (
                <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg flex items-center gap-2">
                    <MaterialIcon name="error" className="text-sm" />
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                        Email
                    </label>
                    <input
                        type="email"
                        required
                        className="w-full bg-[#121212] border border-[#262626] rounded-lg px-3 py-2 text-foreground focus:outline-none focus:border-zinc-700 transition-colors"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                        Password
                    </label>
                    <input
                        type="password"
                        required
                        className="w-full bg-[#121212] border border-[#262626] rounded-lg px-3 py-2 text-foreground focus:outline-none focus:border-zinc-700 transition-colors"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="primary-action mt-6 w-full transition hover:bg-white/88 disabled:opacity-50"
                >
                    {loading ? "Signing in..." : "Sign In"}
                </button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-foreground hover:underline">
                    Sign Up
                </Link>
            </p>
        </div>
    );
}

export default function SigninPage() {
    return (
        <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 py-12 lg:min-h-screen">
            <Suspense fallback={<div className="text-muted-foreground">Loading...</div>}>
                <SigninContent />
            </Suspense>
        </div>
    );
}
