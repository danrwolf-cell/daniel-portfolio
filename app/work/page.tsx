import type { Metadata } from "next";
import { CaseStudyCard } from "@/app/components/CaseStudyCard";
import { getAllCaseStudyMeta } from "@/lib/case-studies";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Case studies and selected projects by ${site.name}.`,
  openGraph: {
    title: `Work · ${site.name}`,
    description: `Case studies and selected projects by ${site.name}.`,
  },
};

export default function WorkPage() {
  const studies = getAllCaseStudyMeta();

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
        Portfolio
      </p>
      <h1 className="font-display mt-6 text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
        Work
      </h1>
      <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
        Product, campaigns, and systems — documented as case studies.
      </p>
      <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-20 lg:gap-x-14">
        {studies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </div>
  );
}
