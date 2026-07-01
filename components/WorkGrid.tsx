'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import { PROJECTS, type Project } from '@/content/projects';
import { SECTORS, type SectorSlug } from '@/content/sectors';
import { ProjectCard } from './ProjectCard';
import { VideoModal } from './VideoModal';

/*
  Filterable portfolio grid. Instant, client-side filtering — no page reload.
  The initial filter is read from ?sector= (set by the homepage sector strip
  and the sector landing pages) so deep links land pre-filtered.
*/

type Filter = SectorSlug | 'all';

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All work' },
  ...SECTORS.map((s) => ({ value: s.slug as Filter, label: s.label })),
];

function isValidFilter(v: string | null): v is Filter {
  return v === 'all' || SECTORS.some((s) => s.slug === v);
}

export function WorkGrid() {
  const params = useSearchParams();
  const initial = params.get('sector');
  const [filter, setFilter] = useState<Filter>(
    isValidFilter(initial) ? initial : 'all',
  );
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () =>
      filter === 'all'
        ? PROJECTS
        : PROJECTS.filter((p) => p.sector === filter),
    [filter],
  );

  return (
    <div>
      {/* Filter bar */}
      <div
        role="tablist"
        aria-label="Filter work by sector"
        className="sticky top-16 z-30 -mx-5 mb-10 flex snap-x gap-2 overflow-x-auto border-b border-line bg-paper/90 px-5 py-4 backdrop-blur-md sm:top-20 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:rounded-full sm:border sm:px-3 sm:py-2"
      >
        {FILTERS.map((f) => {
          const selected = filter === f.value;
          return (
            <button
              key={f.value}
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(f.value)}
              className={`relative min-h-[2.75rem] shrink-0 snap-start rounded-full px-5 text-sm font-semibold transition-colors duration-200 ${
                selected ? 'text-white' : 'text-coffee hover:text-cocoa'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-ember"
                  transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          );
        })}
      </div>

      {/* Count */}
      <p className="mb-6 text-sm text-taupe" aria-live="polite">
        Showing {visible.length}{' '}
        {visible.length === 1 ? 'project' : 'projects'}
        {filter !== 'all' &&
          ` in ${SECTORS.find((s) => s.slug === filter)?.label}`}
        .
      </p>

      {/* Grid */}
      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} onOpen={setActive} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {visible.length === 0 && (
        <p className="py-16 text-center text-coffee">
          No projects in this sector yet — please check back soon.
        </p>
      )}

      <VideoModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
