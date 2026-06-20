declare module "*.mdx" {
  import { ComponentType } from "react";
  import { PostFrontmatter } from "lib/getPosts";
  const Component: ComponentType;
  export default Component;
  export const frontmatter: PostFrontmatter;
}
