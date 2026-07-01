import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';
import { LANDING_PAGES } from '@/content/landings';

/*
  Crawlable sitemap. Static routes + the SEO sector landing pages. Next.js
  serves this at /sitemap.xml automatically.
*/

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core = ['', '/work', '/about', '/contact'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const landings = LANDING_PAGES.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...core, ...landings];
}
