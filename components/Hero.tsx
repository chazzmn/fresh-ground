'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PLACEHOLDERS } from '@/content/placeholders';

/*
  Full-bleed cinematic hero.
  - Desktop: autoplay, muted, looping showreel video.
  - Mobile: to protect load speed we DON'T autoplay a heavy video. We show the
    poster still + a play button; the video only loads when the visitor taps.
  - Respects prefers-reduced-motion (no autoplay, poster only).
  - Headline / subhead overlaid with a bottom-weighted gradient for legibility.
*/

const HEADLINE = 'Cinematic Stories With Soul';
const SUBHEAD =
  'Video storytelling that engages, inspires action, and connects your audience — for organisations who care about the story they tell.';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  // Autoplay on desktop only (and only when motion is allowed).
  const shouldAutoplay = isDesktop && !reduce;

  useEffect(() => {
    if (shouldAutoplay && videoRef.current) {
      videoRef.current.play().then(
        () => setPlaying(true),
        () => setPlaying(false), // autoplay blocked — poster stays visible
      );
    }
  }, [shouldAutoplay]);

  const handleManualPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().then(() => setPlaying(true));
  };

  return (
    <section
      aria-label="Showreel"
      className="grain relative flex min-h-[100svh] w-full items-end overflow-hidden bg-ink"
    >
      {/* Media layer */}
      <div className="absolute inset-0">
        {/* Poster still — always present; crossfades out when video plays */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PLACEHOLDERS.SHOWREEL_POSTER}
          alt="PLACEHOLDER_ALT: Fresh Ground Films showreel opening frame"
          className={`h-full w-full object-cover transition-opacity duration-[1500ms] ease-cinema ${
            playing ? 'opacity-0' : 'opacity-100 animate-ken-burns'
          }`}
        />

        {/*
          Video only mounts a source when we intend to play it: always on
          desktop (autoplay), and on mobile after the visitor taps play.
          PLACEHOLDER_SHOWREEL_VIDEO — drop the real .mp4 into /public/video.
        */}
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-cinema ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
          poster={PLACEHOLDERS.SHOWREEL_POSTER}
          muted
          loop
          playsInline
          preload={shouldAutoplay ? 'auto' : 'none'}
          aria-hidden={!playing}
        >
          {(shouldAutoplay || playing) && (
            <source src={PLACEHOLDERS.SHOWREEL_VIDEO} type="video/mp4" />
          )}
        </video>

        {/* Legibility gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent" />
      </div>

      {/* Mobile play affordance */}
      {!playing && !shouldAutoplay && (
        <button
          type="button"
          onClick={handleManualPlay}
          aria-label="Play showreel"
          className="absolute left-1/2 top-[38%] z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-bone/40 bg-ink/40 backdrop-blur-sm transition-transform duration-500 ease-cinema active:scale-95"
        >
          <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-bone" />
        </button>
      )}

      {/* Content */}
      <div className="shell relative z-10 pb-20 pt-32 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overline"
        >
          Exeter · Devon — serving the whole of the UK
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-5 max-w-[16ch] text-[3rem] leading-[0.98] text-bone sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {HEADLINE}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-bone-muted sm:text-lg"
        >
          {SUBHEAD}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          {/* Primary — scrolls to featured work */}
          <a href="#work" className="btn-primary">
            See Our Work
          </a>
          {/* Secondary — jumps to the contact section on this page */}
          <a href="#contact" className="btn-ghost">
            Start a Project
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[0.6rem] uppercase tracking-overline text-bone-faint">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-bone-faint to-transparent" />
      </div>
    </section>
  );
}
