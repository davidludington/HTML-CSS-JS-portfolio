import type { ImageMetadata } from 'astro';

/**
 * Every image under src/assets/icons, keyed by filename.
 *
 * Data files reference icons by name (e.g. 'selenium.png'), so a glob keeps the
 * data layer free of import paths. Each value is an ImageMetadata object, which
 * means these can be handed straight to <Image /> from 'astro:assets'.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/icons/*.{png,jpeg,jpg}', {
	eager: true,
});

const icons = Object.fromEntries(
	Object.entries(modules).map(([path, mod]) => [path.split('/').pop()!, mod.default]),
) as Record<string, ImageMetadata>;

export function icon(name: string): ImageMetadata {
	const found = icons[name];
	if (!found) throw new Error(`Unknown icon: "${name}"`);
	return found;
}
