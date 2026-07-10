"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

const NAV_HREFS = ["/what-we-do", "/why-us", "/blog", "/faq", "/contact"] as const;

const LOCALE_LABELS: Record<string, string> = {
  en: "English",
  tr: "Türkçe",
  zh: "中文",
};

function LocaleSwitcher({ align = "right" }: { align?: "left" | "right" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const switchLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="liquid-glass flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:text-white"
      >
        <Globe size={14} />
        {LOCALE_LABELS[locale]}
        <ChevronDown size={12} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className={`absolute top-full z-30 mt-2 min-w-34 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 py-1 shadow-2xl ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {routing.locales.map((l) => (
            <button
              key={l}
              type="button"
              role="option"
              aria-selected={l === locale}
              onClick={() => switchLocale(l)}
              className={`block w-full px-4 py-2.5 text-left text-sm transition-colors ${
                l === locale ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {LOCALE_LABELS[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("NavBar");

  const NAV_LINKS = [
    { href: NAV_HREFS[0], label: t("whatWeDo") },
    { href: NAV_HREFS[1], label: t("whyUs") },
    { href: NAV_HREFS[2], label: t("blog") },
    { href: NAV_HREFS[3], label: t("faq") },
    { href: NAV_HREFS[4], label: t("contact") },
  ];

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
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>

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
                <div className="mt-2 flex justify-center border-t border-white/10 pt-3">
                  <LocaleSwitcher align="left" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
