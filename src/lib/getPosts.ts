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
  thumbnail?: string;
};

type MdxModule = {
  default: ComponentType;
  frontmatter: PostFrontmatter;
};

const modules = import.meta.glob("../content/posts/*/index.mdx", {
  eager: true,
}) as Record<string, MdxModule>;

const images = import.meta.glob<{ default: string }>(
  "../content/posts/*/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

export function getPosts(): Post[] {
  return Object.entries(modules).map(([path, mod]) => {
    const slug = path.split("/").at(-2)!;
    const imageEntry = Object.entries(images).find(([imgPath]) =>
      imgPath.includes(`/${slug}/`)
    );
    return {
      slug,
      frontmatter: mod.frontmatter,
      Content: mod.default,
      thumbnail: imageEntry?.[1].default,
    };
  });
}
