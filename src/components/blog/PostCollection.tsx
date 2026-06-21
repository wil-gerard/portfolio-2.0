import { ReactNode } from "react";
import { tag } from "helpers/tag";
import { ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings";
import { BlogPost } from "data/blogPosts";
import PostCard from "./PostCard";

type PostCollectionProps = {
  title: string;
  subtitle?: string;
  posts: BlogPost[];
  controls?: ReactNode;
  footer?: ReactNode;
};

const Subtitle = tag("p", "text-center text-gray-500 mt-4 text-lg");
const Grid = tag("div", "mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8");

const PostCollection = ({ title, subtitle, posts, controls, footer }: PostCollectionProps) => (
  <ContentWithPaddingXl>
    <SectionHeading>{title}</SectionHeading>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {controls}
    <Grid>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </Grid>
    {footer && <div className="flex justify-center mt-12">{footer}</div>}
  </ContentWithPaddingXl>
);

export default PostCollection;
