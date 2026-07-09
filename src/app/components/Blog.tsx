import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { StitchDivider } from "./SewingIcons";

const POSTS = [
  {
    date: "Jun 2026",
    title: "Why seam allowance is the hardest thing to automate",
    excerpt: "The math is easy. Getting a machine to think like a pattern maker is not.",
  },
  {
    date: "May 2026",
    title: "Grading rules we borrowed from vintage tailoring books",
    excerpt: "Some of the best sizing logic we use is over eighty years old.",
  },
  {
    date: "Apr 2026",
    title: "From prompt to production pattern in one afternoon",
    excerpt: "A behind-the-scenes look at how one designer shipped her first collection.",
  },
];

export default function Blog({ variant = "full" }: { variant?: "teaser" | "full" }) {
  const posts = variant === "teaser" ? POSTS.slice(0, 2) : POSTS;

  return (
    <section id="blog" className="relative bg-black px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Blog</span>
            <h2
              className="mt-4 text-4xl md:text-5xl text-white tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Notes from the <em className="italic">studio</em>.
            </h2>
            <StitchDivider className="mx-auto mt-8 h-3 w-40 text-white/20" />
          </div>
        </Reveal>

        <div className={`mt-16 grid gap-6 ${variant === "teaser" ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 120}>
              <a
                href="#"
                className="liquid-glass group flex h-full flex-col rounded-3xl p-8 transition-colors hover:bg-white/5"
              >
                <span className="text-xs uppercase tracking-wide text-white/40">{post.date}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white/80 group-hover:text-white">
                  Read more
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {variant === "teaser" && (
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="liquid-glass inline-block rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
