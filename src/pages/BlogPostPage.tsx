import React, { ComponentProps } from "react";
import { useParams, Link } from "react-router-dom";
import { tag } from "helpers/tag";
import { primaryButtonClass } from "components/misc/Buttons";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { blogPosts } from "data/blogPosts";
import BlogMeta from "components/blog/BlogMeta";
import CodeBlock from "components/blog/CodeBlock";

const PostWrapper = tag("div", "max-w-3xl mx-auto");
const Title = tag("h1", "text-4xl sm:text-5xl font-black tracking-wide");
const DateText = tag("p", "text-sm text-gray-500 mt-2");
const Subtitle = tag("p", "text-xl text-secondary-300 mt-2");
const MetaRow = tag("div", "mt-4");
const BackRow = tag("div", "mt-12");
const NotFound = tag("p", "text-center text-gray-500 text-lg mt-12");
const BackLink = (props: ComponentProps<typeof Link>) => (
  <Link {...props} className={primaryButtonClass} />
);

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container>
        <ContentWithPaddingXl>
          <NotFound>Post not found.</NotFound>
          <div className="flex justify-center mt-12">
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
          {post.thumbnail && (
            <img
              className="w-full rounded-xl mt-8 max-h-[420px] object-cover"
              src={post.thumbnail}
              alt={post.title}
            />
          )}
          <div className="mt-10 text-secondary-100 leading-relaxed post-prose">
            {React.createElement(
              post.Content as React.ComponentType<{ components?: Record<string, React.ElementType> }>,
              { components: { pre: CodeBlock } }
            )}
          </div>
          <BackRow>
            <BackLink to="/blog">← Back to Blog</BackLink>
          </BackRow>
        </PostWrapper>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default BlogPostPage;
