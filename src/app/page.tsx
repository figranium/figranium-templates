import { Hero } from "@/components/Hero";
import { PresetGrid } from "@/components/PresetGrid";
import { CTASection } from "@/components/CTASection";
import { getPresets } from "@/lib/presets";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export default async function Home({ searchParams }: { searchParams: Promise<{ category?: string, sort?: string, search?: string }> }) {
  const { category, sort, search } = await searchParams;
  const { presets } = await getPresets(category, sort, search);
  const token = (await cookies()).get("token")?.value;
  const isLoggedIn = token ? !!(await verifyToken(token)) : false;

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
