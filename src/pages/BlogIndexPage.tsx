import { useState } from "react";
import { Link } from "react-router-dom";
import { tag } from "helpers/tag";
import { primaryButtonClass } from "components/misc/Buttons";
import PostCollection from "components/blog/PostCollection";
import TagFilterButton from "components/blog/TagFilterButton";
import { Container } from "components/misc/Layouts";
import { blogPosts } from "data/blogPosts";

const FilterRow = tag("div", "flex flex-wrap justify-center gap-3 mt-8");

const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

const BlogIndexPage = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <Container>
      <PostCollection
        title="All Posts"
        subtitle="Thoughts and insights about web development and technology"
        posts={filtered}
        controls={(
          <FilterRow>
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
          </FilterRow>
        )}
        footer={<Link className={primaryButtonClass} to="/">← Back to Portfolio</Link>}
      />
    </Container>
  );
};

export default BlogIndexPage;
