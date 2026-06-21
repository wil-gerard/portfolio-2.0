import { lazy } from "react";
import type { ComponentType, LazyExoticComponent } from "react";
import AiStackThumbnail from "content/posts/my-ai-development-stack/thumbnail-640.webp";
import AiStackThumbnailLarge from "content/posts/my-ai-development-stack/thumbnail-1280.webp";
import NodeModulesThumbnail from "content/posts/the-worm-in-your-node-modules/thumbnail-640.webp";
import NodeModulesThumbnailLarge from "content/posts/the-worm-in-your-node-modules/thumbnail-1000.webp";
import WritingThumbnail from "content/posts/write-to-be-cited/thumbnail-640.webp";
import WritingThumbnailLarge from "content/posts/write-to-be-cited/thumbnail-1280.webp";

export type PostThumbnail = {
  src: string;
  srcSet: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  thumbnail?: PostThumbnail;
  Content: LazyExoticComponent<ComponentType>;
};

type MdxModule = {
  default: ComponentType;
};

const contentModules = import.meta.glob<MdxModule>("../content/posts/*/index.mdx");

function getPostContent(slug: string): BlogPost["Content"] {
  const loadContent = contentModules[`../content/posts/${slug}/index.mdx`];

  if (!loadContent) {
    throw new Error(`Missing MDX content module for ${slug}`);
  }

  return lazy(async () => {
    const contentModule = await loadContent();
    return { default: contentModule.default };
  });
}

export const blogPosts: BlogPost[] = [
  {
    slug: "my-ai-development-stack",
    title: "My AI development stack",
    subtitle: "AGENTS.md, MCP, and skills",
    date: "Jun 20, 2026",
    readTime: "3 min read",
    excerpt:
      "AI tooling moves fast and everyone uses it differently. Here is a snapshot of my current stack. AGENTS.md for project instructions, MCP for external tools, and skills for repeatable workflows.",
    tags: ["ai", "tooling", "workflow", "mcp"],
    thumbnail: {
      src: AiStackThumbnail,
      srcSet: `${AiStackThumbnail} 640w, ${AiStackThumbnailLarge} 1280w`,
    },
    Content: getPostContent("my-ai-development-stack"),
  },
  {
    slug: "the-worm-in-your-node-modules",
    title: "The worm in your node_modules",
    subtitle: "Supply chain security and the case for switching your package manager",
    date: "Jun 20, 2026",
    readTime: "2 min read",
    excerpt:
      "Mini Shai-Hulud, a supply chain worm that spreads on its own, hit TanStack and hundreds of other npm packages. It sent me down a rabbit hole of pnpm's security features, and I haven't looked back",
    tags: ["pnpm", "security", "npm", "package management"],
    thumbnail: {
      src: NodeModulesThumbnail,
      srcSet: `${NodeModulesThumbnail} 640w, ${NodeModulesThumbnailLarge} 1000w`,
    },
    Content: getPostContent("the-worm-in-your-node-modules"),
  },
  {
    slug: "write-to-be-cited",
    title: "Write to be cited",
    subtitle: "GEO and what AI search actually rewards",
    date: "Jun 20, 2026",
    readTime: "2 min read",
    excerpt:
      "GEO (Generative Engine Optimization) is how content gets cited in AI generated answers. The winning tactics are not keyword tricks. They are the same things that make writing trustworthy to begin with.",
    tags: ["seo", "geo", "content", "ai", "writing"],
    thumbnail: {
      src: WritingThumbnail,
      srcSet: `${WritingThumbnail} 640w, ${WritingThumbnailLarge} 1280w`,
    },
    Content: getPostContent("write-to-be-cited"),
  },
];
