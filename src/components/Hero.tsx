"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import MaterialIcon from "@/components/MaterialIcon";
import Link from "next/link";

interface HeroProps {
    isLoggedIn: boolean;
}

const featuredCategories = ["All Presets", "Social Media", "AI", "Lead Gen", "Shopping", "SEO", "Developer Tools"];

export function Hero({ isLoggedIn }: HeroProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("search") || "");
    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const currentSearch = searchParams.get("search") || "";
        if (query !== currentSearch) {
            setQuery(currentSearch);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    useEffect(() => {
        return () => {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
        };
    }, []);

    const handleSearch = (value: string) => {
        setQuery(value);

        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (value.trim()) {
                params.set("search", value);
            } else {
                params.delete("search");
                params.delete("q");
            }
            router.push(`/?${params.toString()}`, { scroll: false });
        }, 300);
    };

    const categoryHref = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (category === "All Presets") params.delete("category");
        else params.set("category", category);
        return `/?${params.toString()}`;
    };

    const currentCategory = searchParams.get("category") || "All Presets";

    return (
        <section className={`border-b border-white/[0.075] px-5 sm:px-8 lg:px-10 ${isLoggedIn ? "pb-12 pt-24 sm:pt-28 lg:pb-14 lg:pt-32" : "pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-44"}`}>
            <div className={`mx-auto max-w-[1320px] ${isLoggedIn ? "" : "text-center"}`}>
                <div className={isLoggedIn ? "mb-9" : "mx-auto mb-10 max-w-5xl"}>
                    <h1
                        className="font-bold leading-[0.9] tracking-[-0.065em] text-white"
                        style={{ fontSize: isLoggedIn ? "clamp(4.5rem, 8vw, 8rem)" : "clamp(4rem, 7.5vw, 7.5rem)" }}
                    >
                        {isLoggedIn ? "Figranium Templates" : "Automations you can actually own."}
                    </h1>
                    {!isLoggedIn && (
                        <p className="mx-auto mt-7 max-w-3xl text-[clamp(1rem,1.45vw,1.3rem)] leading-8 text-white/48">
                            Discover community-built Figranium presets, inspect every step, and run them locally—without subscriptions, black boxes, or vendor lock-in.
                        </p>
                    )}
                </div>

                <div className={`flex w-full flex-col gap-3 sm:flex-row ${isLoggedIn ? "max-w-4xl" : "mx-auto max-w-4xl"}`}>
                    <div className="group relative flex-1">
                        <div className="pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 items-center justify-center text-muted-foreground leading-none">
                            <MaterialIcon name="search" className="text-base leading-none" />
                        </div>
                        <input
                            type="text"
                            className="h-12 w-full rounded-[11px] border border-white/[0.1] bg-black/40 pl-10 pr-4 text-[13px] text-white outline-none transition placeholder:text-white/28 hover:border-white/15 focus:border-white/24"
                            placeholder="Search presets, sites, or use cases…"
                            value={query}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                    <a
                        href="https://algolia.com/?utm_medium=AOS-referral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 shrink-0 items-center justify-center gap-2 px-2 text-[10px] text-white/35 transition hover:text-white/60"
                    >
                        <span>Powered by</span>
                        <img
                            src="/algolia-logo.svg"
                            alt="Algolia"
                            className="h-3.5 w-auto opacity-70 grayscale"
                            width="69"
                            height="16"
                            loading="lazy"
                        />
                    </a>
                </div>

                {isLoggedIn && (
                    <div className="mt-7 flex max-w-full flex-nowrap gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {featuredCategories.map((category) => {
                            const active = currentCategory === category;
                            return (
                                <Link
                                    key={category}
                                    href={categoryHref(category)}
                                    scroll={false}
                                    className={`inline-flex h-10 shrink-0 items-center rounded-[10px] border px-4 text-[13px] font-medium transition ${active ? "border-white/30 bg-white/[0.1] text-white" : "border-white/[0.11] bg-black/20 text-white/52 hover:border-white/22 hover:bg-white/[0.04] hover:text-white"}`}
                                >
                                    {category}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
