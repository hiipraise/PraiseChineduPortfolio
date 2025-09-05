// components/SocialIcons.jsx
import React from "react";
import { socialMediaLinks } from "../../data/socials";

const SocialIcon = ({ icon: Icon, alt, link, color }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center border-2 border-[#A3E2BB1A] rounded-md w-8 h-8 bg-gradient-to-b from-[#29623F24] to-[#19192B] hover:-translate-y-1 hover:transition-all cursor-pointer"
    >
      <Icon className="w-6 h-6" color={color} />
    </a>
  );
};

const SocialIcons = () => {
  const iconColor = "#fbfada";

  return (
    <div className="flex gap-[1.5vmin]">
      {socialMediaLinks.map((social) => (
        <SocialIcon
          key={social.name}
          icon={social.icon}
          alt={social.alt}
          link={social.link}
          color={iconColor} // Pass the color prop
        />
      ))}
    </div>
  );
};

export default SocialIcons;
