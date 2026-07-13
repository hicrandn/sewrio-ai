import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NavBar from "../../components/NavBar";
import Blog from "../../components/Blog";
import { BLOG_SLUGS } from "../../data/blog";
import { getPathname } from "@/i18n/navigation";

const BASE_URL = "https://www.sewrio.com";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPageMeta" });
  const url = getPathname({ href: "/blog", locale });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: url },
    openGraph: {
      title: `${t("title")} | Sewrio`,
      description: t("description"),
      url,
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const tPosts = await getTranslations("BlogPosts");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: BLOG_SLUGS.map((slug, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: (tPosts.raw(slug) as { title: string }).title,
      url: `${BASE_URL}${getPathname({ href: `/blog/${slug}`, locale })}`,
    })),
  };

  return (
    <div className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <NavBar />
      <Blog />
    </div>
  );
}
