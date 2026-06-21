import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { tag } from "helpers/tag";
import { primaryButtonClass } from "components/misc/Buttons";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings";
import { blogPosts } from "data/blogPosts";
import BlogCard from "components/blog/BlogCard";
import SvgDecoratorBlob1 from "images/svg-decorator-blob-10.svg?react";
import SvgDecoratorBlob2 from "images/svg-decorator-blob-2.svg?react";

const Subheading = tag("p", "text-center text-gray-500 mt-4 text-lg");
const Grid = tag("div", "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8");
const ViewAllRow = tag("div", "flex justify-center mt-12");
const ViewAllLink = (props: ComponentProps<typeof Link>) => (
  <Link {...props} className={primaryButtonClass} />
);

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
      <ContentWithPaddingXl>
        <SectionHeading>Latest Blog Posts</SectionHeading>
        <Subheading>Thoughts and insights about web development and technology</Subheading>
        <Grid>
          {preview.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </Grid>
        <ViewAllRow>
          <ViewAllLink to="/blog">View All Posts</ViewAllLink>
        </ViewAllRow>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

export default RecentPostsSection;
