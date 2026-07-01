/*
  ════════════════════════════════════════════════════════════════════════
  PLACEHOLDER CONTROL FILE
  ════════════════════════════════════════════════════════════════════════
  Single source of truth for every asset / detail that must be swapped in
  before launch. Change it here once and it updates everywhere. Anything that
  cannot live in this file (e.g. the logo SVG markup, alt text next to a
  specific image) is marked inline with the same PLACEHOLDER_ prefix so a
  project-wide search for "PLACEHOLDER_" surfaces the full list.

  See README.md → "Pre-launch placeholder checklist".
  ════════════════════════════════════════════════════════════════════════
*/

export const PLACEHOLDERS = {
  // ── Direct contact details ────────────────────────────────────────────
  PHONE_NUMBER: 'PLACEHOLDER_PHONE_NUMBER', // e.g. '+44 1392 000000'
  PHONE_HREF: 'tel:PLACEHOLDER_PHONE_NUMBER', // e.g. 'tel:+441392000000'
  EMAIL: 'hello@freshgroundfilms.co.uk', // PLACEHOLDER_EMAIL — confirm real inbox
  EMAIL_HREF: 'mailto:hello@freshgroundfilms.co.uk',

  // ── Postal address (for JSON-LD LocalBusiness) ────────────────────────
  ADDRESS_STREET: 'PLACEHOLDER_STREET_ADDRESS',
  ADDRESS_LOCALITY: 'Exeter',
  ADDRESS_REGION: 'Devon',
  ADDRESS_POSTCODE: 'PLACEHOLDER_POSTCODE',
  ADDRESS_COUNTRY: 'GB',
  GEO_LAT: '50.7184', // PLACEHOLDER_GEO — Exeter approx; set exact studio coords
  GEO_LNG: '-3.5339',

  // ── Social links ──────────────────────────────────────────────────────
  // Instagram / Vimeo / Facebook are the real public Fresh Ground Films
  // profiles (pulled from their live site). LinkedIn left as a placeholder.
  INSTAGRAM_URL: 'https://instagram.com/freshgroundfilms',
  VIMEO_URL: 'https://vimeo.com/freshgroundfilms',
  FACEBOOK_URL: 'https://www.facebook.com/FreshGroundFilms/',
  LINKEDIN_URL: 'PLACEHOLDER_LINKEDIN_URL',

  // ── Brand ─────────────────────────────────────────────────────────────
  // The logo currently renders as a text wordmark component. Replace the
  // markup in components/Logo.tsx with the real SVG when supplied.
  LOGO_SVG: 'PLACEHOLDER_LOGO_SVG',

  // ── Hero + showreel (drop real files into /public/video and /public/img) ─
  // The hero background uses HERO_VIDEO with HERO_IMAGE as the poster / mobile
  // fallback. SHOWREEL_VIDEO is the full reel opened by "Watch showreel".
  HERO_VIDEO: '/video/PLACEHOLDER_HERO_VIDEO.mp4',
  HERO_IMAGE: '/img/PLACEHOLDER_HERO_IMAGE.jpg', // bright, warm, natural-light still
  SHOWREEL_VIDEO: '/video/PLACEHOLDER_HERO_VIDEO.mp4',
  SHOWREEL_POSTER: '/img/PLACEHOLDER_HERO_IMAGE.jpg',

  // Per-project videos + poster stills. Portfolio order 1–6.
  PORTFOLIO_VIDEO_1: '/video/PLACEHOLDER_PORTFOLIO_VIDEO_1.mp4',
  PORTFOLIO_VIDEO_2: '/video/PLACEHOLDER_PORTFOLIO_VIDEO_2.mp4',
  PORTFOLIO_VIDEO_3: '/video/PLACEHOLDER_PORTFOLIO_VIDEO_3.mp4',
  PORTFOLIO_VIDEO_4: '/video/PLACEHOLDER_PORTFOLIO_VIDEO_4.mp4',
  PORTFOLIO_VIDEO_5: '/video/PLACEHOLDER_PORTFOLIO_VIDEO_5.mp4',
  PORTFOLIO_VIDEO_6: '/video/PLACEHOLDER_PORTFOLIO_VIDEO_6.mp4',

  PORTFOLIO_POSTER_1: '/img/PLACEHOLDER_PORTFOLIO_POSTER_1.jpg',
  PORTFOLIO_POSTER_2: '/img/PLACEHOLDER_PORTFOLIO_POSTER_2.jpg',
  PORTFOLIO_POSTER_3: '/img/PLACEHOLDER_PORTFOLIO_POSTER_3.jpg',
  PORTFOLIO_POSTER_4: '/img/PLACEHOLDER_PORTFOLIO_POSTER_4.jpg',
  PORTFOLIO_POSTER_5: '/img/PLACEHOLDER_PORTFOLIO_POSTER_5.jpg',
  PORTFOLIO_POSTER_6: '/img/PLACEHOLDER_PORTFOLIO_POSTER_6.jpg',

  // ── People / stills ───────────────────────────────────────────────────
  FOUNDER_PORTRAIT: '/img/PLACEHOLDER_FOUNDER_PORTRAIT.jpg', // Ross Gill
  TEAM_PHOTO: '/img/PLACEHOLDER_TEAM_PHOTO.jpg',
  BTS_PHOTO_1: '/img/PLACEHOLDER_BTS_PHOTO_1.jpg',
  BTS_PHOTO_2: '/img/PLACEHOLDER_BTS_PHOTO_2.jpg',

  // ── Field Notes (blog) covers ─────────────────────────────────────────
  BLOG_COVER_1: '/img/PLACEHOLDER_BLOG_COVER_1.jpg',
  BLOG_COVER_2: '/img/PLACEHOLDER_BLOG_COVER_2.jpg',
  BLOG_COVER_3: '/img/PLACEHOLDER_BLOG_COVER_3.jpg',
  BLOG_COVER_4: '/img/PLACEHOLDER_BLOG_COVER_4.jpg',

  // ── Open Graph / share ────────────────────────────────────────────────
  OG_IMAGE: '/og/PLACEHOLDER_OG_IMAGE.jpg',
} as const;

export type PlaceholderKey = keyof typeof PLACEHOLDERS;
