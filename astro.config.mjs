// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/*
 * Canonical origin, used for canonical <link> tags, the sitemap, and og:url.
 *
 * Netlify sets URL (and DEPLOY_PRIME_URL for preview deploys) automatically, so
 * prefer those and fall back to the production domain. Override locally with
 * SITE_URL=... in the environment.
 */
export const SITE_URL = process.env.SITE_URL ?? 'https://davidludington.netlify.app';

export default defineConfig({
	site: SITE_URL,
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});