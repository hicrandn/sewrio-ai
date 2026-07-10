import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import WhyUs from "../components/WhyUs";

export const metadata: Metadata = {
  title: "Why Sewrio",
  description:
    "Built by people who sew. Discover why designers and makers choose Sewrio for fast, accurate, AI-powered pattern making.",
  alternates: {
    canonical: "/why-us",
  },
  openGraph: {
    title: "Why Sewrio | Sewrio",
    description:
      "Built by people who sew. Discover why designers and makers choose Sewrio for fast, accurate, AI-powered pattern making.",
    url: "/why-us",
  },
};

export default function WhyUsPage() {
  return (
    <div className="bg-black">
      <NavBar />
      <WhyUs />
    </div>
  );
}
