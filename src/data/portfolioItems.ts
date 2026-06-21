import type { ComponentType, SVGProps } from "react";
import CloudflareIcon from "images/tech/cloudflare.svg?react";
import ExpressJsIcon from "images/tech/expressjs.svg?react";
import HerokuIcon from "images/tech/heroku-icon.svg?react";
import HonoIcon from "images/tech/hono-logo.svg?react";
import MongoDbIcon from "images/tech/mongodb.svg?react";
import NetlifyIcon from "images/tech/netlify.svg?react";
import NodeJsIcon from "images/tech/nodejs-icon.svg?react";
import ReactIcon from "images/tech/react.svg?react";
import RenderIcon from "images/tech/Render Symbol SVG.svg?react";
import ResendIcon from "images/tech/resend-icon-black.svg?react";
import TailwindIcon from "images/tech/tailwindcss.svg?react";
import TypeScriptIcon from "images/tech/typescript.svg?react";
import Cragcast from "images/portfolio/cragcast-640.webp";
import CragcastLarge from "images/portfolio/cragcast-1280.webp";
import DevLocator from "images/portfolio/dev-locator-640.webp";
import DevLocatorLarge from "images/portfolio/dev-locator-1280.webp";
import GitConnected from "images/portfolio/git-connected-640.webp";
import GitConnectedLarge from "images/portfolio/git-connected-1280.webp";
import Graybox from "images/portfolio/graybox-640.webp";
import GrayboxLarge from "images/portfolio/graybox-1280.webp";
import PhotographyImage1 from "images/portfolio/photography-1.jpg";
import PhotographyImage2 from "images/portfolio/photography-2.jpg";
import PhotographyImage3 from "images/portfolio/photography-3.jpg";
import PhotographyImage4 from "images/portfolio/photography-4.jpg";
import PhotographyImage5 from "images/portfolio/photography-5.jpg";
import PhotographyImage6 from "images/portfolio/photography-6.jpg";

export type TechnologyIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type Project = {
  imageSrc: string;
  imageSrcSet: string;
  title: string;
  description: string;
  url: string;
  technologies: TechnologyIcon[];
};

export type Photo = {
  imageSrc: string;
  title: string;
  location: string;
};

export const projects: Project[] = [
  {
    imageSrc: Graybox,
    imageSrcSet: `${Graybox} 640w, ${GrayboxLarge} 1280w`,
    title: "Graybox",
    description:
      "Graybox locks your Screen Time passcode in an encrypted vault behind a deliberate unlock flow. Enough friction to stop casual bypasses, not enough to lock you out when it matters.",
    technologies: [TypeScriptIcon, ReactIcon, TailwindIcon, NodeJsIcon, HonoIcon, RenderIcon, CloudflareIcon, ResendIcon],
    url: "https://graybox.app/",
  },
  {
    imageSrc: DevLocator,
    imageSrcSet: `${DevLocator} 640w, ${DevLocatorLarge} 1280w`,
    title: "Dev Locator",
    description:
      "Dev Locator searches GitHub by location so you can find developers near you, filter by language or stats, and browse their profiles at a glance.",
    technologies: [TypeScriptIcon, ReactIcon, TailwindIcon, NetlifyIcon],
    url: "https://dev-locator.netlify.app/",
  },
  {
    imageSrc: GitConnected,
    imageSrcSet: `${GitConnected} 640w, ${GitConnectedLarge} 1280w`,
    title: "Git Connected",
    description:
      "Git Connected is an open source platform for early career engineers to collaborate, get feedback, and build a real professional network.",
    technologies: [TypeScriptIcon, ReactIcon, NodeJsIcon, MongoDbIcon, ExpressJsIcon, TailwindIcon, HerokuIcon],
    url: "https://github.com/wil-gerard/git-connected",
  },
  {
    imageSrc: Cragcast,
    imageSrcSet: `${Cragcast} 640w, ${CragcastLarge} 1280w`,
    title: "Cragcast",
    description:
      "Cragcast checks the weather at your climbing spot and tells you whether conditions are safe. Powered by Xweather data and a simple climbing risk algorithm.",
    technologies: [TypeScriptIcon, ReactIcon],
    url: "https://github.com/wil-gerard/cragcast",
  },
];

export const photos: Photo[] = [
  { imageSrc: PhotographyImage1, title: "Casa Pancha", location: "Mexico City, Mexico" },
  { imageSrc: PhotographyImage2, title: "Foci MCGA", location: "Minneapolis, Minnesota" },
  { imageSrc: PhotographyImage3, title: "Untitled", location: "Minneapolis, Minnesota" },
  { imageSrc: PhotographyImage4, title: "Casa Pancha", location: "Mexico City, Mexico" },
  { imageSrc: PhotographyImage5, title: "Tianguis Cultural de Chopo", location: "Mexico City, Mexico" },
  { imageSrc: PhotographyImage6, title: "Casa Pancha", location: "Mexico City, Mexico" },
];
