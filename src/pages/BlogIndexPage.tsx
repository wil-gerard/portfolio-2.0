import { useState } from "react";
import { Link } from "react-router-dom";
import { primaryButtonClassName } from "components/ui/Button";
import PostCollection from "components/blog/PostCollection";
import TagFilterButton from "components/blog/TagFilterButton";
import { blogPosts } from "data/blogPosts";

const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

const BlogIndexPage = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <div className="relative">
      <PostCollection
        title="All Posts"
        subtitle="Thoughts and insights about web development and technology"
        posts={filtered}
        controls={(
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <TagFilterButton
              label="All"
              active={activeTag === null}
              onClick={() => setActiveTag(null)}
            />
            {allTags.map((tagName) => (
              <TagFilterButton
                key={tagName}
                label={tagName}
                active={activeTag === tagName}
                onClick={() => setActiveTag(tagName)}
              />
            ))}
          </div>
        )}
        footer={<Link className={primaryButtonClassName} to="/">← Back to Portfolio</Link>}
      />
    </div>
  );
};

export default BlogIndexPage;
