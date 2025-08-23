import React, { useState, useEffect } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8  bg-accent text-[#fbfada]  p-3 rounded-full shadow-lg  hover:bg-[#436850] hover:scale-95  transition-all duration-300 ease-in-out  focus:outline-none   z-50  ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }   md:right-6 md:p-4 lg:right-6
      `}
      aria-label="Scroll to top"
    >
      <ArrowUpCircleIcon className="h-6 w-6 md:h-7 md:w-7" />{" "}
    </button>
  );
};

export default BackToTopButton;
