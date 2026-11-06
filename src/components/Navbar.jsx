import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../constants";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-4 sm:px-12 w-full flex items-center py-4 fixed top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-md border-b border-[#211e35] shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#915eff] to-[#00cea8] flex items-center justify-center font-black text-white text-lg shadow-md shadow-[#915eff]/30 group-hover:scale-105 transition-transform">
            PT
          </div>
          <div className="flex flex-col">
            <p className="text-white text-[18px] sm:text-[20px] font-bold cursor-pointer flex items-center gap-1.5 leading-tight">
              Priyanshu Tayal
            </p>
            <span className="text-[12px] text-[#915eff] font-medium tracking-wide">
              Frontend Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="list-none flex flex-row gap-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white font-semibold" : "text-secondary"
                } hover:text-[#915eff] text-[15px] font-medium cursor-pointer transition-colors duration-200`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 pl-4 border-l border-[#211e35]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-white text-lg transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-[#915eff] text-lg transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalInfo.resumePath}
              download="Priyanshu_Tayal_Frontend_Developer_Resume.pdf"
              className="flex items-center gap-2 bg-gradient-to-r from-[#915eff] to-[#7038e8] hover:from-[#7e4ce6] hover:to-[#5d2bd4] text-white text-[13px] font-semibold py-2 px-4 rounded-xl shadow-md shadow-[#915eff]/30 hover:shadow-lg transition-all"
            >
              <FaFileDownload className="text-xs" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Navigation */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href={personalInfo.resumePath}
            download="Priyanshu_Tayal_Frontend_Developer_Resume.pdf"
            className="flex items-center gap-1.5 bg-[#915eff] text-white text-[12px] font-semibold py-1.5 px-3 rounded-lg shadow-sm"
          >
            <FaFileDownload className="text-xs" />
            <span>CV</span>
          </a>

          <div
            className="w-[28px] h-[28px] cursor-pointer flex flex-col justify-around items-center z-50 p-1"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle navigation menu"
          >
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                toggle ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                toggle ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                toggle ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#100d25]/95 backdrop-blur-xl border border-[#211e35] shadow-2xl absolute top-16 right-4 min-w-[220px] z-40 rounded-2xl flex-col gap-4 animate-in fade-in zoom-in-95 duration-200`}
          >
            <ul className="list-none flex flex-col gap-3">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[15px] font-medium py-1 transition-colors ${
                    active === nav.title
                      ? "text-[#915eff] font-bold"
                      : "text-secondary hover:text-white"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="block">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-[#211e35] flex items-center justify-between">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:text-white flex items-center gap-2 text-sm"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:text-[#915eff] flex items-center gap-2 text-sm"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;