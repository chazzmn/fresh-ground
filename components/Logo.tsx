import Link from 'next/link';

/*
  PLACEHOLDER_LOGO_SVG
  Warm, personal logotype: a flowing cursive "Fresh Ground" (script font) paired
  with a clean small-caps "FILMS". This closely mimics Fresh Ground Films' real
  handwritten-script identity. When the real logo SVG is supplied, replace the
  inner markup of <Link> (keep the Link wrapper, aria-label and sizing).

  `tone` controls colour so the same logo works on a photo (light) or on the
  cream page (dark).
*/

export function Logo({
  className = '',
  tone = 'dark',
}: {
  className?: string;
  tone?: 'dark' | 'light';
}) {
  const wordColor = tone === 'light' ? 'text-white' : 'text-cocoa';
  const filmsColor = tone === 'light' ? 'text-white/85' : 'text-ember-deep';

  return (
    <Link
      href="/"
      aria-label="Fresh Ground Films — home"
      className={`group inline-flex items-end gap-2 leading-none ${className}`}
    >
      <span
        className={`font-script text-3xl font-bold leading-[0.8] ${wordColor} transition-transform duration-300 ease-gentle group-hover:-rotate-1 sm:text-[2rem]`}
      >
        Fresh Ground
      </span>
      <span
        className={`relative bottom-[3px] font-sans text-[0.6rem] font-bold uppercase tracking-overline ${filmsColor}`}
      >
        Films
      </span>
    </Link>
  );
}
