import { SITE, SITE_URL } from '@/content/site';
import { PLACEHOLDERS } from '@/content/placeholders';

/*
  JSON-LD LocalBusiness (VideoProductionService) schema. Rendered once in the
  root layout so it appears site-wide. Address + geo use placeholder values
  from content/placeholders.ts — swap those for real details before launch.
*/

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE.name,
    description: SITE.description,
    url: SITE_URL,
    slogan: SITE.tagline,
    // PLACEHOLDER_LOGO — point to the real logo asset once supplied
    logo: `${SITE_URL}/img/PLACEHOLDER_LOGO.png`,
    image: `${SITE_URL}${PLACEHOLDERS.OG_IMAGE}`,
    founder: { '@type': 'Person', name: SITE.founder },
    email: PLACEHOLDERS.EMAIL,
    telephone: PLACEHOLDERS.PHONE_NUMBER, // PLACEHOLDER_PHONE_NUMBER
    priceRange: '££-£££',
    serviceType: 'Video production',
    knowsAbout: [
      'Healthcare video production',
      'Education video production',
      'Charity video production',
      'Corporate video production',
      'Culture and heritage film',
      'Public sector video',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: PLACEHOLDERS.ADDRESS_STREET, // PLACEHOLDER
      addressLocality: PLACEHOLDERS.ADDRESS_LOCALITY,
      addressRegion: PLACEHOLDERS.ADDRESS_REGION,
      postalCode: PLACEHOLDERS.ADDRESS_POSTCODE, // PLACEHOLDER
      addressCountry: PLACEHOLDERS.ADDRESS_COUNTRY,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: PLACEHOLDERS.GEO_LAT, // PLACEHOLDER
      longitude: PLACEHOLDERS.GEO_LNG, // PLACEHOLDER
    },
    areaServed: {
      '@type': 'Country',
      name: SITE.areaServed,
    },
    sameAs: [
      PLACEHOLDERS.INSTAGRAM_URL,
      PLACEHOLDERS.LINKEDIN_URL,
      PLACEHOLDERS.VIMEO_URL,
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
