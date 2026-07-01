/*
  Field Notes (the blog). Fresh Ground Films' real site calls its blog
  "Field Notes", so we match that. These posts are PLACEHOLDER content written
  in their real voice — swap the bodies for the actual articles before launch.
  The first item mirrors a real post title from their live site.
*/

import { PLACEHOLDERS } from './placeholders';

export interface BlogPost {
  slug: string;
  title: string;
  /** ISO date. */
  date: string;
  readMins: number;
  excerpt: string;
  cover: string;
  coverAlt: string;
  /** Simple paragraph array for the placeholder body. */
  body: string[];
}

export const POSTS: BlogPost[] = [
  {
    slug: 'before-the-camera-finding-the-human-story',
    title: 'Before the camera: finding the human story',
    date: '2026-05-18',
    readMins: 4,
    excerpt:
      'Most briefs begin with a message — a project to explain, a team to recruit for. The strongest films usually begin somewhere more human.',
    cover: PLACEHOLDERS.BLOG_COVER_1,
    coverAlt:
      'PLACEHOLDER_ALT: warm natural-light still from a Fresh Ground Films shoot',
    body: [
      'Most briefs begin with a message. A project to explain. A service to make visible. A team to recruit for. A campaign people need to care about.',
      'But the strongest films usually begin somewhere more human — with a person, a place, a moment, a reason to believe.',
      'We listen for the point where the work becomes real: where a bigger idea shows up in someone’s life, team, community or experience. That is where the film starts.',
      '[A] PLACEHOLDER body — replace with the full Field Note from the live site before launch.',
    ],
  },
  {
    slug: 'why-recruitment-films-should-feel-like-real-people',
    title: 'Why recruitment films should feel like real people',
    date: '2026-04-02',
    readMins: 5,
    excerpt:
      'The best recruitment film isn’t a advert for a job. It’s a mirror — so the right candidate sees themselves in the work and reaches out.',
    cover: PLACEHOLDERS.BLOG_COVER_2,
    coverAlt:
      'PLACEHOLDER_ALT: candid on-set moment during an NHS recruitment shoot',
    body: [
      'People need to see themselves in the work. A real story can show culture, purpose, care and what it feels like to belong, contribute or take part.',
      'When we make recruitment films — for NHS teams, universities, people-centred organisations — the aim is never a glossy pitch. It’s honesty, filmed well.',
      '[A] PLACEHOLDER body — replace with a full article before launch.',
    ],
  },
  {
    slug: 'a-relaxed-set-gets-honest-answers',
    title: 'A relaxed set gets honest answers',
    date: '2026-02-27',
    readMins: 3,
    excerpt:
      'A camera and a microphone can freeze anyone. Here’s how we keep an interview feeling like a conversation, not an exam.',
    cover: PLACEHOLDERS.BLOG_COVER_3,
    coverAlt:
      'PLACEHOLDER_ALT: contributor at ease during a relaxed interview setup',
    body: [
      'The pressure that comes with a camera pointed at you is real. It’s also avoidable.',
      'We slow things down, keep the crew small, and treat the interview as a conversation. The result is contributors who sound like themselves — warm, natural and believable.',
      '[A] PLACEHOLDER body — replace with a full article before launch.',
    ],
  },
  {
    slug: 'what-a-human-story-can-do-for-impact',
    title: 'What a human story can do for impact',
    date: '2026-01-15',
    readMins: 4,
    excerpt:
      'Evidence needs to be human. A real story shows where a project or piece of research became real — who it reached, and why it mattered.',
    cover: PLACEHOLDERS.BLOG_COVER_4,
    coverAlt:
      'PLACEHOLDER_ALT: community participant featured in an impact film',
    body: [
      'For research, funded projects, lived experience and community work, a film can do what a report can’t: make the impact felt.',
      'We look for the moment a project reached someone — and build the film around it, so the evidence lands with people as well as funders.',
      '[A] PLACEHOLDER body — replace with a full article before launch.',
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
