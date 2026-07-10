import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";
import { MeasuringTapeIcon, NeedleThreadIcon, PatternPieceIcon, StitchDivider } from "./SewingIcons";

const ICONS = [NeedleThreadIcon, MeasuringTapeIcon, PatternPieceIcon];

export default async function WhatWeDo() {
  const tPage = await getTranslations("WhatWeDoPage");
  const t = await getTranslations("WhatWeDoTeaser");
  const features = t.raw("features") as { title: string; description: string }[];

  return (
    <section id="what-we-do" className="relative bg-black px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              {tPage("eyebrow")}
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl text-white tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {tPage.rich("heading", { em: (chunks) => <em className="italic">{chunks}</em> })}
            </h2>
            <StitchDivider className="mx-auto mt-8 h-3 w-40 text-white/20" />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description }, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={title} delay={i * 120}>
                <div className="liquid-glass h-full rounded-3xl p-8">
                  <Icon delay={200} className="h-12 w-12 text-white/80" />
                  <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
