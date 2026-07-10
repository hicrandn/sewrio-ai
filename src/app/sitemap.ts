import type { MetadataRoute } from "next";
import { BLOG_SLUGS } from "./data/blog";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://sewrio.com";

function entriesFor(href: string, priority: number): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      `${BASE_URL}${getPathname({ href, locale })}`,
    ]),
  );

  return routing.locales.map((locale) => ({
    url: `${BASE_URL}${getPathname({ href, locale })}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: [string, number][] = [
    ["/", 1],
    ["/what-we-do", 0.7],
    ["/why-us", 0.7],
    ["/blog", 0.7],
    ["/faq", 0.7],
    ["/contact", 0.7],
  ];

  const staticRoutes = routes.flatMap(([href, priority]) => entriesFor(href, priority));

  const postRoutes = BLOG_SLUGS.flatMap((slug) => entriesFor(`/blog/${slug}`, 0.6));

  return [...staticRoutes, ...postRoutes];
}
