import { useState, ComponentProps } from "react";
import { Link } from "react-router-dom";
import { tag } from "helpers/tag";
import { primaryButtonClass } from "components/misc/Buttons";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings";
import { blogPosts } from "data/blogPosts";
import BlogCard from "components/blog/BlogCard";
import BlogTag from "components/blog/BlogTag";

const Subheading = tag("p", "text-center text-gray-500 mt-4 text-lg");
const FilterRow = tag("div", "flex flex-wrap justify-center gap-3 mt-8");
const Grid = tag("div", "mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8");
const BackRow = tag("div", "flex justify-center mt-12");
const BackLink = (props: ComponentProps<typeof Link>) => (
  <Link {...props} className={primaryButtonClass} />
);

const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

const BlogIndex = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <Container>
      <ContentWithPaddingXl>
        <SectionHeading>All Posts</SectionHeading>
        <Subheading>Thoughts and insights about web development and technology</Subheading>
        <FilterRow>
          <BlogTag
            label="All"
            active={activeTag === null}
            onClick={() => setActiveTag(null)}
          />
          {allTags.map((tagName) => (
            <BlogTag
              key={tagName}
              label={tagName}
              active={activeTag === tagName}
              onClick={() => setActiveTag(tagName)}
            />
          ))}
        </FilterRow>
        <Grid>
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </Grid>
        <BackRow>
          <BackLink to="/">← Back to Portfolio</BackLink>
        </BackRow>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default BlogIndex;
