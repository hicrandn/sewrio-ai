export const BLOG_SLUGS = [
  "why-i-started-building-sewrio",
  "how-to-read-a-sewing-pattern-beginners-guide",
  "how-to-print-pdf-sewing-patterns-at-home",
  "digital-vs-printed-sewing-patterns-which-is-better",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

export const BLOG_DATES: Record<BlogSlug, { datePublished: string; dateModified: string }> = {
  "why-i-started-building-sewrio": {
    datePublished: "2026-07-23",
    dateModified: "2026-07-23",
  },
  "how-to-read-a-sewing-pattern-beginners-guide": {
    datePublished: "2026-06-01",
    dateModified: "2026-07-23",
  },
  "how-to-print-pdf-sewing-patterns-at-home": {
    datePublished: "2026-05-01",
    dateModified: "2026-07-23",
  },
  "digital-vs-printed-sewing-patterns-which-is-better": {
    datePublished: "2026-04-01",
    dateModified: "2026-07-23",
  },
};
