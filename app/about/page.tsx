import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { CTABand } from '@/components/CTABand';
import { PLACEHOLDERS } from '@/content/placeholders';

export const metadata: Metadata = {
  title: 'About — Ross Gill & the Fresh Ground Approach',
  description:
    'Fresh Ground Films is led by Ross Gill from Exeter, Devon. A relaxed, low-pressure filming style and cinematic craft — meet the team behind the films.',
  alternates: { canonical: '/about' },
};

/*
  ABOUT
  Founder story (Ross Gill), Our Approach, team / behind-the-scenes stills.
*/

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-ink-line">
        <div className="shell py-28 sm:py-32">
          <Reveal className="max-w-3xl">
            <p className="overline">About</p>
            <h1 className="display mt-5 text-4xl text-bone sm:text-5xl md:text-6xl lg:text-7xl">
              A camera, a good ear, and roots in Devon.
            </h1>
          </Reveal>
        </div>
      </header>

      {/* Founder story */}
      <section
        aria-labelledby="founder-heading"
        className="shell py-20 sm:py-28"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal>
            <p className="overline">Founder</p>
            <h2
              id="founder-heading"
              className="display mt-4 text-3xl text-bone sm:text-4xl"
            >
              Ross Gill
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-bone-muted">
              <p>
                Fresh Ground Films started in Exeter and never left. Ross set it
                up around a simple belief: the best films are not the loudest or
                the slickest, but the ones that make you feel something true. He
                has spent years earning the trust of clients who come back
                project after project — from NHS trusts to the National Trust —
                because the work lands and the process is a pleasure.
              </p>
              <p>
                Being rooted in Devon matters. Ross knows the light here, the
                lanes and the locations, and he brings the same eye to a shoot
                in Exeter as to one in Edinburgh. Local enough to plan over a
                coffee, experienced enough to deliver work that holds up
                anywhere.
              </p>
              <p>
                The thing clients mention most is the ease of it. Ross films
                with a relaxed, low-pressure style that puts people at their
                ease — so a nervous first-timer or a busy consultant comes
                across as themselves, not a rabbit in the headlights. As one
                academic client put it, the films are{' '}
                <span className="text-bone">
                  &ldquo;produced exceptionally well&hellip; clear in
                  communicating the work&rdquo;
                </span>
                 — and getting there never feels like hard work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-2xl border border-ink-line">
              {/* PLACEHOLDER_FOUNDER_PORTRAIT */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PLACEHOLDERS.FOUNDER_PORTRAIT}
                alt="PLACEHOLDER_ALT: Ross Gill, founder of Fresh Ground Films, on location in Devon"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Our approach */}
      <section
        aria-labelledby="approach-heading"
        className="border-t border-ink-line bg-ink-soft py-20 sm:py-28"
      >
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="overline">Our approach</p>
            <h2
              id="approach-heading"
              className="display mt-4 text-3xl text-bone sm:text-4xl md:text-5xl"
            >
              Cinematic craft, built on listening.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {[
              {
                title: 'We listen first',
                body: 'Before a single frame, we get clear on what you actually need to say and who needs to hear it. Clients tell us we really listen — and it shows in the cut.',
              },
              {
                title: 'We shoot for feeling',
                body: 'Cinematic quality is not decoration. Every choice — light, pace, sound — is made to build a real, emotional connection with your audience.',
              },
              {
                title: 'We make it easy',
                body: 'Organised, reliable, and calm on set. Flexible when plans change, and a genuine pleasure to work with from first call to final delivery.',
              },
            ].map((item, i) => (
              <Reveal
                as="article"
                key={item.title}
                delay={i * 0.06}
                className="border-t border-ink-line pt-6"
              >
                <span className="font-display text-2xl text-ember">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-bone">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-bone-muted">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team / behind the scenes */}
      <section
        aria-labelledby="team-heading"
        className="shell py-20 sm:py-28"
      >
        <Reveal className="max-w-2xl">
          <p className="overline">Behind the scenes</p>
          <h2
            id="team-heading"
            className="display mt-4 text-3xl text-bone sm:text-4xl"
          >
            Small team, big care.
          </h2>
          <p className="mt-4 max-w-prose text-bone-muted">
            We keep crews lean and considered — enough hands to get it right,
            few enough to stay nimble and keep every shoot personal.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <Reveal className="sm:col-span-2">
            {/* PLACEHOLDER_TEAM_PHOTO */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PLACEHOLDERS.TEAM_PHOTO}
              alt="PLACEHOLDER_ALT: Fresh Ground Films team on a shoot"
              className="aspect-[16/10] w-full rounded-xl border border-ink-line object-cover"
            />
          </Reveal>
          <Reveal delay={0.06}>
            {/* PLACEHOLDER_BTS_PHOTO_1 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PLACEHOLDERS.BTS_PHOTO_1}
              alt="PLACEHOLDER_ALT: Behind the scenes — camera setup on location in Devon"
              className="aspect-[4/3] w-full rounded-xl border border-ink-line object-cover lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
