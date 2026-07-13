import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { STATIC_ROUTE_DATES } from "../data/content-dates";
import Footer from "../components/Footer";
import "../globals.css";

const GA_MEASUREMENT_ID = "G-QXFDK7DNRY";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "Sewrio";
const SITE_DESCRIPTION =
  "Sewrio turns your sketches into perfectly cut digital sewing patterns in seconds — an AI-powered pattern-making and fashion platform for designers and makers.";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, getPathname({ href: "/", locale: l })]),
  );

  return {
    metadataBase: new URL("https://www.sewrio.com"),
    title: {
      default: "Sewrio — AI-Powered Sewing Patterns & Fashion Platform",
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: [
      "sewing patterns",
      "AI sewing patterns",
      "digital sewing patterns",
      "pattern making software",
      "fashion design platform",
      "custom sewing patterns",
    ],
    alternates: {
      canonical: getPathname({ href: "/", locale }),
      languages: { ...languages, "x-default": languages[routing.defaultLocale] },
    },
    icons: {
      icon: "/images/logo-dark.png",
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: "Sewrio — AI-Powered Sewing Patterns & Fashion Platform",
      description: SITE_DESCRIPTION,
      url: getPathname({ href: "/", locale }),
    },
    twitter: {
      card: "summary_large_image",
      title: "Sewrio — AI-Powered Sewing Patterns & Fashion Platform",
      description: SITE_DESCRIPTION,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: "https://www.sewrio.com",
  logo: "https://www.sewrio.com/images/logo.png",
  description: SITE_DESCRIPTION,
  sameAs: [
    "https://www.linkedin.com/company/sewrio/",
    "https://www.instagram.com/sewriio/",
    "https://www.tiktok.com/@sewriio",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: "https://www.sewrio.com",
  dateModified: STATIC_ROUTE_DATES["/"],
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <NextIntlClientProvider>
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
