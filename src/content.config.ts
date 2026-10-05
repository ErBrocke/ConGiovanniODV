import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per edition of the Premio, named by year (e.g. 2027.md).
const edizioni = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/edizioni' }),
  schema: z.object({
    numero: z.number().int().positive(),
    data: z.coerce.date(),
    ora: z.string().regex(/^\d{1,2}:\d{2}$/).optional(),
    luogo: z.string(),
    sintesi: z.string(),
    premiati: z
      .array(
        z.object({
          nome: z.string(),
          disciplina: z.string(),
          nota: z.string().optional(),
        })
      )
      .default([]),
    programma: z
      .array(
        z.object({
          voce: z.string(),
          brani: z
            .array(
              z.object({
                autore: z.string().optional(),
                titolo: z.string(),
                dettaglio: z.string().optional(),
                credito: z.string().optional(),
              })
            )
            .default([]),
        })
      )
      .default([]),
    note: z.array(z.string()).default([]),
    stampa: z
      .array(
        z.object({
          testata: z.string(),
          titolo: z.string(),
          data: z.coerce.date(),
          url: z.string().url(),
        })
      )
      .default([]),
  }),
});

export const collections = { edizioni };
