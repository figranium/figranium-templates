import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";

export function CTASection() {
    return (
        <section className="mx-4 mb-10 mt-16 flex flex-col items-start justify-between gap-7 rounded-[18px] border border-white/[0.085] bg-[#080808] px-6 py-8 sm:mx-8 sm:flex-row sm:items-center sm:px-8 lg:mx-10">
            <div><p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/28">Build locally</p><h2 className="mb-3 text-2xl font-bold tracking-[-0.035em]">Can&apos;t find what you need?</h2>
            <p className="max-w-xl text-[13px] leading-6 text-white/42">
                Build your own automation task locally with our visual builder and share it with the world.
            </p></div>

            <div className="flex items-center gap-4">
                <Link
                    href="https://figranium.dev/docs"
                    className="flex h-11 items-center gap-2 rounded-[10px] bg-white px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-black transition hover:bg-white/88"
                >
                    Read Documentation
                    <MaterialIcon name="arrow_forward" className="text-sm" />
                </Link>
            </div>
        </section>
    );
}
