# Portfolio Agent Guide

## Working rules

- Keep changes focused and use Conventional Commits.
- Run `pnpm lint` and `pnpm build` before committing source changes.
- Preserve the existing routes, responsive behavior, external links, and Formspree integration unless the task explicitly changes them.
- Follow the existing Tailwind CSS v4 approach; do not add another styling system.

## Component ownership

- Put application wiring and route-level helpers in `src/app`.
- Name route components with the `Page` suffix and keep them in `src/pages`.
- Put site-wide chrome and page shells in `src/components/layout`.
- Name major homepage blocks with the `Section` suffix and keep them in `src/components/sections`.
- Put shared blog presentation in `src/components/blog`; route state such as filtering remains in the owning page.
- Put cross-domain UI primitives in `src/components/ui` only when they have multiple credible consumers.
- Keep portfolio cards, tabs, and gallery behavior under `src/components/sections/portfolio`.
- Keep static content records in `src/data` and imported media in `src/images`.

## Naming rules

- Name components by purpose, not layout or CSS technique.
- Avoid names such as `Simple`, `Basic`, `Generic`, `WithButton`, `TwoCol`, and `AsImage`.
- Do not create `misc`, `common`, or `helpers` dumping grounds.
- Do not create a subfolder for one component; add one when a domain owns several related files.
- Prefer ordinary semantic JSX over wrappers that only alias an HTML element and fixed class string.
