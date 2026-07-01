'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';
import { NAV_LINKS } from '@/content/site';

/*
  Sticky top navigation, warm theme.
  - Over the hero (top of the homepage): transparent with a light logo + white
    links.
  - Once scrolled (or on inner pages): warm cream bar with dark text.
  - "Start a Project" CTA always visible.
  - Full-screen cream menu on mobile with 44px+ tap targets.
*/

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Only the homepage has a full-bleed hero to sit transparently over.
  const overHero = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // Light treatment only when transparent over the hero photo.
  const light = overHero && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-gentle ${
        light
          ? 'bg-gradient-to-b from-cocoa/30 to-transparent'
          : 'border-b border-line bg-paper/90 backdrop-blur-md'
      }`}
    >
      <nav
        aria-label="Primary"
        className="shell flex h-16 items-center justify-between sm:h-20"
      >
        <Logo tone={light ? 'light' : 'dark'} />

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    light
                      ? 'text-white/90 hover:text-white'
                      : isActive(link.href)
                        ? 'text-cocoa'
                        : 'text-coffee hover:text-cocoa'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && !light && (
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-ember" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary">
            Start a Project
          </Link>
        </div>

        {/* Mobile controls */}
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
            className={`flex h-11 w-11 items-center justify-center rounded-full border ${
              light ? 'border-white/50 text-white' : 'border-line text-cocoa'
            }`}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu (cream) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 top-16 z-40 bg-paper md:hidden"
          >
            <div className="shell flex h-full flex-col justify-between py-10">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={`block border-b border-line py-5 font-display text-3xl font-semibold tracking-tightest ${
                        isActive(link.href) ? 'text-ember-deep' : 'text-cocoa'
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
                <p className="text-center text-xs font-semibold text-taupe">
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
