import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import CodingProfiles from "./components/CodingProfiles";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simple mock loading time to ensure smooth entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-primary">
        <div className="w-20 h-20 border-4 border-t-[#915eff] border-secondary rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-xl font-medium tracking-widest animate-pulse">LOADING...</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <CodingProfiles />
        <Projects />
        <Achievements />
        <Certifications />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <footer className="w-full text-center py-6 text-secondary text-sm border-t border-[#211e35] mt-10">
          &copy; {new Date().getFullYear()} Priyanshu Tayal. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
