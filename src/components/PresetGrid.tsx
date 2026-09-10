"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { PresetCard } from "./PresetCard";
import type { PresetProps } from "./PresetCard";
import MaterialIcon from "@/components/MaterialIcon";

interface PresetGridProps {
    presets: PresetProps[];
    adminUsername?: string;
}

function EmptyState() {
    const router = useRouter();

    return (
        <div
            className="flex min-h-[360px] w-full flex-col items-center justify-center rounded-[18px] border border-dashed border-white/[0.12] bg-[#050505] px-6 text-center"
            role="status"
            aria-live="polite"
        >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[14px] border border-white/[0.09] bg-white/[0.025]">
                <MaterialIcon name="search_off" className="text-2xl text-muted-foreground" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No templates found</h3>
            <p className="text-muted-foreground max-w-sm mb-6 text-sm">
                We couldn&apos;t find any templates matching your criteria. Try adjusting your filters or search terms.
            </p>
            <button
                onClick={() => router.push('/')}
                className="inline-flex h-10 items-center rounded-[10px] bg-white px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-black transition hover:bg-white/88"
            >
                Clear all filters
            </button>
        </div>
    );
}

export function PresetGrid({ presets, adminUsername }: PresetGridProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSort = searchParams.get("sort") || "popular";
    const currentPage = parseInt(searchParams.get("page") || "1", 10);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", newSort);
        router.push(`/?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="w-full">
            <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-white/30"><span className="text-white/70">{presets.length}</span> templates available</p>
                <div className="relative flex items-center gap-2 text-[11px] text-white/35">
                    <span className="hidden sm:inline">Sort</span>
                    <div className="group relative flex h-9 items-center gap-1 rounded-[9px] border border-white/[0.085] bg-black/30 px-3">
                        <select
                            value={currentSort}
                            onChange={handleSortChange}
                            className="z-10 cursor-pointer appearance-none bg-transparent pr-6 text-[11px] font-medium text-white outline-none"
                            aria-label="Sort templates"
                        >
                            <option value="newest" className="bg-[#121212] text-foreground">Newest</option>
                            <option value="popular" className="bg-[#121212] text-foreground">Popular</option>
                            <option value="oldest" className="bg-[#121212] text-foreground">Oldest</option>
                        </select>
                        <MaterialIcon name="expand_more" className="text-base absolute right-0 pointer-events-none group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                </div>
            </div>

            {presets.length > 0 ? (
                <>
                    <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                    {presets.map((preset) => (
                        <PresetCard key={preset.id} {...preset} adminUsername={adminUsername} />
                    ))}
                    </div>

                    {/* Pagination Controls match original design */}
                    <div className="flex justify-center items-center gap-2">
                        {currentPage > 1 && (
                            <button className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-white/[0.085] text-white/45 transition hover:bg-white/[0.05] hover:text-white" aria-label="Previous page">
                                <MaterialIcon name="chevron_left" className="text-[18px]" />
                            </button>
                        )}
                        <button className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-white text-xs font-bold text-black" aria-current="page">
                            {currentPage}
                        </button>
                        {/* ... other standard pagination buttons ... */}
                    </div>
                </>
            ) : (
                <EmptyState />
            )}
        </div>
    );
}
