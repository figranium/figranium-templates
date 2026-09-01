"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MaterialIcon from "@/components/MaterialIcon";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            // Auto redirect to login with "verified" message (simulated since we auto-verified)
            router.push("/auth/signin?verified=true");
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

    // Removed success state rendering since we redirect now


    return (
        <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 py-12 lg:min-h-screen">
            <div className="product-panel w-full max-w-md p-7 sm:p-9">
                <div className="text-center mb-8">
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-[13px] border border-white/[0.09] bg-white/[0.035]"><MaterialIcon name="person_add" className="text-[22px] text-white/65" /></div>
                    <p className="page-kicker mb-3">Join the community</p><h1 className="text-2xl font-bold tracking-[-0.035em] mb-2">Create an account</h1>
                    <p className="text-sm text-muted-foreground">
                        Join the Figranium community to share presets
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg flex items-center gap-2">
                        <MaterialIcon name="error" className="text-sm" />
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                            Username
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-[#121212] border border-[#262626] rounded-lg px-3 py-2 text-foreground focus:outline-none focus:border-zinc-700 transition-colors"
                            placeholder="username"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>

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
                            minLength={8}
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
                        {loading ? "Creating account..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-6">
                    Already have an account?{" "}
                    <Link href="/auth/signin" className="text-foreground hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
