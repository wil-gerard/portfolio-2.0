import PostTag from "./PostTag";

type PostMetaProps = {
  tags: string[];
};

const PostMeta = ({ tags }: PostMetaProps) => (
  <div className="flex flex-wrap gap-2 mt-4">
    {tags.map((label) => (
      <PostTag key={label} label={label} />
    ))}
  </div>
);

export default PostMeta;
