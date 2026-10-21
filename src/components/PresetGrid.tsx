"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { PresetCard, type PresetProps } from "./PresetCard";
import TablerIcon from "@/components/TablerIcon";

export function PresetGrid({ presets, counts, adminUsername, error }: { presets: PresetProps[]; counts: Record<string, number>; adminUsername?: string; error?: boolean }) {
    const router = useRouter();
    const params = useSearchParams();
    const update = (key: string, value: string) => {
        const next = new URLSearchParams(params.toString());
        if (value) next.set(key, value); else next.delete(key);
        next.delete("page");
        router.push(`/?${next.toString()}`, { scroll: false });
    };
    const categories = Object.keys(counts).filter((category) => category !== "All Templates").sort();
    const selectedCategory = params.get("category") || "";
    if (selectedCategory && !categories.includes(selectedCategory)) categories.push(selectedCategory);
    return (
        <section className="catalog-panel" aria-label="Template catalog">
            <div className="catalog-toolbar">
                <div className="catalog-title"><h2>Explore templates</h2><p>{error ? "Browse community automations" : `${presets.length} ${presets.length === 1 ? "template" : "templates"} available`}</p></div>
                <div className="catalog-filters"><label className="catalog-select"><span className="sr-only">Filter by category</span><select value={selectedCategory} onChange={(event) => update("category", event.target.value)}><option value="">All categories</option>{categories.map((category) => <option key={category} value={category}>{category}</option>)}</select></label>
                <label className="catalog-select"><span className="sr-only">Sort templates</span><select value={params.get("sort") || "popular"} onChange={(event) => update("sort", event.target.value)}><option value="popular">Most popular</option><option value="newest">Newest</option><option value="oldest">Oldest</option></select></label></div>
            </div>
            {error ? <div className="catalog-empty" role="alert"><TablerIcon name="error" /><h2>Templates are unavailable</h2><p>Please try again.</p><button className="secondary-button" onClick={() => router.refresh()}>Retry</button></div> : presets.length ? <div className="catalog-grid">{presets.map((preset) => <PresetCard key={preset.id} {...preset} adminUsername={adminUsername} />)}</div> : <div className="catalog-empty" role="status"><TablerIcon name="search_off" /><h2>No matching templates</h2><p>Try a different search or category.</p><button className="secondary-button" onClick={() => router.push("/")}>Clear filters</button></div>}
        </section>
    );
}
