import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/[0.075] bg-[#050505] px-5 py-8 lg:ml-[72px] lg:px-10">
            <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <img src="/logo.svg" alt="Figranium Templates" width={150} height={36} className="h-9 w-auto opacity-70" />
                <nav className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white/32">
                    <Link href="https://figranium.dev/docs" className="hover:text-white">Docs</Link>
                    <Link href="https://figranium.dev/blog" className="hover:text-white">Blog</Link>
                    <Link href="https://github.com/figranium/figranium" className="hover:text-white">GitHub</Link>
                    <span>© 2026 Figranium</span>
                </nav>
            </div>
        </footer>
    );
}
