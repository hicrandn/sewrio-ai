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
            <div className="group liquid-glass relative aspect-3/2 overflow-hidden rounded-3xl">
              <Image
                src="/images/7.jpg"
                alt="Dress forms in the atelier"
                fill
                className="object-cover object-[50%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-5 left-5 rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                {t("badge")}
              </span>

              <div className="absolute right-4 bottom-4 w-[30%] overflow-hidden rounded-xl border border-white/15 shadow-2xl shadow-black/60 transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:right-5 sm:bottom-5">
                <div className="relative aspect-4/5">
                  <Image
                    src="/images/ai.png"
                    alt="Sewrio AI app on a phone"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 15vw, 30vw"
                  />
                </div>
              </div>
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
