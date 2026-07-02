/*
  Central site config. Everything that is genuinely site-wide (name, base URL,
  default meta) lives here so metadata stays consistent across every page.
*/

// PLACEHOLDER_SITE_URL — set to the real production domain before launch.
// Used for canonical URLs, Open Graph and JSON-LD. Vercel also exposes
// NEXT_PUBLIC_SITE_URL if you prefer to drive it from an env var.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.freshgroundfilms.co.uk';

export const SITE = {
  name: 'Fresh Ground Films',
  tagline: 'Video Storytelling with Soul',
  shortTagline: 'Video Storytelling with Soul',
  founder: 'Ross Gill',
  city: 'Exeter',
  region: 'Devon',
  country: 'United Kingdom',
  areaServed: 'United Kingdom',
  description:
    'Cinematic-quality video production based in Exeter, Devon. We create films that build emotional connection and drive engagement for healthcare, education, charity, business, culture and public-sector organisations across the UK.',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Field Notes' },
  { href: '/contact', label: 'Contact' },
] as const;
