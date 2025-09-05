import React from "react";

const ItSolutions = ({ svg: SvgComponent, headtext, detail }) => {
  return (
    <div className="">
      <div className="bg-[#060606] p-4 h-[21rem] rounded-xl w-64 space-y-5 md:hover:-translate-y-4 md:hover:shadow-lg md:hover:shadow-[#A3E2BB4D] transition-all duration-300">
        <div>{<SvgComponent />}</div>
        <h4 className="bg-gradient-to-r to-[#436850] from-[#fbfada] bg-clip-text text-transparent text-xl font-semibold">
          {headtext}
        </h4>
        <hr className="bg-gradient-to-r from-[#436850] to-[#fbfada] bg-clip-text text-transparent w-3/5" />
        <p className="text-[#fbfada] text-sm">{detail}</p>
      </div>
    </div>
  );
};

export default ItSolutions;
