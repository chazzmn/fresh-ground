/*
  Content for the SEO sector landing pages. Each is distinct: its own H1,
  intro tuned to that audience's real pain points, a relevant testimonial
  (referenced by author so it stays in sync with testimonials.ts) and a CTA.
*/

import { TESTIMONIALS, type Testimonial } from './testimonials';
import type { SectorSlug } from './sectors';

export interface LandingPage {
  /** URL segment, e.g. 'healthcare-video-production'. */
  slug: string;
  metaTitle: string;
  metaDescription: string;
  overline: string;
  h1: string;
  intro: string;
  /** 3 short "what we help with" points, phrased around real pain points. */
  points: { title: string; body: string }[];
  testimonialAuthor: string;
  /** Sector to pre-filter the /work grid link to (optional). */
  relatedSector?: SectorSlug;
  ctaLine: string;
}

const byAuthor = (author: string): Testimonial =>
  TESTIMONIALS.find((t) => t.author === author) ?? TESTIMONIALS[0];

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'video-production-exeter',
    metaTitle: 'Video Production in Exeter | Fresh Ground Films',
    metaDescription:
      'Cinematic video production based in Exeter, Devon. Films with soul for healthcare, education, charity, business and culture — serving Exeter and the whole of the UK.',
    overline: 'Exeter · Devon',
    h1: 'Video production in Exeter, made to be felt',
    intro:
      'We are a video production company based in Exeter, working with organisations across Devon and the whole of the UK. We are local enough to meet for a coffee and plan the shoot in person, and experienced enough to deliver films that hold their own anywhere. If your current video looks flat, feels generic, or simply isn’t getting watched, that is exactly the problem we exist to fix.',
    points: [
      {
        title: 'On your doorstep',
        body: 'Based in Exeter, we know Devon’s locations, light and logistics — which means less time working it out and more time getting the shot.',
      },
      {
        title: 'Built for the whole UK',
        body: 'Local roots, national reach. We regularly film across the country for clients who want the same crafted result wherever the story lives.',
      },
      {
        title: 'A relaxed set',
        body: 'Ross’s low-pressure, unhurried filming style puts real people at ease on camera — so contributors sound like themselves, not a script.',
      },
    ],
    testimonialAuthor: 'Fabrizio Nevola',
    ctaLine: 'Planning a film in Exeter or beyond? Let’s talk it through.',
  },
  {
    slug: 'healthcare-video-production',
    metaTitle: 'Healthcare Video Production | NHS & Care | Fresh Ground Films',
    metaDescription:
      'Sensitive, cinematic healthcare video production for NHS trusts and care organisations. Recruitment films, patient and staff stories that build trust — across the UK.',
    overline: 'Healthcare',
    h1: 'Healthcare films that recruit, reassure and ring true',
    intro:
      'Healthcare storytelling is a matter of trust. Get it wrong and it feels staged; get it right and it moves the people you most need to reach — the candidate deciding where to build a career, the patient deciding whether to walk through the door. We have produced recruitment and story films for NHS trusts over many years, always with the same priority: real people, told honestly, filmed with care.',
    points: [
      {
        title: 'Recruitment that converts',
        body: 'Films built to show the real team and the real work, so the right candidates recognise themselves and apply.',
      },
      {
        title: 'Handled with care',
        body: 'Patients, staff and sensitive settings treated with the discretion and calm they deserve, on set and in the edit.',
      },
      {
        title: 'A trusted partner',
        body: 'Years of repeat work with Devon Partnership NHS Trust — flexible, professional, and used to healthcare governance.',
      },
    ],
    testimonialAuthor: 'Devon Partnership NHS Trust',
    relatedSector: 'healthcare',
    ctaLine: 'Recruiting, or telling a patient story? We can help.',
  },
  {
    slug: 'charity-video-production',
    metaTitle: 'Charity Video Production | Fundraising Films | Fresh Ground Films',
    metaDescription:
      'Charity and non-profit video production that moves people to give and act. Beautifully crafted fundraising and campaign films built on real listening — UK-wide.',
    overline: 'Charity & Non-profit',
    h1: 'Charity films that move people to act',
    intro:
      'A charity film has one job: make someone feel something strongly enough to do something about it. That takes more than a montage and a music bed. It takes listening closely to what you actually need to say, then crafting it so the message lands without ever feeling like a hard sell. We make films that carry your cause with warmth — and give supporters a reason to give, share and come back.',
    points: [
      {
        title: 'Emotion with purpose',
        body: 'Every choice — pace, music, the face we hold on — is made to serve the ask, not just to look pretty.',
      },
      {
        title: 'We listen first',
        body: 'The best charity films start with a proper conversation about the change you’re trying to create. That’s where we begin.',
      },
      {
        title: 'Made to be shared',
        body: 'Delivered ready for the channels that matter — website, socials, appeals — so the film actually gets seen.',
      },
    ],
    testimonialAuthor: 'Jon Freeman',
    relatedSector: 'charity',
    ctaLine: 'Got a campaign or appeal coming up? Let’s make it land.',
  },
  {
    slug: 'education-video-production',
    metaTitle: 'Education Video Production | Universities & Research | Fresh Ground Films',
    metaDescription:
      'Education and academic video production for universities, research projects and schools. Make complex work clear, watchable and shareable — cinematic quality, UK-wide.',
    overline: 'Education & Research',
    h1: 'Education films that make the work land',
    intro:
      'Great research and teaching often gets buried under jargon and slide decks. Film is how you set it free — how you turn a dense body of work into something a prospective student, a funder or the wider public will actually watch to the end. We work closely with academics and institutions to translate complex ideas into clear, compelling films, drawing confident contributions out of people who don’t think of themselves as “on-camera” types.',
    points: [
      {
        title: 'Clarity from complexity',
        body: 'We turn research and academic work into films that are clear and watchable without dumbing anything down.',
      },
      {
        title: 'Contributors at ease',
        body: 'A relaxed interview style that helps academics and students speak naturally — no stiff, scripted delivery.',
      },
      {
        title: 'Reach beyond campus',
        body: 'Films that help your work travel further — to applicants, funders, partners and the public.',
      },
    ],
    testimonialAuthor: 'Fabrizio Nevola',
    relatedSector: 'education',
    ctaLine: 'Research to share, or a course to promote? Let’s talk.',
  },
];

export function landingByAuthor(author: string): Testimonial {
  return byAuthor(author);
}
