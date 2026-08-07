import Link from "next/link";
import GithubStarPill from "@/components/GithubStarPill";
import { cookies } from "next/headers";
import { SignOutButton } from "./SignOutButton";
import { MobileMenu } from "./MobileMenu";
import { verifyToken } from "@/lib/auth";
import { query } from "@/lib/db";

export async function Navbar() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const isLoggedIn = !!token;

    let isAdmin = false;
    let username: string | null = null;
    let displayName: string | null = null;
    
    if (token) {
        const payload = await verifyToken(token);
        username = payload?.username || null;
        
        // Check if user is admin via environment variable or database role
        if (process.env.ADMIN_USERNAME && payload?.username === process.env.ADMIN_USERNAME) {
            isAdmin = true;
        } else {
            // Check database for admin role
            try {
                const { rows } = await query('SELECT role, display_name FROM users WHERE username = $1', [payload?.username]);
                if (rows.length > 0 && rows[0].role === 'admin') {
                    isAdmin = true;
                }
                displayName = rows[0]?.display_name || null;
            } catch { /* ignore */ }
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
            <div className="mx-auto px-8 sm:px-16 lg:px-24 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center shrink-0">
                    <img src="/logo.svg" alt="Figranium logo" width={216} height={48} className="w-auto h-[48px]" />
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/60">
                    <a href="https://figranium.dev/docs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Docs
                    </a>
                    <a href="https://figranium.dev/blog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Blog
                    </a>
                    <a href="https://figranium.dev/releases" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Releases
                    </a>
                </nav>

                <div className="hidden lg:flex items-center gap-4 shrink-0">
                    {isAdmin && (
                        <Link href="/admin" className="text-xs uppercase tracking-[0.2em] text-red-500 hover:text-red-400 transition-colors">
                            Admin
                        </Link>
                    )}
                    {isLoggedIn && (
                        <Link href="/dashboard" className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                            Dashboard
                        </Link>
                    )}
                    <GithubStarPill />
                    {isLoggedIn && (
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/60">
                                {displayName || username}
                            </span>
                            {isAdmin && (
                                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white" title="Verified Admin">
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </span>
                            )}
                        </div>
                    )}
                    {isLoggedIn ? (
                        <SignOutButton username={username} isAdmin={isAdmin} />
                    ) : (
                        <Link
                            href="/auth/signin"
                            className="text-xs uppercase tracking-[0.2em] text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-1.5 rounded-full transition-colors"
                        >
                            Sign In
                        </Link>
                    )}
                </div>

                {/* Mobile Menu (hamburger icon handles internal state) */}
                <div className="lg:hidden">
                    <MobileMenu isLoggedIn={isLoggedIn} isAdmin={isAdmin} signOutNode={<SignOutButton />} />
                </div>
            </div>
        </header>
    );
}