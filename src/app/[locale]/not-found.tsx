import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NavBar from "../components/NavBar";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "NotFound" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="bg-black">
      <div className="relative min-h-screen overflow-hidden bg-black flex flex-col">
        <NavBar />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            {t("eyebrow")}
          </span>
          <h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {t.rich("heading", { em: (chunks) => <em className="italic">{chunks}</em> })}
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/60">
            {t("body")}
          </p>
          <Link
            href="/"
            className="liquid-glass mt-8 inline-block rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            {t("backHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}
