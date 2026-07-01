/*
  The five real testimonials, used VERBATIM. Attribution is fixed — do not
  paraphrase or reassign quotes. `projectSlug` links each quote to the relevant
  portfolio piece so the carousel can show a matching still.
*/

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  /** Optional link to the related project (for the paired thumbnail). */
  projectSlug?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "It has been an absolutely brilliant experience working with Ross and his team at Fresh Ground Films. The films we've had made are produced exceptionally well - great to see, and clear in communicating the work we wanted to showcase.",
    author: 'Fabrizio Nevola',
    role: 'Chair in Art History & Visual Culture',
    projectSlug: 'chair-art-history',
  },
  {
    quote:
      'Fresh Ground worked on a project for the National Trust, telling the story of our apples from our orchards right through to our restaurants... He is highly professional, well organised and reliable. The final films look terrific and really help communicate our story to a wider audience.',
    author: 'National Trust',
    role: 'Client',
    projectSlug: 'national-trust-orchards',
  },
  {
    quote:
      'We have worked with Ross at Fresh Ground Films for a number of years and together we have produced some beautiful and moving films to support our recruitment efforts... They are always flexible, professional and a pleasure to work with.',
    author: 'Devon Partnership NHS Trust',
    role: 'Client',
    projectSlug: 'dpt-nhs-recruitment',
  },
  {
    quote:
      'The films are beautifully crafted, and it has been a pleasure to work with Fresh Ground Films, who really listened to what we wanted, and have provided an excellent service from start to finish.',
    author: 'Jon Freeman',
    role: 'Great Trees Project Officer',
    projectSlug: 'great-trees-project',
  },
  {
    quote:
      "Fresh Ground Films has made a couple of films for us, which we're delighted with. They've always been super easy to work with and a very talented team.",
    author: 'Eden Project',
    role: 'Client',
    projectSlug: 'eden-project-films',
  },
];
