import { eduKids, artiHeal, specializedDentistry } from "./assets/";

// ============================================
// NAVIGATION
// ============================================
export const NAV_LINKS = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "About" },
  { href: "#experience", title: "Experience" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

// ============================================
// PERSONAL INFORMATION
// ============================================
export const PERSONAL_INFO = {
  name: "Jose Pertuz",
  alias: "jospeeth",
  role: "Software Engineer & IT Engineer",
  taglines: ["Software Engineer", "Full Stack Developer", "React Developer", "IT Engineer"],
  email: "japertuzd@gmail.com",
  github: "https://github.com/Jospeeth",
  linkedin: "https://www.linkedin.com/in/josepertuz/",
  location: "Barranquilla, Colombia",
  bio: "Software Engineer in Colombia specializing in full-stack development and IT infrastructure. I excel in creating immersive digital experiences, leveraging React, Node.js and other modern technologies to develop high-performance, scalable web applications.",
  aboutMe:
    "I am a Software Engineer and Full Stack Developer based in Barranquilla, Colombia, with hands-on experience in IT infrastructure, web development, and process automation. I began my journey in technology in 2021, building projects with Java before pivoting to modern web development in 2023. Since then, I've built scalable applications using React, Node.js, Docker, and other modern technologies. Currently, I am focused on delivering robust IT solutions and optimizing enterprise-level infrastructure as an IT Engineer.",
};

// ============================================
// SKILLS & TOOLS
// ============================================
export const SKILLS = [
  {
    id: 1,
    title: "JavaScript",
    icon: "/images/javascript.svg",
    category: "language",
  },
  {
    id: 2,
    title: "React.js",
    icon: "/images/react.svg",
    category: "frontend",
  },
  {
    id: 3,
    title: "Node.js",
    icon: "/images/nodejs.svg",
    category: "backend",
  },
  {
    id: 4,
    title: "Express.js",
    icon: "/images/expressjs_dark.svg",
    category: "backend",
  },
  {
    id: 5,
    title: "MySQL",
    icon: "/images/mysql.svg",
    category: "database",
  },
  {
    id: 6,
    title: "Tailwind CSS",
    icon: "/images/tailwindcss.svg",
    category: "frontend",
  },
  {
    id: 7,
    title: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "devops",
  },
  {
    id: 8,
    title: "HTML5",
    icon: "/images/html5.svg",
    category: "language",
  },
  {
    id: 9,
    title: "Sass",
    icon: "/images/sass.svg",
    category: "frontend",
  },
];

// ============================================
// STATS / ACHIEVEMENTS
// ============================================
export const STATS = [
  { label: "Projects", value: "5", suffix: "+" },
  { label: "Experience", value: "3", suffix: "yr+" },
  { label: "Technologies", value: "10", suffix: "+" },
];

// ============================================
// PROFESSIONAL EXPERIENCE
// ============================================
export const EXPERIENCES = [
  {
    id: 1,
    company: "HomeSea Containers",
    role: "IT Engineer",
    type: "Full-time",
    dates: "Feb 2026 – Present",
    location: "Barranquilla, Atlántico, Colombia",
    mode: "Hybrid",
    highlights: [
      "IT infrastructure support and optimization across production environments",
      "Systems administration and proactive troubleshooting to minimize downtime",
      "Process automation and internal tools improvement for operational workflows",
      "Technical support and operational efficiency improvements across departments",
    ],
    technologies: ["IT Infrastructure", "Automation", "Systems Admin"],
    current: true,
  },
  {
    id: 2,
    company: "Odontología Especializada",
    role: "Full Stack Developer (Freelance)",
    type: "Contract",
    dates: "Jun 2025 – Jul 2025",
    location: "Barranquilla, Atlántico, Colombia",
    mode: "Remote",
    highlights: [
      "Developed a modern web application for a dental clinic, improving patient management and appointment scheduling",
      "Enhanced user experience through intuitive design and responsive interfaces",
      "Implemented secure authentication and authorization systems using JWT and PostgreSQL",
    ],
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT", "Postman"],
    current: false,
  },
  {
    id: 3,
    company: "Farmacápsulas",
    role: "Systems Engineering Intern",
    type: "Full-time Internship",
    dates: "Aug 2025 – Jan 2026",
    location: "Barranquilla, Atlántico, Colombia",
    mode: "On-site",
    highlights: [
      "Designed and implemented ETL processes (Extract, Transform, Load) for data pipelines",
      "Data analysis and reporting to support business decision-making",
      "Systems support and process optimization for manufacturing workflows",
      "Collaboration with technical and operational teams on cross-functional initiatives",
    ],
    technologies: ["ETL", "Data Analysis", "Process Optimization"],
    current: false,
  },
];

// ============================================
// PROJECTS
// ============================================
export const PROJECTS = [
  {
    id: 1,
    title: "Specialized Dentistry",
    description:
      "A comprehensive dental clinic web application designed to streamline patient management, appointment scheduling, and clinical records. Built with a modern stack featuring an intuitive interface for both patients and dental professionals, enabling efficient practice management and enhanced patient experience.",
    image: specializedDentistry,
    technologies: ["React", "Node.js", "Express.js", "SQL"],
    features: [
      "Patient management system",
      "Appointment scheduling",
      "Clinical records dashboard",
      "Responsive design",
    ],
    github: "https://github.com/Jospeeth/Specialized-dentistry",
    previewUrl: null,
    category: "fullstack",
    featured: true,
  },
  {
    id: 2,
    title: "EduKids",
    description:
      "An educational platform for schools empowering students and teachers with interactive resources and tools for learning about responsible energy use. Features role-based access, curriculum management, and engaging learning modules.",
    image: eduKids,
    technologies: ["React.js", "Tailwind", "Express.js", "SQL"],
    features: [
      "Role-based authentication",
      "Interactive learning modules",
      "Teacher dashboard",
      "Resource management",
    ],
    github: "https://github.com/Jospeeth/EduKids",
    previewUrl: "https://edukids-1.vercel.app",
    category: "fullstack",
    featured: true,
  },
  {
    id: 3,
    title: "Artiheal",
    description:
      "An intuitive health management platform for tracking daily routines and monitoring detailed health updates via a user-friendly dashboard. Helps users maintain wellness goals through data-driven insights and personalized recommendations.",
    image: artiHeal,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    features: [
      "Health tracking dashboard",
      "Daily routine management",
      "Data visualization",
      "User authentication",
    ],
    github: "https://github.com/VinuSion/Artiheal",
    previewUrl: "https://artiheal.onrender.com",
    category: "fullstack",
    featured: false,
  },
];
