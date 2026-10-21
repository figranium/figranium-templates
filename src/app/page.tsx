import { Hero } from "@/components/Hero";
import { PresetGrid } from "@/components/PresetGrid";
import { CTASection } from "@/components/CTASection";
import { getPresets } from "@/lib/presets";
import { getCurrentUser } from "@/lib/current-user";

export const dynamic = 'force-dynamic';
export default async function Home({ searchParams }: { searchParams: Promise<{ category?: string; sort?: string; search?: string }> }) {
  const { category, sort, search } = await searchParams;
  const { presets, counts, error } = await getPresets(category, sort, search);
  const isLoggedIn = !!(await getCurrentUser());
  return <><Hero isLoggedIn={isLoggedIn} /><div className="catalog-page" id="templates"><PresetGrid presets={presets} counts={counts} error={error} adminUsername={process.env.ADMIN_USERNAME} />{!isLoggedIn && <CTASection />}</div></>;
}
