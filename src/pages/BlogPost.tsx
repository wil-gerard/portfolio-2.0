import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { blogPosts } from "data/blogPosts";
import BlogMeta from "components/blog/BlogMeta";
import CodeBlock from "components/blog/CodeBlock";

const PostWrapper = styled.div`
  ${tw`max-w-3xl mx-auto`}
`;
const Title = tw.h1`text-4xl sm:text-5xl font-black tracking-wide`;
const DateText = tw.p`text-sm text-gray-500 mt-2`;
const Subtitle = tw.p`text-xl text-secondary-300 mt-2`;
const MetaRow = tw.div`mt-4`;
const HeroImage = styled.img`
  ${tw`w-full rounded-xl mt-8`}
  max-height: 420px;
  object-fit: cover;
`;
const Prose = styled.div`
  ${tw`mt-10 text-secondary-100 leading-relaxed`}
  font-size: 1.0625rem;
  p {
    margin-bottom: 1.5rem;
  }
  h2 {
    ${tw`text-2xl font-bold text-secondary-500 mt-10 mb-4`}
  }
  h3 {
    ${tw`text-xl font-semibold text-secondary-500 mt-8 mb-3`}
  }
  hr {
    ${tw`border-gray-300 my-10`}
  }
  code {
    ${tw`bg-gray-200 text-secondary-500 px-1 rounded text-sm`}
  }
  ul, ol {
    ${tw`pl-6 mb-6`}
  }
  ul { list-style-type: disc; }
  ol { list-style-type: decimal; }
  li {
    ${tw`mb-2`}
  }
  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: #4769FF;
    text-underline-offset: 3px;
    transition: text-decoration-color 200ms;
    &:hover, &:focus {
      text-decoration-color: #1F48FF;
    }
  }
`;
const BackRow = tw.div`mt-12`;
const BackLink = tw(Link)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
const NotFound = tw.p`text-center text-gray-500 text-lg mt-12`;

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container>
        <ContentWithPaddingXl>
          <NotFound>Post not found.</NotFound>
          <div tw="flex justify-center mt-12">
            <BackLink to="/blog">← Back to Blog</BackLink>
          </div>
        </ContentWithPaddingXl>
      </Container>
    );
  }

  return (
    <Container>
      <ContentWithPaddingXl>
        <PostWrapper>
          <Title>{post.title}</Title>
          <DateText>{post.date} · {post.readTime}</DateText>
          <Subtitle>{post.subtitle}</Subtitle>
          <MetaRow>
            <BlogMeta tags={post.tags} />
          </MetaRow>
          {post.thumbnail && <HeroImage src={post.thumbnail} alt={post.title} />}
          <Prose>{React.createElement(post.Content as React.ComponentType<{ components?: Record<string, React.ElementType> }>, { components: { pre: CodeBlock } })}</Prose>
          <BackRow>
            <BackLink to="/blog">← Back to Blog</BackLink>
          </BackRow>
        </PostWrapper>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default BlogPost;
