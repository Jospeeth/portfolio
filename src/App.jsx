import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar"; 
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
function App() {

  return (
    <main className="flex min-h-full flex-col bg-background min-w-full">
      <NavBar/>
      <div className="container mt-24 px-12 py-4 ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
