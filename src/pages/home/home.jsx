import React, { useState } from "react";
import IconScroller from "../../components/iconscroll/iconscroller";
import Services from "../../components/services/services";
import ColorBlurbg from "../../components/blurbg/colorblurbg";
import AboutUs from "../../components/aboutus/aboutus";
import MainItsolutions from "../../components/itsolutions/mainitsolutions";
import Buttons from "../../components/button/buttons";
import Leadership from "../../components/leadership/leadership";
import HeadersSection from "../../components/headers/headers";
import ContactForm from "../../components/contact/contact";
import BackToTopButton from "../../components/common/backtotop";

const Home = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const emailAddress = "info.praisechinedu@gmail.com";

  return (
    <main className="">
      <ColorBlurbg />
      <div className="flex flex-col justify-center gap-16 mt-16 z-40">
        <div
          className="flex flex-col gap-8 items-center px-[5vw] md:px-[10vw] "
          id="home"
        >
          <h1 className="font-orbitron text-2xl md:text-5xl text-center font-bold bg-gradient-to-r from-[#adbc9f] to-[#fbfada] bg-clip-text text-transparent md:">
            Building and Delivering High-Impact Web Solutions.
          </h1>
          <p className="text-[#fbfada] text-sm md:text-xl text-center">
            I am a Full Stack Developer specializing in creating dynamic and
            responsive web and mobile applications that enhance user experience
            and drive business growth.
          </p>
          <div className="flex items-center justify-center gap-[3vmin]">
            <button
              className="relative overflow-hidden px-4 py-2 border border-[#78f6cb] text-[#78f6cb] rounded-full before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-[#78f6cb20] before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full"
              onClick={() => (window.location.href = `mailto:${emailAddress}`)}
            >
              Send an Email
            </button>
          </div>
        </div>
        <div>
          <IconScroller />
        </div>

        <div id="company" className="p-[5vw] space-y-7">
          {" "}
          <AboutUs />
        </div>
        <MainItsolutions />

        <div id="services" className="">
          {" "}
          <div className="bg-[rgba(25,25,43,20%)] w-full overflow-hidden space-y-14 backdrop-blur-2xl p-[5vw]">
            <HeadersSection
              headingText="Services"
              paragraphText="Explore the range of services I offer to help you achieve your digital goals."
            />

            <div className="space-y-5">
              <Services
                number={"01"}
                title={"Comprehensive Web Development Solutions"}
                description={
                  "From dynamic websites to complex web applications, I create solutions that are not only visually appealing but also highly functional and scalable."
                }
                openAccordion={openAccordion}
                setOpenAccordion={setOpenAccordion}
              />
              <Services
                number={"02"}
                title={"Expertise Services in Mobile App Development"}
                description={
                  "Native and cross-platform mobile applications that deliver exceptional user experience across iOS and Android devices."
                }
                openAccordion={openAccordion}
                setOpenAccordion={setOpenAccordion}
              />
              <Services
                number={"03"}
                title={"API and Backend Development"}
                description={
                  "Robust backend solutions and APIs that ensure seamless data flow and integration, enhancing the functionality of your applications."
                }
                openAccordion={openAccordion}
                setOpenAccordion={setOpenAccordion}
              />
            </div>
            <div className="text-center space-y-4">
              <div>
                <p className="font-orbitron font-bold text-lg text-[#EEEEFF]">
                  Ready to take your project to the next level?
                </p>
                <p className="text-[#EEEEFF] text-base">
                  Let's discuss how I can help you achieve your goals.
                </p>
              </div>
              <Buttons />
            </div>
          </div>
        </div>

        <div id="blog" className="p-[5vw] space-y-7">
          <Leadership />
        </div>

        <div id="contact-us" className="p-[5vw] space-y-7 my-[3vw]">
          {" "}
          <ContactForm />
        </div>
      </div>
      <BackToTopButton />
    </main>
  );
};

export default Home;
