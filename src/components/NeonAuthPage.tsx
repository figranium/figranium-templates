"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthView, NeonAuthUIProvider } from "@neondatabase/auth-ui";
import { authClient } from "@/lib/auth-client";
import { Hero } from "@/components/Hero";
import { PresetGrid } from "@/components/PresetGrid";
import type { PresetProps } from "@/components/PresetCard";

type NeonAuthPageProps = { view: "SIGN_IN" | "SIGN_UP"; presets: PresetProps[] };

export function NeonAuthPage({ view, presets }: NeonAuthPageProps) {
    const router = useRouter();

    return (
        <NeonAuthUIProvider
            authClient={authClient}
            defaultTheme="light"
            navigate={router.push}
            replace={router.replace}
            onSessionChange={() => router.refresh()}
            redirectTo="/account/settings"
            social={{ providers: ["github"] }}
            viewPaths={{ SIGN_IN: "signin", SIGN_UP: "signup" }}
            Link={Link}
            organization={{}}
        >
            <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-slate-200/60 px-4 py-8 backdrop-blur-[24px]">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-78 blur-[24px]">
                    <div className="min-h-screen bg-background text-foreground">
                        <Hero isLoggedIn />
                        <div className="catalog-page">
                            <PresetGrid presets={presets} counts={{}} />
                        </div>
                    </div>
                </div>
                <div className="relative z-10 w-full max-w-md">
                    <AuthView
                        view={view}
                        socialLayout="vertical"
                        className="w-full"
                        cardHeader={<div className="space-y-5">
                            <Link href="/" className="flex justify-center">
                                <img src="/logo.svg" alt="Figranium Templates" width={164} height={40} className="h-10 w-auto" />
                            </Link>
                            <div>
                                <h1 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">{view === "SIGN_IN" ? "Sign In" : "Create your account"}</h1>
                                <p className="mt-2 text-sm text-muted-foreground">{view === "SIGN_IN" ? "Enter your email below to login to your account" : "Join the Figranium Templates community"}</p>
                            </div>
                        </div>}
                        cardFooter={<p className="text-center text-sm text-muted-foreground">Already had an account before Neon Auth? <Link className="underline" href="/auth/establish-password">Continue with your existing password</Link>.</p>}
                    />
                </div>
            </div>
        </NeonAuthUIProvider>
    );
}
