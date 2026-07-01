import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectorLanding } from '@/components/SectorLanding';
import { LANDING_PAGES } from '@/content/landings';

const page = LANDING_PAGES.find((p) => p.slug === 'video-production-exeter')!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `/${page.slug}` },
  openGraph: { title: page.metaTitle, description: page.metaDescription },
};

export default function VideoProductionExeterPage() {
  if (!page) notFound();
  return <SectorLanding page={page} />;
}
