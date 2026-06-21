import { Link } from "react-router-dom";
import { cardHoverClassName } from "components/ui/cardStyles";
import { BlogPost } from "data/blogPosts";
import PostMeta from "./PostMeta";

const cardClass = `bg-gray-100 rounded-lg overflow-hidden flex flex-col no-underline ${cardHoverClassName}`;

const Thumbnail = ({ src }: { src: string }) => (
  <div
    className="w-full bg-cover bg-center"
    style={{ paddingTop: "52%", backgroundImage: `url(${src})` }}
  />
);

type PostCardProps = {
  post: BlogPost;
};

const PostCard = ({ post }: PostCardProps) => (
  <Link className={`${cardClass} group`} to={`/blog/${post.slug}`}>
    {post.thumbnail && <Thumbnail src={post.thumbnail} />}
    <div className="p-6 flex flex-col flex-1">
      <p className="text-sm text-gray-500">{post.date}</p>
      <h3 className="text-xl font-bold text-secondary-500 mt-1 leading-snug">{post.title}</h3>
      <p className="text-base text-secondary-300 mt-1">{post.subtitle}</p>
      <p className="text-sm text-gray-500 mt-3 leading-relaxed flex-1">{post.excerpt}</p>
      <PostMeta tags={post.tags} />
      <span className="mt-4 text-sm font-semibold text-primary-500 group-hover:text-primary-700 transition duration-200">
        Read More →
      </span>
    </div>
  </Link>
);

export default PostCard;
