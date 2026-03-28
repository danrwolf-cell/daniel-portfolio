export type CaseStudyFrontmatter = {
  title: string;
  slug: string;
  year: string;
  role: string;
  summary: string;
  coverImage: string;
  tags: string[];
  /** Industry labels used for home “Selected work” filtering */
  industries?: string[];
  externalUrl?: string;
  featured?: boolean;
};

export type ExperimentFrontmatter = {
  title: string;
  slug: string;
  year: string;
  description: string;
  stack: string[];
  href: string;
  thumb?: string;
  /** If set, clicking the card opens this URL in a modal iframe instead of navigating away */
  iframeSrc?: string;
};
