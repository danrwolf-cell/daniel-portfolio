import Image from "next/image";
import Link from "next/link";
import type { CaseStudyFrontmatter } from "@/lib/types";

type CaseStudyCardProps = {
  study: CaseStudyFrontmatter;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block"
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-border/30">
        <Image
          src={study.coverImage}
          alt=""
          fill
          unoptimized={study.coverImage.endsWith(".svg")}
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="pt-6 md:pt-8">
        <h3 className="font-display text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-foreground md:text-[1.75rem] lg:text-3xl">
          {study.title}
        </h3>
        <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-muted md:text-base">
          {study.summary}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {(study.tags ?? []).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
