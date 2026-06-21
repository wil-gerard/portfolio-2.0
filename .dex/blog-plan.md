# Blog Section

Add a blog section to the portfolio in the same visual style as the existing site — using the established primitives (SectionHeading, Subheading, Container, ContentWithPaddingXl, PrimaryButton, twin.macro), Framer Motion scroll animations, and the primary-blue / secondary-dark color tokens.

The blog will live as a preview section on the main page (matching the TabCardGrid pattern) and link out to individual post pages via React Router.

---

## Task: Data layer and types

Define the BlogPost type and create a hardcoded posts data file to match the existing pattern (all content is currently hardcoded inline in components).

Files to create:
- `src/data/blogPosts.ts` — exports `blogPosts: BlogPost[]` array and `BlogPost` type

Type shape:
```ts
type BlogPost = {
  slug: string;
  title: string;
  date: string;          // ISO date string "2026-05-20"
  readTime: string;      // "5 min read"
  excerpt: string;
  tags: string[];
  coverImage: string;    // import or URL
  content: string;       // markdown or plain HTML string for now
};
```

Start with 2–3 placeholder posts to make the grid look real. Keep slugs URL-safe (kebab-case).

---

## Task: Shared blog primitive components

Create small, reusable presentational components that multiple blog views will share. Mirror how `Headings.ts`, `Buttons.ts`, and `Layouts.ts` are structured.

Files to create:
- `src/components/blog/BlogTag.tsx` — pill badge for a single category tag; uses primary-100 bg and primary-700 text from the existing color token system
- `src/components/blog/BlogMeta.tsx` — one-line row showing date · read time · tags; uses gray-400 text and the BlogTag component
- `src/components/blog/BlogCard.tsx` — card matching the portfolio card style: cover image at top, title, excerpt, BlogMeta; hover elevation shadow; links to `/blog/:slug`

All styled with twin.macro (tw``). No external icon libraries — match the existing zero-dependency icon approach (SVGs inlined or omitted).

---

## Task: Blog list section component

Build the main blog section that sits on the home page, equivalent in structure to `TabCardGrid.tsx`.

File to create: `src/components/blog/BlogSection.tsx`

Layout pattern to follow:
- Wrap in `<AnimationRevealPage>` compatible — the parent already handles it, so just use `useInView` + Framer Motion fade-up on the grid, same as `TabCardGrid`
- `<Container>` → `<ContentWithPaddingXl>` outer shell
- `<SectionHeading>` "From the Blog" with `<Subheading>` "Thoughts, learnings, and updates"
- Responsive grid: 1 col mobile → 2 col tablet → 3 col desktop (matching portfolio grid)
- Renders the first 3 posts from `blogPosts` data
- "View all posts" `<PrimaryButton>` linking to `/blog` route
- Decorative blob SVGs in corners at low opacity (same approach as TabCardGrid)

---

## Task: Blog index page

A standalone page at `/blog` listing all posts with the same card grid. Reuses `BlogCard` and layout primitives.

File to create: `src/pages/BlogIndex.tsx`

- Full-page layout with `<Container>` / `<ContentWithPaddingXl>`
- `<SectionHeading>` + tag filter row (filter by clicking a tag pill — local React state, no router params needed)
- All `blogPosts` rendered as `BlogCard` grid
- Back link to `/#home` using `<PrimaryButton>` styled as outline/ghost variant

---

## Task: Blog post detail page

A standalone page at `/blog/:slug` rendering a single post's full content.

File to create: `src/pages/BlogPost.tsx`

Layout:
- `<Container>` → `<ContentWithPaddingXl>` shell matching existing section padding
- Cover image at top (full-width, max-height capped, object-cover)
- `<SectionHeading>` for post title (left-aligned on desktop, centered on mobile — same as TwoColWithButton heading)
- `<BlogMeta>` row below title
- Content rendered from the `content` string field — wrap in a `<Prose>` styled component with readable line-length, font-size, and spacing using the Inter font already loaded
- "Back to Blog" `<PrimaryButton>` at the bottom

---

## Task: Add React Router and wire up routes

The app is currently a single scrollable page with no router. Add react-router-dom and update App.tsx to support blog post URLs without breaking the existing scroll behavior.

Steps:
1. `npm install react-router-dom` (latest v6)
2. Wrap `<App>` in `<BrowserRouter>` in `src/index.tsx`
3. Update `src/App.tsx` to use `<Routes>`:
   - Route `/` → existing home sections (hero + about + portfolio + contact + **BlogSection**)
   - Route `/blog` → `<BlogIndex>`
   - Route `/blog/:slug` → `<BlogPost>`
4. Update `vite.config.ts` to add `historyApiFallback: true` (or equivalent) so page refreshes on `/blog/*` still work in dev

---

## Task: Integrate blog section into home page and navigation

Wire the new `BlogSection` into the existing `App.tsx` home layout and add a nav anchor.

Steps:
1. Import and render `<BlogSection />` in `App.tsx` between the portfolio grid and contact form
2. Add an `id="blog"` anchor on the section wrapper so the hero nav can scroll to it
3. Add a "Blog" link alongside the LinkedIn/GitHub social links in `BackgroundAsImage.tsx` — or add a minimal sticky nav bar if cleaner (user decision)
