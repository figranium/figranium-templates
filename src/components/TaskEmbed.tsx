"use client";

import { useEffect, useRef } from "react";
import { mountFigraniumEmbed } from "@/vendor/figranium-embed/index.js";

interface TaskEmbedProps {
    task: any;
}

const EMBED_SCALE = 0.62;

export default function TaskEmbed({ task }: TaskEmbedProps) {
    const hostRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const host = hostRef.current;
        if (!host) return;

        // Templates may store either a bare task or a full Figranium export.
        // Embed expects a single task, so unwrap export-shaped configs here.
        const embedTask = Array.isArray(task?.tasks) && task.tasks.length > 0
            ? task.tasks[0]
            : task;

        const embed = mountFigraniumEmbed(host, {
            task: embedTask,
            height: 640,
            title: "Figranium task",
            autoResize: true,
        });

        const iframe = embed.iframe;
        iframe.style.width = `${100 / EMBED_SCALE}%`;
        iframe.style.transform = `scale(${EMBED_SCALE})`;
        iframe.style.transformOrigin = "top left";

        const syncHeight = () => {
            const iframeHeight = Number.parseFloat(iframe.style.height);
            if (Number.isFinite(iframeHeight)) {
                host.style.height = `${iframeHeight * EMBED_SCALE}px`;
            }
        };

        syncHeight();
        const observer = new MutationObserver(syncHeight);
        observer.observe(iframe, { attributes: true, attributeFilter: ["style"] });

        return () => {
            observer.disconnect();
            embed.destroy();
        };
    }, [task]);

    return (
        <div className="overflow-hidden rounded-xl border border-[#262626] bg-[#0a0a0a]">
            <div ref={hostRef} className="w-full overflow-hidden" />
        </div>
    );
}
