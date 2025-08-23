import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "../../assets/icons/circlerightarrowsvg";
import artificial from "../../assets/images/artificialintell.jpg";
import backend from "../../assets/images/backenddev.png";
import frontend from "../../assets/images/frontenddev.png";
import Mobile from "../../assets/images/mobileAppdev.jpg";
import Iot from "../../assets/images/Iot.jpg";
import cyber from "../../assets/images/cyber.png";
import design from "../../assets/images/design.jpg";
import develop from "../../assets/images/develop.jpg";
import technical from "../../assets/images/Technical.jpg";
import test from "../../assets/images/Test.jpg";
import ml from "../../assets/images/ML.jpg";
import discovering from "../../assets/images/discovering.jpg";
import automation from "../../assets/images/automation.jpg";
import techTeam from "../../assets/images/techTeam.jpg";
import Tech from "../../assets/images/techTeam.jpg";
import SAAS from "../../assets/images/SAAS.jpg";
import BOTS from "../../assets/images/BOTS.jpg";
import blockchain from "../../assets/images/blockchain.jpg";
import deploy from "../../assets/images/deploy.jpg";
import maintain from "../../assets/images/Test.jpg";

// All service images
const allImages = [
  {
    src: artificial,
    label: "Artificial Intelligence",
    description:
      "We provide cutting-edge AI solutions including machine learning models, computer vision, NLP systems, and AI integration for enterprise workflows.",
  },
  {
    src: backend,
    label: "Back-End Development",
    description:
      "From RESTful APIs to scalable microservices, we build robust and secure backend systems that power modern applications.",
  },
  {
    src: frontend,
    label: "Front-End Development",
    description:
      "Stunning and responsive user interfaces using React, Vue, or Angular. Optimized for speed, accessibility, and SEO.",
  },
  {
    src: Mobile,
    label: "Mobile App Development",
    description:
      "iOS, Android, and cross-platform app development using React Native and Flutter. Beautiful, fast, and user-friendly.",
  },
  {
    src: automation,
    label: "Automation",
    description:
      "Comprehensive automated testing solutions that ensure quality and reduce time-to-market with robust test frameworks.",
  },
  {
    src: techTeam,
    label: "Tech Team Urgmentation",
    description:
      "• Dedicated Developers • Remote Team • Dedicated Developers• On-Demand Staffing• Project-Based Teams• Agile Development Teams• QA and Testing• UI/UX Design• Project Management",
  },
  {
    src: blockchain,
    label: "Blockchain Development",
    description:
      "• Smart Contract Development, Decentralized Application (DApp) Developmen, Blockchain Consulting, Cryptocurrency Development, NFT Development, Blockchain Integration with Existing Systems • Enterprise Blockchain Solutions",
  },
  {
    src: BOTS,
    label: "Chatbot & Virtual Assistants",
    description:
      "• Chatbots (Customer Service, Sales, Marketing) • AI-Powered Assistants • Conversational AI • Natural Language Processing (NLP) • Machine Learning for Bots •Integration with Messaging Platforms (Slack, Discord, Telegram)",
  },
  {
    src: Iot,
    label: "IoT & Embedded Systems",
    description:
      "• IoT Device Development • Sensor Integration • Data Acquisition and Processing •Edge Computing • Cloud Connectivity • IoT Platform Integration • Embedded Software Development • Firmware Development",
  },
  {
    src: cyber,
    label: "Cyber Security",
    description:
      "• Penetration Testing, Vulnerability Assessment, Security Audits, Threat Intelligence, Incident Response, Security Awareness Training, Data Loss Prevention (DLP), Security Information and Event Management (SIEM)",
  },
  {
    src: technical,
    label: "Technical Support and Maintenance",
    description:
      "24/7 support, monitoring, maintenance, and updates for your systems. We ensure everything runs smoothly post-deployment.",
  },
  {
    src: ml,
    label: "AI/ML",
    description:
      "• Machine Learning Model Development • Deep Learning • Computer Vision • Natural Language Processing (NLP) • Predictive Analytics • AI-Powered Recommendations • Chatbots and Virtual Assistants • AI for Business.",
  },
  {
    src: Tech,
    label: "Tech Team Augmentation",
    description:
      "• Dedicated Developers • Remote Team • Dedicated Developers• On-Demand Staffing• Project-Based Teams• Agile Development Teams• QA and Testing• UI/UX Design• Project Management",
  },
  {
    src: SAAS,
    label: "SAAS/BAAS & Software Maintenance",
    description:
      "End-to-end SaaS platform development with scalable architecture, subscription management, and multi-tenant capabilities.",
  },
  {
    src: discovering,
    label: "Discovering and Defining",
    description:
      "We begin by understanding your goals, challenges, and vision. Through collaborative workshops and research, we uncover your core needs and translate them into actionable requirements. - Stakeholder interviews, - Technical feasibility assessments, - Project scoping & planning",
  },
  {
    src: design,
    label: "Design and Architect",
    description:
      "Beautiful, intuitive designs tailored to user journeys. We craft wireframes, prototypes, and fully responsive interfaces.",
  },
  {
    src: develop,
    label: "Develop and Integrate",
    description:
      "From writing efficient embedded firmware to developing cloud-connected AI platforms, our engineers bring your product to life with clean, maintainable code and robust integrations. - Agile development (Scrum/Kanban), - Firmware & embedded coding, - Cloud & backend development, -AI model training & integration, -Hardware-software interfacing",
  },
  {
    src: test,
    label: "Test & Validate",
    description:
      "Quality is non-negotiable. We conduct rigorous testing at every level—unit, system, and field—to ensure your product performs reliably in real-world environments. - Automated & manual testing, -Hardware-in-the-loop (HIL) testing, - AI model validation, -Compliance & performance checks.",
  },
  {
    src: deploy,
    label: "Deploy & Launch",
    description:
      "We manage smooth rollouts—whether it’s deploying a cloud-based SaaS platform, launching an embedded device, or delivering an AI-powered solution. - CI/CD & release management, - OTA firmware updates, - Cloud infrastructure setup, - Post-launch monitoring",
  },
  {
    src: maintain,
    label: "Maintain & Evolve",
    description:
      "Technology evolves—and so should your solution. We offer continuous support, updates, and innovation to ensure long-term success and adaptability. - Maintenance & SLA-driven support, - Feature upgrades & optimizations, -Data-driven insights for improvement, - Scalability planning",
  },
  {
    src: design,
    label: "Design & Architect",
    description:
      "Our cross-functional team creates intuitive, scalable system designs tailored to your domain. We carefully architect software, hardware, or hybrid solutions that balance performance, security, and user experience. - System architecture (Software, IoT, Embedded), - UX/UI design, - Technology stack selection, - Prototyping & simulation",
  },
];

// Define sets of images for each section
const imageGroups = {
  "01": allImages.slice(0, 8),
  "02": allImages.slice(8, 14),
  "03": allImages.slice(14, 20),
};

const Services = ({
  number = "01",
  title = "Our Services",
  description = "We offer a full spectrum of digital transformation services...",
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
    <div
      className="w-full max-w-full"
      
    >
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
                      <p className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-lg font-semibold text-center p-4">
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
