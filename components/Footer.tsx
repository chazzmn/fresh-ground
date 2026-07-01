import Link from 'next/link';
import { Logo } from './Logo';
import { NAV_LINKS, SITE } from '@/content/site';
import { PLACEHOLDERS } from '@/content/placeholders';
import { LANDING_PAGES } from '@/content/landings';

/*
  Global footer. Appears on every page and doubles as a secondary conversion
  point: a clear "Start a Project" CTA plus direct contact + social links.
*/

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line bg-ink">
      {/* Footer CTA */}
      <div className="shell py-16 sm:py-20">
        <div className="flex flex-col gap-8 border-b border-ink-line pb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="overline">Start a project</p>
            <h2 className="display mt-4 text-3xl text-bone sm:text-4xl md:text-5xl">
              Have a story worth telling well?
            </h2>
            <p className="mt-4 max-w-prose text-bone-muted">
              Tell us what you are trying to say and who needs to hear it. We
              will come back with an honest view on how film could help.
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
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone-faint">
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
                    className="text-sm text-bone-muted transition-colors hover:text-bone"
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
                    className="text-sm text-bone-muted transition-colors hover:text-bone"
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
                  className="text-bone-muted transition-colors hover:text-bone"
                >
                  {PLACEHOLDERS.EMAIL}
                </a>
              </li>
              <li>
                {/* PLACEHOLDER_PHONE_NUMBER */}
                <a
                  href={PLACEHOLDERS.PHONE_HREF}
                  className="text-bone-muted transition-colors hover:text-bone"
                >
                  {PLACEHOLDERS.PHONE_NUMBER}
                </a>
              </li>
              <li className="pt-2 text-bone-faint">
                {SITE.city}, {SITE.region}
              </li>
            </ul>
            <ul className="mt-5 flex gap-4 text-xs uppercase tracking-overline">
              {/* PLACEHOLDER social links */}
              <li>
                <a
                  href={PLACEHOLDERS.INSTAGRAM_URL}
                  className="text-bone-faint transition-colors hover:text-ember"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={PLACEHOLDERS.VIMEO_URL}
                  className="text-bone-faint transition-colors hover:text-ember"
                >
                  Vimeo
                </a>
              </li>
              <li>
                <a
                  href={PLACEHOLDERS.LINKEDIN_URL}
                  className="text-bone-faint transition-colors hover:text-ember"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 text-xs text-bone-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Cinematic video production in {SITE.city},{' '}
            {SITE.region}.
          </p>
          <p>Serving the whole of the {SITE.country}.</p>
        </div>
      </div>
    </footer>
  );
}
