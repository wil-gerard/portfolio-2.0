import { Link } from "react-router-dom";
import { cardHoverClassName } from "components/ui/cardStyles";
import type { BlogPost, PostThumbnail } from "data/blogPosts";
import PostMeta from "./PostMeta";

const cardClass = `bg-gray-100 rounded-lg overflow-hidden flex flex-col no-underline ${cardHoverClassName}`;

const Thumbnail = ({ src, srcSet }: PostThumbnail) => (
  <img
    className="aspect-[1.92] w-full object-cover object-center"
    src={src}
    srcSet={srcSet}
    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, calc(100vw - 4rem)"
    alt=""
    width="640"
    height="333"
    loading="lazy"
    decoding="async"
  />
);

type PostCardProps = {
  post: BlogPost;
};

const PostCard = ({ post }: PostCardProps) => (
  <Link className={`${cardClass} group`} to={`/blog/${post.slug}`}>
    {post.thumbnail && <Thumbnail {...post.thumbnail} />}
    <div className="p-6 flex flex-col flex-1">
      <p className="text-sm text-gray-700">{post.date}</p>
      <h3 className="text-xl font-bold text-secondary-500 mt-1 leading-snug">{post.title}</h3>
      <p className="text-base text-secondary-300 mt-1">{post.subtitle}</p>
      <p className="text-sm text-gray-700 mt-3 leading-relaxed flex-1">{post.excerpt}</p>
      <PostMeta tags={post.tags} />
      <span className="mt-4 text-sm font-semibold text-primary-500 group-hover:text-primary-700 transition duration-200">
        Read More →
      </span>
    </div>
  </Link>
);

export default PostCard;
