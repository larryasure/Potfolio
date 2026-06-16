import {
  backend,
  creator,
  css,
  Diary,
  git,
  html,
  javascript,
  listraceImage,
  MiroNews,
  mobile,
  mongodb,
  movieAppImage,
  nodejs,
  portfolioImage,
  PrimePack,
  reactjs,
  redux,
  Sloth,
  tailwind,
  threejs,
  web,
  zairaImage,
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
    name: "PrimePack Ecommerce",
    description:
      "Full-stack ecommerce platform for gadgets, electronics, beauty products, jewelry, and accessories featuring authentication, cart functionality, product management, and scalable REST API architecture.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "django-rest", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],

    image: PrimePack,
    source_code_link: "https://github.com/yourusername",
  },

  {
    name: "MyDaily Notes",
    description:
      "Responsive diary and notes management application allowing users to create, manage, and delete personal notes with reusable React components and secure backend integration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "sqlite", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],

    image: Diary,
    live_link: "https://mydaily-notes.vercel.app/",
    source_code_link: "https://github.com/yourusername",
  },

  {
    name: "MiroNews",
    description:
      "Modern news platform delivering categorized and trending news content through responsive UI design, optimized API integration, and seamless content browsing experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "news-api", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
    ],
    image: MiroNews,
    source_code_link: "https://github.com/yourusername",
  },

  {
    name: "Sloth Transaction Tracker",
    description:
      "Expense and income tracking application enabling users to manage transactions, categorize spending, and filter financial records with secure MongoDB backend integration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],
    image: Sloth,
    source_code_link: "https://github.com/yourusername",
  },

  {
    name: "Zaira Restaurant",
    description:
      "Modern restaurant website featuring menu exploration, food categories, responsive layouts, and engaging user experience for seamless online food discovery.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "lucide-react", color: "pink-text-gradient" },
    ],
    image: zairaImage,
    source_code_link: "https://github.com/yourusername",
  },

  {
    name: "Listrace",
    description:
      "Business discovery platform helping users explore restaurants, hotels, destinations, and local services through intuitive navigation and responsive frontend architecture.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: listraceImage,
    source_code_link: "https://github.com/yourusername",
  },

  {
    name: "Movie App",
    description:
      "Movie discovery application powered by TMDB API enabling users to browse trending movies, search titles, and explore ratings, release dates, and movie details.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tmdb-api", color: "green-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: movieAppImage,
    source_code_link: "https://github.com/yourusername",
  },

  {
    name: "3D Portfolio Website",
    description:
      "Interactive developer portfolio showcasing projects and technical skills through immersive Three.js animations, responsive layouts, and modern frontend architecture.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "three.js", color: "green-text-gradient" },
      { name: "framer-motion", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],
    image: portfolioImage,
    source_code_link: "https://github.com/yourusername",
  },
];

export { experiences, projectss, services, technologies, testimonials };
