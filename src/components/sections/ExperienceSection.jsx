import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCES } from "../../data";

/**
 * ExperienceSection — Professional timeline with animated reveal.
 */
const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="section-label">Career</span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          Professional{" "}
          <span className="gradient-text">experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-foreground-muted text-base lg:text-lg mb-12 max-w-2xl"
        >
          My journey through technology, from hands-on systems engineering
          internships to leading IT infrastructure in enterprise environments.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary shadow-lg shadow-primary/30"
                      : "bg-surface border-border"
                  }`} />
                </div>

                {/* Card */}
                <div className="group p-6 md:p-8 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <span className="text-foreground-muted text-sm font-mono">
                        {exp.dates}
                      </span>
                      <span className="text-foreground-subtle text-xs">
                        {exp.location} · {exp.mode}
                      </span>
                    </div>
                  </div>

                  {/* Type badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-surface-hover text-foreground-muted border border-border">
                      {exp.type}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground-muted text-sm leading-relaxed"
                      >
                        <svg
                          className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 11 12 14 22 4" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/5 text-primary/80 border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
