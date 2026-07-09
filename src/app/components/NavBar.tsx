"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/what-we-do", label: "What we are doing?" },
  { href: "/why-us", label: "Why us?" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 px-6 py-4">
      <div className="rounded-full px-6 py-3 grid grid-cols-[1fr_auto_1fr] items-center max-w-5xl mx-auto">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Sewrio logo" width={50} height={50} />
          <span className="text-white text-xl font-medium tracking-tight whitespace-normal " style={{ fontFamily: "'Instrument Serif', serif" }}>
            Sewrio
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

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="liquid-glass col-start-3 flex h-10 w-10 items-center justify-center justify-self-end rounded-full text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
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
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
