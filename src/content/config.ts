import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    fileNo: z.string(),
    status: z.enum(['Production', 'Beta', 'In development', 'Prototype', 'Concept']),
    // "live" products get the full featured card; non-live appear in the
    // low-key "On the bench" section. "visible: false" hides them entirely.
    live: z.boolean().default(false),
    visible: z.boolean().default(true),
    order: z.number().default(99),
    features: z.array(z.string()).default([]),
  }),
});

export const collections = { products };
