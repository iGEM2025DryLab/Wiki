import { defineCollection, z } from 'astro:content';

const enCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    author: z.string().optional(),
  }),
});

const zhCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  en: enCollection,
  zh: zhCollection,
};