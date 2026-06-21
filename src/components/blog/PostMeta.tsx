import { tag } from "helpers/tag";
import PostTag from "./PostTag";

const TagRow = tag("div", "flex flex-wrap gap-2 mt-4");

type PostMetaProps = {
  tags: string[];
};

const PostMeta = ({ tags }: PostMetaProps) => (
  <TagRow>
    {tags.map((label) => (
      <PostTag key={label} label={label} />
    ))}
  </TagRow>
);

export default PostMeta;
