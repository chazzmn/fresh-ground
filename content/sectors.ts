/*
  The six sectors Fresh Ground Films serves. `slug` doubles as the portfolio
  filter key and the query param used on /work (e.g. /work?sector=healthcare).
*/

export type SectorSlug =
  | 'healthcare'
  | 'education'
  | 'charity'
  | 'business'
  | 'culture'
  | 'public-sector';

export interface Sector {
  slug: SectorSlug;
  label: string;
  /** Short line used on the homepage sector strip. */
  blurb: string;
}

export const SECTORS: Sector[] = [
  {
    slug: 'healthcare',
    label: 'Healthcare',
    blurb: 'Recruitment, patient and staff stories told with care.',
  },
  {
    slug: 'education',
    label: 'Education',
    blurb: 'Research, campus and academic work made vivid.',
  },
  {
    slug: 'charity',
    label: 'Charity',
    blurb: 'Films that move people to give, act and share.',
  },
  {
    slug: 'business',
    label: 'Business',
    blurb: 'Brand, product and culture films that convert.',
  },
  {
    slug: 'culture',
    label: 'Culture',
    blurb: 'Heritage and the arts, shot with real feeling.',
  },
  {
    slug: 'public-sector',
    label: 'Public Sector',
    blurb: 'Clear, human communication at scale.',
  },
];

export const SECTOR_BY_SLUG: Record<SectorSlug, Sector> = Object.fromEntries(
  SECTORS.map((s) => [s.slug, s]),
) as Record<SectorSlug, Sector>;

export function sectorLabel(slug: SectorSlug): string {
  return SECTOR_BY_SLUG[slug]?.label ?? slug;
}
