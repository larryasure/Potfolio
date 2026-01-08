import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  welcomeStudioImage,
  zairaImage,
  movieAppImage,
  listraceImage,
  gravityImage,
  portfolioImage,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },

  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React & Three.js Developer",
    icon: web,
  },
  {
    title: "3D Web Experiences",
    icon: mobile,
  },
  {
    title: "Responsive UI Design",
    icon: backend,
  },
  {
    title: "Full-Stack Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];
const experiences = [
  {
    title: "Self-Taught Developer",
    company_name: "Personal Projects",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Built responsive web applications using React.js, Three.js, and Tailwind CSS.",
      "Created interactive 3D web experiences and modern user interfaces.",
      "Implemented responsive design principles across multiple projects.",
      "Continuously learning modern web development technologies and best practices.",
    ],
  },
  {
    title: "Fullstack Developer (Learning)",
    company_name: "Portfolio Projects",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Developing web applications with React, focusing on component-based architecture.",
      "Learning and implementing animations using Framer Motion.",
      "Mastering responsive design and cross-browser compatibility.",
      "Building real-world projects to solidify fundamental and advanced concepts.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Lanre proved me wrong.",
    name: "Margaret Thatcher ",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Lanre does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Lanre optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Jessicca Pearson",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projectss = [
  {
    name: "Welcome Studio",
    description:
      "Webinar platform for marketers with interactive hosting and engagement tools designed to drive revenue.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "framer-motion", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: welcomeStudioImage,
    source_code_link: "https://github.com/larryasure",
  },

  {
    name: "Gravity Trading Platform",
    description:
      "Automated quantitative trading software providing 24/7 liquidity across 170+ crypto assets and exchanges.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "framer-motion", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: gravityImage,
    source_code_link: "https://github.com/larryasure",
  },

  {
    name: "Zaira Restaurant",
    description:
      "Modern restaurant website with food categories, menu browsing, and seamless ordering experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "lucide-react", color: "pink-text-gradient" },
    ],
    image: zairaImage,
    source_code_link: "https://github.com/larryasure",
  },

  {
    name: "Listrace",
    description:
      "Comprehensive discovery platform to find and explore restaurants, hotels, destinations, and local businesses in one place.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "lucide-react", color: "pink-text-gradient" },
    ],
    image: listraceImage,
    source_code_link: "https://github.com/larryasure",
  },

  {
    name: "Movie App",
    description:
      "Movie discovery app powered by TMDB API. Browse, search, and discover movies with ratings, languages, and release dates.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tmdb-api", color: "green-text-gradient" },
      { name: "firebase", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: movieAppImage,
    source_code_link: "https://github.com/larryasure",
  },

  {
    name: "Portfolio",
    description:
      "My personal portfolio website showcasing all my projects and skills.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "three.js", color: "green-text-gradient" },
      { name: "react drei", color: "pink-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: portfolioImage,
    source_code_link: "https://github.com/larryasure",
  },
];

export { services, technologies, experiences, testimonials, projectss };
