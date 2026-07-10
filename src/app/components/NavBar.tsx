"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Menu, X } from "lucide-react";

const NAV_HREFS = ["/what-we-do", "/why-us", "/blog", "/faq", "/contact"] as const;

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  tr: "TR",
  zh: "中文",
};

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("NavBar");

  const NAV_LINKS = [
    { href: NAV_HREFS[0], label: t("whatWeDo") },
    { href: NAV_HREFS[1], label: t("whyUs") },
    { href: NAV_HREFS[2], label: t("blog") },
    { href: NAV_HREFS[3], label: t("faq") },
    { href: NAV_HREFS[4], label: t("contact") },
  ];

  const switchLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setOpen(false);
  };

  const renderLocaleSwitcher = (className = "") => (
    <div className={`flex items-center gap-1 text-xs font-medium ${className}`}>
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchLocale(l)}
          aria-current={l === locale}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            l === locale ? "bg-white/10 text-white" : "text-white/50 hover:text-white"
          }`}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="relative z-20 px-6 py-4">
      <div className="rounded-full px-6 py-3 grid grid-cols-[1fr_auto_1fr] items-center max-w-5xl mx-auto">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Sewrio logo" width={50} height={50} />
          <span className="text-white text-xl font-medium tracking-wide whitespace-normal " style={{ fontFamily: "'Instrument Serif', serif" }}>
            SEWRIO
          </span>
        </Link>

        <div className="liquid-glass hidden md:flex items-center gap-8 justify-self-center rounded-full px-8 py-3">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="col-start-3 flex items-center justify-self-end gap-3">
          {renderLocaleSwitcher("liquid-glass hidden rounded-full px-1.5 py-1.5 md:flex")}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <button
            type="button"
            aria-label={t("closeMenu")}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 md:hidden"
          />
          <div className="absolute inset-x-0 top-full px-6 md:hidden">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-neutral-950 p-3 shadow-2xl">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
                {renderLocaleSwitcher("justify-center border-t border-white/10 pt-3 mt-2")}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
