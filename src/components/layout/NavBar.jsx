import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../data";
import SectionWrapper from "./SectionWrapper";

/**
 * NavBar — Fixed top navigation with glass effect, scroll-aware styling,
 * and animated mobile menu.
 */
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Track scroll position for glass effect intensity
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    // Determine active section based on scroll position
    const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
    console.log(sections);
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/50 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <SectionWrapper className="flex items-center justify-between py-4">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
          aria-label="Go to homepage"
        >
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
            <span className="text-primary font-bold text-sm">JP</span>
          </div>
          <span className="font-semibold text-lg hidden sm:inline">
            Jose Pertuz
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1" role="menubar">
          {NAV_LINKS.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                role="menuitem"
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-primary"
                    : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                }`}
              >
                {link.title}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA (desktop) */}
        <a
          href="mailto:japertuzd@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Get in touch
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-border-hover hover:bg-surface-hover transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </SectionWrapper>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <SectionWrapper className="flex flex-col gap-1 py-4" role="menu">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  role="none"
                >
                  <a
                    href={link.href}
                    role="menuitem"
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      activeSection === link.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground-muted hover:text-foreground hover:bg-surface-hover"
                    }`}
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="mt-2 px-4"
              >
                <a
                  href="mailto:japertuzd@gmail.com"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-all duration-200"
                >
                  Get in touch
                </a>
              </motion.li>
            </SectionWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
