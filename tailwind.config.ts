import type { Config } from 'tailwindcss';

/*
  ────────────────────────────────────────────────────────────────────────
  BRAND COLOUR SWAP MARKER
  ────────────────────────────────────────────────────────────────────────
  Warm, bright brand palette — matched to Fresh Ground Films' real identity
  (warm, human, approachable; not the earlier dark "cinema noir" theme).

    - paper / sand / card : warm creams — page + section backgrounds
    - cocoa / coffee / taupe : warm browns — text (never pure black)
    - ember : terracotta/amber accent, used generously for CTAs, underlines,
              dividers and highlights

  NOTE: the live freshgroundfilms.co.uk brand currently leans GREEN. Charlie
  asked to keep the terracotta/amber accent, so that is what's set here. To
  switch to their green, change the `ember` values below (single-file swap).
  Search the codebase for "BRAND COLOUR SWAP MARKER" for related spots.
  ────────────────────────────────────────────────────────────────────────
*/

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // PLACEHOLDER_BRAND_COLOURS — confirm against the real logo file
        paper: {
          DEFAULT: '#FBF6EE', // main warm off-white background
          sand: '#F3E9DA', // slightly warmer alternate section background
          card: '#FFFDF8', // raised cards / form surfaces
        },
        line: {
          DEFAULT: '#E8DCC9', // warm hairline border
          soft: '#F0E7D8',
        },
        cocoa: '#2E2620', // headings — dark warm brown (not pure black)
        coffee: '#574C42', // body copy
        taupe: '#8A7C6C', // muted / secondary
        ember: {
          DEFAULT: '#C97C42', // terracotta/amber accent
          soft: '#D9945E',
          deep: '#A85C2A', // higher-contrast shade for small accent text
        },
      },
      fontFamily: {
        // Warm, rounded, human sans for headings
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        // Warm sans for body
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        // Flowing script for the logotype (PLACEHOLDER_LOGO_SVG stand-in)
        script: ['var(--font-script)', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        overline: '0.18em',
      },
      maxWidth: {
        prose: '64ch',
        shell: '88rem',
      },
      transitionTimingFunction: {
        // gentle, warm easing
        gentle: 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      boxShadow: {
        soft: '0 18px 40px -24px rgba(94, 66, 41, 0.35)',
        card: '0 10px 30px -18px rgba(94, 66, 41, 0.28)',
      },
      keyframes: {
        'soft-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'soft-zoom': 'soft-zoom 20s ease-out forwards',
        'fade-in': 'fade-in 1s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
