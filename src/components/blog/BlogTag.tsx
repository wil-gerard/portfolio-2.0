import React from "react";
import tw from "twin.macro";

const Tag = tw.span`
  inline-block bg-primary-100 text-primary-700
  text-xs font-medium px-3 py-1 rounded-full
`;

type BlogTagProps = {
  label: string;
};

const BlogTag = ({ label }: BlogTagProps) => <Tag>{label}</Tag>;

export default BlogTag;
