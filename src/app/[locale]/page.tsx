import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { BLOG_SLUGS } from "../data/blog";
import Hero from "./Hero";
import WhatWeDo from "../components/WhatWeDo";
import WhyUs from "../components/WhyUs";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

const BASE_URL = "https://www.sewrio.com";
const TEASER_BLOG_COUNT = 2;
const TEASER_FAQ_COUNT = 3;

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  const tPosts = await getTranslations("BlogPosts");
  const tFaq = await getTranslations("FAQItems");

  // Mirrors the Blog and FAQ teaser sections rendered below — only the items
  // actually visible on this page, matching Google's structured-data guidance.
  const teaserPosts = BLOG_SLUGS.slice(0, TEASER_BLOG_COUNT).map((slug) => ({
    slug,
    title: (tPosts.raw(slug) as { title: string }).title,
  }));
  const teaserFaqItems = (tFaq.raw("items") as { q: string; a: string }[]).slice(
    0,
    TEASER_FAQ_COUNT,
  );

  const blogItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: teaserPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${BASE_URL}${getPathname({ href: `/blog/${post.slug}`, locale })}`,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: teaserFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogItemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <WhatWeDo />
      <WhyUs variant="teaser" />
      <Blog variant="teaser" />
      <FAQ variant="teaser" />
      <Contact variant="teaser" />
    </>
  );
}
