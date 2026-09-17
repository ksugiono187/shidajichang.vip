import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    topics: z.array(z.string()).optional(),
    faqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    author: z.string().default('十大机场评测编辑部'),
  }),
});

const brandsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string().default('网络服务'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    updatedDate: z.coerce.date(),
  }),
});

const topicsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categoryFilter: z.string().optional(),
    tagsFilter: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    updatedDate: z.coerce.date(),
  }),
});

export const collections = {
  blog: blogCollection,
  brands: brandsCollection,
  topics: topicsCollection,
};
