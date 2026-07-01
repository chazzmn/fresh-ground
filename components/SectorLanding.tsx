import Link from 'next/link';
import type { LandingPage } from '@/content/landings';
import { landingByAuthor } from '@/content/landings';
import { Reveal } from './Reveal';
import { CTABand } from './CTABand';

/*
  Shared template for the SEO sector landing pages. Distinct content per page
  comes in via the `page` prop (see content/landings.ts); the layout stays
  consistent for a coherent brand feel. Single H1 per page.
*/

export function SectorLanding({ page }: { page: LandingPage }) {
  const testimonial = landingByAuthor(page.testimonialAuthor);

  return (
    <>
      {/* Header */}
      <header className="relative overflow-hidden border-b border-ink-line">
        <div className="grain absolute inset-0 opacity-60" />
        <div className="shell relative py-28 sm:py-36">
          <Reveal className="max-w-3xl">
            <p className="overline">{page.overline}</p>
            <h1 className="display mt-5 text-4xl text-bone sm:text-5xl md:text-6xl lg:text-7xl">
              {page.h1}
            </h1>
            <p className="mt-7 max-w-prose text-lg leading-relaxed text-bone-muted">
              {page.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn-primary">
                Start a Project
              </Link>
              <Link
                href={
                  page.relatedSector
                    ? `/work?sector=${page.relatedSector}`
                    : '/work'
                }
                className="btn-ghost"
              >
                See related work
              </Link>
            </div>
          </Reveal>
        </div>
      </header>

      {/* What we help with */}
      <section
        aria-label="How we help"
        className="shell py-20 sm:py-28"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {page.points.map((point, i) => (
            <Reveal
              as="article"
              key={point.title}
              delay={i * 0.06}
              className="border-t border-ink-line pt-6"
            >
              <span className="font-display text-2xl text-ember">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-4 font-display text-xl font-medium tracking-tight text-bone">
                {point.title}
              </h2>
              <p className="mt-2 leading-relaxed text-bone-muted">
                {point.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Relevant testimonial */}
      <section
        aria-label="Client testimonial"
        className="border-y border-ink-line bg-ink-soft py-20 sm:py-24"
      >
        <div className="shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span aria-hidden className="font-display text-6xl text-ember/40">
              “
            </span>
            <blockquote className="-mt-4">
              <p className="font-display text-2xl font-light leading-relaxed text-bone sm:text-3xl">
                {testimonial.quote}
              </p>
            </blockquote>
            <p className="mt-6 font-medium text-bone">{testimonial.author}</p>
            <p className="text-sm text-bone-faint">{testimonial.role}</p>
          </Reveal>
        </div>
      </section>

      {/* CTA line + form */}
      <div className="shell pt-16">
        <Reveal className="max-w-2xl">
          <p className="font-display text-2xl font-light text-bone sm:text-3xl">
            {page.ctaLine}
          </p>
        </Reveal>
      </div>
      <CTABand />
    </>
  );
}
