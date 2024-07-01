import {tuneWave, eduKids} from "./assets/";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
      "● JavaScript",
      "● React",
      "● Node.js",
      "● Express",
      "● SQL",
      "● HTML",
      "● CSS",
      "● Git",
    ]
  },
  {
    title: "Education",
    id: "education",
    content: [
      "● Universidad Simon Bolivar - Barranquilla, Colombia",
    ]
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "EduKids",
    description:
      "This is Educational application for schools, allowing students and teachers to access resources and tools to learn and teach about responsible energy use.",
    image: eduKids,
    technologies: ["React.js", "Tailwind CSS", "Express.js", "SQL"],
    github: "",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Artiheal",
    description:
      "This is a weather application that allows users to search for the current weather in any city. It was built using React, Redux, and the OpenWeatherMap API.",
    image:
      "https://nextjs-portfolio-mu-swart.vercel.app/_next/image?url=%2Fimages%2Fabout-image.png&w=640&q=75",
    technologies: ["React", "Redux", "OpenWeatherMap API"],
    github: "",
    previewUrl: "",
  },
  {
    id: 3,
    title: "TuneWave",
    description:
      "This project is a simple music player application. It allows users to play music tracks, navigate through the playlist, and control playback options.",
    image: tuneWave,
    technologies: ["HTML", "Tailwind", "JavaScript", "Vite"],
    github: "",
    previewUrl: "",
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
    description: "In this section, you'll find a selection of my most relevant projects, showcasing where I've applied my skills in various domains. Each project highlights my expertise in web development, software engineering, and problem-solving, demonstrating my ability to deliver innovative solutions and achieve tangible results. Explore these projects to see how I leverage technologies like React, Node.js, and MySQL to create impactful and efficient applications."
  },
   PersonalInfo: {
    description: "I am a software engineer with a passion for web development and a strong foundation in computer science. I specialize in building web applications using modern technologies like React, Node.js, and SQL. With a keen eye for detail and a commitment to quality, I strive to deliver exceptional results that meet the needs of users and clients. My goal is to leverage my technical skills and creativity to create innovative solutions that drive business growth and enhance user experiences."
  },
  
  }

export { TAB_DATA, PROJECTS, ACHIVEMENTSLIST,INFORMATION };
