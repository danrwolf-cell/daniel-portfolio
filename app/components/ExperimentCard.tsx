import Image from "next/image";
import type { ExperimentFrontmatter } from "@/lib/types";

type ExperimentCardProps = {
  experiment: ExperimentFrontmatter;
};

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <a
      href={experiment.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden border border-border bg-surface transition-colors hover:border-muted md:flex-row"
    >
      {experiment.thumb ? (
        <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-border/20 md:aspect-auto md:w-52 md:min-h-[160px]">
          <Image
            src={experiment.thumb}
            alt=""
            fill
            unoptimized={experiment.thumb.endsWith(".svg")}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 208px"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted">
          {experiment.year}
        </p>
        <h3 className="font-display mt-2 text-xl font-medium tracking-[-0.02em] text-foreground group-hover:underline group-hover:decoration-border group-hover:underline-offset-4">
          {experiment.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          {experiment.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {experiment.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
