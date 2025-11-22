import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    rating: z.number().min(1).max(10),
    genre: z.array(z.string()),
    director: z.string(),
    year: z.number(),
    poster: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  reviews,
};
