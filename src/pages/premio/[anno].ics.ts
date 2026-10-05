import type { APIRoute } from 'astro';
import { tutteLeEdizioni, romano, anno, isoGiorno, SEDE, type Edizione } from '../../lib/edizioni';

// A calendar file per edition, for the ticket on the cover ("Segna la data").
export async function getStaticPaths() {
  const edizioni = await tutteLeEdizioni();
  return edizioni.map((e) => ({ params: { anno: String(anno(e)) }, props: { e } }));
}

const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
const compatta = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

// Fold long lines at 74 octets as RFC 5545 asks.
function piega(riga: string): string {
  const out: string[] = [];
  let resto = riga;
  while (new TextEncoder().encode(resto).length > 74) {
    let i = 74;
    while (new TextEncoder().encode(resto.slice(0, i)).length > 74) i--;
    out.push(resto.slice(0, i));
    resto = ' ' + resto.slice(i);
  }
  out.push(resto);
  return out.join('\r\n');
}

export const GET: APIRoute = ({ props, site }) => {
  const e = (props as { e: Edizione }).e;
  const base = site ?? new URL('https://congiovanniodv.pages.dev');
  const url = new URL(`/premio/${anno(e)}/`, base).href;
  const giorno = isoGiorno(e.data.data).replace(/-/g, '');
  let quando: string[];
  if (e.data.ora) {
    const [h, m] = e.data.ora.split(':').map(Number);
    // Italy is on CET (UTC+1) in late November and December.
    const inizio = new Date(Date.UTC(e.data.data.getUTCFullYear(), e.data.data.getUTCMonth(), e.data.data.getUTCDate(), h - 1, m));
    const fine = new Date(inizio.valueOf() + 2.5 * 3600_000);
    quando = [`DTSTART:${compatta(inizio)}`, `DTEND:${compatta(fine)}`];
  } else {
    const dopo = new Date(e.data.data.valueOf() + 86_400_000);
    quando = [`DTSTART;VALUE=DATE:${giorno}`, `DTEND;VALUE=DATE:${isoGiorno(dopo).replace(/-/g, '')}`];
  }
  const righe = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Con Giovanni ODV//Premio Giovanni Capanna//IT',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:premio-giovanni-capanna-${anno(e)}@congiovanniodv`,
    `DTSTAMP:${compatta(new Date())}`,
    ...quando,
    `SUMMARY:${esc(`${romano(e.data.numero)} Premio Giovanni Capanna`)}`,
    `LOCATION:${esc(`${SEDE.nome}, ${SEDE.via}, ${SEDE.cap} ${SEDE.citta}`)}`,
    `DESCRIPTION:${esc(`Serata di musica e teatro di Con Giovanni ODV. Ingresso libero. ${e.data.ora ? '' : 'Orario da annunciare: '}${url}`)}`,
    `URL:${url}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return new Response(righe.map(piega).join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
};
