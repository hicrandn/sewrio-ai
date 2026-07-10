import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import FAQ from "../components/FAQ";
import { FAQ_ITEMS } from "../data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Sewrio's AI-powered sewing pattern platform — how it works, pricing, and getting started.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Sewrio",
    description:
      "Answers to common questions about Sewrio's AI-powered sewing pattern platform — how it works, pricing, and getting started.",
    url: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NavBar />
      <FAQ />
    </div>
  );
}
