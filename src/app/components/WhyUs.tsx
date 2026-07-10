import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { StitchDivider } from "./SewingIcons";
import { Link } from "@/i18n/navigation";

export default async function WhyUs({ variant = "full" }: { variant?: "teaser" | "full" }) {
  const t = await getTranslations("WhyUsSection");
  const allPoints = t.raw("points") as string[];
  const points = variant === "teaser" ? allPoints.slice(0, 3) : allPoints;

  return (
    <section id="why-us" className="relative bg-black px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="liquid-glass relative aspect-3/2 overflow-hidden rounded-3xl">
              <Image
                src="/images/1.jpg"
                alt="Sewrio garment construction"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                {t("eyebrow")}
              </span>
              <h2
                className="mt-4 text-4xl md:text-5xl text-white tracking-tight"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {t.rich("heading", { em: (chunks) => <em className="italic">{chunks}</em> })}
              </h2>
              <StitchDivider className="mt-8 h-3 w-40 text-white/20" />

              <p className="mt-8 text-sm leading-relaxed text-white/70">{t("intro")}</p>

              <p className="mt-6 text-sm font-medium text-white/80">{t("differenceLabel")}</p>
              <ul className="mt-4 space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/10 text-white/80">
                      <Check size={12} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/70">{point}</span>
                  </li>
                ))}
              </ul>

              {variant === "full" && (
                <p className="mt-6 text-sm leading-relaxed text-white/70">{t("closing")}</p>
              )}

              {variant === "teaser" && (
                <Link
                  href="/why-us"
                  className="liquid-glass mt-8 inline-block rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
                >
                  {t("learnMore")}
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
