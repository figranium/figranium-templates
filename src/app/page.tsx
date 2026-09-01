import { Hero } from "@/components/Hero";
import { PresetGrid } from "@/components/PresetGrid";
import { CTASection } from "@/components/CTASection";
import { getPresets } from "@/lib/presets";
import { getCurrentUser } from "@/lib/current-user";

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: { searchParams: Promise<{ category?: string, sort?: string, search?: string }> }) {
  const { category, sort, search } = await searchParams;
  const { presets } = await getPresets(category, sort, search);
  const isLoggedIn = !!(await getCurrentUser());

  return (
    <div className="font-sans text-foreground">
      <div>
        <Hero isLoggedIn={isLoggedIn} />

        <div className="mx-auto max-w-[1320px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <PresetGrid presets={presets} adminUsername={process.env.ADMIN_USERNAME} />
        </div>

        {!isLoggedIn && <CTASection />}
      </div>
    </div>
  );
}
