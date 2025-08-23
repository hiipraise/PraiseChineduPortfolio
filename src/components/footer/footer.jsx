import React from "react";
import Reg from "../../assets/icons/Reg";
import Copy from "../../assets/icons/Copy";
import Email from "../../assets/icons/Email";
import Phone from "../../assets/icons/Phone";
import SocialIcons from "./socialicons";

const Footer = () => {
  return (
    <footer className="px-[5vw] pb-12 border-t-2 border-t-[#A3E2BB4D] mt-24 sm:mt-38">
      <div className="justify-between py-[4vw] mx-auto flex items-center relative flex-wrap gap-[5vmin]">
        {/* Logo */}
        <div className="md:flex flex-col items-center hidden">
          <span className={`font-semibold text-2xl  text-white`}>P⚡C</span>
        </div>

        <div className="">
          <div className="w-full flex justify-between gap-8 items-center shadow-md shadow-[#A3E2BB4F] border-2 border-[#A3E2BB4F] rounded-lg p-3">
            <p className="text-[#eeeeff] text-sm">Connect With Me</p>
            <SocialIcons />
          </div>
        </div>
      </div>
      <hr className="border-[#A3E2BB63]" />
      <div className="p-[2vw] flex justify-between flex-wrap gap-[3vmin]">
        <div className="flex items-center gap-[3vmin] flex-wrap">
          <span className="flex gap-[1vmin] items-center">
            <Email />
            <p className="text-[#eeeeff] text-sm">
              info.praisechinedu@gmail.com
            </p>
          </span>
        </div>
        <div className="flex gap-[3vmin]">
          <span className="flex items-center gap-[1vmin] text-[#eeeeff] text-[12px]">
            <Copy /> hiipraise 2025
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
