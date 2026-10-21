import Link from "next/link";
import "./footer.css";

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer-inner">
                <div className="site-footer-top">
                    <a href="https://figranium.dev" className="footer-brand" aria-label="Figranium home">
                        <img src="/logo.svg" alt="Figranium" width={136} height={34} />
                    </a>
                    <nav className="footer-navigation" aria-label="Footer navigation">
                        <a href="https://figranium.dev/docs">Docs</a>
                        <a href="https://community.figranium.dev">Community</a>
                        <a href="https://figranium.dev/blog">Blog</a>
                        <a href="https://figranium.dev/releases">Releases</a>
                        <a href="https://figranium.dev/integrations">Integrations</a>
                        <Link href="/">Templates</Link>
                        <a href="https://figranium.dev/vs">Comparisons</a>
                    </nav>
                </div>
                <div className="site-footer-connect">
                    <div><h2>Stay up to date</h2><p>Get new blog posts and releases from Figranium.</p><a href="https://figranium.dev/blog">Visit the blog <span aria-hidden="true">→</span></a></div>
                    <nav className="footer-social" aria-label="Figranium social links">
                        <a href="https://discord.com/invite/kPmfbgu9Xn">Discord</a>
                        <a href="https://github.com/figranium/figranium">GitHub</a>
                        <a href="https://x.com/figranium">X</a>
                        <a href="https://www.youtube.com/@figranium">YouTube</a>
                        <a href="https://www.instagram.com/figranium">Instagram</a>
                    </nav>
                </div>
                <div className="site-footer-bottom">
                    <span>© {new Date().getFullYear()} Figranium</span>
                    <nav aria-label="Legal"><a href="https://figranium.dev/privacy">Privacy</a><a href="https://figranium.dev/terms">Terms</a></nav>
                </div>
            </div>
        </footer>
    );
}
