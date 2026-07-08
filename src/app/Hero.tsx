"use client";

import { useEffect, useRef } from "react";
import { Globe } from "lucide-react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

const FADE_DURATION_MS = 500;
const FADE_OUT_LEAD_SECONDS = 0.55;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cancelFade = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const fadeTo = (target: number, duration: number, onComplete?: () => void) => {
      cancelFade();
      const startOpacity = parseFloat(video.style.opacity || (target === 1 ? "0" : "1"));
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        video.style.opacity = String(startOpacity + (target - startOpacity) * progress);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
          onComplete?.();
        }
      };

      rafRef.current = requestAnimationFrame(step);
    };

    const handleLoadedData = () => {
      fadeTo(1, FADE_DURATION_MS);
    };

    const handleTimeUpdate = () => {
      if (fadingOutRef.current) return;
      if (video.duration && video.duration - video.currentTime <= FADE_OUT_LEAD_SECONDS) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_DURATION_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        video.play();
        fadingOutRef.current = false;
        fadeTo(1, FADE_DURATION_MS);
      }, 100);
    };

    video.style.opacity = "0";
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      cancelFade();
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative flex flex-col">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
      />

      <nav className="relative z-20 pl-6 pr-6 py-6">
        <div className="rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Globe size={24} className="text-white" />
              <span className="text-white font-semibold text-lg">Sewrio</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                What we are doing?
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Why us?
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Blog
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                FAQ
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium">Sign Up</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
        Your vision. Perfectly cut.
        </h1>

        <div className="max-w-xl w-full space-y-4">
          <p className="text-white text-sm leading-relaxed px-4">
          AI-powered digital sewing pattern & fashion platform
          </p>

          <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  );
}
