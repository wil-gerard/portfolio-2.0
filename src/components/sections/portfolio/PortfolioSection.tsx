import { useState } from "react";
import { motion } from "framer-motion";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings";
import { photos, projects } from "data/portfolioItems";
import SvgDecoratorBlob1 from "images/svg-decorator-blob-1.svg?react";
import SvgDecoratorBlob3 from "images/svg-decorator-blob-3.svg?react";
import PhotoCard from "./PhotoCard";
import PhotoLightbox from "./PhotoLightbox";
import PortfolioTabs, { PortfolioTab } from "./PortfolioTabs";
import ProjectCard from "./ProjectCard";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("Development + Design");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  return (
    <>
      <PhotoLightbox
        photos={photos}
        initialIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
      />
      <Container>
        <ContentWithPaddingXl>
          <div className="flex justify-between items-center flex-col xl:flex-row">
            <SectionHeading>Portfolio</SectionHeading>
            <PortfolioTabs activeTab={activeTab} onChange={setActiveTab} />
          </div>
          <motion.div
            key={activeTab}
            className="mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "Photography"
              ? photos.map((photo, index) => (
                  <PhotoCard
                    key={photo.imageSrc}
                    photo={photo}
                    onSelect={() => setSelectedPhotoIndex(index)}
                  />
                ))
              : projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
          </motion.div>
        </ContentWithPaddingXl>
        <SvgDecoratorBlob1 className="pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15" />
        <SvgDecoratorBlob3 className="pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-50" />
      </Container>
    </>
  );
};

export default PortfolioSection;
