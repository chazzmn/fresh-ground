'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';
import { NAV_LINKS } from '@/content/site';

/*
  Sticky top navigation.
  - Transparent while over the hero, gains a charcoal blur once scrolled.
  - "Start a Project" CTA is always visible (desktop inline, mobile in menu +
    a compact always-on button).
  - Collapses to a full-screen menu on mobile with 44px+ tap targets.
*/

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-cinema ${
        scrolled || open
          ? 'border-b border-ink-line/70 bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-ink/60 to-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="shell flex h-16 items-center justify-between sm:h-20"
      >
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-2 text-sm tracking-wide transition-colors duration-300 ${
                    isActive(link.href)
                      ? 'text-bone'
                      : 'text-bone-muted hover:text-bone'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-0.5 left-0 h-px w-full bg-ember" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </div>

        {/* Mobile controls: always-on compact CTA + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            className="btn-primary h-11 min-h-0 px-4 text-[0.8rem]"
          >
            Start
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-5 bg-current transition-all duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-16 z-40 bg-ink md:hidden"
          >
            <div className="shell flex h-full flex-col justify-between py-10">
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.08, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className={`block border-b border-ink-line py-5 font-display text-3xl font-light tracking-tightest ${
                        isActive(link.href) ? 'text-ember' : 'text-bone'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-4">
                <Link href="/contact" className="btn-primary w-full">
                  Start a Project
                </Link>
                <p className="text-center text-xs text-bone-faint">
                  Exeter, Devon — serving the whole of the UK
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
