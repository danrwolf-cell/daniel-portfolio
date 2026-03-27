/** Editorial sections — similar structure to mouthwash.studio industry / capabilities */
export const industryAreas = [
  "Art",
  "Architecture",
  "Technology",
  "Health",
  "Sport",
  "Fashion",
  "Beauty",
  "Sustainability",
] as const;

export const capabilities = [
  "Creative direction",
  "Strategy",
  "Visual identity",
  "Graphic design",
  "Motion design",
  "Digital design",
  "Campaign",
  "Narrative",
  "Verbal identity",
] as const;

/** Hero showreel — place `src` (and optional `poster`) under `/public`. */
export const sizzleReel = {
  src: "/reel.mp4",
  poster: undefined as string | undefined,
};

export const site = {
  name: "Daniel Wolf",
  /** Short lockup for nav (mouthwash-style abbreviation) */
  mark: "DW.S",
  title: "Daniel Wolf — Design",
  description:
    "Product and visual design portfolio — case studies, experiments, and contact.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
  locale: "en_US",
} as const;
