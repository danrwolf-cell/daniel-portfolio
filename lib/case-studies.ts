import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { CaseStudyFrontmatter } from "@/lib/types";
import { mdxComponents } from "@/lib/mdx-components";

const CASE_DIR = path.join(process.cwd(), "content/case-studies");

function listMdxFiles(): string[] {
  if (!fs.existsSync(CASE_DIR)) return [];
  return fs
    .readdirSync(CASE_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .sort();
}

export function getAllCaseStudyMeta(): CaseStudyFrontmatter[] {
  return listMdxFiles()
    .map((file) => {
      const raw = fs.readFileSync(path.join(CASE_DIR, file), "utf8");
      const { data } = matter(raw);
      return data as CaseStudyFrontmatter;
    })
    .sort((a, b) => b.year.localeCompare(a.year));
}

export function getMarqueeTags(): string[] {
  const tags = new Set<string>();
  for (const c of getAllCaseStudyMeta()) {
    for (const t of c.tags ?? []) tags.add(t);
  }
  const list = [...tags];
  if (list.length === 0) {
    return [
      "Creative direction",
      "Strategy",
      "Product design",
      "Visual identity",
      "Motion",
    ];
  }
  return list;
}

export function getCaseStudySlugs(): string[] {
  return getAllCaseStudyMeta().map((c) => c.slug);
}

export function getFeaturedCaseStudies(): CaseStudyFrontmatter[] {
  const all = getAllCaseStudyMeta();
  const featured = all.filter((c) => c.featured);
  if (featured.length > 0) return featured;
  return all.slice(0, 3);
}

export async function getCaseStudyBySlug(slug: string) {
  const file = listMdxFiles().find((f) => {
    const raw = fs.readFileSync(path.join(CASE_DIR, f), "utf8");
    const { data } = matter(raw);
    return (data as CaseStudyFrontmatter).slug === slug;
  });
  if (!file) return null;

  const raw = fs.readFileSync(path.join(CASE_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as CaseStudyFrontmatter;

  const { content: mdxContent } = await compileMDX({
    source: content,
    components: mdxComponents,
  });

  return { frontmatter, content: mdxContent };
}
