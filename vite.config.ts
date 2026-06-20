import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    macrosPlugin(),
    svgr(),
    { enforce: "pre", ...mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter] }) },
    react(),
  ],
  server: {
    historyApiFallback: true,
  },
});
