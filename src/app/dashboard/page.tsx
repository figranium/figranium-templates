"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MaterialIcon from "@/components/MaterialIcon";

interface Preset {
    id: string;
    title: string;
    type: string;
    created_at: string;
    downloads: number;
    target_url?: string;
    icon?: string;
}

export default function DashboardPage() {
    const [presets, setPresets] = useState<Preset[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetchPresets();
    }, []);

    const fetchPresets = async () => {
        try {
            const res = await fetch("/api/presets/mine");
            if (res.status === 401) {
                router.push("/auth/signin");
                return;
            }
            if (!res.ok) throw new Error("Failed to fetch templates");
            const data = await res.json();
            setPresets(data);
        } catch (err) {
            setError("Could not load your templates.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this template?")) return;

        try {
            const res = await fetch(`/api/presets/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Failed to delete");
            setPresets(presets.filter(p => p.id !== id));
        } catch (err) {
            alert("Error deleting template");
        }
    };

    if (loading) return <div className="flex min-h-[60vh] items-center justify-center gap-3 text-xs text-white/35"><MaterialIcon name="progress_activity" className="animate-spin text-[20px]" />Loading workspace…</div>;

    return (
        <div className="px-5 py-9 sm:px-8 lg:px-10 lg:py-11">
            <div className="mx-auto max-w-[1320px]">
                <div className="mb-8 flex items-end justify-between gap-5">
                    <div><p className="page-kicker mb-3">Workspace / My templates</p><h1 className="text-3xl font-bold tracking-[-0.045em]">Creator dashboard</h1><p className="mt-2 text-[13px] text-white/38">Manage, review, and publish your community automations.</p></div>
                    <Link href="/presets/new">
                        <button className="primary-action flex items-center gap-2 px-4 transition hover:bg-white/88">
                            <MaterialIcon name="add" className="text-lg" />
                            New Template
                        </button>
                    </Link>
                </div>

                {error && <div className="text-red-500 mb-4">{error}</div>}

                <div className="product-panel overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#121212] border-b border-[#262626] text-xs uppercase text-muted-foreground">
                                <th className="p-4 font-medium">Title</th>
                                <th className="p-4 font-medium">Type</th>
                                <th className="p-4 font-medium">Stats</th>
                                <th className="p-4 font-medium">Created</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {presets.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-muted-foreground">
                                        You haven't created any templates yet.
                                    </td>
                                </tr>
                            ) : (
                                templates.map(template => (
                                    <tr key={preset.id} className="border-b border-[#262626] last:border-0 hover:bg-[#0f0f0f] transition-colors group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-[#171717] flex items-center justify-center overflow-hidden border border-[#262626]">
                                                    {preset.icon?.startsWith("data:image/") ? (
                                                        <img src={preset.icon} className="w-8 h-8 object-cover" alt="" />
                                                    ) : template.icon && preset.icon.includes(".") ? (
                                                        <img src={`https://www.google.com/s2/favicons?domain=${template.icon}&sz=32`} className="w-5 h-5 object-contain" alt="" />
                                                    ) : template.icon ? (
                                                        <MaterialIcon name={preset.icon} className="text-lg text-foreground" />
                                                    ) : template.target_url ? (
                                                        <img src={`https://www.google.com/s2/favicons?domain=${template.target_url}&sz=32`} className="w-5 h-5 object-contain" alt="" />
                                                    ) : (
                                                        <MaterialIcon name="extension" className="text-lg text-muted-foreground" />
                                                    )}
                                                </div>
                                                <span className="font-medium">{preset.title}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-xs px-2 py-1 rounded bg-[#171717] border border-[#262626] font-mono">
                                                {preset.type}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-muted-foreground">
                                            {preset.downloads || 0} downloads
                                        </td>
                                        <td className="p-4 text-sm text-muted-foreground">
                                            {new Date(preset.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Link href={`/presets/${preset.id}/edit`}>
                                                    <button className="p-2 hover:bg-[#262626] rounded text-muted-foreground hover:text-foreground transition-colors" title="Edit">
                                                        <MaterialIcon name="edit" className="text-lg" />
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(template.id)}
                                                    className="p-2 hover:bg-red-900/20 rounded text-muted-foreground hover:text-red-500 transition-colors"
                                                    title="Delete"
                                                >
                                                    <MaterialIcon name="delete" className="text-lg" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
