import { getTranslations } from "next-intl/server";
import FadeLoopVideo from "../components/FadeLoopVideo";
import NavBar from "../components/NavBar";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <div className="min-h-screen bg-black overflow-hidden relative flex flex-col">
      <FadeLoopVideo
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
      />

      <NavBar />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-6 text-center -translate-y-[8%] sm:-translate-y-[20%]">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-normal sm:whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
        {t("title")}
        </h1>

        <div className="max-w-xl w-full space-y-4">
          <p className="text-white text-sm leading-relaxed px-4">
          {t("tagline")}
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScCqFpPkqRf2mIB2z26zyreqnxouGZoZGUGJv3tUBBz37WklQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass inline-block rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </div>
  );
}
