# Portfolio Agent Guide

Use the `decision-architect` skill before implementing a new feature or changing the project architecture.

## Workflow

- Inspect the existing implementation and follow its patterns before adding a new one.
- Keep each change focused. Do not mix incidental refactors into feature or bug-fix work.
- Ask only when blocked. Make reasonable assumptions for low-risk implementation details.
- Prefer small, explicit implementations over scaffolding for possible future needs.
- Do not add dependencies, frameworks, build tools, or styling systems unless the task requires them. Explain why each new dependency is necessary.
- Do not leave TODOs, placeholder implementations, or no-op stubs.
- Never run `git revert`, `git restore`, `git reset --hard`, or another destructive Git command without explicit permission.
- Use Conventional Commits with an imperative subject: `type(scope): summary` or `type: summary`.

## Tooling and verification

- Use pnpm. Do not use `npm install` or Yarn.
- Run `pnpm lint` and `pnpm build` before committing source changes.
- For UI changes, check the affected routes at desktop and mobile widths and inspect the browser console.
- Exercise the interactions affected by a change, including navigation, filters, tabs, keyboard controls, links, and forms.
- Do not claim that tests pass when the project has no configured test suite.
- Preserve the existing routes, responsive behavior, external links, and Formspree integration unless the task explicitly changes them.

## Implementation rules

- Preserve strict TypeScript. Do not use `any`; use `unknown` at trust boundaries and narrow it before access.
- Use `import type` for type-only imports.
- Use literal unions for finite states such as tabs and variants.
- Import code directly from its source module. Do not add barrel files or wildcard imports.
- Follow the formatting of each touched file and avoid reformatting unrelated lines.
- Prefer inline expressions for trivial one-off work. Extract a helper only for meaningful reuse or domain logic.
- Do not add pass-through wrappers or aliases that add no behavior.
- Handle rejected promises. Do not silently swallow errors.

## Component ownership

- Put application wiring and route-level helpers in `src/app`.
- Name route components with the `Page` suffix and keep them in `src/pages`.
- Put site-wide chrome and page shells in `src/components/layout`.
- Name major homepage blocks with the `Section` suffix and keep them in `src/components/sections`.
- Put shared blog presentation in `src/components/blog`; route state such as filtering remains in the owning page.
- Put cross-domain UI primitives in `src/components/ui` only when they have multiple credible consumers.
- Keep portfolio cards, tabs, and gallery behavior under `src/components/sections/portfolio`.
- Keep static content records in `src/data` and imported media in `src/images`.
- Keep post-specific media beside its MDX file in `src/content/posts/<slug>`.

## Naming rules

- Name components by purpose, not layout or CSS technique.
- Avoid names such as `Simple`, `Basic`, `Generic`, `WithButton`, `TwoCol`, and `AsImage`.
- Do not create `misc`, `common`, or `helpers` dumping grounds.
- Do not create a subfolder for one component; add one when a domain owns several related files.
- Prefer ordinary semantic JSX over wrappers that only alias an HTML element and fixed class string.

## UI rules

- Use Tailwind CSS v4 and the existing design tokens. Do not introduce another styling system.
- Keep HTML semantic and as flat as the content allows. Add wrappers only when they provide layout, behavior, or accessibility value.
- Use buttons for actions and links for navigation. Never nest one interactive element inside another.
- Give form controls labels and preserve keyboard access for interactive components.
- Keep shared styles systemic. Colocate a style when only one component owns it.
- Avoid helper copy that explains ordinary controls; make the control itself clear.
