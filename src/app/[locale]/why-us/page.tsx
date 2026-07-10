import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NavBar from "../../components/NavBar";
import WhyUs from "../../components/WhyUs";
import { getPathname } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "WhyUsPageMeta" });
  const url = getPathname({ href: "/why-us", locale });

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

export default function WhyUsPage() {
  return (
    <div className="bg-black">
      <NavBar />
      <WhyUs />
    </div>
  );
}
