## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Adding a creative piece

Each piece is one album file in `src/content/albums/` plus one image folder in `src/assets/creative/`, matching by slug.

1. Scaffold: `npm run new:piece -- "dopp kit"` (or drop jpgs in `src/assets/creative/dopp-kit/` first — the script lists them into `photos:`).
2. Edit `src/content/albums/dopp-kit.md`: set `description`, reorder `photos:` to control display order.

Unused images live in `src/assets/_unsorted/`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
