import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { BLOG_DATES, BLOG_SLUGS } from "./src/app/data/blog";
import { STATIC_ROUTE_DATES, toHttpDate } from "./src/app/data/content-dates";
import { routing } from "./src/i18n/routing";

// Mirrors the "as-needed" localePrefix rule from src/i18n/routing.ts: the default
// locale has no prefix, other locales are prefixed with their code. Doesn't import
// next-intl's navigation helpers here — those pull in `next/navigation`'s
// client-side module graph, which isn't resolvable from next.config.ts's plain
// Node context.
function localizedPath(href: string, locale: string) {
  return locale === routing.defaultLocale ? href : `/${locale}${href}`;
}

// Last-Modified header per route, kept in sync with the freshness signals in
// src/app/sitemap.ts and src/app/data/blog.ts.
function lastModifiedHeaders() {
  const entries: { source: string; lastModified: string }[] = [];

  for (const [href, isoDate] of Object.entries(STATIC_ROUTE_DATES)) {
    for (const locale of routing.locales) {
      entries.push({ source: localizedPath(href, locale), lastModified: isoDate });
    }
  }

  for (const slug of BLOG_SLUGS) {
    for (const locale of routing.locales) {
      entries.push({
        source: localizedPath(`/blog/${slug}`, locale),
        lastModified: BLOG_DATES[slug].dateModified,
      });
    }
  }

  return entries.map(({ source, lastModified }) => ({
    source,
    headers: [{ key: "Last-Modified", value: toHttpDate(lastModified) }],
  }));
}

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  async headers() {
    return lastModifiedHeaders();
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
