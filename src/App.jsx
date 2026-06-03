import { lazy, Suspense } from "react";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

const HeroSection = lazy(() => import("./components/sections/HeroSection"));
const AboutSection = lazy(() => import("./components/sections/AboutSection"));
const ExperienceSection = lazy(() => import("./components/sections/ExperienceSection"));
const ProjectsSection = lazy(() => import("./components/sections/ProjectsSection"));
const ContactSection = lazy(() => import("./components/sections/ContactSection"));

/**
 * App — Root layout component assembling all portfolio sections.
 * Uses a noise texture overlay and grid background for visual depth.
 */
function App() {
  return (
    <div className="relative min-h-screen bg-background noise">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40" />

      <NavBar />

      <main className="relative z-[1]">
        <Suspense fallback={<div className="loading-screen">Cargando portafolio...</div>}>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
