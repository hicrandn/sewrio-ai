import Link from "next/link";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { StitchDivider } from "./SewingIcons";
import { AvatarCircles } from "@/components/ui/avatar-circles";

const CONTACT_AVATARS = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export default function Contact({ variant = "teaser" }: { variant?: "teaser" | "full" }) {
  return (
    <section id="contact" className="relative bg-black px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Contact</span>
            <h2
              className="mt-4 text-4xl md:text-5xl text-white tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Let&apos;s make something.
            </h2>
            <StitchDivider className="mx-auto mt-8 h-3 w-40 text-white/20" />
            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-white/60">
              Questions, partnership ideas or just curious how it works — we read every message.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3">
              <AvatarCircles numPeople={99} avatarUrls={CONTACT_AVATARS} />
              <p className="text-xs text-white/40">Designers and pattern makers already on the waitlist</p>
            </div>

            {variant === "teaser" && (
              <Link
                href="/contact"
                className="liquid-glass mt-8 inline-block rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Get in touch
              </Link>
            )}
          </>
        </Reveal>
      </div>

      {variant === "full" && (
        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-xl">
            <ContactForm />
          </div>
        </Reveal>
      )}
    </section>
  );
}
