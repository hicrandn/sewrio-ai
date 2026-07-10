import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiInstagram, SiTiktok } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/sewrio/?trk=public_profile_topcard-current-company",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://www.instagram.com/sewriio/",
    label: "Instagram",
    Icon: SiInstagram,
  },
  {
    href: "https://www.tiktok.com/@sewriio",
    label: "TikTok",
    Icon: SiTiktok,
  },
];

export default function Footer() {
  return (
    <div className="relative bg-black px-6 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <div className="flex items-center gap-1">
              <Image src="/images/logo.png" alt="Sewrio logo" width={28} height={28} className="rounded-full" />
              <span
                className="text-lg font-medium tracking-tight text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                SEWRIO
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              AI-powered digital sewing pattern &amp; fashion platform.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/5 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/30">© 2025 Sewrio. All rights reserved.</p>
          <p className="text-xs text-white/30">Made for makers.</p>
        </div>
      </div>
    </div>
  );
}
