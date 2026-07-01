import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SmartImage } from '@/components/SmartImage';
import { CTABand } from '@/components/CTABand';
import { POSTS, formatDate } from '@/content/blog';

export const metadata: Metadata = {
  title: 'Field Notes — Thoughts on Human Storytelling',
  description:
    'Field Notes from Fresh Ground Films — short pieces on finding the human story, filming real people, and making video that people understand, trust and feel.',
  alternates: { canonical: '/blog' },
};

/*
  FIELD NOTES (blog) index. Warm theme. First post is featured large, the rest
  in a card grid. Each links to /blog/[slug].
*/

export default function BlogIndexPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <header className="border-b border-line bg-paper-sand">
        <div className="shell py-28 sm:py-32">
          <Reveal className="max-w-3xl">
            <p className="overline">Field Notes</p>
            <h1 className="display mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Notes from the edit room.
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-coffee">
              Short thoughts on finding the human story, filming real people,
              and making video that actually gets watched.
            </p>
          </Reveal>
        </div>
      </header>

      <section aria-label="Articles" className="shell py-16 sm:py-20">
        {/* Featured post */}
        {featured && (
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-line bg-paper-card shadow-card transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-soft lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto">
                <SmartImage
                  src={featured.cover}
                  alt={featured.coverAlt}
                  label="Field note"
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-gentle group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="overline">
                  Latest · {formatDate(featured.date)}
                </p>
                <h2 className="display mt-4 text-2xl sm:text-3xl md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-prose leading-relaxed text-coffee">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember-deep">
                  Read the note
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-gentle group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Rest */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal as="article" key={post.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper-card shadow-card transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <SmartImage
                    src={post.cover}
                    alt={post.coverAlt}
                    label="Field note"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-gentle group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-overline text-taupe">
                    {formatDate(post.date)} · {post.readMins} min
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-cocoa">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-coffee">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ember-deep">
                    Read
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-gentle group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
