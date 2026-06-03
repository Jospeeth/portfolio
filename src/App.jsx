import NavBar from "./components/layout/NavBar";
import Home from "./home";  
import HeroSection from "./components/sections/HeroSection";

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
        <Home />
      </main>

    </div>
  );
}

export default App;
