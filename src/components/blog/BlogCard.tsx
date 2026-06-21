import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { hoverLift } from "components/misc/cardStyles";
import { BlogPost } from "data/blogPosts";
import BlogMeta from "./BlogMeta";

const Card = styled(Link)`
  ${tw`bg-gray-100 rounded-lg overflow-hidden flex flex-col no-underline`}
  ${hoverLift}
`;

const Thumbnail = styled.div<{ src: string }>`
  width: 100%;
  padding-top: 52%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`;

const Body = tw.div`p-6 flex flex-col flex-1`;
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
    {post.thumbnail && <Thumbnail src={post.thumbnail} />}
    <Body>
      <DateText>{post.date}</DateText>
      <Title>{post.title}</Title>
      <Subtitle>{post.subtitle}</Subtitle>
      <Excerpt>{post.excerpt}</Excerpt>
      <BlogMeta tags={post.tags} />
      <ReadMore>Read More →</ReadMore>
    </Body>
  </Card>
);

export default BlogCard;
