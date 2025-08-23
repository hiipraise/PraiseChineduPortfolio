import React from "react";
import HeadersSection from "../headers/headers";
import { InteractiveCardCarousel } from "./carousel";

const Leadership = () => {
  return (
    <div className="bg-[rgba(25,25,43,20%)] w-full overflow-hidden py-8 space-y-14 backdrop-blur-2xl">
      <HeadersSection
        headingText="Projects"
        paragraphText="View My recent Works"
      />
      <div className="">
        <InteractiveCardCarousel />
      </div>
    </div>
  );
};

export default Leadership;
