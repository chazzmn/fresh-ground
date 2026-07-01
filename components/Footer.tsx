import Link from 'next/link';
import { Logo } from './Logo';
import { NAV_LINKS, SITE } from '@/content/site';
import { PLACEHOLDERS } from '@/content/placeholders';
import { LANDING_PAGES } from '@/content/landings';

/*
  Global footer, warm theme. Appears on every page and doubles as a secondary
  conversion point: a clear "Start a Project" CTA plus direct contact + real
  social links, and a nod to their real Certified B Corp status.
*/

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-sand">
      <div className="shell py-16 sm:py-20">
        {/* Footer CTA */}
        <div className="flex flex-col gap-8 border-b border-line pb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="overline">Start a project</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl md:text-5xl">
              Let&apos;s make something together.
            </h2>
            <p className="mt-4 max-w-prose text-coffee">
              Tell us what you&apos;re trying to communicate, who it needs to
              reach and why it matters now. We&apos;ll help you work out where
              the story is.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Start a Project
          </Link>
        </div>

        {/* Link columns */}
        <div className="mt-14 grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-coffee">
              {SITE.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="overline">Explore</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-coffee transition-colors hover:text-ember-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="overline">Sectors</h3>
            <ul className="mt-4 space-y-3">
              {LANDING_PAGES.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="text-sm font-medium text-coffee transition-colors hover:text-ember-deep"
                  >
                    {p.overline}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="overline">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                {/* PLACEHOLDER_EMAIL */}
                <a
                  href={PLACEHOLDERS.EMAIL_HREF}
                  className="font-medium text-coffee transition-colors hover:text-ember-deep"
                >
                  {PLACEHOLDERS.EMAIL}
                </a>
              </li>
              <li>
                {/* PLACEHOLDER_PHONE_NUMBER */}
                <a
                  href={PLACEHOLDERS.PHONE_HREF}
                  className="font-medium text-coffee transition-colors hover:text-ember-deep"
                >
                  {PLACEHOLDERS.PHONE_NUMBER}
                </a>
              </li>
              <li className="pt-2 text-taupe">
                {SITE.city}, {SITE.region}
              </li>
            </ul>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-overline">
              <li>
                <a
                  href={PLACEHOLDERS.INSTAGRAM_URL}
                  className="text-taupe transition-colors hover:text-ember-deep"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={PLACEHOLDERS.VIMEO_URL}
                  className="text-taupe transition-colors hover:text-ember-deep"
                >
                  Vimeo
                </a>
              </li>
              <li>
                <a
                  href={PLACEHOLDERS.FACEBOOK_URL}
                  className="text-taupe transition-colors hover:text-ember-deep"
                >
                  Facebook
                </a>
              </li>
              <li>
                {/* PLACEHOLDER_LINKEDIN_URL */}
                <a
                  href={PLACEHOLDERS.LINKEDIN_URL}
                  className="text-taupe transition-colors hover:text-ember-deep"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-xs text-taupe sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Warm, human video production in {SITE.city},{' '}
            {SITE.region}.
          </p>
          <p className="font-semibold text-coffee">
            {/* Real detail from their live site */}
            Certified B Corporation · Serving the whole of the {SITE.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
