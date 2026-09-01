"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import MaterialIcon from "@/components/MaterialIcon";
import clsx from "clsx";

const categoryIcons: Record<string, string> = {
    "All Presets": "grid_view",
    "QA Testing": "science",
    "Lead Gen": "group",
    "Social Media": "share",
    "Shopping": "shopping_cart",
    "Monitoring": "insights",
    "AI": "smart_toy",
    "Jobs": "work",
    "News": "article",
    "Videos": "play_circle",
    "Reviews": "rate_review",
    "Developer Tools": "code",
    "SEO": "search",
    "Real Estate": "real_estate_agent",
    "Travel": "flight",
    "Other": "more_horiz"
};



interface SidebarProps {
    counts: Record<string, number>;
}

export function Sidebar({ counts }: SidebarProps) {
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get("category") || "All Presets";
    const [showAllCategories, setShowAllCategories] = useState(false);

    const getCategoryHref = (categoryName: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (categoryName === "All Presets") {
            params.delete("category");
        } else {
            params.set("category", categoryName);
        }
        return `/?${params.toString()}`;
    };

    const categories = [
        { name: "All Presets", count: counts["All Presets"] || 0, icon: categoryIcons["All Presets"] },
        { name: "QA Testing", count: counts["QA Testing"] || 0, icon: categoryIcons["QA Testing"] },
        { name: "Lead Gen", count: counts["Lead Gen"] || 0, icon: categoryIcons["Lead Gen"] },
        { name: "Social Media", count: counts["Social Media"] || 0, icon: categoryIcons["Social Media"] },
        { name: "Shopping", count: counts["Shopping"] || 0, icon: categoryIcons["Shopping"] },
        { name: "Monitoring", count: counts["Monitoring"] || 0, icon: categoryIcons["Monitoring"] },
        { name: "AI", count: counts["AI"] || 0, icon: categoryIcons["AI"] },
        { name: "Jobs", count: counts["Jobs"] || 0, icon: categoryIcons["Jobs"] },
        { name: "News", count: counts["News"] || 0, icon: categoryIcons["News"] },
        { name: "Videos", count: counts["Videos"] || 0, icon: categoryIcons["Videos"] },
        { name: "Reviews", count: counts["Reviews"] || 0, icon: categoryIcons["Reviews"] },
        { name: "Developer Tools", count: counts["Developer Tools"] || 0, icon: categoryIcons["Developer Tools"] },
        { name: "SEO", count: counts["SEO"] || 0, icon: categoryIcons["SEO"] },
        { name: "Real Estate", count: counts["Real Estate"] || 0, icon: categoryIcons["Real Estate"] },
        { name: "Travel", count: counts["Travel"] || 0, icon: categoryIcons["Travel"] },
        { name: "Other", count: counts["Other"] || 0, icon: categoryIcons["Other"] },
    ];

    const displayedCategories = showAllCategories ? categories : categories.slice(0, 6);

    return (
        <aside className="w-full flex-shrink-0 md:w-56">
            <div>
                <Link
                    href="/presets/new"
                    className="mb-7 flex h-10 w-full items-center justify-center gap-2 rounded-[10px] bg-white px-3 text-[10px] font-bold uppercase tracking-[0.13em] text-black transition hover:bg-white/88"
                >
                    <MaterialIcon name="add" className="text-[18px]" />
                    <span>Submit preset</span>
                </Link>

                <h3 className="mb-3 px-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/28">Filter by category</h3>
                <div className="space-y-1">
                    {displayedCategories.map((category) => {
                        const isActive = category.name === currentCategory;
                        return (
                            <Link
                                key={category.name}
                                href={getCategoryHref(category.name)}
                                scroll={false}
                                className={clsx(
                                    "flex min-h-9 w-full items-center justify-between rounded-[9px] px-2.5 text-[12px] transition-colors",
                                    isActive
                                        ? "bg-white/[0.075] text-white font-medium"
                                        : "text-white/45 hover:text-white hover:bg-white/[0.04]"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <MaterialIcon name={category.icon} className="text-base" aria-hidden="true" />
                                    <span>{category.name}</span>
                                </div>
                                <span className="rounded-[6px] bg-black/30 px-1.5 py-0.5 font-mono text-[9px] text-white/28">{category.count}</span>
                            </Link>
                        );
                    })}
                    {categories.length > 6 && (
                        <button
                            onClick={() => setShowAllCategories(!showAllCategories)}
                            className="mt-2 flex w-full items-center justify-center px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/32 transition hover:text-white"
                        >
                            {showAllCategories ? "Show Less" : "Show More"}
                            <MaterialIcon name={showAllCategories ? "expand_less" : "expand_more"} className="text-base ml-1" aria-hidden="true" />
                        </button>
                    )}
                </div>
            </div>
        </aside>
    );
}
