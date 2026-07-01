import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="shell">
        <p className="overline">404</p>
        <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl">
          This scene didn&apos;t make the cut.
        </h1>
        <p className="mt-5 max-w-prose text-lg text-coffee">
          The page you were after isn&apos;t here. Head back to the reel or
          start a conversation with us.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/work" className="btn-ghost">
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
