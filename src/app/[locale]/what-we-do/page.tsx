import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NavBar from "../../components/NavBar";
import Reveal from "../../components/Reveal";
import WhatWeDoSlider from "../../components/WhatWeDoSlider";
import { getPathname } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "WhatWeDoPage" });
  const url = getPathname({ href: "/what-we-do", locale });

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

export default async function WhatWeDoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("WhatWeDoPage");

  return (
    <div className="bg-black">
      <div className="relative overflow-hidden bg-black flex flex-col">
        <NavBar />

        <div className="relative z-10 flex flex-col items-center px-6 pt-12 pb-20 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            {t("eyebrow")}
          </span>
          <h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {t.rich("heading", {
              em: (chunks) => <em className="italic">{chunks}</em>,
            })}
          </h1>
          <p className="mt-6 max-w-xl text-white/70 text-sm leading-relaxed px-4">
            {t("description")}
          </p>
        </div>
      </div>

      <section className="relative px-6 pb-24 sm:pb-32">
        <Reveal>
          <WhatWeDoSlider />
        </Reveal>
      </section>
    </div>
  );
}
