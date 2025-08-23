import React from "react";
import ArrowRight from "../../assets/icons/ArrowRight";
import ArrowRight2 from "../../assets/icons/ArrowRight2";

const Buttons = () => {
  const phoneNumber = "08150355751";
  const emailAddress = "info.stalwartech@gmail.com";

  return (
    <div className="flex gap-[3vmin] items-center justify-center flex-1">
      <button
        className="flex gap-[1vmin] justify-center flex-grow bg-[#A3E2BB] rounded-md border-2 border-[#A3E2BB] text-[#19192B] py-2"
        onClick={() => (window.location.href = `tel:${phoneNumber}`)}
      >
        Call Me
        <span>
          <ArrowRight />
        </span>
      </button>
      <button
        className="flex gap-[1vmin] justify-center relative bg-transparent border-2 rounded-md border-[#A3E2BB] flex-grow py-2 text-[#A3E2BB] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-[#78f6cb20] before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full"
        onClick={() => (window.location.href = `mailto:${emailAddress}`)}
      >
        Send an Email
        <span>
          <ArrowRight2 />
        </span>
      </button>
    </div>
  );
};

export default Buttons;
