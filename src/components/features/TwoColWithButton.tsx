import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import ProfilePic from "images/profile-pic.png";
import Resume from "images/resume/wil-gerard-resume.pdf";
import SvgDotPattern from "images/dot-pattern.svg?react";

type TwoColWithButtonProps = {
  heading?: JSX.Element;
  description?: JSX.Element;
  imageSrc?: string;
  buttonRounded?: boolean;
  imageRounded?: boolean;
  imageBorder?: boolean;
  imageShadow?: boolean;
  imageCss?: React.CSSProperties | null;
  imageDecoratorBlob?: boolean;
  imageDecoratorBlobCss?: React.CSSProperties | null;
  textOnLeft?: boolean;
};

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-4/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)<{ textOnLeft?: boolean }>(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img<{ imageRounded?: boolean; imageBorder?: boolean; imageShadow?: boolean }>(props => [
  props.imageRounded && tw`rounded-full`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.div`mt-4 text-center md:text-left`;
const Lede = tw.p`mt-5 text-base md:text-lg lg:text-xl font-semibold leading-relaxed text-secondary-500`;
const Para = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)<{ buttonRounded?: boolean }>(props => [
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
      <Lede>
        I'm a full stack developer based in the Twin Cities.
      </Lede>
      <Para>
        My foundation is HTML, CSS, JavaScript, and TypeScript. Though constantly changing, lately I've been diving deeper into React.js, Node, Hono, Next.js, and Cloudflare Workers.
      </Para>
      <Para>
        I'm usually building something: a product idea, a developer workflow, an AI experiment, or
        a tool that makes a real problem easier to solve. I like software that is practical and personal enough to feel like someone cared while making it.
      </Para>
      <Para>
        Outside of code I'm into design, photography, music, horror movies, rock climbing, board
        games, and cooking when I'm in the mood to do it right. I live here with my cat Lou, who
        is very much in charge.
      </Para>
    </>
  ),
  imageSrc = ProfilePic,
  buttonRounded: _buttonRounded = true,
  imageRounded = true,
  imageBorder = true,
  imageShadow = true,
  imageCss = null,
  imageDecoratorBlob = true,
  imageDecoratorBlobCss = null,
  textOnLeft = true
}: TwoColWithButtonProps) => {
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
