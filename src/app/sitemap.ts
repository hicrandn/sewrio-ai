import type { MetadataRoute } from "next";

const BASE_URL = "https://sewrio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/what-we-do", "/why-us", "/blog", "/faq", "/contact"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
