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
            defaultTheme="dark"
            navigate={router.push}
            replace={router.replace}
            onSessionChange={() => router.refresh()}
            redirectTo="/account/settings"
            social={{ providers: ["github"] }}
            viewPaths={{ SIGN_IN: "signin", SIGN_UP: "signup" }}
            Link={Link}
            organization={{}}
        >
            <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[#020202]/30 px-4 py-8 backdrop-blur-[24px]">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-78 blur-[24px]">
                    <div className="min-h-screen bg-background text-foreground lg:ml-[72px]">
                        <Hero isLoggedIn />
                        <div className="mx-auto max-w-[1320px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
                            <PresetGrid presets={presets} />
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
                    />
                </div>
            </div>
        </NeonAuthUIProvider>
    );
}
