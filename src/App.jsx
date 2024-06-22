import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar"; 
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";

function App() {

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <NavBar/>
      <div className="container mt-24 px-12 py-4  ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}

export default App;