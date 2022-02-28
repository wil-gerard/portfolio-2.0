/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import PortfolioImage1 from "images/portfolio/avenues-recovery.png";
import PortfolioImage2 from "images/portfolio/foci.jpg";
import PortfolioImage3 from "images/portfolio/react-runner.png";
import PortfolioImage4 from "images/portfolio/bert-bot.png";
import PhotographyImage1 from "images/portfolio/photography-1.jpg";
import PhotographyImage2 from "images/portfolio/photography-2.jpg";
import PhotographyImage3 from "images/portfolio/photography-3.jpg";
import PhotographyImage4 from "images/portfolio/photography-4.jpg";
import PhotographyImage5 from "images/portfolio/photography-5.jpg";
import PhotographyImage6 from "images/portfolio/photography-6.jpg";
import { ReactComponent as HtmlIcon } from "images/tech/html-5.svg";
import { ReactComponent as CssIcon } from "images/tech/css-3.svg"
import { ReactComponent as JsIcon } from "images/tech/javascript.svg"
import { ReactComponent as ReactIcon } from "images/tech/react.svg"
import { ReactComponent as SassIcon } from "images/tech/sass.svg"
import { ReactComponent as NodeJsIcon } from "images/tech/nodejs-icon.svg"
// import { ReactComponent as TailwindIcon } from "images/tech/tailwindcss-icon.svg"
import { ReactComponent as MaterialUiIcon } from "images/tech/material-ui.svg"
import { ReactComponent as TensorflowIcon } from "images/tech/tensorflow.svg"
import { ReactComponent as GitIcon } from "images/tech/git-icon.svg"
import { ReactComponent as GitHubIcon } from "images/tech/github-icon.svg"
import { ReactComponent as NetlifyIcon } from "images/tech/netlify.svg"
// import { ReactComponent as HerokuIcon } from "images/tech/heroku-icon.svg"
import { ReactComponent as SquarespaceIcon } from "images/tech/squarespace.svg"
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 sm:pr-10 md:pr-6 lg:pr-12 lg:w-1/3`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;

const CardPhotographyContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 sm:pr-10 md:pr-6 lg:pr-12 lg:w-1/2`;
const CardPhotographyImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-96 bg-center bg-cover relative rounded-t`}
`;


const CardTechIcons = styled.div`
  ${tw`flex flex-row justify-start mt-2`}
  svg {
    ${tw`w-6 h-6 mr-3`}
  }
`;

const TechUsed = tw.h6`text-sm font-medium mt-2`

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Portfolio",
  tabs = {
    Development: [
      {
        imageSrc:
          `${PortfolioImage1}`,
        title: "Avenues Recovery",
        content: "Working with specifications from the director at Avenues Recovery - I redesigned and developed a responsive website with custom-created assets, including logo design, photography, and copywriting.",
        techIcons:
          <>
            <HtmlIcon />
            <CssIcon />
            <JsIcon />
            <GitIcon />
            <GitHubIcon />
          </>,
        url: "https://avenuesrecovery.org/"
      },
      {
        imageSrc:
          `${PortfolioImage2}`,
        title: "Foci MCGA",
        content: "I assisted with web design, development, graphics, photography, and copywriting for the Minnesota Center for Glass Arts. Key projects include designing their strategic plan for 2020-2022 and creating marketing assets for a successful $50k capital campaign.",
        techIcons:
          <>
            <HtmlIcon />
            <CssIcon />
            <SquarespaceIcon />
          </>,
        url: "https://www.mnglassart.org/strategic-plan"
      },
      {
        imageSrc:
          `${PortfolioImage3}`,
        title: "React Runner",
        content: "React Runner is a 2D side-scroller game with voice commands and a collaborative project built within a week using React, Node, and Tensorflow.js, for the August 2021 Mintbean Hackathon.",
        techIcons:
          <>
            <ReactIcon />
            <NodeJsIcon />
            <SassIcon />
            <TensorflowIcon />
            <GitIcon />
            <GitHubIcon />
            <NetlifyIcon />
          </>,
        url: "https://react-runner.netlify.app/"
      },
      {
        imageSrc:
          `${PortfolioImage4}`,
        title: "BERT Bot",
        content: "BERT Bot is an AI-powered web app that allows users to explore Natural Language Processing by inputting questions and receiving answers ranked with confidence level based on the context of a given passage of text.",
        techIcons:
          <>
            <ReactIcon />
            <NodeJsIcon />
            <MaterialUiIcon />
            <GitIcon />
            <GitHubIcon />
            <NetlifyIcon />
          </>,
        url: "https://bert-bot.netlify.app/"
      },
    ],
    Photography: [
      {
        imageSrc:
          `${PhotographyImage1}`,
        title: "Casa Pancha",
        content: "Mexico City, Mexico",
      },
      {
        imageSrc:
          `${PhotographyImage2}`,
        title: "Foci MCGA",
        content: "Minneapolis, Minnesota",
      },
      {
        imageSrc:
          `${PhotographyImage3}`,
        title: "Untitled",
        content: "Minneapolis, Minnesota",
      },
      {
        imageSrc:
          `${PhotographyImage4}`,
        title: "Casa Pancha",
        content: "Mexico City, Mexico",
      },
      {
        imageSrc:
          `${PhotographyImage5}`,
        title: "Tianguis Cultural de Chopo",
        content: "Mexico City, Mexico",
      },
      {
        imageSrc:
          `${PhotographyImage6}`,
        title: "Casa Pancha",
        content: "Mexico City, Mexico",
      },
    ],
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
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
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {/* gallery conditional render logic based on tab name*/}
            {activeTab === "Photography" ? tabs[tabKey].map((card, index) => (
                <CardPhotographyContainer key={index}>
                  <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                    <CardPhotographyImageContainer imageSrc={card.imageSrc}>

                      <CardHoverOverlay
                        variants={{
                          hover: {
                            opacity: 0,
                            height: "auto"
                          },
                          rest: {
                            opacity: 0,
                            height: 0
                          }
                        }}
                        transition={{ duration: 0.3 }}
                      >
                      </CardHoverOverlay>
                    </CardPhotographyImageContainer>
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      <CardContent>{card.content}</CardContent>
                    </CardText>
                  </Card>
                </CardPhotographyContainer>
            )) : tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} target="_blank" rel="noreferrer noopener" initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>

                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Check it out</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    {card.techIcons == null ? null :
                      <>
                        <TechUsed>Tech used: </TechUsed>
                        <CardTechIcons>{card.techIcons}</CardTechIcons>
                      </>
                    }
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container >
  );
};