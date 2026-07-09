"use client";

import { useEffect, useRef } from "react";

const FADE_DURATION_MS = 500;
const FADE_OUT_LEAD_SECONDS = 0.55;

export default function FadeLoopVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
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

    const fadeTo = (target: number, duration: number) => {
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

  return <video ref={videoRef} className={className} src={src} autoPlay muted playsInline />;
}
