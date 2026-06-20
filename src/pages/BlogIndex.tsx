import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings";
import { blogPosts } from "data/blogPosts";
import BlogCard from "components/blog/BlogCard";
import BlogTag from "components/blog/BlogTag";

const Subheading = tw.p`text-center text-gray-500 mt-4 text-lg`;
const FilterRow = tw.div`flex flex-wrap justify-center gap-3 mt-8`;
const Grid = tw.div`mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`;
const BackRow = tw.div`flex justify-center mt-12`;
const BackLink = tw(Link)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;

const AllTag = styled.button<{ active: boolean }>`
  ${tw`inline-block text-xs font-medium px-3 py-1 rounded-full cursor-pointer transition duration-200`}
  ${({ active }) =>
    active
      ? tw`bg-primary-500 text-gray-100`
      : tw`bg-primary-100 text-primary-700 hover:bg-primary-200`}
`;

const FilterTag = styled.button<{ active: boolean }>`
  ${tw`inline-block text-xs font-medium px-3 py-1 rounded-full cursor-pointer transition duration-200`}
  ${({ active }) =>
    active
      ? tw`bg-primary-500 text-gray-100`
      : tw`bg-primary-100 text-primary-700 hover:bg-primary-200`}
`;

const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

const BlogIndex = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <Container>
      <ContentWithPaddingXl>
        <SectionHeading>All Posts</SectionHeading>
        <Subheading>Thoughts and insights about web development and technology</Subheading>
        <FilterRow>
          <AllTag active={activeTag === null} onClick={() => setActiveTag(null)}>
            All
          </AllTag>
          {allTags.map((tag) => (
            <FilterTag
              key={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </FilterTag>
          ))}
        </FilterRow>
        <Grid>
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </Grid>
        <BackRow>
          <BackLink to="/">← Back to Portfolio</BackLink>
        </BackRow>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default BlogIndex;
