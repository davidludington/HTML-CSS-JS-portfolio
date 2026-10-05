import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			image: image(),
			github: z.url(),
			demo: z.url().optional(),
			order: z.number().default(0),
		}),
});

const looks = defineCollection({
	loader: glob({ base: './src/content/looks', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			photos: z.array(image()),
			order: z.number().default(0),
		}),
});

export const collections = { projects, looks };
