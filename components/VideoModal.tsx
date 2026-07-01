'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '@/content/projects';
import { sectorLabel } from '@/content/sectors';

/*
  Case-study lightbox, warm theme. Opens over a soft warm backdrop, plays the
  project's placeholder video, and shows the outcome narrative on a cream panel.
  Closes on Escape / backdrop click, restores body scroll, and falls back to a
  warm block if the video poster is missing.
*/

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (!project) return;
    setVideoFailed(false);
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
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.client} — ${project.title}`}
        >
          {/* Backdrop — warm brown, not black */}
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-cocoa/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="relative z-10 max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-line bg-paper-card shadow-soft"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-cocoa/50 text-white backdrop-blur transition-colors hover:bg-cocoa/70"
            >
              <span aria-hidden>✕</span>
            </button>

            {/* Video placeholder */}
            <div className="relative aspect-video w-full bg-cocoa">
              {videoFailed ? (
                <div className="media-fallback flex h-full w-full items-center justify-center">
                  <span className="font-sans text-xs font-bold uppercase tracking-overline text-ember-deep/80">
                    Film coming soon
                  </span>
                </div>
              ) : (
                <video
                  className="h-full w-full object-cover"
                  poster={project.poster}
                  controls
                  playsInline
                  preload="none"
                  onError={() => setVideoFailed(true)}
                >
                  <source src={project.video} type="video/mp4" />
                  {/* PLACEHOLDER video — see content/placeholders.ts */}
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="p-6 sm:p-9">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="rounded-full bg-ember/12 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-overline text-ember-deep">
                  {sectorLabel(project.sector)}
                </span>
                <span className="text-sm font-semibold text-coffee">
                  {project.client}
                </span>
              </div>
              <h3 className="display mt-4 text-2xl sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-prose leading-relaxed text-coffee">
                {project.outcome}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
