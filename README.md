# Wil Gerard Portfolio

Personal portfolio and blog built with React, TypeScript, Vite, Tailwind CSS, and MDX.

## Development

Requires Node.js and pnpm.

```sh
pnpm install
pnpm dev
```

The development server runs at the URL printed by Vite, normally `http://localhost:5173`.

## Commands

```sh
pnpm dev      # Start the Vite development server
pnpm lint     # Lint source files
pnpm build    # Type-check and create a production build
pnpm preview  # Preview the production build
```

## Source organization

- `src/app`: application wiring and route-level helpers
- `src/pages`: route components
- `src/components/layout`: site-wide chrome and page shells
- `src/components/sections`: homepage sections and portfolio presentation
- `src/components/blog`: shared blog presentation
- `src/components/ui`: cross-domain UI primitives
- `src/content/posts`: MDX posts and their local media
- `src/data`: typed content records
- `src/images`: imported site assets

See [AGENTS.md](./AGENTS.md) for component naming and ownership rules.
