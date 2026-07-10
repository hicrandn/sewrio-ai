import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            404
          </span>
          <h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Lost the <em className="italic">pattern</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/60">
            We couldn&apos;t find the page you were looking for. It may have
            been moved or no longer exists.
          </p>
          <Link
            href="/"
            className="liquid-glass mt-8 inline-block rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
