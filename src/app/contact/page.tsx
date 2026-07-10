import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Sewrio team — questions, partnership ideas, or feedback. We read every message.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Sewrio",
    description:
      "Get in touch with the Sewrio team — questions, partnership ideas, or feedback. We read every message.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-black">
      <NavBar />
      <Contact variant="full" />
    </div>
  );
}
