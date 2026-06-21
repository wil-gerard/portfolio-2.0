import React from "react";
import { useParams, Link } from "react-router-dom";
import { primaryButtonClassName } from "components/ui/Button";
import SectionContainer from "components/ui/SectionContainer";
import { blogPosts } from "data/blogPosts";
import PostMeta from "components/blog/PostMeta";
import CodeBlock from "components/blog/CodeBlock";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="relative">
        <SectionContainer>
          <p className="text-center text-gray-700 text-lg mt-12">Post not found.</p>
          <div className="flex justify-center mt-12">
            <Link className={primaryButtonClassName} to="/blog">← Back to Blog</Link>
          </div>
        </SectionContainer>
      </div>
    );
  }

  return (
    <div className="relative">
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-black tracking-wide">{post.title}</h1>
          <p className="text-sm text-gray-700 mt-2">{post.date} · {post.readTime}</p>
          <p className="text-xl text-secondary-300 mt-2">{post.subtitle}</p>
          <div className="mt-4">
            <PostMeta tags={post.tags} />
          </div>
          {post.thumbnail && (
            <img
              className="w-full rounded-xl mt-8 max-h-[420px] object-cover"
              src={post.thumbnail.src}
              srcSet={post.thumbnail.srcSet}
              sizes="(min-width: 768px) 768px, calc(100vw - 4rem)"
              alt={post.title}
              width="640"
              height="333"
              decoding="async"
            />
          )}
          <div className="mt-10 text-secondary-300 leading-relaxed post-prose">
            {React.createElement(
              post.Content as React.ComponentType<{ components?: Record<string, React.ElementType> }>,
              { components: { pre: CodeBlock } }
            )}
          </div>
          <div className="mt-12">
            <Link className={primaryButtonClassName} to="/blog">← Back to Blog</Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default BlogPostPage;
