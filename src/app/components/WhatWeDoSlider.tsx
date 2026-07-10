"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Step = {
  eyebrow: string;
  title: string;
  description: string;
  alt: string;
};

const IMAGES = ["/images/one.jpg", "/images/5.jpg", "/images/8.jpg"];

const AUTOPLAY_MS = 5000;

export default function WhatWeDoSlider() {
  const t = useTranslations("WhatWeDoSteps");
  const STEPS = t.raw("steps") as Step[];
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % STEPS.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [STEPS.length]);

  useEffect(() => {
    itemRefs.current[active]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [active]);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="liquid-glass relative aspect-3/2 overflow-hidden rounded-3xl">
          {STEPS.map((step, i) => (
            <Image
              key={IMAGES[i]}
              src={IMAGES[i]}
              alt={step.alt}
              fill
              className={`object-cover transition-opacity duration-700 ease-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={i === 0}
            />
          ))}
        </div>

        <div>
          <div className="space-y-3">
            {STEPS.map((step, i) => {
              const isActive = i === active;
              return (
                <button
                  key={step.title}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive}
                  className={`liquid-glass block w-full rounded-2xl px-6 py-5 text-left transition-colors hover:bg-white/5 ${
                    isActive ? "bg-white/5" : ""
                  }`}
                >
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                    {step.eyebrow}
                  </span>
                  <h3
                    className={`mt-2 text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {step.title}
                  </h3>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex gap-2">
            {STEPS.map((step, i) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to ${step.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-white" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
