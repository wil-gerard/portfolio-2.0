import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BlogPost } from "data/blogPosts";
import BlogMeta from "./BlogMeta";

const Card = styled(Link)`
  ${tw`bg-gray-100 rounded-lg p-6 flex flex-col transition duration-300 no-underline`}
  &:hover {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;

const DateText = tw.p`text-sm text-gray-500`;
const Title = tw.h3`text-xl font-bold text-secondary-500 mt-1 leading-snug`;
const Subtitle = tw.p`text-base text-secondary-300 mt-1`;
const Excerpt = tw.p`text-sm text-gray-500 mt-3 leading-relaxed flex-1`;
const ReadMore = tw.span`mt-4 text-sm font-semibold text-primary-500 group-hover:text-primary-700 transition duration-200`;

type BlogCardProps = {
  post: BlogPost;
};

const BlogCard = ({ post }: BlogCardProps) => (
  <Card className="group" to={`/blog/${post.slug}`}>
    <DateText>{post.date}</DateText>
    <Title>{post.title}</Title>
    <Subtitle>{post.subtitle}</Subtitle>
    <Excerpt>{post.excerpt}</Excerpt>
    <BlogMeta tags={post.tags} />
    <ReadMore>Read More →</ReadMore>
  </Card>
);

export default BlogCard;
