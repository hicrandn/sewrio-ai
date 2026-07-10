import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NavBar from "../../components/NavBar";
import Contact from "../../components/Contact";
import { getPathname } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPageMeta" });
  const url = getPathname({ href: "/contact", locale });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: url },
    openGraph: {
      title: `${t("title")} | Sewrio`,
      description: t("description"),
      url,
    },
  };
}

export default function ContactPage() {
  return (
    <div className="bg-black">
      <NavBar />
      <Contact variant="full" />
    </div>
  );
}
