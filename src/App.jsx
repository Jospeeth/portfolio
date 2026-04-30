import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

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
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
