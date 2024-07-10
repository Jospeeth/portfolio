import ProjectCard from "./modules/ProjectCard";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../constans";
import { INFORMATION } from "../constans";
import { useRef } from "react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Projects" className="pt-12">
      <h2 className="text-6xl font-bold text-white mt-8 text-start">
        Projects
      </h2>
      <div className="w-full flex">
        <p className="text-base text-primary py-12 max-w-3xl leading-7 ">
          {INFORMATION.projectsInfo.description}
        </p>
      </div>
      <ul ref={ref} className="flex flex-wrap gap-8 justify-center md:gap-12">
        {PROJECTS.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              git={project.github}
              previewUrl={project.previewUrl}
              tegnologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
