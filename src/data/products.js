import ElevateThumbnail from "../assets/thumbnails/elevate.png";
import ZentraThumbnail from "../assets/zentraImages/room.png";
import SmartEdLabsThumbnail from "../assets/thumbnails/smartedlab_thumbnail.png";
import AmataThumbnail from "../assets/thumbnails/Amata.png";
import NourishedThumbnail from "../assets/thumbnails/Naurish_thumbnail.png";
import PitcsThumbnail from "../assets/thumbnails/Pitcs_thumb.png";
import TravelumThumbnail from "../assets/thumbnails/Travelum_thumbnail.png";
import SocialNotachThumbnail from "../assets/thumbnails/socialnotch.png";
import PhoneNestThumbnail from "../assets/thumbnails/Phonenest_thumbnail.png";

export const CREAM = "#EAE4D5";
export const ORANGE = "#E8400C";
export const GREEN = "#10B981";
export const BLUE = "#3B82F6";
export const PURPLE = "#8B5CF6";
export const PINK = "#EC4899";
export const CYAN = "#06B6D4";

export const PRODUCTS = [
  {
    id: "smartedlabs",
    name: "SmartEdLabs",
    hook: "AI-powered language learning platform.",
    desc: "A complete language learning platform with Super Admin, Student, Tutor, and Institute modules. Features role-based access, course management, AI-assisted learning, analytics, and live education workflows.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "Groq AI",
    ],
    accent: ORANGE,
    mockup: { src: SmartEdLabsThumbnail },
  },
  {
    id: "amata",
    name: "Amata Farms",
    hook: "Premium desi ghee, delivered online.",
    desc: "A modern e-commerce platform for premium dairy products with seamless shopping, secure Razorpay payments, responsive UI, and a scalable monorepo architecture.",
    stack: [
      "Next.js",
      "TypeScript",
      "TurboRepo",
      "Tailwind",
      "Razorpay",
    ],
    accent: CREAM,
    mockup: { src: AmataThumbnail },
  },
  {
    id: "nourished",
    name: "Nourished",
    hook: "Healthy meals for every child.",
    desc: "A smart food delivery platform where parents order nutritious meals for their children. Delivery partners verify deliveries using QR code scanning for a secure handoff.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "QR Code",
    ],
    accent: GREEN,
    mockup: { src: NourishedThumbnail },
  },
  {
    id: "pitcs",
    name: "PITCS",
    hook: "Empowering businesses through technology.",
    desc: "A corporate website showcasing IT consulting, staffing, and digital transformation services with smooth animations, responsive layouts, and modern UI experiences.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "GSAP",
    ],
    accent: BLUE,
    mockup: { src: PitcsThumbnail },
  },
  {
    id: "Travelum",
    name: "Travelum",
    hook: "Discover stories beyond destinations.",
    desc: "A travel blogging platform featuring destination guides, travel stories, and inspiring content with responsive design, SEO optimization, and a modern reading experience.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind",
    ],
    accent: PURPLE,
    mockup: { src: TravelumThumbnail },
  },
  {
    id: "socialnotch",
    name: "Social Notch",
    hook: "Creating unforgettable celebrations.",
    desc: "An event management platform for corporate events, weddings, and social gatherings with engaging animations, interactive sections, and responsive design.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "GSAP",
    ],
    accent: PINK,
    mockup: { src: SocialNotachThumbnail },
  },
  {
    id: "phonenest",
    name: "PhoneNest",
    hook: "Trusted mobile repair solutions.",
    desc: "A service platform for smartphone repairs, device diagnostics, and customer support with service booking, responsive UI, and streamlined user journeys.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind",
    ],
    accent: CYAN,
    mockup: { src: PhoneNestThumbnail },
  },
];
