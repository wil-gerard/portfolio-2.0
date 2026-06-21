type TagFilterButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

const baseClass =
  "inline-block text-xs font-medium px-3 py-1 rounded-full transition duration-200 cursor-pointer";

const TagFilterButton = ({ label, active, onClick }: TagFilterButtonProps) => (
  <button
    type="button"
    className={
      active
        ? `${baseClass} bg-secondary-500 text-white`
        : `${baseClass} bg-gray-200 text-secondary-300 hover:bg-gray-300`
    }
    aria-pressed={active}
    onClick={onClick}
  >
    {label}
  </button>
);

export default TagFilterButton;
