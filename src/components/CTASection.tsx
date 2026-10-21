import Link from "next/link";
import TablerIcon from "@/components/TablerIcon";
export function CTASection() {
    return <section className="catalog-cta"><div><h2>Have an automation to share?</h2><p>Build with Figranium and help the community get started faster.</p></div><Link href="/auth/signin" className="brand-button">Share a template <TablerIcon name="arrow_forward" /></Link></section>;
}
