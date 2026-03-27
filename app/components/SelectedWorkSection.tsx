import Link from "next/link";
import { CaseStudyCard } from "@/app/components/CaseStudyCard";
import type { CaseStudyFrontmatter } from "@/lib/types";

type SelectedWorkSectionProps = {
  studies: CaseStudyFrontmatter[];
};

export function SelectedWorkSection({ studies }: SelectedWorkSectionProps) {
  return (
    <>
      <div className="flex w-full flex-nowrap items-start justify-between gap-0">
        <h2 className="w-fit font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground">
          Selected work
        </h2>
        <Link
          href="/work"
          className="shrink-0 text-[11px] font-medium uppercase tracking-[0.28em] text-muted transition-opacity hover:opacity-100"
        >
          View all
        </Link>
      </div>
      <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-20 lg:gap-x-14">
        {studies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </>
  );
}
