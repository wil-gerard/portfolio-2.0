import { ComponentType } from "react";
import { getPosts } from "lib/getPosts";

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  thumbnail?: string;
  Content: ComponentType;
};

export const blogPosts: BlogPost[] = getPosts().map((post) => ({
  slug: post.slug,
  ...post.frontmatter,
  thumbnail: post.thumbnail,
  Content: post.Content,
}));
