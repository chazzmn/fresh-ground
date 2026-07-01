/*
  Portfolio projects. Each references a video + poster placeholder from
  content/placeholders.ts so swapping real footage in is a one-file edit there.

  Client names are real Fresh Ground Films clients. Descriptions and outcome
  narratives are written to sound credible for each brief but should be
  confirmed with Ross before launch (marked project-level PLACEHOLDER where a
  specific claim/number would need sign-off).
*/

import { PLACEHOLDERS } from './placeholders';
import type { SectorSlug } from './sectors';

export interface Project {
  slug: string;
  client: string;
  title: string;
  /** One-line description shown on the card. */
  summary: string;
  sector: SectorSlug;
  video: string;
  poster: string;
  /** Descriptive alt for the poster still. */
  alt: string;
  /** Longer case-study narrative shown in the modal / detail view. */
  outcome: string;
  /** Whether it appears in the homepage "featured work" grid. */
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: 'national-trust-orchards',
    client: 'National Trust',
    title: 'From Orchard to Restaurant',
    summary:
      'The journey of the apple, from Trust orchards to the plates in their restaurants.',
    sector: 'culture',
    video: PLACEHOLDERS.PORTFOLIO_VIDEO_1,
    poster: PLACEHOLDERS.PORTFOLIO_POSTER_1,
    alt: 'PLACEHOLDER_ALT: National Trust orchard-to-restaurant story film still',
    outcome:
      'A short series following the Trust’s apples from blossom in the orchards through to the dishes served in their restaurants. Shot across the seasons to give the story real texture, the films helped communicate the provenance work to a much wider audience and now sit at the heart of the property’s visitor storytelling. [A] Specific reach/engagement figures to be confirmed with the client before publishing.',
    featured: true,
  },
  {
    slug: 'eden-project-films',
    client: 'Eden Project',
    title: 'Stories From the Biomes',
    summary:
      'A set of films capturing the people and purpose behind the Eden Project.',
    sector: 'culture',
    video: PLACEHOLDERS.PORTFOLIO_VIDEO_2,
    poster: PLACEHOLDERS.PORTFOLIO_POSTER_2,
    alt: 'PLACEHOLDER_ALT: Eden Project biome interior film still',
    outcome:
      'A couple of films made for the Eden Project, built around the people and ideas that make the place what it is. An easy, collaborative process from first call to final cut, delivering work the team were genuinely delighted with. [A] Confirm exact titles / campaign use before publishing.',
    featured: true,
  },
  {
    slug: 'dpt-nhs-recruitment',
    client: 'Devon Partnership NHS Trust',
    title: 'Reasons to Join',
    summary:
      'Beautiful, moving recruitment films to support NHS mental-health hiring.',
    sector: 'healthcare',
    video: PLACEHOLDERS.PORTFOLIO_VIDEO_3,
    poster: PLACEHOLDERS.PORTFOLIO_POSTER_3,
    alt: 'PLACEHOLDER_ALT: Devon Partnership NHS Trust recruitment film still',
    outcome:
      'An ongoing partnership across several years, producing a body of recruitment films to support hiring across the Trust. The brief each time is the same at heart: show the real people and the real work, honestly, so the right candidates see themselves in it. Flexible, low-pressure filming that puts contributors at ease on camera. [A] Confirm campaign metrics / vacancies filled before publishing.',
    featured: true,
  },
  {
    slug: 'chair-art-history',
    client: 'University — Chair in Art History & Visual Culture',
    title: 'The Renaissance City',
    summary:
      'Academic films that make complex research clear, watchable and shareable.',
    sector: 'education',
    video: PLACEHOLDERS.PORTFOLIO_VIDEO_4,
    poster: PLACEHOLDERS.PORTFOLIO_POSTER_4,
    alt: 'PLACEHOLDER_ALT: Art history academic research film still',
    outcome:
      'A set of films produced with Professor Fabrizio Nevola to bring academic research on Renaissance urban space to a wider public audience. Produced exceptionally well and clear in communicating the work — the relaxed interview style drawing out confident, natural contributions from academic contributors.',
    featured: true,
  },
  {
    slug: 'great-trees-project',
    client: 'Great Trees Project',
    title: 'The Trees That Outlive Us',
    summary:
      'A crafted conservation film about the trees worth protecting for good.',
    sector: 'charity',
    video: PLACEHOLDERS.PORTFOLIO_VIDEO_5,
    poster: PLACEHOLDERS.PORTFOLIO_POSTER_5,
    alt: 'PLACEHOLDER_ALT: Great Trees Project conservation film still',
    outcome:
      'A beautifully crafted film for the Great Trees Project, built on close listening to exactly what the team wanted to say. An excellent service from first conversation to delivery, resulting in a film that carries the project’s message with real warmth.',
    featured: false,
  },
  {
    slug: 'balance-coffee-brand',
    client: 'Balance Coffee',
    title: 'Ground With Intent',
    summary:
      'A brand film with the texture and pace of the product itself.',
    sector: 'business',
    video: PLACEHOLDERS.PORTFOLIO_VIDEO_6,
    poster: PLACEHOLDERS.PORTFOLIO_POSTER_6,
    alt: 'PLACEHOLDER_ALT: Balance Coffee brand film still',
    outcome:
      'A brand film for Balance Coffee designed to carry the feel of the product — considered, warm, a little bit obsessive about the details. Made to work across the website and social, giving the brand a piece of hero content it could build a campaign around. [A] Confirm deliverables / channels before publishing.',
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export function projectsBySector(sector: SectorSlug | 'all'): Project[] {
  if (sector === 'all') return PROJECTS;
  return PROJECTS.filter((p) => p.sector === sector);
}
