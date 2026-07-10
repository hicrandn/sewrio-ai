import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import Reveal from "../components/Reveal";
import WhatWeDoSlider from "../components/WhatWeDoSlider";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "From sketch to pattern, instantly. See how Sewrio's AI turns your designs into precise, production-ready sewing patterns.",
  alternates: {
    canonical: "/what-we-do",
  },
  openGraph: {
    title: "What We Do | Sewrio",
    description:
      "From sketch to pattern, instantly. See how Sewrio's AI turns your designs into precise, production-ready sewing patterns.",
    url: "/what-we-do",
  },
};

export default function WhatWeDoPage() {
  return (
    <div className="bg-black">
      <div className="relative overflow-hidden bg-black flex flex-col">
        <NavBar />

        <div className="relative z-10 flex flex-col items-center px-6 pt-12 pb-20 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            What we are doing?
          </span>
          <h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            From sketch to <em className="italic">pattern</em>, instantly.
          </h1>
          <p className="mt-6 max-w-xl text-white/70 text-sm leading-relaxed px-4">
            Sewrio turns a plain-language description of a garment into a production-ready
            sewing pattern, graded and simulated before a single piece of fabric is cut.
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
