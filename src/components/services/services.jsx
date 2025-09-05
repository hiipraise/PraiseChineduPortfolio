import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "../../assets/icons/circlerightarrowsvg";
import { allImages } from "../../data/constants";

// Define sets of images for each section
const imageGroups = {
  "01": allImages.slice(0, 3),
  "02": allImages.slice(3, 6),
  "03": allImages.slice(6, 8),
};

const Services = ({
  number = "01",
  title = "#",
  description = "#",
  openAccordion,
  setOpenAccordion,
}) => {
  const [active, setActive] = useState(null);
  const isOpen = openAccordion === number;
  const clickToggleRef = React.useRef(false); // Track if user manually toggled

  const toggleSectionOnClick = () => {
    if (isOpen) {
      setOpenAccordion(null);
      clickToggleRef.current = false; // Re-enable hover
    } else {
      setOpenAccordion(number);
      clickToggleRef.current = true; // Disable hover
    }
  };

  React.useEffect(() => {
    if (!isOpen) {
      setActive(null); // Reset active image when accordion closes
      clickToggleRef.current = false; // Re-enable hover when accordion closes
    }
  }, [isOpen]);

  const sectionImages = imageGroups[number] || allImages;

  return (
    <div className="w-full max-w-full">
      <div className="flex flex-col gap-[3vmin]">
        {/* Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleSectionOnClick}
        >
          <div className="w-full flex gap-3 md:gap-10 items-center">
            <h1 className="text-xl md:text-xl font-normal text-[#fbfada] font-orbitron">
              {number}
            </h1>
            <h2 className="font-orbitron text-lg md:text-xl font-medium bg-gradient-to-r from-[#e8d8c4] to-[#c7b7a3] bg-clip-text text-transparent">
              {title}
            </h2>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? -35 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Arrow className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Accordion Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden flex flex-col gap-[3vmin]"
            >
              {/* Description Area */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={
                    active !== null
                      ? `${number}-service-${active}`
                      : `${number}-default`
                  }
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="border-l-2 border-[#c7b7a3] pl-4 text-lg font-normal text-[#c7b7a3]"
                >
                  {active !== null
                    ? sectionImages[active].description
                    : description}
                </motion.div>
              </AnimatePresence>

              {/* Image Row */}
              <div className="scrollbar-hide w-full overflow-x-auto snap-x scroll-smooth px-4">
                <div className="flex gap-3 py-2">
                  {sectionImages.map((img, idx) => (
                    <div
                      key={`${number}-image-${idx}`}
                      className={`group relative flex-shrink-0 w-64 snap-start rounded-lg overflow-hidden cursor-pointer ${
                        active === idx ? "ring-2 ring-white" : ""
                      }`}
                      onMouseEnter={() => setActive(idx)}
                      onMouseLeave={() => setActive(null)}
                    >
                      <motion.img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy" // Optimize image loading
                      />
                      <p className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-[#fbfada] text-lg font-semibold text-center p-4">
                        {img.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          <hr className="flex opacity-25" />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
