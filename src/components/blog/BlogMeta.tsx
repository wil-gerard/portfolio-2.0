import React from "react";
import tw from "twin.macro";
import BlogTag from "./BlogTag";

const TagRow = tw.div`flex flex-wrap gap-2 mt-4`;

type BlogMetaProps = {
  tags: string[];
};

const BlogMeta = ({ tags }: BlogMetaProps) => (
  <TagRow>
    {tags.map((tag) => (
      <BlogTag key={tag} label={tag} />
    ))}
  </TagRow>
);

export default BlogMeta;
