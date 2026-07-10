import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Blog from "../components/Blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the Sewrio studio — behind-the-scenes stories on AI-powered pattern making, sewing, and fashion technology.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Sewrio",
    description:
      "Notes from the Sewrio studio — behind-the-scenes stories on AI-powered pattern making, sewing, and fashion technology.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-black">
      <NavBar />
      <Blog />
    </div>
  );
}
