import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { SITE, SITE_URL } from '@/content/site';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LocalBusinessJsonLd } from '@/components/JsonLd';

// Editorial display serif (headings). Loaded as a variable font (full weight
// range) so the Tailwind font-weight utilities all resolve. Swap for a licensed
// display face here if the brand supplies one later — Fraunces is a close,
// free stand-in. next/font self-hosts these at build time (no runtime request
// to Google — better privacy for public-sector/NHS visitors, and faster).
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
});

// Clean sans (body).
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
        alt: 'PLACEHOLDER_ALT: Fresh Ground Films cinematic showreel still',
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
    <html lang="en-GB" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-bone antialiased">
        {/* Skip link for keyboard + screen-reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ember focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink"
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
