"use client";

import { useEffect, useRef } from "react";
import { mountFigraniumEmbed } from "@figranium/embed";

interface TaskEmbedProps {
    task: any;
}

export default function TaskEmbed({ task }: TaskEmbedProps) {
    const hostRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!hostRef.current) return;

        const embed = mountFigraniumEmbed(hostRef.current, {
            task,
            height: 640,
            title: "Figranium task",
            autoResize: true,
        });

        return () => embed.destroy();
    }, [task]);

    return (
        <div className="overflow-hidden rounded-xl border border-[#262626] bg-[#0a0a0a]">
            <div ref={hostRef} className="w-full" />
        </div>
    );
}
