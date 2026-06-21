const baseClass = "inline-block text-xs font-medium px-3 py-1 rounded-full transition duration-200";
const tagClass = `${baseClass} bg-gray-200 text-secondary-300`;
const tagButtonClass = (active?: boolean) =>
  active
    ? `${baseClass} cursor-pointer bg-secondary-500 text-white`
    : `${baseClass} cursor-pointer bg-gray-200 text-secondary-300 hover:bg-gray-300`;

type BlogTagProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const BlogTag = ({ label, active, onClick }: BlogTagProps) =>
  onClick !== undefined ? (
    <button className={tagButtonClass(active)} onClick={onClick}>
      {label}
    </button>
  ) : (
    <span className={tagClass}>{label}</span>
  );

export default BlogTag;
