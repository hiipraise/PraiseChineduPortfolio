import React from "react";
import ImgAnime from "./imganime";
import Buttons from "../button/buttons";
import CountAnime from "./countanime";
import HeadersSection from "../headers/headers";

const AboutUs = () => {
  return (
    <div className="bg-[rgba(25,25,43,20%)] w-full overflow-hidden p-8 space-y-14 backdrop-blur-2xl">
      <HeadersSection
        headingText="About Me"
        paragraphText="Discover my journey, values, and the methodology that drives my passion for full-stack development."
      />
      <div className="flex flex-wrap lg:flex-nowrap gap-16 items-center justify-center">
        <div>
          <ImgAnime />
        </div>
        <div className="space-y-14">
          <div className="space-y-5">
            <p className="capitalize font-bold text-[#fbfada] text-lg font-orbitron">
              Core value
            </p>
            <p className="text-sm text-[rgba(251,250,218,85%)]">
              The projects I take on are built on a solid foundation of trust
              and a passion for innovation. My full-stack development process
              combines a methodical, disciplined back-end approach with a
              creative, user-focused front-end perspective. This allows me to
              create integrated, cohesive applications that are as powerful
              under the hood as they are beautiful on the screen.
            </p>
            <ul className="text-[rgba(251,250,218,85%)] list-disc list-inside text-sm">
              <li>
                Trust & Transparency: I build reliable applications and maintain
                clear communication throughout the development process.
              </li>
              <li>
                Innovation & Impact: I am committed to creating solutions that
                not only work but also solve real-world problems and drive
                meaningful results.
              </li>
              <li>
                Scalability & Efficiency: My goal is to build future-proof
                systems that are optimized for performance and can grow with the
                needs of the user.
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <p className="capitalize font-bold text-[#fbfada] text-lg font-orbitron">
              Methodology
            </p>
            <p className="text-sm text-[rgba(251,250,218,85%)]">
              My methodology is a blend of agile development, design thinking,
              and best-in-class coding practices. I specialize in creating
              customized technology solutions that are technically sound and
              scalable. Whether it's building a new e-commerce platform,
              developing an EdTech solution, or creating a new FinTech
              application, I focus on delivering excellence at every layer of
              the stack.
            </p>
          </div>
        </div>
      </div>
      <Buttons />
      <CountAnime />
    </div>
  );
};

export default AboutUs;
