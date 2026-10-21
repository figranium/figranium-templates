import { formatTemplateType } from "@/lib/utils";
import { query } from "@/lib/db";
import { notFound } from "next/navigation";
import TablerIcon from "@/components/TablerIcon";
import DownloadButton from "@/components/DownloadButton";
import type { Metadata } from "next";
import CodeBlock from "@/components/CodeBlock";
import { PresetAuthor } from "@/components/PresetAuthor";
import { getCurrentUser } from "@/lib/current-user";
import { MarkdownContent } from "@/components/MarkdownContent";
import Link from "next/link";
import TaskEmbed from "@/components/TaskEmbed";

export const dynamic = 'force-dynamic';

interface PageProps {
    params: Promise<{ id: string }>;
    searchParams?: Promise<{ tab?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const { rows } = await query('SELECT title FROM presets WHERE id = $1', [id]);
    if (rows.length === 0) return { title: "Template Not Found" };
    return { title: rows[0].title };
}
async function getPreset(id: string) {
    const { rows } = await query('SELECT * FROM presets WHERE id = $1', [id]);
    if (rows.length === 0) return null;
    return rows[0];
}

function getVariableDetails(variable: any) {
    if (variable !== null && typeof variable === 'object') {
        const type = variable.type || 'string';
        const value = variable.value !== undefined && variable.value !== null ? String(variable.value) : 'No default value';
        return { type, value };
    }
    const type = variable === null ? 'string' : typeof variable;
    const value = variable !== undefined && variable !== null ? String(variable) : 'No default value';
    return { type, value };
}

function formatSettingName(name: string) {
    return name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/^./, (letter) => letter.toUpperCase());
}

function renderTemplatedUrl(url: string | null | undefined) {
    const value = url || "N/A";
    return value.split(/(\{\$[\w.]+\})/g).map((part, index) =>
        /^\{\$[\w.]+\}$/.test(part) ? (
            <span key={index} className="rounded-[3px] bg-blue-400/15 px-0.5 font-mono font-medium text-[#60a5fa]">
                {part}
            </span>
        ) : part
    );
}

export default async function ViewPresetPage({ params, searchParams }: PageProps) {
    const { id } = await params;
    const requestedTab = (await searchParams)?.tab;
    const normalizedTab = requestedTab === "steps" ? "task" : requestedTab;
    const activeTab = (["readme", "task", "inputs", "output"].includes(normalizedTab || "") ? normalizedTab : "readme") as "readme" | "task" | "inputs" | "output";
    const preset = await getPreset(id);

    if (!preset) {
        notFound();
    }

    const isAuthenticated = !!(await getCurrentUser());

    const deepRedactVersions = (obj: any) => {
        if (!obj || typeof obj !== 'object') return;
        if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                deepRedactVersions(obj[i]);
            }
        } else {
            if ('versions' in obj) {
                obj.versions = [];
            }
            for (const key of Object.keys(obj)) {
                deepRedactVersions(obj[key]);
            }
        }
    };

    let config: any = {};
    try {
        if (typeof preset.configuration === 'string') {
            config = JSON.parse(preset.configuration);
        } else if (typeof preset.configuration === 'object') {
            config = preset.configuration;
        }

        deepRedactVersions(config);
    } catch { }

    const renderExpectedOutput = (output: string) => {
        const trimmed = output.trim();
        
        // Check if it's JSON that looks like tabular data (array of arrays or array of objects)
        if ((trimmed.startsWith('{') || trimmed.startsWith('[')) && (trimmed.includes(',') || trimmed.includes('\n'))) {
            try {
                const parsed = JSON.parse(trimmed);
                
                // Check if it's an array of arrays (e.g., [[header1, header2], [row1col1, row1col2], ...])
                if (Array.isArray(parsed) && parsed.length > 0 && Array.isArray(parsed[0])) {
                    const headers = parsed[0];
                    const rows = parsed.slice(1);
                    
                    return (
                        <div className="mt-2 overflow-x-auto border border-[#dce3ed] rounded-lg">
                            <table className="w-full text-left text-xs text-muted-foreground min-w-max wrap-break-word">
                                <thead className="bg-[#f4f6f9] text-foreground border-b border-[#dce3ed]">
                                    <tr>
                                        {headers.map((h: any, i: number) => (
                                            <th key={i} className="px-4 py-3 font-medium border-r border-[#dce3ed]/50 last:border-0 min-w-[150px] max-w-[300px] whitespace-normal">
                                                {String(h)}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row: any, i: number) => (
                                        <tr key={i} className="border-b border-[#dce3ed] last:border-0 hover:bg-[#f4f6f9]/50 transition-colors">
                                            {row.map((cell: any, j: number) => (
                                                <td key={j} className="px-4 py-3 border-r border-[#dce3ed]/50 last:border-0 align-top min-w-[150px] max-w-[300px] whitespace-normal break-words">
                                                    <div className="line-clamp-3" title={String(cell)}>
                                                        {String(cell)}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    );
                }
                
                // Check if it's an array of objects (e.g., [{col1: val1, col2: val2}, ...])
                if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'object' && !Array.isArray(parsed[0])) {
                    const headers = Object.keys(parsed[0]);
                    const rows = parsed;
                    
                    return (
                        <div className="mt-2 overflow-x-auto border border-[#dce3ed] rounded-lg">
                            <table className="w-full text-left text-xs text-muted-foreground min-w-max wrap-break-word">
                                <thead className="bg-[#f4f6f9] text-foreground border-b border-[#dce3ed]">
                                    <tr>
                                        {headers.map((h, i) => (
                                            <th key={i} className="px-4 py-3 font-medium border-r border-[#dce3ed]/50 last:border-0 min-w-[150px] max-w-[300px] whitespace-normal">
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row: any, i: number) => (
                                        <tr key={i} className="border-b border-[#dce3ed] last:border-0 hover:bg-[#f4f6f9]/50 transition-colors">
                                            {headers.map((header, j) => (
                                                <td key={j} className="px-4 py-3 border-r border-[#dce3ed]/50 last:border-0 align-top min-w-[150px] max-w-[300px] whitespace-normal break-words">
                                                    <div className="line-clamp-3" title={String(row[header])}>
                                                        {String(row[header] ?? '')}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    );
                }
            } catch {
                // If JSON parsing fails, fall through to other renderers
            }
        }
        
        // If not tabular JSON, render as code block
        if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
            return (
                <div className="bg-[#1e1e1e] border border-[#dce3ed] rounded-lg relative group overflow-hidden mt-2">
                    <div className="pl-1">
                        <CodeBlock code={trimmed} language="json" />
                    </div>
                </div>
            );
        } else if (trimmed.startsWith('<') && trimmed.includes('>')) {
            return (
                <div className="bg-[#1e1e1e] border border-[#dce3ed] rounded-lg relative group overflow-hidden mt-2">
                    <div className="pl-1">
                        <CodeBlock code={trimmed} language="html" />
                    </div>
                </div>
            );
        } else if (trimmed.includes(',') && trimmed.includes('\n')) {
            // Better CSV parser that handles newlines inside quotes
            const parseCSV = (text: string) => {
                const rows: string[][] = [];
                let currentRow: string[] = [];
                let currentCell = '';
                let inQuotes = false;

                for (let i = 0; i < text.length; i++) {
                    const char = text[i];
                    const nextChar = text[i + 1];

                    if (char === '"' && inQuotes && nextChar === '"') {
                        currentCell += '"';
                        i++; // skip escaped quote
                    } else if (char === '"') {
                        inQuotes = !inQuotes;
                    } else if (char === ',' && !inQuotes) {
                        currentRow.push(currentCell);
                        currentCell = '';
                    } else if (char === '\n' && !inQuotes) {
                        // End of row
                        currentRow.push(currentCell);
                        // Only add row if it has content
                        if (currentRow.some(c => c.trim() !== '')) {
                            rows.push(currentRow.map(s => s.trim()));
                        }
                        currentRow = [];
                        currentCell = '';
                    } else {
                        currentCell += char;
                    }
                }

                // Push the last cell/row
                currentRow.push(currentCell);
                if (currentRow.some(c => c.trim() !== '')) {
                    rows.push(currentRow.map(s => s.trim()));
                }

                return rows;
            };

            const parsedRows = parseCSV(trimmed);
            let isLikelyCSV = false;
            let expectedCols = 0;

            const colCounts = parsedRows.map(r => r.length);
            const maxCols = Math.max(...colCounts, 0);

            if (maxCols > 1 && parsedRows.length > 1) {
                const countFreq: Record<number, number> = {};
                for (const c of colCounts) {
                    countFreq[c] = (countFreq[c] || 0) + 1;
                }

                let mostCommonCols = 0;
                let maxFreq = 0;
                for (const [colsStr, freq] of Object.entries(countFreq)) {
                    const cols = parseInt(colsStr);
                    if (cols > 1 && freq > maxFreq) {
                        mostCommonCols = cols;
                        maxFreq = freq;
                    }
                }

                if (mostCommonCols > 1 && maxFreq >= parsedRows.length * 0.5) {
                    expectedCols = mostCommonCols;

                    let totalLen = 0;
                    let cells = 0;
                    for (const r of parsedRows) {
                        if (r.length === expectedCols) {
                            for (const cell of r) {
                                totalLen += cell.length;
                                cells++;
                            }
                        }
                    }
                    const avgLen = cells > 0 ? totalLen / cells : 0;
                    // Relax the average length check if there are 3+ columns making it extremely structured
                    if (avgLen < 150 || expectedCols >= 3) {
                        isLikelyCSV = true;
                    }
                }
            }

            if (isLikelyCSV) {
                let headers = parsedRows[0];
                if (headers.length < expectedCols) {
                    headers = [...headers, ...Array(expectedCols - headers.length).fill('')];
                } else if (headers.length > expectedCols) {
                    headers = headers.slice(0, expectedCols);
                }

                const dataRows = parsedRows.slice(1).map(r => {
                    if (r.length < expectedCols) {
                        return [...r, ...Array(expectedCols - r.length).fill('')];
                    } else if (r.length > expectedCols) {
                        return r.slice(0, expectedCols);
                    }
                    return r;
                });

                return (
                    <div className="mt-2 overflow-x-auto border border-[#dce3ed] rounded-lg">
                        <table className="w-full text-left text-xs text-muted-foreground min-w-max wrap-break-word">
                            <thead className="bg-[#f4f6f9] text-foreground border-b border-[#dce3ed]">
                                <tr>
                                    {headers.map((h, i) => (
                                        <th key={i} className="px-4 py-3 font-medium border-r border-[#dce3ed]/50 last:border-0 min-w-[150px] max-w-[300px] whitespace-normal">
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {dataRows.map((row, i) => (
                                    <tr key={i} className="border-b border-[#dce3ed] last:border-0 hover:bg-[#f4f6f9]/50 transition-colors">
                                        {row.map((cell, j) => (
                                            <td key={j} className="px-4 py-3 border-r border-[#dce3ed]/50 last:border-0 align-top min-w-[150px] max-w-[300px] whitespace-normal break-words">
                                                <div className="line-clamp-3" title={cell}>
                                                    {cell}
                                                </div>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            }
        }

        return <p className="text-muted-foreground mt-2 whitespace-pre-wrap font-mono text-sm bg-[#f4f6f9] p-4 rounded-lg border border-[#dce3ed]">{trimmed}</p>;
    };

    return (
        <div className="flex flex-col items-center px-5 py-9 sm:px-8 lg:px-10 lg:py-11">
            <div className="w-full max-w-[1180px] space-y-8">
                {/* Header Section */}
                <div className="product-panel flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center md:p-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[14px] border border-slate-200 bg-slate-100">
                                {preset.icon && preset.icon.startsWith("data:image/") ? (
                                    <img src={preset.icon} className="w-16 h-16 object-cover rounded-lg" alt="Icon" />
                                ) : preset.icon && preset.icon.includes(".") ? (
                                    <img src={`https://www.google.com/s2/favicons?domain=${preset.icon}&sz=64`} className="w-12 h-12 object-contain" alt="Icon" />
                                ) : preset.icon ? (
                                    <TablerIcon name={preset.icon} className="text-5xl text-foreground" />
                                ) : preset.target_url ? (
                                    <img src={`https://www.google.com/s2/favicons?domain=${preset.target_url}&sz=64`} className="w-12 h-12 object-contain" alt="Icon" />
                                ) : (
                                    <TablerIcon name="extension" className="text-5xl text-muted-foreground" />
                                )}
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900">{preset.title}</h1>
                                <PresetAuthor username={preset.author_name || "Unknown"} adminUsername={process.env.ADMIN_USERNAME} />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2.5 py-1 rounded text-xs border border-[#dce3ed] bg-[#f4f6f9] text-foreground">
                                {formatTemplateType(preset.type)}
                            </span>
                            <span className="px-2.5 py-1 rounded text-xs border border-[#dce3ed] bg-[#f4f6f9] text-muted-foreground">
                                {preset.category || "General"}
                            </span>
                        </div>
                    </div>

                </div>

                <nav className="flex overflow-x-auto border-b border-[#dce3ed]" aria-label="Template sections">
                    {[
                        { id: "readme", label: "README", icon: "menu_book" },
                        { id: "task", label: "Task", icon: "account_tree" },
                        { id: "inputs", label: "Inputs", icon: "data_object" },
                        { id: "output", label: "Expected Output", icon: "output" },
                    ].map((tab) => (
                        <Link
                            key={tab.id}
                            href={`/presets/${id}?tab=${tab.id}`}
                            aria-current={activeTab === tab.id ? "page" : undefined}
                            className={`relative flex shrink-0 items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                                activeTab === tab.id ? "text-blue-700" : "text-muted-foreground hover:text-slate-900"
                            }`}
                        >
                            <TablerIcon name={tab.icon} className="text-[18px]" />
                            {tab.label}
                            {activeTab === tab.id && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600" />}
                        </Link>
                    ))}
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {activeTab === "readme" && (
                            <section>
                                <div className="rounded-xl border border-[#dce3ed] bg-[#ffffff] p-6">
                                    {preset.readme ? (
                                        <MarkdownContent>{preset.readme}</MarkdownContent>
                                    ) : (
                                        <div className="space-y-3">
                                            <h2 className="text-lg font-bold">Overview</h2>
                                            <p className="leading-relaxed text-muted-foreground whitespace-pre-wrap">{preset.description}</p>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}

                        {activeTab === "inputs" && (<>
                        {config.variables && Object.keys(config.variables).length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900">
                                    <TablerIcon name="data_object" className="text-muted-foreground" />
                                    Variables
                                </h2>
                                <p className="-mt-2 mb-4 text-sm text-muted-foreground">Values used when this template runs.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(config.variables).map(([key, variable]: [string, any]) => {
                                        const { type, value } = getVariableDetails(variable);
                                        return (
                                            <div key={key} className="min-w-0 rounded-xl border border-border bg-white p-5">
                                                <div className="flex items-center justify-between gap-3">
                                                    <h3 className="min-w-0 break-all text-sm font-bold text-foreground">{key}</h3>
                                                    <span className="shrink-0 rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground capitalize">{type}</span>
                                                </div>
                                                <p className="mt-4 text-xs text-muted-foreground">Default value</p>
                                                <p className="mt-1 break-words text-sm leading-relaxed text-foreground">{value}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        )}

                        {config.selector && (
                            <section>
                                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <TablerIcon name="my_location" className="text-muted-foreground" />
                                    Target Selector
                                </h2>
                                <div className="rounded-xl border border-border bg-white p-5">
                                        <code className="break-all text-sm text-foreground font-mono">
                                            {config.selector}
                                        </code>
                                </div>
                            </section>
                        )}

                        {/* Behavior & Execution Config */}
                        {(
                            config.wait !== undefined ||
                            config.rotateUserAgents !== undefined ||
                            config.rotateProxies !== undefined ||
                            config.rotateViewport !== undefined ||
                            config.humanTyping !== undefined ||
                            config.includeShadowDom !== undefined ||
                            config.disableRecording !== undefined ||
                            config.statelessExecution !== undefined ||
                            config.stealth
                        ) && (
                                <section>
                                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                        <TablerIcon name="settings" className="text-muted-foreground" />
                                        Behavior & action settings
                                    </h2>
                                    <div className="rounded-xl border border-border bg-white p-5 sm:p-6">
                                        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                                            {[
                                                { key: 'wait', label: 'Wait time (ms)' },
                                                { key: 'rotateUserAgents', label: 'Rotate user agents' },
                                                { key: 'rotateProxies', label: 'Rotate proxies' },
                                                { key: 'rotateViewport', label: 'Rotate viewport' },
                                                { key: 'humanTyping', label: 'Human typing' },
                                                { key: 'includeShadowDom', label: 'Shadow DOM' },
                                                { key: 'disableRecording', label: 'Disable recording' },
                                                { key: 'statelessExecution', label: 'Stateless execution' }
                                            ].map((cfg) => {
                                                if (config[cfg.key] === undefined) return null;
                                                const val = config[cfg.key];
                                                return (
                                                    <div key={cfg.key} className="flex min-w-0 items-center justify-between gap-4 border-b border-border py-3 text-sm">
                                                        <span className="text-muted-foreground">{cfg.label}</span>
                                                        <span className={`shrink-0 rounded-md px-2.5 py-1 text-xs font-medium ${val === true ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'}`}>
                                                            {typeof val === 'boolean' ? (val ? 'Enabled' : 'Disabled') : String(val)}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {config.stealth && Object.keys(config.stealth).length > 0 && (
                                            <div className="mt-6 pt-6 border-t border-[#dce3ed]">
                                                <h3 className="text-sm font-semibold text-foreground mb-4">Stealth features</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {Object.entries(config.stealth).map(([key, value]) => {
                                                        const isTrue = value === true;
                                                        return (
                                                            <div key={key} className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-xs ${isTrue ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'}`}>
                                                                <span>{formatSettingName(key)}</span>
                                                                <span className="font-semibold">{typeof value === 'boolean' ? (isTrue ? 'On' : 'Off') : String(value)}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                        {!config.selector && (!config.variables || Object.keys(config.variables).length === 0) && !(
                            config.wait !== undefined || config.rotateUserAgents !== undefined || config.rotateProxies !== undefined ||
                            config.rotateViewport !== undefined || config.humanTyping !== undefined || config.includeShadowDom !== undefined ||
                            config.disableRecording !== undefined || config.statelessExecution !== undefined || config.stealth
                        ) && (
                            <div className="rounded-xl border border-dashed border-[#dce3ed] p-8 text-center text-muted-foreground">
                                No configurable inputs were defined for this template.
                            </div>
                        )}
                        </>)}

                        {activeTab === "task" && (
                            <TaskEmbed task={config} />
                        )}

                        {activeTab === "output" && (
                            <section>
                                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <TablerIcon name="output" className="text-muted-foreground" />
                                    Expected Output
                                </h2>
                                {preset.expected_output ? renderExpectedOutput(preset.expected_output) : (
                                    <div className="rounded-xl border border-dashed border-[#dce3ed] p-8 text-center text-muted-foreground">
                                        No expected output example was provided.
                                    </div>
                                )}
                            </section>
                        )}
                    </div>

                    {/* Sidebar: Metadata */}
                    <div className="space-y-6">
                        <div className="bg-[#ffffff] border border-[#dce3ed] rounded-xl p-6 space-y-4">
                            <h3 className="font-bold text-sm text-muted-foreground mb-2">Template Details</h3>

                            <div>
                                <p className="text-xs text-muted-foreground mb-1">Target URL</p>
                                <p className="block break-all text-sm leading-relaxed text-slate-600">
                                    {renderTemplatedUrl(preset.target_url)}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground mb-1">Created</p>
                                <p className="text-sm text-foreground">{new Date(preset.created_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div className="bg-[#ffffff] border border-[#dce3ed] rounded-xl p-6">
                            <h3 className="font-bold text-sm text-muted-foreground mb-4">Configuration</h3>
                            <DownloadButton
                                presetId={id}
                                presetTitle={preset.title}
                                configJson={isAuthenticated ? JSON.stringify(config, null, 2) : ""}
                                isAuthenticated={isAuthenticated}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
