// Real content-modification dates (YYYY-MM-DD), not build time — used as the single
// source of truth for the sitemap's lastModified, the Last-Modified HTTP header, and
// JSON-LD dateModified fields, so a page's freshness signal only changes when its
// content actually does.
export const STATIC_ROUTE_DATES: Record<string, string> = {
  "/": "2026-07-11",
  "/what-we-do": "2026-07-11",
  "/why-us": "2026-07-13",
  "/blog": "2026-07-13",
  "/faq": "2026-07-11",
  "/contact": "2026-07-13",
};

export function toHttpDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toUTCString();
}
