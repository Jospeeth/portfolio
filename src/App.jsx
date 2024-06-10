import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {

  return (
    <main className="flex min-h-screen flex-col ">
      <NavBar/>
      <div className="container mt-24 mx-auto px-12 py-4  ">
        <HeroSection />
      </div>
    </main>
  );
}

export default App;
