import { tag } from "helpers/tag";
import BlogTag from "./BlogTag";

const TagRow = tag("div", "flex flex-wrap gap-2 mt-4");

type BlogMetaProps = {
  tags: string[];
};

const BlogMeta = ({ tags }: BlogMetaProps) => (
  <TagRow>
    {tags.map((label) => (
      <BlogTag key={label} label={label} />
    ))}
  </TagRow>
);

export default BlogMeta;
