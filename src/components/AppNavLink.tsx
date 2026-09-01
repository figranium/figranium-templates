"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MaterialIcon from "@/components/MaterialIcon";

interface AppNavLinkProps {
    href: string;
    icon: string;
    children: React.ReactNode;
    mobile?: boolean;
}

export function AppNavLink({ href, icon, children, mobile = false }: AppNavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            title={!mobile && typeof children === "string" ? children : undefined}
            className={clsx(
                "flex items-center rounded-[10px] transition-all hover:bg-white/[0.055] hover:text-white",
                mobile
                    ? "h-11 gap-3 px-3 text-[13px]"
                    : "min-h-10 justify-center gap-0 px-0 text-[13px] group-hover/sidebar:justify-start group-hover/sidebar:gap-3 group-hover/sidebar:px-3",
                isActive ? "bg-white/[0.07] text-white" : "text-white/58",
            )}
        >
            <MaterialIcon name={icon} className="text-[19px]" aria-hidden="true" />
            {mobile ? children : (
                <span className="max-w-0 translate-x-1 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-200 group-hover/sidebar:max-w-[170px] group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100">
                    {children}
                </span>
            )}
        </Link>
    );
}
