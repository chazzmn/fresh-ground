import type { Config } from 'tailwindcss';

/*
  ────────────────────────────────────────────────────────────────────────
  BRAND COLOUR SWAP MARKER
  ────────────────────────────────────────────────────────────────────────
  These are the working brand values. When the real Fresh Ground Films logo
  file is supplied, replace the hex values below with the exact brand colours.
    - ink:     deep charcoal / near-black background
    - bone:    warm off-white text
    - ember:   warm terracotta/amber accent (used sparingly for CTAs/accents)
  Search the codebase for "BRAND COLOUR SWAP MARKER" to find every place a
  colour decision was made.
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
        // PLACEHOLDER_BRAND_COLOURS — swap to exact values from real logo
        ink: {
          DEFAULT: '#0D0D0D',
          soft: '#141414',
          raised: '#1B1A18',
          line: '#2A2825',
        },
        bone: {
          DEFAULT: '#F5F2EC',
          muted: '#B7B1A6',
          faint: '#8A857C',
        },
        ember: {
          DEFAULT: '#C97C42',
          soft: '#D9945E',
          deep: '#A9612F',
        },
      },
      fontFamily: {
        // Editorial display serif for headings
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        // Clean sans for body
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        overline: '0.22em',
      },
      maxWidth: {
        prose: '68ch',
        shell: '90rem',
      },
      transitionTimingFunction: {
        // slow, confident cinematic easing
        cinema: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.12) translate3d(0,-1.5%,0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 18s ease-out forwards',
        'fade-in': 'fade-in 1.2s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
