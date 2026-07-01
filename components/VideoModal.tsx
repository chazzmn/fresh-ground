'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '@/content/projects';
import { sectorLabel } from '@/content/sectors';

/*
  Case-study lightbox. Opens over a dimmed backdrop, plays the project's video
  placeholder, and shows the outcome narrative alongside. Accessible: traps
  focus loosely via autofocus on close, closes on Escape / backdrop click, and
  restores body scroll on unmount.
*/

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.client} — ${project.title}`}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-ink/85 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 grid max-h-[88vh] w-full max-w-5xl grid-rows-[auto] overflow-y-auto rounded-2xl border border-ink-line bg-ink-soft"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 bg-ink/60 text-bone backdrop-blur transition-colors hover:border-bone/60"
            >
              <span aria-hidden>✕</span>
            </button>

            {/* Video placeholder — real .mp4 dropped in via placeholders.ts */}
            <div className="relative aspect-video w-full bg-black">
              <video
                className="h-full w-full object-cover"
                poster={project.poster}
                controls
                playsInline
                preload="none"
              >
                <source src={project.video} type="video/mp4" />
                {/* PLACEHOLDER video — see content/placeholders.ts */}
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-6 sm:p-9">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="rounded-full border border-ember/40 px-3 py-1 text-[0.65rem] uppercase tracking-overline text-ember">
                  {sectorLabel(project.sector)}
                </span>
                <span className="text-sm text-bone-faint">{project.client}</span>
              </div>
              <h3 className="display mt-4 text-2xl text-bone sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-prose leading-relaxed text-bone-muted">
                {project.outcome}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
