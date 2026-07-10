import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NavBar from "../../components/NavBar";
import Blog from "../../components/Blog";
import { getPathname } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPageMeta" });
  const url = getPathname({ href: "/blog", locale });

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

export default function BlogPage() {
  return (
    <div className="bg-black">
      <NavBar />
      <Blog />
    </div>
  );
}
