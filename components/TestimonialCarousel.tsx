'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { TESTIMONIALS } from '@/content/testimonials';
import { PROJECTS } from '@/content/projects';
import { Reveal } from './Reveal';

/*
  Testimonial carousel. Rotates through the five real testimonials, each paired
  with the related project's poster still. Auto-advances slowly, pauses on hover
  / focus, and honours reduced-motion (no auto-advance). Manual dot controls.
*/

const AUTO_MS = 7000;

export function TestimonialCarousel() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(t);
  }, [go, paused, reduce]);

  const t = TESTIMONIALS[index];
  const project = PROJECTS.find((p) => p.slug === t.projectSlug);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-ink-line bg-ink-soft py-20 sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="overline">In their words</p>
          <h2
            id="testimonials-heading"
            className="display mt-4 text-3xl text-bone sm:text-4xl md:text-5xl"
          >
            Trusted by teams who care how their story lands.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          {/* Quote */}
          <div className="relative min-h-[15rem]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  aria-hidden
                  className="font-display text-6xl leading-none text-ember/40"
                >
                  “
                </span>
                <blockquote className="-mt-4">
                  <p className="font-display text-xl font-light leading-relaxed text-bone sm:text-2xl md:text-[1.7rem]">
                    {t.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-medium text-bone">
                    {t.author}
                  </span>
                  <span className="text-sm text-bone-faint">{t.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Paired project still */}
          <div className="order-first lg:order-last">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-ink-line"
              >
                {project ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.poster}
                      alt={project.alt}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-xs uppercase tracking-overline text-bone">
                      {project.client}
                    </span>
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center bg-ink-raised text-sm text-bone-faint">
                    {t.author}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Testimonials">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.author + i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial from ${item.author}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ease-cinema ${
                  i === index
                    ? 'w-8 bg-ember'
                    : 'w-2 bg-bone/25 hover:bg-bone/50'
                }`}
              />
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone transition-colors hover:border-bone/60"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone transition-colors hover:border-bone/60"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
