import type { Metadata } from 'next';
import { Suspense } from 'react';
import { WorkGrid } from '@/components/WorkGrid';
import { CTABand } from '@/components/CTABand';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Work — Cinematic Films Across Six Sectors',
  description:
    'Selected video production work by Fresh Ground Films — healthcare, education, charity, business, culture and public sector films for organisations across the UK.',
  alternates: { canonical: '/work' },
};

/*
  WORK / PORTFOLIO
  Filterable grid (client-side). WorkGrid reads ?sector= from the URL, so it is
  wrapped in Suspense (required for useSearchParams in the App Router).
*/

export default function WorkPage() {
  return (
    <>
      <header className="border-b border-line bg-paper-sand">
        <div className="shell py-28 sm:py-32">
          <Reveal className="max-w-3xl">
            <p className="overline">Selected work</p>
            <h1 className="display mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              The reel, filtered how you like it.
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-coffee">
              A cross-section of recent projects. Filter by sector, or watch the
              lot — every piece opens to a short case study and the film itself.
            </p>
          </Reveal>
        </div>
      </header>

      <section aria-label="Portfolio" className="shell py-14 sm:py-16">
        <Suspense fallback={<p className="py-16 text-taupe">Loading work…</p>}>
          <WorkGrid />
        </Suspense>
      </section>

      <CTABand />
    </>
  );
}
