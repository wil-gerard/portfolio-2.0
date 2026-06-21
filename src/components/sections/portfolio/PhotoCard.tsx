import { hoverLift } from "components/misc/cardStyles";
import { Photo } from "data/portfolioItems";

type PhotoCardProps = {
  photo: Photo;
  onSelect: () => void;
};

const PhotoCard = ({ photo, onSelect }: PhotoCardProps) => (
  <div className="mt-10 w-full sm:w-1/2 md:w-1/3 sm:pr-10 md:pr-6 lg:pr-12 lg:w-1/2">
    <button
      type="button"
      className={`bg-gray-200 rounded-b-sm block w-full max-w-xs mx-auto sm:max-w-none sm:mx-0 cursor-pointer text-left ${hoverLift}`}
      onClick={onSelect}
    >
      <div
        className="h-56 xl:h-96 bg-center bg-cover rounded-t-sm"
        style={{ backgroundImage: `url("${photo.imageSrc}")` }}
      />
      <div className="p-4 text-gray-900">
        <h3 className="text-lg font-semibold">{photo.title}</h3>
        <p className="mt-1 text-sm font-medium text-gray-600">{photo.location}</p>
      </div>
    </button>
  </div>
);

export default PhotoCard;
