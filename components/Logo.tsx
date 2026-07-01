import Link from 'next/link';

/*
  PLACEHOLDER_LOGO_SVG
  Renders a typographic wordmark as a stand-in for the real logo. When the
  brand SVG is supplied, replace the inner markup of <Link> with the SVG (keep
  the Link wrapper, aria-label and sizing classes). Currency of the wordmark is
  intentional — it already looks like a real brand, not a grey box.
*/

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Fresh Ground Films — home"
      className={`group inline-flex items-baseline gap-2 ${className}`}
    >
      <span className="font-display text-lg font-medium tracking-tightest text-bone sm:text-xl">
        Fresh Ground
      </span>
      <span className="relative top-[-1px] font-sans text-[0.62rem] font-medium uppercase tracking-overline text-ember transition-colors duration-500 ease-cinema group-hover:text-ember-soft">
        Films
      </span>
    </Link>
  );
}
