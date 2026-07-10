import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import NavBar from "../../components/NavBar";
import { StitchDivider } from "../../components/SewingIcons";
import { BLOG_POSTS } from "../../data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Sewrio",
    },
    publisher: {
      "@type": "Organization",
      name: "Sewrio",
      logo: {
        "@type": "ImageObject",
        url: "https://sewrio.com/images/logo.png",
      },
    },
    mainEntityOfPage: `https://sewrio.com/blog/${post.slug}`,
  };

  return (
    <div className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavBar />

      <article className="relative px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            All posts
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
        </div>
      </article>
    </div>
  );
}
