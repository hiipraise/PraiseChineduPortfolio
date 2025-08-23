import React, { useState, useEffect, useRef } from "react";
import { cardsData } from "../../data/portfolio";
import Arrow from "../../assets/icons/circlerightarrowsvg";

const CARD_HEIGHT = "450px";
const IMAGE_HEIGHT = "200px";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const Card = ({ card, style }) => (
  <div
    className={`absolute flex flex-col rounded-lg transition-all duration-500 ease-in-out text-[#fbfada] ${style.background} p-6`}
    style={{
      ...style,
      width: style.width,
      height: CARD_HEIGHT,
      transform: `${style.transform} scale(${style.scale})`,
      boxSizing: "border-box",
    }}
  >
    <div
      className="w-full flex items-center justify-center border border-[#436850] overflow-hidden clip-slant mb-4"
      style={{ height: IMAGE_HEIGHT }}
    >
      <img
        src={card.imageDescription}
        alt={card.title}
        className="w-full h-full object-cover"
      />
    </div>
    <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#fbfada]">
      {card.title}
    </h2>
    <p className="text-sm md:text-base text-gray-300 overflow-hidden line-clamp-[8]">
      {card.description}
    </p>
    <a
      href="https://www.storytrennd.name.ng"
      target="_blank"
      className="text-[#A3E2BB] flex justify-end mt-4 hover:underline"
    >
      Preview
    </a>
  </div>
);

const getStyle = (pos, isMobile) => {
  const base = {
    opacity: 0,
    zIndex: 5,
    transform: "translateX(-50%)",
    scale: 0,
    background: "bg-gray-800",
    filter: "blur(3px)",
  };

  if (isMobile) {
    if (pos === "middle") {
      return {
        left: "50%",
        width: "90%",
        opacity: 1,
        zIndex: 20,
        transform: "translateX(-50%)",
        background: "bg-black border border-[#A3E2BB82]",
        scale: 1,
        filter: "blur(0px)",
      };
    } else {
      return {
        left: "50%",
        width: "90%",
        opacity: 0,
        zIndex: 10,
        transform: pos === "left" ? "translateX(-150%)" : "translateX(50%)",
        background: "bg-transparent",
        scale: 0.8,
        filter: "blur(3px)",
      };
    }
  }

  const styles = {
    left: {
      left: "10%",
      width: "30%",
      opacity: 0.4,
      zIndex: 10,
      transform: "translateX(0%)",
      background: "bg-transparent border border-gray-700",
      scale: 0.95,
      filter: "blur(1px)",
    },
    middle: {
      left: "50%",
      width: "40%",
      opacity: 1,
      zIndex: 20,
      transform: "translateX(-50%)",
      background: "bg-black border border-[#A3E2BB82]",
      scale: 1,
      filter: "blur(0px)",
    },
    right: {
      left: "90%",
      width: "30%",
      opacity: 0.4,
      zIndex: 10,
      transform: "translateX(-100%)",
      background: "bg-transparent border border-gray-700",
      scale: 0.95,
      filter: "blur(1px)",
    },
  };

  return styles[pos] || base;
};

export const InteractiveCardCarousel = () => {
  const [current, setCurrent] = useState(1);
  const isMobile = useIsMobile();
  const num = cardsData.length;
  const carouselRef = useRef(null);

  const prev = () => setCurrent((prev) => (prev - 1 + num) % num);
  const next = () => setCurrent((prev) => (prev + 1) % num);

  useEffect(() => {
    if (isMobile && carouselRef.current) {
      const currentCardElement = carouselRef.current.querySelector(
        `.card-${cardsData[current].id}`
      );
      if (currentCardElement) {
        currentCardElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [current, isMobile]);

  const getPosition = (id) => {
    const i = cardsData.findIndex((c) => c.id === id);
    const left = (current - 1 + num) % num;
    const middle = current;
    const right = (current + 1) % num;

    if (isMobile) {
      if (i === middle) return "middle";
      if (i === left) return "left";
      if (i === right) return "right";
      return "hidden";
    }

    return i === left
      ? "left"
      : i === middle
      ? "middle"
      : i === right
      ? "right"
      : "hidden";
  };

  return (
    <div className="flex flex-col items-center gap-10 px-4">
      <div
        className="relative w-full max-w-6xl min-h-[450px]"
        ref={carouselRef}
      >
        {cardsData.map((card) => {
          const position = getPosition(card.id);
          if (position === "hidden") return null;
          return (
            <Card
              key={card.id}
              card={card}
              style={getStyle(position, isMobile)}
              className={`card-${card.id}`}
            />
          );
        })}
      </div>

      <div className="flex gap-6 mt-4">
        <button onClick={prev} aria-label="Previous" className="rotate-180">
          <Arrow />
        </button>
        <button onClick={next} aria-label="Next">
          <Arrow />
        </button>
      </div>
    </div>
  );
};
