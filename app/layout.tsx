import type { Metadata } from 'next';
import './globals.css';
import { SITE, SITE_URL } from '@/content/site';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LocalBusinessJsonLd } from '@/components/JsonLd';

/*
  Fonts are loaded in the browser via Google Fonts <link> tags (see <head>
  below) rather than next/font's build-time fetch. This keeps the production
  build resilient in offline/sandboxed CI and still works on Vercel. The
  CSS variables --font-poppins / --font-nunito / --font-script are defined in
  globals.css and consumed by tailwind.config.ts.

  Fonts in use:
    - Poppins        — warm, rounded human sans for headings
    - Nunito Sans    — warm sans for body copy
    - Dancing Script — flowing script for the PLACEHOLDER_LOGO wordmark
*/

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
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600;6..12,700&family=Dancing+Script:wght@600;700&display=swap"
        />
      </head>
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
