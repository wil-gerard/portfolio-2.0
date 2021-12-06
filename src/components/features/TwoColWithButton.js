/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryLink as Link } from "components/misc/Links";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import ProfilePic from "images/profile-pic.png";
import Resume from "images/resume/william-gerard-resume.pdf"
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"
import { PrimaryLink } from "components/headers/light";



const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

export default ({
  heading = (
    <>
      About Me
    </>
  ),
  description = (
    <>
      I come from a diverse background of career experience while working as a freelancer. My current focus is to effect positive change in the world with a career in tech. I'm passionate about mental health, education as a right, and <Link href="https://www.effectivealtruism.org/">effective altruism.</Link> I'm also a big fan of <Link href="https://www.chess.com/member/wilgerard">chess,</Link> yoga, meditation, and my cat Lou.
      <br/>
      <br/>
      I offer a versatile skill-set, including full-stack web development, software engineering, graphic design, and photography. My coding stack is React, Node, Express, and MongoDB, but I love to learn! Currently open to new job opportunities and always open to new connections.
    </>
    
  ),
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = ProfilePic,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = true,
  imageDecoratorBlobCss = null,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <a href={Resume} target="_blank" rel="noreferrer">
              <PrimaryButton>View my resume</PrimaryButton>
            </a>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
