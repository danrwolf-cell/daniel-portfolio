import Link from "next/link";
import { SizzleReel } from "@/app/components/SizzleReel";
import { SelectedWorkSection } from "@/app/components/SelectedWorkSection";
import { capabilities, site } from "@/lib/site";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export default function Home() {
  const featured = getFeaturedCaseStudies();

  return (
    <>
      <SizzleReel />

      <section className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 md:px-10 md:pb-28 md:pt-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
          Studio
        </p>
        <h1 className="font-display mt-8 max-w-[18ch] text-[clamp(2.5rem,6vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.03em] text-foreground">
          New ideas and defining experiences.
        </h1>
        <p className="mt-10 max-w-2xl text-[17px] leading-[1.65] text-muted md:text-lg">
          {site.name} is a designer centered on strategy-led visuals and
          interfaces that hold up in the real world — product, identity, and
          digital. Recent work includes case studies in health, campaigns, and
          systems.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SelectedWorkSection studies={featured} />
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground">
                A holistic approach
              </h2>
            </div>
            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
                Capabilities
              </h3>
              <ul className="mt-8 space-y-4">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="border-b border-border pb-4 font-display text-lg font-medium tracking-[-0.02em] text-foreground last:border-0 last:pb-0"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 px-5 py-20 md:flex-row md:items-end md:px-10 md:py-24">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-medium tracking-[-0.03em] text-foreground">
              Experiments
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Prototypes, tools, and side quests — a lab for ideas that might
              graduate into client work.
            </p>
          </div>
          <Link
            href="/experiments"
            className="inline-flex shrink-0 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground"
          >
            View experiments
          </Link>
        </div>
      </section>
    </>
  );
}
