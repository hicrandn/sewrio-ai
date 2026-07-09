import Reveal from "./Reveal";
import { MeasuringTapeIcon, NeedleThreadIcon, PatternPieceIcon, StitchDivider } from "./SewingIcons";

const FEATURES = [
  {
    Icon: NeedleThreadIcon,
    title: "AI Pattern Generation",
    description: "Describe your design in plain words and get a production-ready sewing pattern in minutes.",
  },
  {
    Icon: MeasuringTapeIcon,
    title: "Smart Grading",
    description: "Scale every pattern across sizes automatically, with precision fit built into each curve.",
  },
  {
    Icon: PatternPieceIcon,
    title: "Digital Fabric Simulation",
    description: "Preview drape, fit and movement on your fabric of choice before you cut a single piece.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-black px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              What we are doing?
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl text-white tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              From sketch to <em className="italic">pattern</em>, instantly.
            </h2>
            <StitchDivider className="mx-auto mt-8 h-3 w-40 text-white/20" />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="liquid-glass h-full rounded-3xl p-8">
                <Icon delay={200} className="h-12 w-12 text-white/80" />
                <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
