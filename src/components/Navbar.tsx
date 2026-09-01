import Link from "next/link";
import { cookies } from "next/headers";
import { SignOutButton } from "./SignOutButton";
import { MobileMenu } from "./MobileMenu";
import { verifyToken } from "@/lib/auth";
import { query } from "@/lib/db";
import { AppNavLink } from "@/components/AppNavLink";

export async function Navbar() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const isLoggedIn = !!token;

    let isAdmin = false;
    let username: string | null = null;
    let displayName: string | null = null;
    let profilePicture: string | null = null;
    
    if (token) {
        const payload = await verifyToken(token);
        username = payload?.username || null;
        
        isAdmin = !!(process.env.ADMIN_USERNAME && payload?.username === process.env.ADMIN_USERNAME);
        try {
            const { rows } = await query('SELECT role, display_name, profile_picture FROM users WHERE username = $1', [payload?.username]);
            if (rows[0]?.role === 'admin') isAdmin = true;
            displayName = rows[0]?.display_name || null;
            profilePicture = rows[0]?.profile_picture || null;
        } catch { /* retain token-derived identity */ }
    }

    const navItem = "flex min-h-10 items-center justify-center gap-0 rounded-[10px] px-0 text-[13px] text-white/58 transition-all hover:bg-white/[0.055] hover:text-white group-hover/sidebar:justify-start group-hover/sidebar:gap-3 group-hover/sidebar:px-3";
    const navLabel = "max-w-0 translate-x-1 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-200 group-hover/sidebar:max-w-[170px] group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100";

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-white/[0.075] bg-[#050505]/95 px-4 backdrop-blur-xl lg:hidden">
                <Link href="/" className="flex items-center gap-2.5">
                    <img src="/logo.svg" alt="Figranium Templates" width={150} height={36} className="h-9 w-auto" />
                </Link>
                <MobileMenu isLoggedIn={isLoggedIn} isAdmin={isAdmin} signOutNode={<SignOutButton username={username} displayName={displayName} profilePicture={profilePicture} isAdmin={isAdmin} />} />
            </header>

            <aside className="group/sidebar fixed inset-y-0 left-0 z-40 hidden w-[72px] flex-col overflow-hidden border-r border-white/[0.075] bg-[#050505] shadow-[12px_0_36px_rgba(0,0,0,0)] transition-[width,box-shadow] duration-300 ease-out hover:w-[248px] hover:shadow-[12px_0_36px_rgba(0,0,0,.28)] lg:flex">
                <div className="flex h-[72px] shrink-0 items-center border-b border-white/[0.075] p-3">
                    {isLoggedIn ? (
                        <SignOutButton username={username} displayName={displayName} profilePicture={profilePicture} isAdmin={isAdmin} sidebar />
                    ) : (
                        <Link href="/auth/signin" className="flex min-h-10 w-full items-center justify-center gap-0 rounded-[10px] bg-white px-0 text-[11px] font-bold uppercase tracking-[0.13em] text-black transition-all hover:bg-white/88 group-hover/sidebar:gap-2 group-hover/sidebar:px-4" title="Sign in">
                            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">login</span><span className={navLabel}>Sign in</span>
                        </Link>
                    )}
                </div>

                <nav className="flex-1 overflow-x-hidden overflow-y-auto px-3 py-5">
                    <p className="h-0 overflow-hidden whitespace-nowrap px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/28 opacity-0 transition-all duration-200 group-hover/sidebar:h-5 group-hover/sidebar:opacity-100">Workspace</p>
                    <div className="space-y-0.5">
                        <AppNavLink href="/" icon="explore">Preset Store</AppNavLink>
                        {isLoggedIn && <AppNavLink href="/dashboard" icon="dashboard">My presets</AppNavLink>}
                        {isLoggedIn && <AppNavLink href="/presets/new" icon="add_box">Create preset</AppNavLink>}
                        {isAdmin && <AppNavLink href="/admin" icon="admin_panel_settings">Administration</AppNavLink>}
                    </div>

                    <p className="mt-3 h-0 overflow-hidden whitespace-nowrap px-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/28 opacity-0 transition-all duration-200 group-hover/sidebar:mt-7 group-hover/sidebar:h-5 group-hover/sidebar:opacity-100">Resources</p>
                    <div className="space-y-0.5">
                        <a href="https://figranium.dev/docs" target="_blank" rel="noopener noreferrer" className={navItem} title="Documentation"><span className="material-symbols-outlined text-[19px]" aria-hidden="true">description</span><span className={navLabel}>Documentation</span></a>
                        <a href="https://figranium.dev/blog" target="_blank" rel="noopener noreferrer" className={navItem} title="Blog"><span className="material-symbols-outlined text-[19px]" aria-hidden="true">article</span><span className={navLabel}>Blog</span></a>
                        <a href="https://figranium.dev/releases" target="_blank" rel="noopener noreferrer" className={navItem} title="Releases"><span className="material-symbols-outlined text-[19px]" aria-hidden="true">rocket_launch</span><span className={navLabel}>Releases</span></a>
                    </div>
                </nav>

                <div className="flex h-[72px] shrink-0 items-center border-t border-white/[0.075] px-3">
                    <Link href="/" className="relative flex h-11 w-full items-center justify-center overflow-hidden" title="Figranium Templates">
                        <img src="/icon.svg" alt="" width={32} height={32} className="absolute h-8 w-8 opacity-100 transition-all duration-200 group-hover/sidebar:scale-90 group-hover/sidebar:opacity-0" />
                        <img src="/logo.svg" alt="Figranium Templates" width={166} height={40} className="absolute h-10 w-auto translate-x-2 opacity-0 transition-all duration-300 group-hover/sidebar:translate-x-0 group-hover/sidebar:opacity-100" />
                    </Link>
                </div>
            </aside>
        </>
    );
}
