import HeroImage from "images/hero-background.jpg";
import LinkedinIcon from "../../images/linkedin-icon.svg?react";
import GithubIcon from "../../images/github-icon.svg?react";

const socialLinkClass =
  "cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-primary-500 hover:bg-primary-800 focus:bg-primary-800 hover:text-gray-100 focus:text-gray-100 transition duration-300 m-2 lg:mr-4 lg:mb-0 lg:mt-0 lg:ml-0";

const HeroSection = () => {
  return (
    <div
      className="relative -mx-8 -mt-8 bg-center bg-cover min-h-screen"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="z-10 absolute inset-0 bg-primary-500 opacity-25" />
      <div className="z-20 relative px-4 sm:px-8 max-w-7xl min-h-screen flex items-center mx-auto">
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between lg:py-32">
          <div className="flex flex-col items-center lg:block">
            <span className="inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm">
              Based in Minneapolis, MN
            </span>
            <h1 className="text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none">
              <span className="inline-block mt-2">Hi, I'm Wil</span>
            </h1>
            <h2 className="font-bold text-center text-gray-100 mt-2 lg:text-left">
              Full Stack Developer
            </h2>
            <div className="mt-6">
              <a
                className={socialLinkClass}
                href="https://linkedin.com/in/wilgerard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                className={socialLinkClass}
                href="https://github.com/wil-gerard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
