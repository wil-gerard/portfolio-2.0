# Repository Organization Map

This file is the placement contract for source files.

## Global principles

- Keep the portfolio app focused on the components rendered from `src/App.js`.
- Shared primitives belong under `src/components/misc`.
- Page sections belong under `src/components/*` by section type.
- Static assets belong under `src/images` only when imported by reachable source.

## Folder contracts

### `src/components/*`

- Purpose: React UI sections and shared primitives used by the portfolio app.
- Include: components reachable from `src/App.js`.
- Exclude: unused starter templates, alternate landing pages, and demo-only components.
- Allowed imports: `src/components/misc`, `src/helpers`, `src/images`, package dependencies.

### `src/helpers/*`

- Purpose: small reusable runtime helpers used by reachable UI.
- Include: wrappers/hooks imported by active source.
- Exclude: helpers only needed by removed templates.

### `src/images/*`

- Purpose: portfolio assets imported by active source.
- Include: current hero, profile, resume, portfolio, contact, and tech assets.
- Exclude: unused starter template illustrations/icons/screenshots.

## Change Log

- 2026-05-31: Initial map for unused code cleanup.
