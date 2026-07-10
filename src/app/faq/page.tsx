import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import FAQ from "../components/FAQ";

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

export default function FAQPage() {
  return (
    <div className="bg-black">
      <NavBar />
      <FAQ />
    </div>
  );
}
