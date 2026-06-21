import { Link } from "react-router-dom";
import { tag } from "helpers/tag";
import { hoverLift } from "components/misc/cardStyles";
import { BlogPost } from "data/blogPosts";
import BlogMeta from "./BlogMeta";

const cardClass = `bg-gray-100 rounded-lg overflow-hidden flex flex-col no-underline ${hoverLift}`;

const Thumbnail = ({ src }: { src: string }) => (
  <div
    className="w-full bg-cover bg-center"
    style={{ paddingTop: "52%", backgroundImage: `url(${src})` }}
  />
);

const Body = tag("div", "p-6 flex flex-col flex-1");
const DateText = tag("p", "text-sm text-gray-500");
const Title = tag("h3", "text-xl font-bold text-secondary-500 mt-1 leading-snug");
const Subtitle = tag("p", "text-base text-secondary-300 mt-1");
const Excerpt = tag("p", "text-sm text-gray-500 mt-3 leading-relaxed flex-1");
const ReadMore = tag(
  "span",
  "mt-4 text-sm font-semibold text-primary-500 group-hover:text-primary-700 transition duration-200"
);

type BlogCardProps = {
  post: BlogPost;
};

const BlogCard = ({ post }: BlogCardProps) => (
  <Link className={`${cardClass} group`} to={`/blog/${post.slug}`}>
    {post.thumbnail && <Thumbnail src={post.thumbnail} />}
    <Body>
      <DateText>{post.date}</DateText>
      <Title>{post.title}</Title>
      <Subtitle>{post.subtitle}</Subtitle>
      <Excerpt>{post.excerpt}</Excerpt>
      <BlogMeta tags={post.tags} />
      <ReadMore>Read More →</ReadMore>
    </Body>
  </Link>
);

export default BlogCard;
