import type { Metadata } from "next";
import { ExperimentCard } from "@/app/components/ExperimentCard";
import { getAllExperiments } from "@/lib/experiments";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experiments",
  description: `Prototypes, tools, and experiments by ${site.name}.`,
  openGraph: {
    title: `Experiments · ${site.name}`,
    description: `Prototypes, tools, and experiments by ${site.name}.`,
  },
};

export default function ExperimentsPage() {
  const experiments = getAllExperiments();

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
        Lab
      </p>
      <h1 className="font-display mt-6 text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
        Experiments
      </h1>
      <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
        Smaller builds, technical play, and ideas that might graduate into
        product work.
      </p>
      <div className="mt-16 flex flex-col gap-6">
        {experiments.map((exp) => (
          <ExperimentCard key={exp.slug} experiment={exp} />
        ))}
      </div>
    </div>
  );
}
