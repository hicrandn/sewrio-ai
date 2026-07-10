import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NavBar from "../../components/NavBar";
import FAQ from "../../components/FAQ";
import { getPathname } from "@/i18n/navigation";

const TITLE = "FAQ";
const DESCRIPTION =
  "Answers to common questions about Sewrio's AI-powered sewing pattern platform — how it works, pricing, and getting started.";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const url = getPathname({ href: "/faq", locale });

  return {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: url },
    openGraph: {
      title: `${TITLE} | Sewrio`,
      description: DESCRIPTION,
      url,
    },
  };
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FAQItems" });
  const items = t.raw("items") as { q: string; a: string }[];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

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
