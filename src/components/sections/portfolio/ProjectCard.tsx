import { hoverLift } from "components/misc/cardStyles";
import { Project } from "data/portfolioItems";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="mt-10 w-full sm:w-1/2 md:w-1/3 sm:pr-10 md:pr-6 lg:pr-12 lg:w-1/2">
    <a
      className={`bg-gray-200 rounded-b-sm block max-w-xs mx-auto sm:max-w-none sm:mx-0 ${hoverLift}`}
      href={project.url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div
        className="h-56 xl:h-96 bg-center bg-cover rounded-t-sm"
        style={{ backgroundImage: `url("${project.imageSrc}")` }}
      />
      <div className="p-4 text-gray-900">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-gray-600">{project.description}</p>
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
