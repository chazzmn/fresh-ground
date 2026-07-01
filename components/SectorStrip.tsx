import Link from 'next/link';
import { SECTORS } from '@/content/sectors';
import { SectorIcon } from './SectorIcon';
import { Reveal } from './Reveal';

/*
  Sector strip: six tiles, each links to the /work grid pre-filtered by sector.
  Intentionally asymmetric in feel — a thin ember rule appears on hover and the
  arrow slides — so it doesn't read like a SaaS feature grid.
*/

export function SectorStrip() {
  return (
    <section aria-labelledby="sectors-heading" className="shell py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="overline">Who we work with</p>
        <h2
          id="sectors-heading"
          className="display mt-4 text-3xl text-bone sm:text-4xl md:text-5xl"
        >
          Six sectors. One standard of craft.
        </h2>
      </Reveal>

      <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
        {SECTORS.map((sector, i) => (
          <Reveal
            as="li"
            key={sector.slug}
            delay={(i % 3) * 0.06}
            className="bg-ink"
          >
            <Link
              href={`/work?sector=${sector.slug}`}
              className="group flex h-full min-h-[9.5rem] flex-col justify-between bg-ink p-7 transition-colors duration-500 ease-cinema hover:bg-ink-raised"
            >
              <div className="flex items-start justify-between">
                <span className="text-ember transition-transform duration-500 ease-cinema group-hover:-translate-y-0.5">
                  <SectorIcon slug={sector.slug} />
                </span>
                <span
                  aria-hidden
                  className="translate-x-0 text-bone-faint transition-all duration-500 ease-cinema group-hover:translate-x-1 group-hover:text-ember"
                >
                  →
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl font-medium tracking-tight text-bone">
                  {sector.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-bone-faint">
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
