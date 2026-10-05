import { SEDE, SITE_NAME, romano, inizioISO, anno, type Edizione } from './edizioni';

// schema.org Event for one edition of the Premio.
export function eventoSchema(e: Edizione, site: URL) {
  const url = new URL(`/premio/${anno(e)}/`, site).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${url}#evento`,
    name: `${romano(e.data.numero)} Premio Giovanni Capanna`,
    description: e.data.sintesi,
    url,
    startDate: inizioISO(e),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    isAccessibleForFree: true,
    image: [new URL('/og.jpg', site).href],
    location: {
      '@type': 'Place',
      name: SEDE.nome,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SEDE.via,
        postalCode: SEDE.cap,
        addressLocality: SEDE.citta,
        addressRegion: 'LI',
        addressCountry: 'IT',
      },
    },
    organizer: { '@type': 'NGO', name: SITE_NAME, url: site.href },
    performer: e.data.premiati.map((p) => ({
      '@type': /compagnia/i.test(p.disciplina) ? 'PerformingGroup' : 'Person',
      name: p.nome,
    })),
    offers: {
      '@type': 'Offer',
      price: 0,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url,
    },
  };
}
