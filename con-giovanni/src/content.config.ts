import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programma = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programma' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    place: z.string(),
    summary: z.string(),
  }),
});

export const collections = { programma };
