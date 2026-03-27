import type { MetadataRoute } from "next";
import { getCaseStudySlugs } from "@/lib/case-studies";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified },
    { url: `${base}/work`, lastModified },
    { url: `${base}/experiments`, lastModified },
    { url: `${base}/contact`, lastModified },
  ];

  const caseStudies = getCaseStudySlugs().map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...caseStudies];
}
