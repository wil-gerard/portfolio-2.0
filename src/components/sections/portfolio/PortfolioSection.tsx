import { lazy, Suspense, useState } from "react";
import SectionContainer from "components/ui/SectionContainer";
import SectionHeading from "components/ui/SectionHeading";
import { photos, projects } from "data/portfolioItems";
import SvgDecoratorBlob1 from "images/svg-decorator-blob-1.svg?react";
import SvgDecoratorBlob3 from "images/svg-decorator-blob-3.svg?react";
import PhotoCard from "./PhotoCard";
import PortfolioTabs, { type PortfolioTab } from "./PortfolioTabs";
import ProjectCard from "./ProjectCard";

const PhotoLightbox = lazy(() => import("./PhotoLightbox"));

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("Development + Design");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [hasOpenedLightbox, setHasOpenedLightbox] = useState(false);

  return (
    <>
      {hasOpenedLightbox && (
        <Suspense fallback={null}>
          <PhotoLightbox
            photos={photos}
            initialIndex={selectedPhotoIndex}
            onClose={() => setSelectedPhotoIndex(null)}
          />
        </Suspense>
      )}
      <div className="relative">
        <SectionContainer>
          <div className="flex justify-between items-center flex-col xl:flex-row">
            <SectionHeading>Portfolio</SectionHeading>
            <PortfolioTabs activeTab={activeTab} onChange={setActiveTab} />
          </div>
          <div
            key={activeTab}
            className="portfolio-panel mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12"
          >
            {activeTab === "Photography"
              ? photos.map((photo, index) => (
                  <PhotoCard
                    key={photo.imageSrc}
                    photo={photo}
                    onSelect={() => {
                      setHasOpenedLightbox(true);
                      setSelectedPhotoIndex(index);
                    }}
                  />
                ))
              : projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
          </div>
        </SectionContainer>
        <SvgDecoratorBlob1 className="pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15" />
        <SvgDecoratorBlob3 className="pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-50" />
      </div>
    </>
  );
};

export default PortfolioSection;
