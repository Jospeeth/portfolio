import Home from "./home.js";  
import Footer from "./components/layout/Footer.jsx";

/**
 * App — Root layout component assembling all portfolio sections.
 * Uses a noise texture overlay and grid background for visual depth.
 */
function App() {
  return (
    <div className="relative min-h-screen bg-background noise">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40" />

      <main className="relative z-[1]">
        <Home />
        <Footer />
      </main>

    </div>
  );
}

export default App;
