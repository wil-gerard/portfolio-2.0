/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import HeroImage from "images/hero-background.jpg";
import { Subheading } from "components/misc/Headings.js";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { css } from "styled-components/macro"; //eslint-disable-line


const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url(${HeroImage});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl h-1/2 mx-auto`;
const TwoColumn = tw.div`pt-32 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
// const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const SocialLinksContainer = tw.div`mt-6 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-primary-500 hocus:bg-primary-800 hocus:text-gray-100 transition duration-300 m-2 lg:mr-4 lg:mb-0 lg:mt-0 lg:ml-0`}
  svg {
    ${tw`w-6 h-6`}
  }
`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;


export default () => {

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        {/* <StyledHeader links={navLinks} /> */}
        <TwoColumn>
          <LeftColumn>
            <Notification>Based in Minneapolis, MN</Notification>
            <Heading>
              <span>Hi, I'm Wil</span>
            </Heading>
            <Subheading>
              Software Engineer | Designer | Photographer
            </Subheading>
            <SocialLinksContainer>
              <SocialLink href="https://linkedin.com/in/wilgerard/">
                <LinkedinIcon />
              </SocialLink>
              <SocialLink href="https://github.com/wil-gerard">
                <GithubIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com/wil_gerard">
                <TwitterIcon />
              </SocialLink>
            </SocialLinksContainer>
            {/* <PrimaryAction>Contact me</PrimaryAction> */}
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
