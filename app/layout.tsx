import type { Metadata } from 'next';
import { Poppins, Nunito_Sans, Dancing_Script } from 'next/font/google';
import './globals.css';
import { SITE, SITE_URL } from '@/content/site';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LocalBusinessJsonLd } from '@/components/JsonLd';

// Warm, rounded, human sans for headings. next/font self-hosts these at build
// time (no runtime request to Google — better privacy for public-sector/NHS
// visitors, and faster).
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

// Warm sans for body copy.
const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

// Flowing script for the logotype — PLACEHOLDER_LOGO_SVG stand-in until the
// real cursive logo file is supplied (see components/Logo.tsx).
const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700'],
  variable: '--font-script',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'video production Exeter',
    'video production Devon',
    'cinematic video production UK',
    'healthcare video production',
    'charity films',
    'corporate video production',
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        // PLACEHOLDER_OG_IMAGE — replace with real 1200x630 share image
        url: '/og/PLACEHOLDER_OG_IMAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'PLACEHOLDER_ALT: Fresh Ground Films — warm, natural-light story film still',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ['/og/PLACEHOLDER_OG_IMAGE.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${poppins.variable} ${nunito.variable} ${dancing.variable}`}
    >
      <body className="min-h-screen bg-paper font-sans text-cocoa antialiased">
        {/* Skip link for keyboard + screen-reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ember focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <LocalBusinessJsonLd />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
