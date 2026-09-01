"use client";

import { useState } from "react";
import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";
import { AppNavLink } from "@/components/AppNavLink";

interface MobileMenuProps {
    isLoggedIn: boolean;
    isAdmin?: boolean;
    signOutNode: React.ReactNode;
}

export function MobileMenu({ isLoggedIn, isAdmin, signOutNode }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="flex h-10 w-10 items-center justify-center text-white/55 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Open Mobile Menu"
                aria-expanded={isOpen}
            >
                <MaterialIcon name="menu" className="text-2xl" />
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 h-dvh w-screen bg-black/70 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Menu Dropdown / Slide-over */}
            <div
                className={`fixed right-0 top-0 z-50 h-dvh w-[min(88vw,320px)] transform border-l border-white/[0.09] bg-[#050505] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex h-full flex-col p-5">
                    <div className="flex justify-between items-center mb-8">
                        <img src="/logo.svg" alt="Figranium Templates" width={150} height={36} className="h-9 w-auto" />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
                            aria-label="Close Mobile Menu"
                        >
                            <MaterialIcon name="close" className="text-xl" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-1 text-[13px]">
                        <AppNavLink href="/" icon="explore" mobile>Preset Store</AppNavLink>
                        <a href="https://figranium.dev/docs" target="_blank" rel="noopener noreferrer" className="flex h-11 items-center gap-3 rounded-[10px] px-3 text-white/48 hover:bg-white/[0.04] hover:text-white"><MaterialIcon name="description" className="text-[19px]" />Documentation</a>
                        <a href="https://figranium.dev/blog" target="_blank" rel="noopener noreferrer" className="flex h-11 items-center gap-3 rounded-[10px] px-3 text-white/48 hover:bg-white/[0.04] hover:text-white"><MaterialIcon name="article" className="text-[19px]" />Blog</a>

                        <div className="my-3 h-px w-full bg-white/[0.08]" />

                        {isLoggedIn ? (
                            <>
                                {isAdmin && (
                                    <AppNavLink href="/admin" icon="admin_panel_settings" mobile>Administration</AppNavLink>
                                )}
                                <AppNavLink href="/dashboard" icon="dashboard" mobile>My presets</AppNavLink>
                                <div className="pt-2">
                                    {signOutNode}
                                </div>
                            </>
                        ) : (
                            <Link
                                href="/auth/signin"
                                className="flex h-11 items-center justify-center gap-2 rounded-[10px] bg-white px-4 text-[10px] font-bold uppercase tracking-[0.13em] text-black"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
