import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://sewrio.com"),
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
    canonical: "/",
  },
  icons: {
    icon: "/images/logo-dark.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Sewrio — AI-Powered Sewing Patterns & Fashion Platform",
    description: SITE_DESCRIPTION,
    url: "/",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: "https://sewrio.com",
  logo: "https://sewrio.com/images/logo.png",
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
  url: "https://sewrio.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
