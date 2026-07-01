import type { SectorSlug } from '@/content/sectors';

/*
  Minimal, hand-drawn-feeling line icons — one per sector. Deliberately not
  emoji and not a generic icon-font: thin strokes that read as editorial marks
  rather than UI chrome. currentColor so they inherit hover/active colour.
*/

const common = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function SectorIcon({ slug }: { slug: SectorSlug }) {
  switch (slug) {
    case 'healthcare':
      return (
        <svg {...common}>
          <path d="M4 13h3l2-5 3 9 2-6 1.5 2H20" />
        </svg>
      );
    case 'education':
      return (
        <svg {...common}>
          <path d="M12 5 2.5 9.2 12 13.4l9.5-4.2L12 5Z" />
          <path d="M6.5 11v4.2c0 1 2.5 2.3 5.5 2.3s5.5-1.3 5.5-2.3V11" />
          <path d="M21.5 9.2v4.3" />
        </svg>
      );
    case 'charity':
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-9.4A3.6 3.6 0 0 1 12 8a3.6 3.6 0 0 1 7 2.6c0 5-7 9.4-7 9.4Z" />
        </svg>
      );
    case 'business':
      return (
        <svg {...common}>
          <path d="M4 20V9l8-4 8 4v11" />
          <path d="M4 20h16" />
          <path d="M9 20v-5h6v5" />
        </svg>
      );
    case 'culture':
      return (
        <svg {...common}>
          <path d="M5 21V6l7-3 7 3v15" />
          <path d="M9 21v-6h6v6" />
          <path d="M9 9h.01M15 9h.01" />
        </svg>
      );
    case 'public-sector':
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V10m14 11V10" />
          <path d="M9 21V10m6 11V10" />
          <path d="M3.5 10 12 4l8.5 6" />
        </svg>
      );
    default:
      return null;
  }
}
