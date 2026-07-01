import { ContactForm } from './ContactForm';
import { PLACEHOLDERS } from '@/content/placeholders';
import { Reveal } from './Reveal';

/*
  Mid/closing CTA band, warm theme. Placed after the testimonials on the
  homepage and reusable elsewhere. Carries the id="contact" anchor that the hero
  secondary CTA and nav point to. Left column = human invitation + direct
  contact, right column = the form.
*/

export function CTABand() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="scroll-mt-24 border-t border-line bg-paper-sand py-20 sm:py-28"
    >
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="overline">Let&apos;s work together</p>
          <h2 id="cta-heading" className="display mt-4 text-4xl sm:text-5xl md:text-6xl">
            Let&apos;s make something worth watching.
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-coffee">
            Whether you have a clear brief or just a sense that film could help,
            start the conversation. We&apos;ll listen first, then tell you
            honestly what we&apos;d do and what it would take.
          </p>

          <dl className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <dt className="overline">Email</dt>
              <dd className="mt-1">
                {/* PLACEHOLDER_EMAIL */}
                <a
                  href={PLACEHOLDERS.EMAIL_HREF}
                  className="text-lg font-semibold text-cocoa transition-colors hover:text-ember-deep"
                >
                  {PLACEHOLDERS.EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="overline">Phone</dt>
              <dd className="mt-1">
                {/* PLACEHOLDER_PHONE_NUMBER */}
                <a
                  href={PLACEHOLDERS.PHONE_HREF}
                  className="text-lg font-semibold text-cocoa transition-colors hover:text-ember-deep"
                >
                  {PLACEHOLDERS.PHONE_NUMBER}
                </a>
              </dd>
            </div>
            <div>
              <dt className="overline">Studio</dt>
              <dd className="mt-1 text-lg text-coffee">
                Exeter, Devon — working across the whole of the UK
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
