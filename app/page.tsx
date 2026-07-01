import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { SectorStrip } from '@/components/SectorStrip';
import { FeaturedWork } from '@/components/FeaturedWork';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { CTABand } from '@/components/CTABand';
import { Reveal } from '@/components/Reveal';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: '/' },
};

/*
  HOME
  Hero → Intro → Sector strip → Featured work (#work) → Testimonials →
  Closing CTA band with contact form (#contact).
*/

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro — real positioning copy */}
      <section aria-label="Introduction" className="shell py-20 sm:py-28">
        <Reveal className="max-w-4xl">
          <p className="overline">Fresh Ground Films</p>
          <p className="mt-6 font-display text-2xl font-medium leading-[1.3] tracking-tightest text-cocoa sm:text-3xl md:text-[2.35rem] md:leading-[1.28]">
            We produce cinematic quality films that create a powerful connection
            with your audience and inspire action. Based in Exeter, we serve the
            whole of the UK across healthcare, education, charity, business,
            culture and public sectors.
          </p>
        </Reveal>
      </section>

      <SectorStrip />
      <FeaturedWork />
      <TestimonialCarousel />
      <CTABand />
    </>
  );
}
