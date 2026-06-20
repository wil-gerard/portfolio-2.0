import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { blogPosts } from "data/blogPosts";
import BlogMeta from "components/blog/BlogMeta";

const PostWrapper = styled.div`
  ${tw`max-w-3xl mx-auto`}
`;
const Title = tw.h1`text-4xl sm:text-5xl font-black tracking-wide`;
const DateText = tw.p`text-sm text-gray-500 mt-2`;
const Subtitle = tw.p`text-xl text-secondary-300 mt-2`;
const MetaRow = tw.div`mt-4`;
const Prose = styled.div`
  ${tw`mt-10 text-secondary-100 leading-relaxed`}
  font-size: 1.0625rem;
  p {
    margin-bottom: 1.5rem;
  }
  code {
    ${tw`bg-gray-200 text-secondary-500 px-1 rounded text-sm`}
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
          <Prose><post.Content /></Prose>
          <BackRow>
            <BackLink to="/blog">← Back to Blog</BackLink>
          </BackRow>
        </PostWrapper>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default BlogPost;
