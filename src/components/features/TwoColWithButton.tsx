import React from "react";
import { tag } from "helpers/tag";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import ProfilePic from "images/profile-pic.png";
import Resume from "images/resume/wil-gerard-resume.pdf";
import SvgDotPattern from "images/dot-pattern.svg?react";

type TwoColWithButtonProps = {
  heading?: JSX.Element;
  description?: JSX.Element;
  imageSrc?: string;
  imageRounded?: boolean;
  imageBorder?: boolean;
  imageShadow?: boolean;
  imageCss?: React.CSSProperties | null;
  imageDecoratorBlob?: boolean;
  imageDecoratorBlobCss?: React.CSSProperties | null;
  textOnLeft?: boolean;
};

const columnBase = "w-full max-w-md mx-auto md:max-w-none md:mx-0";

const Lede = tag("p", "mt-5 text-base md:text-lg lg:text-xl font-semibold leading-relaxed text-secondary-500");
const Para = tag("p", "mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100");

export default ({
  heading = <>About Me</>,
  description = (
    <>
      <Lede>I'm a full stack developer based in the Twin Cities.</Lede>
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
  imageRounded = true,
  imageBorder = true,
  imageShadow = true,
  imageCss = null,
  imageDecoratorBlob = true,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
}: TwoColWithButtonProps) => {
  const imageClass = [
    imageRounded && "rounded-full",
    imageBorder && "border border-gray-200",
    imageShadow && "shadow-sm",
  ]
    .filter(Boolean)
    .join(" ");

  const textColumnClass =
    `${columnBase} md:w-6/12 mt-16 md:mt-0 ` +
    (textOnLeft ? "md:mr-12 lg:mr-16 md:order-first" : "md:ml-12 lg:ml-16 md:order-last");

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto py-20 md:py-24 items-center">
        <div className={`${columnBase} md:w-4/12 shrink-0`}>
          <div className="relative inline-block">
            <img className={imageClass} style={imageCss ?? undefined} src={imageSrc} alt="Wil Gerard" />
            {imageDecoratorBlob && (
              <SvgDotPattern
                className="w-20 h-20 absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 fill-current text-primary-500 -z-10"
                style={imageDecoratorBlobCss ?? undefined}
              />
            )}
          </div>
        </div>
        <div className={textColumnClass}>
          <div className="lg:py-8 text-center md:text-left">
            <SectionHeading className="mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
              {heading}
            </SectionHeading>
            <div className="mt-4 text-center md:text-left">{description}</div>
            <a href={Resume} target="_blank" rel="noreferrer">
              <PrimaryButton className="mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0">
                View my resume
              </PrimaryButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
