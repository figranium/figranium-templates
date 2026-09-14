"use client";

import type { SVGProps } from "react";
import TablerIcon from "@/components/TablerIcon";

/**
 * Compatibility adapter for older components that still pass the historical
 * icon-name strings. All rendering is handled by TablerIcon; Material Symbols
 * are no longer loaded or rendered anywhere in the app.
 */
interface LegacyIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
    name: string;
    fill?: boolean;
}

export default function MaterialIcon({ name, fill: _fill, ...props }: LegacyIconProps) {
    return <TablerIcon name={name} {...props} />;
}
