import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { StitchDivider } from "./SewingIcons";
import { BLOG_SLUGS } from "../data/blog";
import { Link } from "@/i18n/navigation";

type BlogPostMeta = { date: string; title: string; excerpt: string };

export default async function Blog({ variant = "full" }: { variant?: "teaser" | "full" }) {
  const t = await getTranslations("BlogSection");
  const tPosts = await getTranslations("BlogPosts");

  const allPosts = BLOG_SLUGS.map((slug) => ({
    slug,
    ...(tPosts.raw(slug) as BlogPostMeta),
  }));
  const posts = variant === "teaser" ? allPosts.slice(0, 2) : allPosts;

  return (
    <section id="blog" className="relative bg-black px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              {t("eyebrow")}
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl text-white tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {t.rich("heading", { em: (chunks) => <em className="italic">{chunks}</em> })}
            </h2>
            <StitchDivider className="mx-auto mt-8 h-3 w-40 text-white/20" />
          </div>
        </Reveal>

        <div className={`mt-16 grid gap-6 ${variant === "teaser" ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120}>
              <Link
                href={`/blog/${post.slug}`}
                className="liquid-glass group flex h-full flex-col rounded-3xl p-8 transition-colors hover:bg-white/5"
              >
                <span className="text-xs uppercase tracking-wide text-white/40">{post.date}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white">
                  {t("readMore")}
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {variant === "teaser" && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="liquid-glass inline-block rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              {t("viewAll")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
