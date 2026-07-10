import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./data/blog";

const BASE_URL = "https://sewrio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/what-we-do", "/why-us", "/blog", "/faq", "/contact"];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
