import { Link } from "react-router-dom";
import { primaryButtonClass } from "components/misc/Buttons";
import PostCollection from "components/blog/PostCollection";
import { Container } from "components/misc/Layouts";
import { blogPosts } from "data/blogPosts";
import SvgDecoratorBlob1 from "images/svg-decorator-blob-10.svg?react";
import SvgDecoratorBlob2 from "images/svg-decorator-blob-2.svg?react";

const DecoratorBlob1 = () => (
  <SvgDecoratorBlob1 className="pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15" />
);
const DecoratorBlob2 = () => (
  <SvgDecoratorBlob2 className="pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 text-indigo-400" />
);

const RecentPostsSection = () => {
  const preview = blogPosts.slice(0, 3);

  return (
    <Container>
      <PostCollection
        title="Latest Blog Posts"
        subtitle="Thoughts and insights about web development and technology"
        posts={preview}
        footer={<Link className={primaryButtonClass} to="/blog">View All Posts</Link>}
      />
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

export default RecentPostsSection;
