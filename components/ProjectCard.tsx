'use client';

import { useState } from 'react';
import type { Project } from '@/content/projects';
import { sectorLabel } from '@/content/sectors';

/*
  A single portfolio card, warm theme. Full-bleed poster still with a play glyph
  on hover; caption sits over a soft warm gradient for legibility. Falls back to
  a warm block (never a broken image icon) if the still is missing. Clicking
  opens the case-study modal (handled by the parent).
*/

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  featured?: boolean;
}

export function ProjectCard({ project, onOpen, featured }: ProjectCardProps) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`Play case study: ${project.client} — ${project.title}`}
      className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-paper-card text-left shadow-card transition-all duration-300 ease-gentle hover:-translate-y-1 hover:shadow-soft"
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured ? 'aspect-[4/3] lg:aspect-[16/10]' : 'aspect-[4/3]'
        }`}
      >
        {failed ? (
          <div className="media-fallback h-full w-full" aria-hidden />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.poster}
            alt={project.alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full scale-100 object-cover transition-transform duration-[1200ms] ease-gentle group-hover:scale-105"
          />
        )}

        {/* Warm gradient for caption legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/20 to-transparent" />

        {/* Play glyph */}
        <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/15 backdrop-blur-sm transition-all duration-300 ease-gentle group-hover:border-ember group-hover:bg-ember">
          <span className="ml-0.5 block h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />
        </span>

        {/* Sector tag */}
        <span className="absolute right-4 top-4 rounded-full bg-paper/85 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-overline text-ember-deep backdrop-blur-sm">
          {sectorLabel(project.sector)}
        </span>

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-overline text-ember-soft">
            {project.client}
          </p>
          <h3
            className={`mt-1 font-display font-semibold tracking-tight text-white ${
              featured ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-1 max-w-md text-sm leading-snug text-white/85">
            {project.summary}
          </p>
        </div>
      </div>
    </button>
  );
}
