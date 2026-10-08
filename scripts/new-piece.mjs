import { mkdirSync, readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ALBUMS = 'src/content/albums';
const ASSETS = 'src/assets/creative';

const name = process.argv[2];
if (!name) {
	console.error('usage: npm run new:piece -- "piece name"');
	process.exit(1);
}

const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const title =
	name
		.split(/\s+/)
		.map((w) => w[0].toUpperCase() + w.slice(1))
		.join(' ') || slug;

const albumPath = join(ALBUMS, `${slug}.md`);
const assetDir = join(ASSETS, slug);

if (existsSync(albumPath)) {
	console.error(`already exists: ${albumPath}`);
	process.exit(1);
}
mkdirSync(assetDir, { recursive: true });

const photos = readdirSync(assetDir)
	.filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f))
	.sort()
	.map((f) => `  - ../../assets/creative/${slug}/${f}`);

const order = existsSync(ALBUMS)
	? Math.max(
			0,
			...readdirSync(ALBUMS)
				.filter((f) => f.endsWith('.md'))
				.map((f) => Number(readFileSync(join(ALBUMS, f), 'utf8').match(/^order:\s*(\d+)/m)?.[1] ?? 0))
	  ) + 1
	: 0;

const md = `---
title: "${title}"
description: ""
order: ${order}
${photos.length ? `photos:\n${photos.join('\n')}` : 'photos: []'}
---
`;

writeFileSync(albumPath, md);
console.log(`created ${albumPath}`);
console.log(`created ${assetDir}/`);
if (!photos.length) {
	console.log('drop jpgs into the folder, then reorder/edit the photos list');
} else {
	console.log(`listed ${photos.length} photo(s) by filename; edit the list to reorder`);
}