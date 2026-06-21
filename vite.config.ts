import fs from 'node:fs';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig, Plugin } from 'vite';

function sitemapPlugin(): Plugin {
  return {
    name: 'sitemap',
    generateBundle() {
      const postsDir = path.resolve(process.cwd(), 'src/content/posts');
      const slugs = fs
        .readdirSync(postsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);

      const domain = 'https://wilgerard.com';
      const routes = ['/', '/blog', ...slugs.map((s) => `/blog/${s}`)];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url>\n    <loc>${domain}${r}</loc>\n  </url>`).join('\n')}
</urlset>`;

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemap,
      });
    },
  };
}

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    macrosPlugin(),
    svgr(),
    {
      enforce: 'pre',
      ...mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter] }),
    },
    react(),
    sitemapPlugin(),
  ],
});
