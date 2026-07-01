import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { PLACEHOLDERS } from '@/content/placeholders';

export const metadata: Metadata = {
  title: 'Contact — Start a Project',
  description:
    'Start a video project with Fresh Ground Films. Tell us what you are trying to say and who needs to hear it. Based in Exeter, Devon — working across the UK.',
  alternates: { canonical: '/contact' },
};

/*
  CONTACT
  The old site had no contact form at all — this is the fix. Clear form plus
  direct details and social links, all above the fold on desktop.
*/

export default function ContactPage() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24"
    >
      <div className="shell py-28 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: invitation + details */}
          <Reveal>
            <p className="overline">Start a project</p>
            <h1
              id="contact-heading"
              className="display mt-5 text-4xl text-bone sm:text-5xl md:text-6xl"
            >
              Let&apos;s make something worth watching.
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-bone-muted">
              Whether you have a detailed brief or just a hunch that film could
              help, this is the place to start. We read every enquiry ourselves
              and reply honestly — including when we think we are not the right
              fit.
            </p>

            <dl className="mt-10 space-y-6 border-t border-ink-line pt-8">
              <div>
                <dt className="overline">Email</dt>
                <dd className="mt-1">
                  {/* PLACEHOLDER_EMAIL */}
                  <a
                    href={PLACEHOLDERS.EMAIL_HREF}
                    className="text-lg text-bone transition-colors hover:text-ember"
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
                    className="text-lg text-bone transition-colors hover:text-ember"
                  >
                    {PLACEHOLDERS.PHONE_NUMBER}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="overline">Studio</dt>
                <dd className="mt-1 text-lg text-bone-muted">
                  Exeter, Devon — working across the whole of the UK
                </dd>
              </div>
              <div>
                <dt className="overline">Follow</dt>
                <dd className="mt-2 flex gap-5 text-sm uppercase tracking-overline">
                  {/* PLACEHOLDER social links */}
                  <a
                    href={PLACEHOLDERS.INSTAGRAM_URL}
                    className="text-bone-muted transition-colors hover:text-ember"
                  >
                    Instagram
                  </a>
                  <a
                    href={PLACEHOLDERS.VIMEO_URL}
                    className="text-bone-muted transition-colors hover:text-ember"
                  >
                    Vimeo
                  </a>
                  <a
                    href={PLACEHOLDERS.LINKEDIN_URL}
                    className="text-bone-muted transition-colors hover:text-ember"
                  >
                    LinkedIn
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
