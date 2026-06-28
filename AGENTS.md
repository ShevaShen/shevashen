# Repository Guidelines

## Project Structure & Module Organization

This is an **Astro** static site (Astro v6, content collections via Markdown) deployed to Netlify. The Astro entry point is `astro.config.mjs`; the public directory is `static/` and the build output is `dist/`.

- `src/pages/` contains routed `.astro` pages. Pages map to routes 1:1 (e.g. `about.astro` → `/about/`). Dynamic routes live under `src/pages/topics/[topic].astro` and `src/pages/topics/[topic]/[note].astro`.
- `src/content/notes/` holds the Markdown notes (one `.md` file per note), each with frontmatter: `title`, `summary`, `topic`, `topicSlug`, `date`, and `tags`.
- `src/data/topics.js` is the source of truth for topics and note metadata; it derives `allNotes` and `latestNotes`. `src/data/site.js` holds site identity, nav items, and focus areas.
- `src/layouts/BaseLayout.astro` is the shared HTML shell (head, nav, footer, OG metadata).
- `src/components/PageHero.astro` is the reusable page hero block.
- `src/styles/global.css` is the global stylesheet.
- `tools/render-og-poster.mjs` regenerates the Open Graph poster into `static/img/shevashen-og-poster.png` via `sharp`.
- `static/` holds static assets served as-is, including `static/img/` and `static/_headers`.
- `archive/` contains the legacy Gatsby source, CMS config, and Netlify Functions, preserved for reference only — do not edit these for site behavior.

## Build, Test, and Development Commands

Use npm (the repository includes `package-lock.json`). Node 24 is pinned via `.nvmrc` and `netlify.toml`.

- `npm install` installs packages.
- `npm run dev` (or `npm run develop` / `npm run start`) starts the Astro dev server.
- `npm run build` builds the production site into `dist/`.
- `npm run serve` (or `npm run preview`) previews the production build locally.
- `npm run clean` removes `dist/`.
- `npm run format` runs Prettier (with `prettier-plugin-astro`) over `src/**/*.{astro,css,js,md}`, `tools/**/*.mjs`, `astro.config.mjs`, `package.json`, and `README.md`.
- `npm run render:og` regenerates the OG poster PNG.

## Coding Style & Naming Conventions

There is no committed Prettier config file; formatting defaults come from the `format` script, which uses `prettier` with `prettier-plugin-astro`. Astro components and pages use `.astro` extensions and PascalCase filenames for components (`PageHero.astro`). Data and helper modules use lowercase filenames (`site.js`, `topics.js`). Note Markdown files are lowercase, hyphenated slugs (e.g. `openclaw-concurrency-is-not-isolation.md`).

When adding a note, create the Markdown file in `src/content/notes/` **and** register it under the matching topic in `src/data/topics.js` so it appears in topic listings and the homepage.

## Testing Guidelines

There is no automated test suite and no `test` script. Before opening changes, run `npm run build` to verify that Astro pages, Markdown, and the build compile cleanly. For UI changes, run `npm run dev` and check the affected routes (home, `/about/`, `/topics/`, topic and note pages).

## Commit & Pull Request Guidelines

Recent history uses short imperative messages such as "Clarify static and clickable elements" and "Replace Open Graph image with site poster". Keep commits focused and direct.

Pull requests should include a summary, affected pages or components, validation steps, and screenshots for visual changes. Link issues when available. For content changes, note the topic and note slug.

## Security & Configuration Tips

Do not commit secrets, analytics keys, or Netlify credentials. Deployment configuration lives in `netlify.toml` (publish directory `dist/`, build command `npm run build`, `NODE_VERSION = "24"`). Astro site config lives in `astro.config.mjs` (site URL, `publicDir`, integrations). If you regenerate the OG image, run `npm run render:og` and commit the updated `static/img/shevashen-og-poster.png`.
