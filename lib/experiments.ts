import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ExperimentFrontmatter } from "@/lib/types";

const EXP_DIR = path.join(process.cwd(), "content/experiments");

export function getAllExperiments(): ExperimentFrontmatter[] {
  if (!fs.existsSync(EXP_DIR)) return [];
  return fs
    .readdirSync(EXP_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(EXP_DIR, file), "utf8");
      const { data } = matter(raw);
      return data as ExperimentFrontmatter;
    })
    .sort((a, b) => b.year.localeCompare(a.year));
}
