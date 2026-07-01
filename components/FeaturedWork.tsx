'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Project } from '@/content/projects';
import { FEATURED_PROJECTS } from '@/content/projects';
import { ProjectCard } from './ProjectCard';
import { VideoModal } from './VideoModal';
import { Reveal } from './Reveal';

/*
  Homepage featured work. Anchor target #work for the hero "See Our Work" CTA.
  Deliberately asymmetric: an offset editorial grid rather than an even set of
  cards, so it reads like a reel rather than a product page.
*/

export function FeaturedWork() {
  const [active, setActive] = useState<Project | null>(null);
  const projects = FEATURED_PROJECTS.slice(0, 4);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-t border-line bg-paper-sand py-20 sm:py-28"
    >
      <div className="shell">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="overline">Recent work</p>
            <h2
              id="work-heading"
              className="display mt-4 text-3xl sm:text-4xl md:text-5xl"
            >
              Films built around real people.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-ember-deep transition-colors hover:text-ember"
          >
            View all work
            <span
              aria-hidden
              className="transition-transform duration-300 ease-gentle group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>

        {/* Offset editorial grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {projects[0] && (
            <Reveal className="md:col-span-7">
              <ProjectCard project={projects[0]} onOpen={setActive} featured />
            </Reveal>
          )}
          {projects[1] && (
            <Reveal delay={0.08} className="md:col-span-5 md:pt-14">
              <ProjectCard project={projects[1]} onOpen={setActive} featured />
            </Reveal>
          )}
          {projects[2] && (
            <Reveal delay={0.04} className="md:col-span-5">
              <ProjectCard project={projects[2]} onOpen={setActive} featured />
            </Reveal>
          )}
          {projects[3] && (
            <Reveal delay={0.1} className="md:col-span-7 md:pt-4">
              <ProjectCard project={projects[3]} onOpen={setActive} featured />
            </Reveal>
          )}
        </div>
      </div>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
