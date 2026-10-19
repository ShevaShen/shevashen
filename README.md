# shevashen.com

Personal website for Sheva Shen, positioned as a knowledge hub documenting what he learns while building AI systems across agent systems, enterprise AI adoption, harness engineering, and reliable business systems.

## Stack

- Astro
- Markdown content
- Static deployment on Netlify

Legacy Gatsby source is preserved under `archive/legacy-gatsby-src` for reference while the public site runs from `src/`.

## Commands

```sh
npm install
npm run dev
npm run build
npm run serve
```

`npm run build` validates the production Astro output in `dist/`.

## Editorial design

The shared `BaseLayout.astro` and `PageHero.astro` provide the site shell and
secondary-page headers. `WritingList.astro` renders chronological note lists;
`RuntimeDiagram.astro` supplies the original, accessible SVG illustration.
Design tokens and responsive layouts live in `src/styles/global.css`.

The site uses system serif typography and two self-hosted Inter weights. No
external font service, client framework, or new dependency is required. Theme
selection follows the system until a reader chooses light or dark; that choice
persists locally. Content and navigation work without JavaScript. Small scripts
add the theme toggle, topic/tag filters, active section links, and reading progress.

## Writing and technical content

Keep note Markdown in `src/content/notes/` and register its metadata in
`src/data/topics.js`. Existing URLs remain `/topics/<topic>/<note>/`. The article
layout derives its table of contents from rendered level-two headings, retains
the registered reading time, and adds BlogPosting structured data and related,
newer, and older notes.

Use fenced code with a language (for example `json` or `typescript`) for Astro's
build-time Shiki highlighting in both themes. Use `text` fences for ASCII diagrams;
they retain alignment and scroll horizontally. Markdown tables, blockquotes,
inline code, and images are styled for reading. For vector diagrams, use a local
SVG image with descriptive alt text or an accessible SVG in a component. No
client-side diagram renderer is loaded. The `.callout` class supports authored
HTML asides when a note needs one.

## Local validation

Run `npm run build`, then `npm run dev` and check home, `/topics/`, a topic page,
`/about/`, and representative articles at desktop, tablet, and mobile widths.
Check both themes, topic and tag filters, table-of-contents anchors, keyboard
focus, horizontal scrolling in code/tables, and reading progress. The generated
sitemap, canonical URLs, and Open Graph image remain part of the static build.
Deployment continues to use the existing Netlify configuration.
