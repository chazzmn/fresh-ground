'use client';

import type { Project } from '@/content/projects';
import { sectorLabel } from '@/content/sectors';

/*
  A single portfolio card. Full-bleed poster still with a play glyph on hover,
  the client name and one-line summary beneath. Clicking opens the case-study
  modal (handled by the parent). Sizes are driven by the parent grid so the
  same card works large (featured) or in a denser filter grid.
*/

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  /** Larger type + taller media for the homepage featured grid. */
  featured?: boolean;
  priority?: boolean;
}

export function ProjectCard({ project, onOpen, featured }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`Play case study: ${project.client} — ${project.title}`}
      className="group relative block w-full overflow-hidden rounded-xl bg-ink-raised text-left"
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured ? 'aspect-[4/3] lg:aspect-[16/10]' : 'aspect-[4/3]'
        }`}
      >
        {/* Poster still (PLACEHOLDER — real frame via placeholders.ts) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.poster}
          alt={project.alt}
          loading="lazy"
          className="h-full w-full scale-100 object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-105"
        />
        {/* Wash + gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Play glyph */}
        <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-bone/30 bg-ink/30 backdrop-blur-sm transition-all duration-500 ease-cinema group-hover:border-ember group-hover:bg-ember/20">
          <span className="ml-0.5 block h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-bone" />
        </span>

        {/* Sector tag */}
        <span className="absolute right-4 top-4 rounded-full bg-ink/50 px-3 py-1 text-[0.6rem] uppercase tracking-overline text-bone backdrop-blur-sm">
          {sectorLabel(project.sector)}
        </span>

        {/* Caption over image bottom */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-xs uppercase tracking-overline text-ember">
            {project.client}
          </p>
          <h3
            className={`mt-1 font-display font-medium tracking-tight text-bone ${
              featured ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-1 max-w-md text-sm leading-snug text-bone-muted">
            {project.summary}
          </p>
        </div>
      </div>
    </button>
  );
}
