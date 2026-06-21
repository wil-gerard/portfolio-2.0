import { cardHoverClassName } from "components/ui/cardStyles";
import type { Project } from "data/portfolioItems";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="mt-10 w-full sm:w-1/2 md:w-1/3 sm:pr-10 md:pr-6 lg:pr-12 lg:w-1/2">
    <a
      className={`bg-gray-200 rounded-b-sm block max-w-xs mx-auto sm:max-w-none sm:mx-0 ${cardHoverClassName}`}
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        className="h-56 xl:h-96 w-full object-cover object-center rounded-t-sm"
        src={project.imageSrc}
        srcSet={project.imageSrcSet}
        sizes="(min-width: 1280px) 553px, (min-width: 1024px) 50vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, calc(100vw - 6rem)"
        alt=""
        width="640"
        height="448"
        loading="lazy"
        decoding="async"
      />
      <div className="p-4 text-gray-900">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-gray-700">{project.description}</p>
        <h4 className="text-sm font-medium mt-2">Built with:</h4>
        <div className="flex flex-row justify-start mt-2 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:mr-3">
          {project.technologies.map((Technology, index) => (
            <Technology key={index} aria-hidden="true" />
          ))}
        </div>
      </div>
    </a>
  </div>
);

export default ProjectCard;
