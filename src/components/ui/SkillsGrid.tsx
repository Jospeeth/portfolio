import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * SkillsGrid — Animated grid of technology icons with hover effects.
 */
const SkillsGrid = ({ skills }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-lg font-semibold text-foreground whitespace-nowrap">
          Tools & Technologies
        </h3>
        <div className="w-full h-px bg-border" />
      </div>

      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
        {skills.map((skill, index) => (
          <motion.li
            key={skill.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: index * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 hover:bg-surface-hover transition-all duration-300 cursor-default">
              <img
                src={skill.icon}
                alt={skill.title}
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                loading="lazy"
                width={48}
                height={48}
              />
              <span className="text-foreground-muted text-[11px] sm:text-xs font-medium text-center leading-tight group-hover:text-foreground transition-colors duration-300">
                {skill.title}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsGrid;
