import { useState, ComponentProps } from "react";
import { motion } from "framer-motion";
import Lightbox from "components/misc/Lightbox";
import { tag } from "helpers/tag";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings";
import { hoverLift } from "components/misc/cardStyles";
import DevLocator from "images/portfolio/dev-locator.png";
import GitConnected from "images/portfolio/git-connected.png";
import Cragcast from "images/portfolio/cragcast.png";
import Graybox from "images/portfolio/graybox.png";
import PhotographyImage1 from "images/portfolio/photography-1.jpg";
import PhotographyImage2 from "images/portfolio/photography-2.jpg";
import PhotographyImage3 from "images/portfolio/photography-3.jpg";
import PhotographyImage4 from "images/portfolio/photography-4.jpg";
import PhotographyImage5 from "images/portfolio/photography-5.jpg";
import PhotographyImage6 from "images/portfolio/photography-6.jpg";
import ReactIcon from "images/tech/react.svg?react";
import NodeJsIcon from "images/tech/nodejs-icon.svg?react";
import TailwindIcon from "images/tech/tailwindcss.svg?react";
import NetlifyIcon from "images/tech/netlify.svg?react";
import TypeScriptIcon from "images/tech/typescript.svg?react";
import HerokuIcon from "images/tech/heroku-icon.svg?react";
import MongoDbIcon from "images/tech/mongodb.svg?react";
import ExpressJsIcon from "images/tech/expressjs.svg?react";
import HonoIcon from "images/tech/hono-logo.svg?react";
import RenderIcon from "images/tech/Render Symbol SVG.svg?react";
import ResendIcon from "images/tech/resend-icon-black.svg?react";
import CloudflareIcon from "images/tech/cloudflare.svg?react"

type PortfolioCard = {
  imageSrc: string;
  title: string;
  content: string;
  techIcons?: JSX.Element;
  url?: string;
};

type TabCardGridProps = {
  heading?: string | JSX.Element;
  tabs?: Record<string, PortfolioCard[]>;
};

const HeaderRow = tag("div", "flex justify-between items-center flex-col xl:flex-row");
const Header = SectionHeading;
const TabsControl = tag("div", "flex flex-wrap bg-gray-200 px-2 py-2 rounded-sm leading-none mt-12 xl:mt-0");

const tabControlClass = (active: boolean) =>
  "cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-xs transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center hover:bg-gray-300 hover:text-gray-700" +
  (active ? " !bg-primary-500 !text-gray-100" : "");

const TabControl = ({ active, ...props }: { active?: boolean } & JSX.IntrinsicElements["div"]) => (
  <div {...props} className={tabControlClass(!!active)} />
);

const TabContent = (props: ComponentProps<typeof motion.div>) => (
  <motion.div {...props} className="mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12" />
);

const cardClass = `bg-gray-200 rounded-b-sm block max-w-xs mx-auto sm:max-w-none sm:mx-0 ${hoverLift}`;
const Card = (props: JSX.IntrinsicElements["a"]) => <a {...props} className={cardClass} />;

const CardImageContainer = ({ imageSrc }: { imageSrc: string }) => (
  <div
    className="h-56 xl:h-96 bg-center bg-cover rounded-t-sm"
    style={{ backgroundImage: `url("${imageSrc}")` }}
  />
);
const CardContainer = CardImageContainer;

const CardPhotographyContainer = tag("div", "mt-10 w-full sm:w-1/2 md:w-1/3 sm:pr-10 md:pr-6 lg:pr-12 lg:w-1/2");

const CardTechIcons = tag("div", "flex flex-row justify-start mt-2 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:mr-3");

const BuiltWith = tag("h6", "text-sm font-medium mt-2");
const CardText = tag("div", "p-4 text-gray-900");
const CardTitle = tag("h5", "text-lg font-semibold");
const CardContent = tag("p", "mt-1 text-sm font-medium text-gray-600");

const photoCardClass = `bg-gray-200 rounded-b-sm block max-w-xs mx-auto sm:max-w-none sm:mx-0 cursor-pointer ${hoverLift}`;
const PhotoCard = (props: JSX.IntrinsicElements["div"]) => <div {...props} className={photoCardClass} />;


const TabCardGrid = ({
  heading = "Portfolio",
  tabs = {
    "Development + Design": [
      {
        imageSrc: `${Graybox}`,
        title: "Graybox",
        content:
          "Graybox locks your Screen Time passcode in an encrypted vault behind a deliberate unlock flow. Enough friction to stop casual bypasses, not enough to lock you out when it matters.",
        techIcons: (
          <>
            <TypeScriptIcon />
            <ReactIcon />
            <TailwindIcon />
            <NodeJsIcon />
            <HonoIcon />
            <RenderIcon />
            <CloudflareIcon />
            <ResendIcon />
          </>
        ),
        url: "https://graybox.app/",
      },
      {
        imageSrc: `${DevLocator}`,
        title: "Dev Locator",
        content:
          "Dev Locator searches GitHub by location so you can find developers near you, filter by language or stats, and browse their profiles at a glance.",
        techIcons: (
          <>
            <TypeScriptIcon />
            <ReactIcon />
            <TailwindIcon />
            <NetlifyIcon />
          </>
        ),
        url: "https://dev-locator.netlify.app/",
      },
      {
        imageSrc: `${GitConnected}`,
        title: "Git Connected",
        content:
          "Git Connected is an open source platform for early career engineers to collaborate, get feedback, and build a real professional network.",
        techIcons: (
          <>
            <TypeScriptIcon />
            <ReactIcon />
            <NodeJsIcon />
            <MongoDbIcon />
            <ExpressJsIcon />
            <TailwindIcon />
            <HerokuIcon />
          </>
        ),
        url: "https://github.com/wil-gerard/git-connected",
      },

      {
        imageSrc: `${Cragcast}`,
        title: "Cragcast",
        content:
          "Cragcast checks the weather at your climbing spot and tells you whether conditions are safe. Powered by Xweather data and a simple climbing risk algorithm.",
        techIcons: (
          <>
            <TypeScriptIcon />
            <ReactIcon />
          </>
        ),
        url: "https://github.com/wil-gerard/cragcast",
      },
    ],
    Photography: [
      {
        imageSrc: `${PhotographyImage1}`,
        title: "Casa Pancha",
        content: "Mexico City, Mexico",
      },
      {
        imageSrc: `${PhotographyImage2}`,
        title: "Foci MCGA",
        content: "Minneapolis, Minnesota",
      },
      {
        imageSrc: `${PhotographyImage3}`,
        title: "Untitled",
        content: "Minneapolis, Minnesota",
      },
      {
        imageSrc: `${PhotographyImage4}`,
        title: "Casa Pancha",
        content: "Mexico City, Mexico",
      },
      {
        imageSrc: `${PhotographyImage5}`,
        title: "Tianguis Cultural de Chopo",
        content: "Mexico City, Mexico",
      },
      {
        imageSrc: `${PhotographyImage6}`,
        title: "Casa Pancha",
        content: "Mexico City, Mexico",
      },
    ],
  },
}: TabCardGridProps) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const photographyPhotos = tabs["Photography"] ?? [];

  return (
    <>
    <Lightbox photos={photographyPhotos} initialIndex={selectedIndex} onClose={() => setSelectedIndex(null)} />
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {/* gallery conditional render logic based on tab name*/}
            {activeTab === "Photography"
              ? tabs[tabKey].map((card, cardIdx) => (
                <CardPhotographyContainer key={cardIdx}>
                  <PhotoCard onClick={() => setSelectedIndex(cardIdx)}>
                    <CardContainer imageSrc={card.imageSrc} />
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      <CardContent>{card.content}</CardContent>
                    </CardText>
                  </PhotoCard>
                </CardPhotographyContainer>
              ))
              : tabs[tabKey].map((card, cardIdx) => (
                <CardPhotographyContainer key={cardIdx}>
                  <Card
                    href={card.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <CardImageContainer imageSrc={card.imageSrc} />
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      <CardContent>{card.content}</CardContent>
                      {card.techIcons == null ? null : (
                        <>
                          <BuiltWith>Built with: </BuiltWith>
                          <CardTechIcons>{card.techIcons}</CardTechIcons>
                        </>
                      )}
                    </CardText>
                  </Card>
                </CardPhotographyContainer>
              ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
    </Container>
    </>
  );
};

export default TabCardGrid;
