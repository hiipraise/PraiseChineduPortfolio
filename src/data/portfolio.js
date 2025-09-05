import DollarSignSvg from "../assets/icons/dollarsign";
import PuzzlePieceSvg from "../assets/icons/puzzlepiece";
import SparkleSvg from "../assets/icons/sparklesvg";
import TrustShieldSvg from "../assets/icons/trustshield";
import imgcarousel1 from "../assets/images/OgaPolls.png";
import imgcarousel2 from "../assets/images/storytrennd.png";
import imgcarousel3 from "../assets/images/tk_v2.png";

export const itsolutionsData = [
  {
    id: 1,
    svg: PuzzlePieceSvg,
    headtext: "Adaptability",
    detail:
      "Your vision demands dynamic solutions. I build flexible, scalable platforms with agile methods, enabling you to innovate and meet challenges with ease.",
  },
  {
    id: 2,
    svg: TrustShieldSvg,
    headtext: "Security",
    detail:
      "Your data deserves top-tier protection. I implement advanced security measures to safeguard your assets, ensuring trust and reliability.",
  },
  {
    id: 3,
    svg: SparkleSvg,
    headtext: "Timely Delivery",
    detail:
      "Deadlines drive success. I deliver projects on time with precision and care, turning your vision into reality without delay.",
  },
  {
    id: 4,
    svg: DollarSignSvg,
    headtext: "Value-Driven Pricing",
    detail:
      "Get high-quality results without breaking the bank. Transparent pricing ensures exceptional value, fueling your growth.",
  },
];

export const cardsData = [
  {
    id: 1,
    title: "OgaPolls",
    description:
      "Built a survey platform to collect and analyze user feedback, implementing dynamic forms and real-time data visualization to streamline decision-making processes for businesses and individuals.",
    imageDescription: imgcarousel1,
    link: "https://www.ogapolls.name.ng",
  },
  {
    id: 2,
    title: "StoryTrennd",
    description:
      "Developed a full-stack storytelling platform enabling users to create, share, and illustrate stories with AI-generated visuals, enhancing user engagement through interactive features like comment replies and notifications.",
    imageDescription: imgcarousel2,
    link: "https://www.storytrennd.name.ng",
  },
  {
    id: 3,
    title: "TarnKapital",
    description:
      "Designed a full-stack investment platform with an admin dashboard for managing users and transactions, incorporating JWT authentication and responsive UI to empower clients with secure financial tools.",
    imageDescription: imgcarousel3,
    link: "https://.vercel.app",
  },
];
