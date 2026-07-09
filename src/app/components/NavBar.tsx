import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/what-we-do", label: "What we are doing?" },
  { href: "/why-us", label: "Why us?" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="relative z-20 pl-6 pr-6 py-6">
      <div className="rounded-full px-6 py-3 grid grid-cols-[1fr_auto_1fr] items-center max-w-5xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Sewrio logo" width={50} height={50} />
          <span className="text-white font-semibold text-lg">Sewrio</span>
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
      </div>
    </nav>
  );
}
