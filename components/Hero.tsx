'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PLACEHOLDERS } from '@/content/placeholders';

/*
  Bright, warm hero.
  - Desktop: autoplay, muted, looping placeholder video (natural-light footage).
  - Mobile: shows the warm still + a play button; the video only loads on tap
    to protect load speed and data.
  - Overlay is a LIGHT, WARM wash (not a dark cinematic scrim) with a soft
    warm-brown gradient at the base purely for text legibility.
  - Respects prefers-reduced-motion. Graceful warm fallback if media missing.
*/

const HEADLINE = 'Cinematic Stories With Soul';
const SUBHEAD =
  'Video storytelling that engages, inspires action, and connects your audience — for organisations who care about the story they tell.';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const shouldAutoplay = isDesktop && !reduce;

  useEffect(() => {
    if (shouldAutoplay && videoRef.current) {
      videoRef.current.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
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
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-paper-sand"
    >
      {/* Media layer */}
      <div className="absolute inset-0">
        {/* Warm still — always present; crossfades out when video plays.
            PLACEHOLDER_HERO_IMAGE — bright, natural-light frame. */}
        {imgFailed ? (
          <div className="media-fallback h-full w-full" aria-hidden />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={PLACEHOLDERS.HERO_IMAGE}
            alt="PLACEHOLDER_ALT: Fresh Ground Films hero — warm, natural-light Devon landscape"
            onError={() => setImgFailed(true)}
            className={`h-full w-full object-cover transition-opacity duration-[1400ms] ease-gentle ${
              playing ? 'opacity-0' : 'opacity-100 animate-soft-zoom'
            }`}
          />
        )}

        {/* PLACEHOLDER_HERO_VIDEO — drop the real .mp4 into /public/video. */}
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-gentle ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
          poster={PLACEHOLDERS.HERO_IMAGE}
          muted
          loop
          playsInline
          preload={shouldAutoplay ? 'auto' : 'none'}
          aria-hidden={!playing}
        >
          {(shouldAutoplay || playing) && (
            <source src={PLACEHOLDERS.HERO_VIDEO} type="video/mp4" />
          )}
        </video>

        {/* LIGHT, WARM overlays — subtle cream wash + gentle warm scrim at base */}
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/55 via-cocoa/10 to-transparent" />
        <div className="absolute inset-0 bg-ember/5 mix-blend-soft-light" />
      </div>

      {/* Mobile play affordance */}
      {!playing && !shouldAutoplay && (
        <button
          type="button"
          onClick={handleManualPlay}
          aria-label="Play showreel"
          className="absolute left-1/2 top-[38%] z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white/80 bg-white/15 backdrop-blur-sm transition-transform duration-300 ease-gentle active:scale-95"
        >
          <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
        </button>
      )}

      {/* Content */}
      <div className="shell relative z-10 pb-20 pt-32 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="font-sans text-[0.72rem] font-bold uppercase tracking-overline text-ember-soft"
        >
          Exeter · Devon — serving the whole of the UK
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.33, 1, 0.68, 1] }}
          className="mt-5 max-w-[18ch] font-display text-[3rem] font-bold leading-[1.02] tracking-tightest text-white sm:text-6xl md:text-7xl lg:text-[5rem]"
        >
          {HEADLINE}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.33, 1, 0.68, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
        >
          {SUBHEAD}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.33, 1, 0.68, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          {/* Primary — scrolls to featured work */}
          <a href="#work" className="btn-primary">
            See Our Work
          </a>
          {/* Secondary — jumps to the contact section on this page */}
          <a
            href="#contact"
            className="btn border-2 border-white/70 text-white hover:border-white hover:bg-white/10"
          >
            Start a Project
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="text-[0.6rem] font-semibold uppercase tracking-overline text-white/80">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-white/80 to-transparent" />
      </div>
    </section>
  );
}
