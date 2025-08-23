import React from "react";
import BlurBg from "../../assets/icons/blurbg";

const ColorBlurbg = () => {
  return (
    <div>
      <div>
        <div className="hidden md:block absolute left-0 translate-y-60">
          <BlurBg />
        </div>
        <div className="hidden md:block absolute left-0">
          <BlurBg />
        </div>
      </div>
      <div>
        <div className="hidden md:block absolute right-0 rotate-180 translate-y-56">
          <BlurBg />
        </div>
        <div className="hidden md:block absolute right-0 rotate-180">
          <BlurBg />
        </div>
      </div>
      <div>
        <div className="hidden md:block absolute left-0 translate-y-[110rem]">
          <BlurBg />
        </div>
        <div className="hidden md:block absolute left-0 translate-y-[90rem]">
          <BlurBg />
        </div>
      </div>
      <div>
        <div className="hidden md:block absolute right-0 rotate-180 translate-y-[100rem]">
          <BlurBg />
        </div>
        <div className="hidden md:block absolute right-0 rotate-180 translate-y-[80rem]">
          <BlurBg />
        </div>
      </div>
    </div>
  );
};

export default ColorBlurbg;
