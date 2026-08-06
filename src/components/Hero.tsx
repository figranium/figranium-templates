"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import MaterialIcon from "@/components/MaterialIcon";

export function Hero() {
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

    return (
        <div className="flex flex-col items-center text-center py-12 md:py-20 px-4 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="z-10 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05] text-white">
                    The <span className="text-zinc-300">open-source answer</span> to <span className="block mt-2 text-zinc-300">the Apify Store</span>
                </h1>

                <p className="text-muted-foreground max-w-xl text-lg mb-10 leading-relaxed">
                    Download presets for free, then run them on your own local, open-source Figranium instance—no vendor lock-in, no subscription required.
                </p>

                <div className="relative w-full max-w-lg">
                    <div className="group relative">
                        <div className="pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 items-center justify-center text-muted-foreground leading-none">
                            <MaterialIcon name="search" className="text-base leading-none" />
                        </div>
                        <input
                            type="text"
                            className="w-full bg-[#121212] border border-[#262626] text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-zinc-700 transition-all placeholder:text-muted-foreground/50 text-foreground"
                            placeholder="Search presets (e.g., 'LinkedIn Scraper', 'SEO Audit')..."
                            value={query}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                    {/* Search by Algolia badge */}
                    <a
                        href="https://algolia.com/?utm_medium=AOS-referral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 flex justify-center items-center gap-1.5 text-muted-foreground/60 hover:text-muted-foreground/80 transition-colors text-[10px]"
                    >
                        <span>Powered by</span>
                        <img
                            src="/algolia-logo.svg"
                            alt="Algolia"
                            className="h-3.5 w-auto"
                            width="69"
                            height="16"
                            loading="lazy"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
