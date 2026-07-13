import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import NavBar from "../../../components/NavBar";
import { StitchDivider } from "../../../components/SewingIcons";
import { BLOG_DATES, BLOG_SLUGS, type BlogSlug } from "../../../data/blog";
import { Link, getPathname } from "@/i18n/navigation";

const BASE_URL = "https://www.sewrio.com";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

type BlogPost = { date: string; title: string; excerpt: string; content: string[] };

function isValidSlug(slug: string): slug is (typeof BLOG_SLUGS)[number] {
  return (BLOG_SLUGS as readonly string[]).includes(slug);
}

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidSlug(slug)) {
    return { title: "Post Not Found" };
  }

  const t = await getTranslations({ locale, namespace: "BlogPosts" });
  const post = t.raw(slug) as BlogPost;
  const url = getPathname({ href: `/blog/${slug}`, locale });

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isValidSlug(slug)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "BlogPosts" });
  const tSection = await getTranslations({ locale, namespace: "BlogSection" });
  const post = t.raw(slug) as BlogPost;
  const { datePublished, dateModified } = BLOG_DATES[slug];

  const relatedSlugs = BLOG_SLUGS.filter((s) => s !== slug) as BlogSlug[];
  const relatedPosts = relatedSlugs.map((relatedSlug) => ({
    slug: relatedSlug,
    title: (t.raw(relatedSlug) as BlogPost).title,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    headline: post.title,
    description: post.excerpt,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Sewrio",
    },
    publisher: {
      "@type": "Organization",
      name: "Sewrio",
      logo: {
        "@type": "ImageObject",
        url: "https://www.sewrio.com/images/logo.png",
      },
    },
    mainEntityOfPage: `https://www.sewrio.com/blog/${slug}`,
  };

  const relatedItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: tSection("relatedPosts"),
    itemListElement: relatedPosts.map((related, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: related.title,
      url: `${BASE_URL}${getPathname({ href: `/blog/${related.slug}`, locale })}`,
    })),
  };

  return (
    <div className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(relatedItemListJsonLd) }}
      />
      <NavBar />

      <article className="relative px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            {tSection("allPosts")}
          </Link>

          <span className="mt-8 block text-xs uppercase tracking-wide text-white/40">
            {post.date}
          </span>
          <h1
            className="mt-4 text-4xl md:text-5xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {post.title}
          </h1>
          <StitchDivider className="mt-8 h-3 w-40 text-white/20" />

          <div className="mt-10 space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/70">
                {paragraph}
              </p>
            ))}
          </div>

          <StitchDivider className="mt-16 h-3 w-40 text-white/20" />

          <h2 className="mt-16 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            {tSection("relatedPosts")}
          </h2>
          <div className="mt-6 space-y-4">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="liquid-glass group flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition-colors hover:bg-white/5"
              >
                <span className="text-sm font-medium text-white">{related.title}</span>
                <ArrowUpRight
                  size={16}
                  className="flex-none text-white/50 transition-colors group-hover:text-white"
                />
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
