import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL_INFO, SKILLS } from "../../data";
import SkillsGrid from "../ui/SkillsGrid";

/**
 * AboutSection — Personal bio and skills grid with staggered reveal.
 */
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="section-label">About me</span>
        </motion.div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
        >
          Crafting digital{" "}
          <span className="gradient-text">experiences</span>
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio text */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-foreground-muted text-base lg:text-lg leading-relaxed mb-6">
              {PERSONAL_INFO.aboutMe}
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border text-sm text-foreground-muted">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {PERSONAL_INFO.location}
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-border text-sm text-foreground-muted hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {PERSONAL_INFO.email}
              </a>
            </div>
          </motion.div>

          {/* Quick info cards */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-5 rounded-2xl bg-surface border border-border">
              <p className="text-foreground-subtle text-xs font-mono uppercase tracking-wider mb-2">Education</p>
              <p className="text-foreground font-medium">Systems Engineering</p>
              <p className="text-foreground-muted text-sm">Universidad Simon Bolivar</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface border border-border">
              <p className="text-foreground-subtle text-xs font-mono uppercase tracking-wider mb-2">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {["Full-Stack Dev", "IT Infrastructure", "Process Automation"].map((area) => (
                  <span key={area} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills grid */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SkillsGrid skills={SKILLS} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
