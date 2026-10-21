"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TablerIcon from "@/components/TablerIcon";

export function Hero({ isLoggedIn }: { isLoggedIn: boolean }) {
    const router = useRouter();
    const params = useSearchParams();
    const [query, setQuery] = useState(params.get("search") || "");
    useEffect(() => {
        // Keep the input in sync with browser navigation.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setQuery(params.get("search") || "");
    }, [params]);
    useEffect(() => {
        if (query === (params.get("search") || "")) return;
        const timer = setTimeout(() => {
            const next = new URLSearchParams(params.toString());
            if (query.trim()) next.set("search", query.trim()); else next.delete("search");
            next.delete("page");
            router.replace(`/?${next.toString()}`, { scroll: false });
        }, 300);
        return () => clearTimeout(timer);
    }, [query, params, router]);
    return <section className={`market-hero ${isLoggedIn ? "market-hero-signed-in" : ""}`}>
        <div className="market-hero-inner">
            <div className="hero-copy"><h1><img src="/logo.svg" alt="Figranium Templates" style={{ display: "block", width: "100%", maxWidth: 530, height: "auto" }} /></h1>
            <p>Discover community-built Figranium templates, inspect every step, and run them on your own infrastructure.</p></div>
            <div className="hero-search"><h2>Find your next automation</h2><p>Search templates, sites, or use cases.</p><label className="catalog-search"><TablerIcon name="search" /><span className="sr-only">Search templates</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search templates, sites, or use cases…" /></label><a className="search-attribution" href="https://algolia.com/?utm_medium=AOS-referral" target="_blank" rel="noopener noreferrer"><span>Search by</span><img src="/algolia-logo.svg" alt="Algolia" width={70} height={16} /></a></div>
        </div>
    </section>;
}
