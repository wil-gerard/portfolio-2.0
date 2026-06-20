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
  Content: ComponentType;
};

export const blogPosts: BlogPost[] = getPosts().map((post) => ({
  slug: post.slug,
  ...post.frontmatter,
  Content: post.Content,
}));
