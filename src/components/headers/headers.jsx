import React from "react";

const HeadersSection = ({ headingText, paragraphText }) => {
  return (
    <div className="px-[5vw] flex flex-col gap-3">
      <h1 className="font-orbitron text-center text-[#fbfada] text-xl md:text-2xl">
        {headingText}
      </h1>
      <p className="text-center bg-gradient-to-r from-[#A3E2BB] to-[#fbfada] bg-clip-text text-transparent text-lg md:text-xl">
        {paragraphText}
      </p>
    </div>
  );
};

export default HeadersSection;
