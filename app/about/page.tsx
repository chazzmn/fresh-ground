import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { CTABand } from '@/components/CTABand';
import { SmartImage } from '@/components/SmartImage';
import { PLACEHOLDERS } from '@/content/placeholders';

export const metadata: Metadata = {
  title: 'About — Ross Gill & the Fresh Ground Approach',
  description:
    'Fresh Ground Films is a small, Certified B Corp film studio led by Ross Gill in Exeter, Devon. A relaxed, low-pressure filming style and warm, human craft — meet the team.',
  alternates: { canonical: '/about' },
};

/*
  ABOUT — warm theme.
  Founder story (Ross Gill), Our Approach (Listen / Reveal / Shape, echoing
  their real process), team / behind-the-scenes stills with graceful fallbacks.
*/

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-line bg-paper-sand">
        <div className="shell py-28 sm:py-32">
          <Reveal className="max-w-3xl">
            <p className="overline">About</p>
            <h1 className="display mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              A camera, a good ear, and roots in Devon.
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-coffee">
              Fresh Ground Films is a small film studio based in Exeter, working
              across the UK. We&apos;re a Certified B Corp, and we work with
              organisations whose stories are worth telling properly.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Founder story */}
      <section aria-labelledby="founder-heading" className="shell py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal>
            <p className="overline">Founder</p>
            <h2 id="founder-heading" className="display mt-4 text-3xl sm:text-4xl">
              Ross Gill
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-coffee">
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
                with a relaxed, low-pressure style that captures interview
                material without the pressure that can come with a camera and
                microphone pointed at you — so a nervous first-timer or a busy
                consultant comes across as themselves, not a rabbit in the
                headlights.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-2xl border border-line shadow-card">
              {/* PLACEHOLDER_FOUNDER_PORTRAIT */}
              <SmartImage
                src={PLACEHOLDERS.FOUNDER_PORTRAIT}
                alt="PLACEHOLDER_ALT: Ross Gill, founder of Fresh Ground Films, on location in Devon"
                label="Ross Gill — portrait"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Our approach — Listen / Reveal / Shape */}
      <section
        aria-labelledby="approach-heading"
        className="border-t border-line bg-paper-sand py-20 sm:py-28"
      >
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="overline">How we work</p>
            <h2 id="approach-heading" className="display mt-4 text-3xl sm:text-4xl md:text-5xl">
              Warm craft, built on listening.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: 'Listen',
                body: 'We begin by understanding the project, the audience and what the film needs to make clear. Clients tell us we really listen — and it shows in the cut.',
              },
              {
                title: 'Reveal',
                body: 'We look for the people, moments and meaning that make the story real — the point where a bigger idea shows up in someone’s life or work.',
              },
              {
                title: 'Shape',
                body: 'We film and edit with care, creating a piece that feels honest, useful and considered. Organised, reliable, and a genuine pleasure to work with.',
              },
            ].map((item, i) => (
              <Reveal
                as="article"
                key={item.title}
                delay={i * 0.06}
                className="rounded-2xl border border-line bg-paper-card p-7 shadow-card"
              >
                <span className="font-display text-2xl font-bold text-ember-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-cocoa">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-coffee">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team / behind the scenes */}
      <section aria-labelledby="team-heading" className="shell py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="overline">Behind the scenes</p>
          <h2 id="team-heading" className="display mt-4 text-3xl sm:text-4xl">
            Small studio, big care.
          </h2>
          <p className="mt-4 max-w-prose text-coffee">
            We keep crews lean and considered — enough hands to get it right,
            few enough to stay nimble and keep every shoot personal.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <Reveal className="sm:col-span-2">
            {/* PLACEHOLDER_TEAM_PHOTO */}
            <SmartImage
              src={PLACEHOLDERS.TEAM_PHOTO}
              alt="PLACEHOLDER_ALT: Fresh Ground Films team on a shoot in natural light"
              label="Team on location"
              className="aspect-[16/10] w-full rounded-2xl border border-line object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={0.06}>
            {/* PLACEHOLDER_BTS_PHOTO_1 */}
            <SmartImage
              src={PLACEHOLDERS.BTS_PHOTO_1}
              alt="PLACEHOLDER_ALT: Behind the scenes — camera setup on location in Devon"
              label="Behind the scenes"
              className="aspect-[4/3] w-full rounded-2xl border border-line object-cover shadow-card lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
