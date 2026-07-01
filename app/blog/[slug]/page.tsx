import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/Reveal';
import { SmartImage } from '@/components/SmartImage';
import { CTABand } from '@/components/CTABand';
import { POSTS, getPost, formatDate } from '@/content/blog';

interface Params {
  params: { slug: string };
}

// Pre-render every Field Note at build time (SSG).
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: 'Field Note not found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-line bg-paper-sand">
          <div className="shell py-24 sm:py-28">
            <Reveal className="max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ember-deep transition-colors hover:text-ember"
              >
                <span aria-hidden>←</span> Field Notes
              </Link>
              <p className="mt-6 text-xs font-semibold uppercase tracking-overline text-taupe">
                {formatDate(post.date)} · {post.readMins} min read
              </p>
              <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl">
                {post.title}
              </h1>
            </Reveal>
          </div>
        </header>

        <div className="shell py-14 sm:py-16">
          <Reveal className="mx-auto max-w-3xl">
            <figure className="overflow-hidden rounded-2xl border border-line shadow-card">
              <SmartImage
                src={post.cover}
                alt={post.coverAlt}
                label="Field note"
                loading="eager"
                className="aspect-[16/9] w-full object-cover"
              />
            </figure>

            <div className="mt-10 space-y-6 text-lg leading-relaxed text-coffee">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <Link href="/contact" className="btn-primary">
                Start a Project
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      {/* More notes */}
      {more.length > 0 && (
        <section aria-label="More field notes" className="shell pb-8">
          <h2 className="overline mb-6">More field notes</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl border border-line bg-paper-card p-6 shadow-card transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-overline text-taupe">
                  {formatDate(p.date)}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-cocoa">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-coffee">
                  {p.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
