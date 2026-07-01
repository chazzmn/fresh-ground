import Link from 'next/link';
import { SECTORS } from '@/content/sectors';
import { SectorIcon } from './SectorIcon';
import { Reveal } from './Reveal';

/*
  Sector strip: six warm tiles, each links to the /work grid pre-filtered by
  sector. Cards lift gently on hover with a terracotta accent — friendly and
  human, not a cold SaaS feature grid.
*/

export function SectorStrip() {
  return (
    <section aria-labelledby="sectors-heading" className="shell py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="overline">Who we work with</p>
        <h2 id="sectors-heading" className="display mt-4 text-3xl sm:text-4xl md:text-5xl">
          Six sectors. One way of working.
        </h2>
        <p className="mt-4 text-lg text-coffee">
          Different worlds, same starting point — a real person, a real moment,
          a story worth telling properly.
        </p>
      </Reveal>

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SECTORS.map((sector, i) => (
          <Reveal as="li" key={sector.slug} delay={(i % 3) * 0.06}>
            <Link
              href={`/work?sector=${sector.slug}`}
              className="group flex h-full min-h-[10rem] flex-col justify-between rounded-2xl border border-line bg-paper-card p-7 shadow-card transition-all duration-300 ease-gentle hover:-translate-y-1 hover:border-ember/40 hover:shadow-soft"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember/12 text-ember-deep transition-colors duration-300 group-hover:bg-ember/20">
                  <SectorIcon slug={sector.slug} />
                </span>
                <span
                  aria-hidden
                  className="text-taupe transition-all duration-300 ease-gentle group-hover:translate-x-1 group-hover:text-ember-deep"
                >
                  →
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl font-semibold tracking-tight text-cocoa">
                  {sector.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-coffee">
                  {sector.blurb}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
