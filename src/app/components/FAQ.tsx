"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { StitchDivider } from "./SewingIcons";

const QUESTIONS = [
  {
    q: "Do I need any pattern-making experience?",
    a: "No. Describe what you're making in plain language and Sewrio produces a pattern with correct seam allowance and grainlines you can go straight to cutting with.",
  },
  {
    q: "What file formats can I export?",
    a: "PDF for home printing, DXF/AAMA for plotters, and native files for most cutting machines.",
  },
  {
    q: "Can it grade across a full size range?",
    a: "Yes. Give it your measurement chart or use one of our presets, and every piece grades consistently across the range.",
  },
  {
    q: "Is my design data private?",
    a: "Your patterns and prompts are yours. We never train on your designs or share them without permission.",
  },
  {
    q: "Does it work for knits and wovens?",
    a: "Both. The fabric simulation adjusts drape, stretch and ease depending on the material you choose.",
  },
];

export default function FAQ({ variant = "full" }: { variant?: "teaser" | "full" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const questions = variant === "teaser" ? QUESTIONS.slice(0, 3) : QUESTIONS;

  return (
    <section id="faq" className="relative bg-black px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">FAQ</span>
            <h2
              className="mt-4 text-4xl md:text-5xl text-white tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Questions, <em className="italic">answered</em>.
            </h2>
            <StitchDivider className="mx-auto mt-8 h-3 w-40 text-white/20" />
          </div>
        </Reveal>

        <div className="mt-16 space-y-3">
          {questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 80}>
                <div className="liquid-glass rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-white">{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`flex-none text-white/50 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/60">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {variant === "teaser" && (
          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="liquid-glass inline-block rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              See all FAQs
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
