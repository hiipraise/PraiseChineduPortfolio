import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/aboutimg1.jpg"; 
import image2 from "../../assets/images/aboutimg2.jpg";
import image3 from "../../assets/images/aboutimg3.jpg";
import image4 from "../../assets/images/aboutimg4.jpg";

const Box = ({ imageUrl }) => (
  <div className="relative w-32 h-48 overflow-hidden rounded-md">
    <div className="absolute inset-0 p-[2px] bg-gradient-to-br from-[#A3E2BB] to-[#fbfada] clip-slant bg-transparent">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full rounded-md object-cover clip-slant"
        />
    </div>
  </div>
);

const ImgAnime = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="flex flex-row items-center justify-center gap-6 sm:gap-10">
        {/* Left Column: animates from top */}
        <motion.div
          className="space-y-6 sm:space-y-7"
          initial={{ opacity: 0, y: -120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Box imageUrl={image1} />
          <Box imageUrl={image2} />
        </motion.div>

        {/* Right Column: animates from bottom */}
        <motion.div
          className="space-y-6 sm:space-y-7"
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 25 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Box imageUrl={image3} />
          <Box imageUrl={image4} />
        </motion.div>
      </div>
    </div>
  );
};

export default ImgAnime;
