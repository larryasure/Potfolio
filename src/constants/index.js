import {
  backend,
  creator,
  css,
  Diary,
  django,
  figma,
  git,
  html,
  javascript,
  listraceImage,
  MiroNews,
  mobile,
  mongodb,
  movieAppImage,
  portfolioImage,
  postgresql,
  PrimePack,
  python,
  reactjs,
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
    title: "Frontend Development",
    icon: web,
    text: "Building responsive and interactive user interfaces using React, JavaScript, Tailwind CSS, and modern frontend tools.",
  },
  {
    title: "Backend Development",
    icon: backend,
    text: "Designing APIs, authentication systems, database structures, and backend services with Django and REST Framework.",
  },
  {
    title: "Full-Stack Applications",
    icon: creator,
    text: "Developing complete web applications by connecting frontend experiences with reliable backend systems.",
  },
  {
    title: "UI & Interactive Experiences",
    icon: mobile,
    text: "Creating engaging digital experiences with animations, Three.js, and modern UI design principles.",
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
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "postgresql",
    icon: postgresql,
  },


  {
    name: "python",
    icon: python,
  },

  {
    name: "django",
    icon: django,
  },

  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Independent Software Development",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Built full-stack web applications using React.js, Django REST Framework, and modern web technologies.",

      "Developed scalable backend systems including REST APIs, authentication workflows, database models, and business logic.",

      "Created responsive frontend interfaces with reusable components, optimized layouts, and modern UI patterns.",

      "Integrated third-party services including APIs, payment systems, and external tools into production applications.",
    ],
  },

  {
    title: "Frontend Engineering",
    company_name: "Independent Development Projects",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Developed interactive user interfaces using React, JavaScript, Tailwind CSS,3D and Framer Motion.",

      "Focused on creating responsive designs that provide consistent experiences across desktop and mobile devices.",

      "Built reusable component systems to improve development speed and maintain application consistency.",

      "Applied modern frontend practices including state management, API integration, and performance optimization.",
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
