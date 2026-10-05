// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Set to the production origin once the Netlify site is claimed. Used for
// canonical URLs and the sitemap.
export const SITE_URL = 'https://davidludington.netlify.app';

export default defineConfig({
	site: SITE_URL,
	vite: {
		plugins: [tailwindcss()],
	},
});
