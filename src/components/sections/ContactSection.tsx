import { tag } from "helpers/tag";
import LinkedinIcon from "../../images/linkedin-icon.svg?react";
import GithubIcon from "../../images/github-icon.svg?react";
import SvgDotPatternIcon from "../../images/dot-pattern.svg?react";

const socialLinkClass =
  "cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-primary-500 hover:bg-primary-800 focus:bg-primary-800 hover:text-gray-100 focus:text-gray-100 transition duration-300 m-2";

const inputClass =
  "w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 hover:border-pink-400 focus:border-pink-400 focus:outline-hidden transition duration-200 placeholder:text-gray-500";

const InputContainer = tag("div", "relative py-5 mt-6");
const Label = tag("label", "absolute top-0 left-0 tracking-wide font-semibold text-sm");

const ContactSection = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto py-20 lg:py-24">
        <div className="p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Contact Me</h2>
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
            <form className="mt-4" method="POST" action="https://formspree.io/f/xgerkqlv">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="sm:w-5/12 flex flex-col">
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <input
                      className={inputClass}
                      id="name-input"
                      type="text"
                      name="name"
                      placeholder="E.g. Jean-Luc Picard"
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <input
                      className={inputClass}
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="E.g. jean-luc-picard@mail.com"
                    />
                  </InputContainer>
                </div>
                <div className="sm:w-5/12 flex flex-col">
                  <InputContainer className="flex-1">
                    <Label htmlFor="message-input">Your Message</Label>
                    <textarea
                      className={`${inputClass} h-24 sm:h-full resize-none`}
                      id="message-input"
                      name="message"
                      placeholder="Details about your company or project"
                    />
                  </InputContainer>
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 focus:outline-hidden focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hover:-translate-y-px focus:-translate-y-px hover:shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>
          <SvgDotPatternIcon className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 -z-10 text-primary-500 fill-current w-20" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
