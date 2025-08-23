// components/SocialIcons.jsx
import React from "react";
import x from "../../assets/icons/X.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
const socialMediaLinks = [
  {
    name: "Linkedin",
    icon: linkedin,
    alt: "Linkedin logo",
    link: "https://www.linkedin.com/in/praisechinedu30",
  },
  {
    name: "GitHub",
    icon: github,
    alt: "GitHub logo",
    link: "https://www.github.com/hiipraise",
  },
  {
    name: "x",
    icon: x,
    alt: "X logo",
    link: "https://x.com/hiiipraise",
  },
];

const SocialIcon = ({ icon, alt, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center border-2 border-[#A3E2BB1A] rounded-md w-8 h-8 bg-gradient-to-b from-[#29623F24] to-[#19192B] hover:-translate-y-1 hover:transition-all cursor-pointer"
    >
      <img src={icon} alt={alt} className="w-6 h-6" />
    </a>
  );
};

const SocialIcons = () => {
  return (
    <div className="flex gap-[1.5vmin]">
      {socialMediaLinks.map((social) => (
        <SocialIcon
          key={social.name}
          icon={social.icon}
          alt={social.alt}
          link={social.link}
        />
      ))}
    </div>
  );
};

export default SocialIcons;
