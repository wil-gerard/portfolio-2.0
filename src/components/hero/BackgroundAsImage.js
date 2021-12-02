import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import HeroImage from "images/hero-background.jpg";
import { Subheading as Subheading } from "components/misc/Headings.js";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url(${HeroImage});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl h-screen mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const SocialLinksContainer = tw.div`mt-6 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 m-2 lg:mr-4 lg:mb-0 lg:mt-0 lg:ml-0`}
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

const PrimaryAction = tw.button`px-8 py-3 mt-5 text-sm sm:text-base sm:mt-8 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        About
      </NavLink>
      <NavLink href="#">
        Portfolio
      </NavLink>
      <NavLink href="SimpleContactUs">
        Contact
      </NavLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Based in Minneapolis, MN</Notification>
            <Heading>
              <span>Hi, I'm Wil</span>
            </Heading>
            <Subheading>
              Software Engineer | Fullstack Developer
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
            <PrimaryAction>Contact me</PrimaryAction>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
