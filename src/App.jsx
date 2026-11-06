import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import CodingProfiles from "./components/CodingProfiles";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";
import { personalInfo } from "./constants";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth initial load timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center bg-primary">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-[#211e35] border-t-[#915eff] rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-xs text-[#00cea8]">
            PT
          </div>
        </div>
        <p className="mt-5 text-white text-sm font-semibold tracking-widest animate-pulse">
          LOADING PORTFOLIO...
        </p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden text-white selection:bg-[#915eff] selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <CodingProfiles />
        <Achievements />
        <Certifications />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        {/* Professional Footer */}
        <footer className="w-full py-10 px-6 border-t border-[#211e35] bg-[#090325]/80 backdrop-blur-md relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-white font-bold text-lg">
                Priyanshu Tayal
              </p>
              <p className="text-secondary text-xs mt-0.5">
                Frontend Developer | React.js | JavaScript | TypeScript
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-tertiary border border-white/5 flex items-center justify-center text-secondary hover:text-white hover:border-[#915eff] transition-all"
                title="GitHub"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-tertiary border border-white/5 flex items-center justify-center text-secondary hover:text-[#915eff] hover:border-[#915eff] transition-all"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl bg-tertiary border border-white/5 flex items-center justify-center text-secondary hover:text-[#00cea8] hover:border-[#00cea8] transition-all"
                title="Email"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href={personalInfo.resumePath}
                download="Priyanshu_Tayal_Frontend_Developer_Resume.pdf"
                className="flex items-center gap-1.5 bg-[#915eff]/20 border border-[#915eff]/40 hover:bg-[#915eff] text-[#dfd9ff] hover:text-white text-xs font-semibold py-2 px-3.5 rounded-xl transition-all"
              >
                <FaFileDownload className="text-xs" />
                <span>Download CV</span>
              </a>
            </div>

            <div className="text-secondary text-xs text-center sm:text-right">
              <p>&copy; {new Date().getFullYear()} Priyanshu Tayal. All rights reserved.</p>
              <p className="mt-0.5 text-secondary/60">
                Crafted with React.js, Tailwind CSS & Three.js
              </p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;