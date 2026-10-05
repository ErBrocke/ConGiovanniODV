import { getCollection, type CollectionEntry } from 'astro:content';

export type Edizione = CollectionEntry<'edizioni'>;

export const SITE_NAME = 'Con Giovanni ODV';
export const EMAIL = 'associazionecongiovanni@gmail.com';
export const INSTAGRAM = 'https://www.instagram.com/con_giovanni/';
export const IBAN = 'IT34 O010 3013 9000 0000 7413 519';
export const SEDE = {
  nome: 'Auditorium del Conservatorio Pietro Mascagni',
  via: 'Via Galileo Galilei 40',
  cap: '57122',
  citta: 'Livorno',
  mappa: 'https://www.google.com/maps/search/?api=1&query=Conservatorio+Pietro+Mascagni+Via+Galileo+Galilei+40+Livorno',
};

const ROMANI: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
  [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];
export function romano(n: number): string {
  let out = '';
  for (const [v, s] of ROMANI) while (n >= v) { out += s; n -= v; }
  return out;
}

// Dates in the content are calendar days; format them in UTC so they never shift.
const fmtLungo = new Intl.DateTimeFormat('it-IT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const fmtData = new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const dataLunga = (d: Date) => cap(fmtLungo.format(d));
export const dataBreve = (d: Date) => fmtData.format(d);
export const isoGiorno = (d: Date) => d.toISOString().slice(0, 10);
export const anno = (e: Edizione) => e.data.data.getUTCFullYear();
export const ora = (e: Edizione) => (e.data.ora ? `ore ${e.data.ora.replace(':', '.')}` : undefined);

export async function tutteLeEdizioni(): Promise<Edizione[]> {
  return (await getCollection('edizioni')).sort((a, b) => b.data.data.valueOf() - a.data.data.valueOf());
}

// The edition the cover announces: the next one still to come at build time,
// otherwise the most recent one.
export function inCopertina(edizioni: Edizione[], oggi = new Date()): { edizione: Edizione; futura: boolean } {
  const giorno = Date.UTC(oggi.getUTCFullYear(), oggi.getUTCMonth(), oggi.getUTCDate());
  const future = edizioni.filter((e) => e.data.data.valueOf() >= giorno);
  if (future.length) return { edizione: future[future.length - 1], futura: true };
  return { edizione: edizioni[0], futura: false };
}

// ISO start for schema.org: with a time, Europe/Rome offset (CET in Nov/Dec).
export function inizioISO(e: Edizione): string {
  const g = isoGiorno(e.data.data);
  if (!e.data.ora) return g;
  const [h, m] = e.data.ora.split(':');
  const mese = e.data.data.getUTCMonth() + 1;
  const offset = mese >= 4 && mese <= 10 ? '+02:00' : '+01:00';
  return `${g}T${h.padStart(2, '0')}:${m}:00${offset}`;
}
