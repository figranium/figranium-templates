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
    author_username?: string;
    author_role?: string;
    target_url?: string;
    icon?: string;
}

export default function AdminDashboardPage() {
    const [presets, setPresets] = useState<Preset[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetchPresets();
    }, []);

    const fetchPresets = async () => {
        try {
            const res = await fetch("/api/admin/presets");
            if (res.status === 401 || res.status === 403) {
                router.push("/");
                return;
            }
            if (!res.ok) throw new Error("Failed to fetch templates");
            const data = await res.json();
            
            // Fetch author roles for all presets
            const presetsWithRoles = await Promise.all(
                data.map(async (preset: Preset) => {
                    if (preset.author_username) {
                        try {
                            const userRes = await fetch(`/api/auth/user?username=${encodeURIComponent(template.author_username)}`);
                            if (userRes.ok) {
                                const userData = await userRes.json();
                                return { ...preset, author_role: userData.role || 'user' };
                            }
                        } catch { /* ignore */ }
                    }
                    return preset;
                })
            );
            
            setPresets(presetsWithRoles);
        } catch (err) {
            setError("Could not load templates.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this template globally? This action cannot be undone.")) return;

        try {
            const res = await fetch(`/api/admin/presets/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Failed to delete");
            setPresets(presets.filter(p => p.id !== id));
        } catch (err) {
            alert("Error deleting template");
        }
    };

    if (loading) return <div className="flex min-h-[60vh] items-center justify-center gap-3 text-xs text-white/35"><MaterialIcon name="progress_activity" className="animate-spin text-[20px]" />Loading administration…</div>;

    return (
        <div className="px-5 py-9 sm:px-8 lg:px-10 lg:py-11">
            <div className="mx-auto max-w-[1320px]">
                <div className="mb-8 flex items-end justify-between">
                    <div><p className="page-kicker mb-3">Workspace / Administration</p><h1 className="flex items-center gap-3 text-3xl font-bold tracking-[-0.045em] text-white">
                        <MaterialIcon name="admin_panel_settings" className="text-[28px] text-red-400" />
                        Template administration
                    </h1><p className="mt-2 text-[13px] text-white/38">Review and moderate every template in the ecosystem.</p></div>
                </div>

                {error && <div className="text-red-500 mb-4">{error}</div>}

                <div className="product-panel overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#121212] border-b border-[#262626] text-xs uppercase text-muted-foreground">
                                <th className="p-4 font-medium">Author</th>
                                <th className="p-4 font-medium">Title & Icon</th>
                                <th className="p-4 font-medium">Type</th>
                                <th className="p-4 font-medium">Stats</th>
                                <th className="p-4 font-medium">Created</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {presets.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="p-8 text-center text-muted-foreground">
                                        No templates found on the entire platform.
                                    </td>
                                </tr>
                            ) : (
                                templates.map(template => (
                                    <tr key={preset.id} className="border-b border-[#262626] last:border-0 hover:bg-[#0f0f0f] transition-colors group">
                                        <td className="p-4">
                                            <span className="text-sm font-medium text-blue-400">
                                                @{preset.author_username || "Unknown"}
                                            </span>
                                        </td>
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
                                                <span className="font-medium truncate max-w-[200px]" title={preset.title}>{preset.title}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-xs px-2 py-1 rounded bg-[#171717] border border-[#262626] font-mono">
                                                {preset.type}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-muted-foreground">
                                            {preset.downloads || 0}
                                        </td>
                                        <td className="p-4 text-sm text-muted-foreground">
                                            {new Date(preset.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Link href={`/presets/${preset.id}/edit`}>
                                                    <button className="p-2 hover:bg-[#262626] rounded text-muted-foreground hover:text-foreground transition-colors" title="Edit globally">
                                                        <MaterialIcon name="edit" className="text-lg" />
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(template.id)}
                                                    className="p-2 hover:bg-red-900/20 rounded text-muted-foreground hover:text-red-500 transition-colors"
                                                    title="Delete globally"
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
