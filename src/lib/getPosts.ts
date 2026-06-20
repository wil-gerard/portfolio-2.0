import { ComponentType } from "react";

export type PostFrontmatter = {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  Content: ComponentType;
};

type MdxModule = {
  default: ComponentType;
  frontmatter: PostFrontmatter;
};

const modules = import.meta.glob("../content/posts/*/index.mdx", {
  eager: true,
}) as Record<string, MdxModule>;

export function getPosts(): Post[] {
  return Object.entries(modules).map(([path, mod]) => ({
    slug: path.split("/").at(-2)!,
    frontmatter: mod.frontmatter,
    Content: mod.default,
  }));
}
