import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
} from "@/lib/case-studies";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCaseStudyBySlug(slug);
  if (!data) return { title: "Not found" };
  const { frontmatter: fm } = data;
  const title = fm.title;
  const description = fm.summary;
  const ogImage = fm.coverImage.startsWith("http")
    ? fm.coverImage
    : `${site.url}${fm.coverImage}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      type: "article",
      images: [{ url: ogImage, width: 1600, height: 1000, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const data = await getCaseStudyBySlug(slug);
  if (!data) notFound();

  const { frontmatter: fm, content } = data;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: fm.title,
    description: fm.summary,
    dateCreated: fm.year,
    author: { "@type": "Person", name: site.name, url: site.url },
    image: fm.coverImage.startsWith("http")
      ? fm.coverImage
      : `${site.url}${fm.coverImage}`,
  };

  return (
    <article className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <Link
          href="/work"
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted transition-colors hover:text-foreground"
        >
          ← Work
        </Link>
        <header className="mt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
            {fm.year} · {fm.role}
          </p>
          <h1 className="font-display mt-6 text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
            {fm.title}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">{fm.summary}</p>
          {(fm.tags?.length ?? 0) > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {(fm.tags ?? []).map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
          {fm.externalUrl ? (
            <a
              href={fm.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-[11px] font-medium uppercase tracking-[0.2em] text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground"
            >
              View live →
            </a>
          ) : null}
        </header>
      </div>
      <div className="relative mt-14 aspect-[16/10] w-full overflow-hidden bg-border/20 md:mt-20">
        <Image
          src={fm.coverImage}
          alt=""
          fill
          priority
          unoptimized={fm.coverImage.endsWith(".svg")}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
        />
      </div>
      <div className="prose-case-study mx-auto mt-16 max-w-3xl md:mt-20">
        {content}
      </div>
    </article>
  );
}
