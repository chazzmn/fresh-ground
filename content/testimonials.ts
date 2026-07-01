/*
  The six real testimonials, used VERBATIM with single, correct attributions.
  (Fixed: the Fabrizio Nevola quote was previously duplicated/misattributed —
  now deduplicated, and the Balance Coffee / James Bellis quote added.)
  `projectSlug` links each quote to the relevant portfolio piece so the carousel
  can show a matching still.
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
      "I've especially appreciated the relaxed way he manages to capture interview material without the pressure that can come with a camera and microphone pointed at you! Every time I have been impressed with the final result and enjoyed the actual process. Can't recommend highly enough!",
    author: 'Fabrizio Nevola',
    role: 'Chair in Art History & Visual Culture',
    projectSlug: 'chair-art-history',
  },
  {
    quote:
      "It has been great working with Fresh Ground Films. Ross came in to help us at a difficult time during Covid-19 to produce a 30 second social media video to support our advertising efforts. I'd highly recommend his services.",
    author: 'James Bellis',
    role: 'Director, Balance Coffee',
    projectSlug: 'balance-coffee-brand',
  },
  {
    quote:
      "Fresh Ground Films has made a couple of films for us, which we're delighted with. They've always been super easy to work with and a very talented team.",
    author: 'Eden Project',
    role: 'Client',
    projectSlug: 'eden-project-films',
  },
  {
    quote:
      'Fresh Ground worked on a project for the National Trust, telling the story of our apples from our orchards right through to our restaurants. Throughout the planning and development process Ross was easy to talk to and very willing to accommodate all our ideas and requirements. He is highly professional, well organised and reliable. The final films look terrific and really help communicate our story to a wider audience.',
    author: 'National Trust',
    role: 'Client',
    projectSlug: 'national-trust-orchards',
  },
  {
    quote:
      'We have worked with Ross at Fresh Ground Films for a number of years and together we have produced some beautiful and moving films to support our recruitment efforts and to showcase some of the varied work we do. They are always flexible, professional and a pleasure to work with.',
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
];
