export const BLOG_SLUGS = [
  "why-i-started-building-sewrio",
  "seam-allowance-hardest-thing-to-automate",
  "grading-rules-from-vintage-tailoring-books",
  "from-prompt-to-production-pattern-in-one-afternoon",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

export const BLOG_DATES: Record<BlogSlug, { datePublished: string; dateModified: string }> = {
  "why-i-started-building-sewrio": {
    datePublished: "2026-07-23",
    dateModified: "2026-07-23",
  },
  "seam-allowance-hardest-thing-to-automate": {
    datePublished: "2026-06-01",
    dateModified: "2026-07-13",
  },
  "grading-rules-from-vintage-tailoring-books": {
    datePublished: "2026-05-01",
    dateModified: "2026-07-13",
  },
  "from-prompt-to-production-pattern-in-one-afternoon": {
    datePublished: "2026-04-01",
    dateModified: "2026-07-13",
  },
};
