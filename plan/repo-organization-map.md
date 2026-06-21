# Repository Organization Map

This file is the placement contract for source files.

## Global principles

- Keep the portfolio app focused on components reachable from `src/app/App.tsx`.
- Name components by their product role rather than their layout or styling technique.
- Route components belong in `src/pages` and use the `Page` suffix.
- Homepage sections belong in `src/components/sections` and use the `Section` suffix.
- Shared primitives belong in `src/components/ui` only when they have multiple credible consumers.
- Static assets belong under `src/images` only when imported by reachable source.

## Folder contracts

### `src/app/*`

- Purpose: application wiring and route-level helpers.
- Include: route registration, scroll restoration, and other app-wide behavior.
- Exclude: page content and reusable presentation.

### `src/pages/*`

- Purpose: components directly mounted by routes.
- Include: `HomePage`, `BlogIndexPage`, and `BlogPostPage`.
- Exclude: presentation shared between routes or homepage sections.

### `src/components/*`

- `layout`: site-wide chrome and page shells.
- `sections`: semantic homepage sections; related portfolio components live in its `portfolio` subfolder.
- `blog`: post cards, metadata, filters, and shared post-collection presentation.
- `ui`: cross-domain primitives with multiple consumers.
- Exclude: `misc`, `common`, and `helpers` catch-all folders.

### `src/data/*`

- Purpose: typed content records used by presentation components.
- Include: blog metadata and portfolio project/photo records.
- Exclude: component state and rendered JSX where a typed representation is clearer.

### `src/images/*`

- Purpose: portfolio assets imported by active source.
- Include: current hero, profile, resume, portfolio, contact, and tech assets.
- Exclude: unused starter template illustrations/icons/screenshots.

## Change Log

- 2026-05-31: Initial map for unused code cleanup.
- 2026-06-21: Adopted semantic page, section, domain, and UI ownership.
