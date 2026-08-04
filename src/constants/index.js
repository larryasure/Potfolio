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
    title: "Full Stack Developer",
    company_name: "Personal Projects (Production Builds)",
    icon: reactjs,
    iconBg: "#383E56",
    date: "August 2025 - Present",
    points: [
      "Developed multiple full-stack web applications including an ecommerce platform, blog system, and diary management app using React.js and Django REST Framework.",
      "Designed and integrated RESTful APIs for authentication, CRUD operations, and dynamic data handling across applications.",
      "Implemented responsive UI systems using Tailwind CSS and modern frontend architecture principles.",
      "Worked with PostgreSQL, SQLite, and MongoDB to design and manage application databases across different projects.",
    ],
  },
  {
    title: "Frontend & Backend Developer",
    company_name: "Independent Development Work",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Built and deployed production-ready web applications with focus on performance, scalability, and user experience.",
      "Integrated third-party APIs and authentication systems into real-world applications.",
      "Developed reusable UI components and optimized frontend structure for maintainability.",
      "Collaborated with design tools and version control systems (Git/GitHub) to manage project workflows.",
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
    source_code_link: "https://github.com/larryasure",
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
    source_code_link: "https://github.com/larryasure",
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
    source_code_link: "https://github.com/larryasure",
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
    source_code_link: "https://github.com/larryasure",
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
    source_code_link: "https://github.com/larryasure",
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
    source_code_link: "https://github.com/larryasure",
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
    source_code_link: "https://github.com/larryasure",
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
    source_code_link: "https://github.com/larryasure",
  },
];

export { experiences, projectss, services, technologies, testimonials };
