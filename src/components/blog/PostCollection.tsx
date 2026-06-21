import type { ReactNode } from "react";
import SectionContainer from "components/ui/SectionContainer";
import SectionHeading from "components/ui/SectionHeading";
import { BlogPost } from "data/blogPosts";
import PostCard from "./PostCard";

type PostCollectionProps = {
  title: string;
  subtitle?: string;
  posts: BlogPost[];
  controls?: ReactNode;
  footer?: ReactNode;
};

const PostCollection = ({ title, subtitle, posts, controls, footer }: PostCollectionProps) => (
  <SectionContainer>
    <SectionHeading>{title}</SectionHeading>
    {subtitle && <p className="text-center text-gray-700 mt-4 text-lg">{subtitle}</p>}
    {controls}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
    {footer && <div className="flex justify-center mt-12">{footer}</div>}
  </SectionContainer>
);

export default PostCollection;
