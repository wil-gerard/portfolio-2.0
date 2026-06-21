type PostTagProps = {
  label: string;
};

const PostTag = ({ label }: PostTagProps) => (
  <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gray-200 text-secondary-300">
    {label}
  </span>
);

export default PostTag;
