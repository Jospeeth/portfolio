import {tuneWave, eduKids, artiHeal} from "./assets/";

const SKILS_AND_TOOLS = [
  
      {
        id: 1,
        title: "JavaScript",
        img: "/images/javascript.svg"
      },
      {
        id: 2,
        title: "React.js",
        img: "/images/react.svg"
      },
      {
        id: 3,
        title: "Node.js",
        img: "/images/nodejs.svg"
      },
      {
        id: 4,
        title: "Express.js",
        img: "/images/expressjs_dark.svg"
      },
    
      {
        id: 5,
        title: "MySQL",
        img: "/images/mysql.svg"
      },
      {
        id: 6,
        title: "Tailwind CSS",
        img: "/images/tailwindcss.svg"
      },
      {
        id: 7,
        title: "Figma",
        img: "/images/figma.svg"
      },
      {
        id: 8,
        title: "HTML5",
        img: "/images/html5.svg"
      },
      {
        id: 9,
        title: "Sass",
        img: "/images/sass.svg"
      }
      
];

const PROJECTS = [
  {
    id: 1,
    title: "EduKids",
    description:
      "This is Educational application for schools, allowing students and teachers to access resources and tools to learn and teach about responsible energy use.",
    image: eduKids,
    technologies: ["React.js", "Tailwind", "Express.js", "SQL"],
    github: "https://github.com/Jospeeth/EduKids",
    previewUrl: "https://edukids-1.vercel.app",
  },
  {
    id: 2,
    title: "Artiheal",
    description:
      "An intuitive health management platform for tracking daily routines and monitoring detailed health updates via a user-friendly dashboard.",
    image: artiHeal,
    technologies: ["React", "Node.js", "mongoDB", "Tailwind"],
    github: "https://github.com/VinuSion/Artiheal",
    previewUrl: "https://artiheal.onrender.com",
  },
  {
    id: 3,
    title: "TuneWave",
    description:
      "This project is a simple music player application. It allows users to play music tracks, navigate through the playlist, and control playback options.",
    image: tuneWave,
    technologies: ["HTML", "Tailwind", "JavaScript", "Vite"],
    github: "https://github.com/Jospeeth/TuneWave",
    previewUrl: "https://tunewavee.netlify.app/",
  },
];

const ACHIVEMENTSLIST = [
  {
    metric: "Projects",
    value: "4",
    postfix: "+",
  },
  {
    metric: "Awards",
    value: "2",
  },
  {
    metric: "Years",
    value: "4",
  },
];

const INFORMATION = {
  projectsInfo: {
    description:
      "In this section, you'll find a selection of my most relevant projects, showcasing where I've applied my skills in various domains. Each project highlights my expertise in web development, software engineering, and problem-solving, demonstrating my ability to deliver innovative solutions and achieve tangible results. Explore these projects to see how I leverage technologies like React, Node.js, and MySQL to create impactful and efficient applications.",
  },
  personalInfo: {
    description:
      "I excel in creating immersive digital experiences, leveraging UX/UI principles to develop high-performance web applications that are both accessible and visually striking",
  },
  aboutMe: {
    description:
      "I enrolled in university in 2021 🎓, where I began my journey in technology. During the first four semesters, I completed several projects using vanilla Java ☕. Seeking to broaden my experience, I ventured into web development in the first semester of 2023 🌐. I created small projects, such as a to-do list application 📝, and contributed to the Artiheal project, a final-year initiative 🛠️. Currently, I am learning React ⚛️ and working on my first project using the MERN stack 💻.",
  },
};

export { SKILS_AND_TOOLS, PROJECTS, ACHIVEMENTSLIST,INFORMATION };
