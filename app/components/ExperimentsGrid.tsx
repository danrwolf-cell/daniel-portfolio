"use client";

import { useState } from "react";
import type { ExperimentFrontmatter } from "@/lib/types";
import { ExperimentCard } from "@/app/components/ExperimentCard";
import { ExperimentModal } from "@/app/components/ExperimentModal";

type ExperimentsGridProps = {
  experiments: ExperimentFrontmatter[];
};

export function ExperimentsGrid({ experiments }: ExperimentsGridProps) {
  const [activeExp, setActiveExp] = useState<ExperimentFrontmatter | null>(null);

  return (
    <>
      <div className="flex flex-col gap-6">
        {experiments.map((exp) => (
          <ExperimentCard
            key={exp.slug}
            experiment={exp}
            onOpenModal={exp.iframeSrc ? () => setActiveExp(exp) : undefined}
          />
        ))}
      </div>

      {activeExp?.iframeSrc && (
        <ExperimentModal
          src={activeExp.iframeSrc}
          title={activeExp.title}
          onClose={() => setActiveExp(null)}
        />
      )}
    </>
  );
}
