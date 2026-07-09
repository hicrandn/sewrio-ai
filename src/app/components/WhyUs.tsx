import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { StitchDivider } from "./SewingIcons";

const POINTS = [
  "Trained on real garment construction, not stock photos.",
  "Patterns export straight to PDF, DXF or your cutting machine.",
  "Every fit adjustment stays true to seam allowance and grain.",
  "Built alongside working pattern makers and tailors.",
];

export default function WhyUs({ variant = "full" }: { variant?: "teaser" | "full" }) {
  const points = variant === "teaser" ? POINTS.slice(0, 2) : POINTS;

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
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Why us?</span>
              <h2
                className="mt-4 text-4xl md:text-5xl text-white tracking-tight"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Built by people who <em className="italic">sew</em>.
              </h2>
              <StitchDivider className="mt-8 h-3 w-40 text-white/20" />

              <ul className="mt-8 space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/10 text-white/80">
                      <Check size={12} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/70">{point}</span>
                  </li>
                ))}
              </ul>

              {variant === "teaser" && (
                <Link
                  href="/why-us"
                  className="liquid-glass mt-8 inline-block rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
                >
                  Learn more
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
