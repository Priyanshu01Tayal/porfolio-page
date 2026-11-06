import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import EarthCanvas from "./canvas/Earth";
import { personalInfo } from "../constants";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col justify-center pt-24 pb-16 lg:py-0 overflow-hidden">
      {/* 3D Earth Background Canvas */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 lg:left-1/2 opacity-25 lg:opacity-85 pointer-events-none lg:pointer-events-auto">
        <EarthCanvas />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col-reverse lg:flex-row items-center gap-12 w-full">
        {/* Left Content Column */}
        <div className="flex-1 max-w-2xl">
          <div className="flex flex-row items-start gap-4 mb-3">
            <div className="flex flex-col justify-center items-center mt-2">
              <div className="w-5 h-5 rounded-full bg-[#915eff] shadow-lg shadow-[#915eff]/50" />
              <div className="w-1 h-36 sm:h-44 violet-gradient" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] text-xs sm:text-sm font-semibold mb-2">
                <FaCode className="text-xs" />
                <span>Frontend Developer Portfolio</span>
              </div>

              <h1 className="font-black text-white text-[34px] xs:text-[44px] sm:text-[54px] lg:text-[62px] leading-tight tracking-tight">
                Hi, I'm <span className="text-[#915eff]">{personalInfo.name}</span>
              </h1>

              <div className="text-white-100 font-bold text-[20px] xs:text-[24px] sm:text-[30px] lg:text-[34px] mt-1 flex flex-wrap items-center gap-2">
                <span className="text-white">Frontend Developer</span>
              </div>

              <div className="text-[#00cea8] font-semibold text-[16px] sm:text-[20px] tracking-wide mt-1">
                <TypeAnimation
                  sequence={[
                    "React.js | JavaScript | TypeScript",
                    2000,
                    "Responsive & Interactive Web Apps",
                    2000,
                    "Reusable Component Architectures",
                    2000,
                    "REST API & Full-Stack Integration",
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                />
              </div>

              <p className="mt-3 text-secondary text-[15px] sm:text-[16px] leading-relaxed">
                Final-year B.Tech Computer Science student crafting responsive, interactive, and user-friendly web applications with clean frontend architecture, intuitive UI/UX, and robust API integrations.
              </p>
            </div>
          </div>

          {/* Contact Details Quick Card */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-secondary text-[13px] sm:text-[14px] bg-tertiary/70 backdrop-blur-md p-4 rounded-2xl shadow-card border border-[#211e35]">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2.5 hover:text-white transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-[#915eff]/20 flex items-center justify-center text-[#915eff] shrink-0">
                <FaEnvelope className="text-xs" />
              </div>
              <span className="truncate">{personalInfo.email}</span>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2.5 hover:text-white transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-[#915eff]/20 flex items-center justify-center text-[#915eff] shrink-0">
                <FaPhoneAlt className="text-xs" />
              </div>
              <span>{personalInfo.phone}</span>
            </a>

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#915eff]/20 flex items-center justify-center text-[#915eff] shrink-0">
                <FaMapMarkerAlt className="text-xs" />
              </div>
              <span>{personalInfo.location}</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#915eff] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#915eff]/20 flex items-center justify-center text-[#915eff] shrink-0">
                  <FaLinkedin className="text-xs" />
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#915eff]/20 flex items-center justify-center text-[#915eff] shrink-0">
                  <FaGithub className="text-xs" />
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#915eff] to-[#7038e8] py-3 px-6 text-white text-[15px] font-bold shadow-lg shadow-[#915eff]/30 rounded-xl hover:from-[#7e4ce6] hover:to-[#5d2bd4] hover:shadow-xl transition-all"
            >
              <span>View Projects</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Priyanshu_Tayal_Frontend_Developer_Resume.pdf"
              className="inline-flex items-center gap-2 bg-[#00cea8]/15 border border-[#00cea8]/40 hover:bg-[#00cea8]/25 text-[#00cea8] py-3 px-6 text-[15px] font-bold rounded-xl transition-all shadow-md shadow-[#00cea8]/10"
            >
              <FaFileDownload className="text-sm" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="bg-tertiary/90 py-3 px-6 text-white text-[15px] font-bold shadow-md rounded-xl hover:bg-[#1f1847] border border-secondary/30 hover:border-secondary transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Avatar Column */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#915eff] via-[#00cea8] to-[#915eff] rounded-full blur-2xl opacity-40 animate-pulse" />

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5"
              style={{
                background: "linear-gradient(135deg, #915eff, #00cea8, #bf61ff)",
                boxShadow: "0 0 50px 15px rgba(145, 94, 255, 0.35)",
              }}
            >
              <img
                src={profileImg}
                alt="Priyanshu Tayal"
                className="w-full h-full object-cover rounded-full border-4 border-primary"
              />
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-4 sm:left-0 bg-primary/90 backdrop-blur-md border border-[#915eff]/40 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 z-20"
            >
              <div className="w-8 h-8 rounded-lg bg-[#915eff] flex items-center justify-center text-white text-xs font-black">
                React
              </div>
              <div className="text-left">
                <p className="text-[11px] text-secondary font-medium">Specialization</p>
                <p className="text-[13px] text-white font-bold leading-none">Frontend Dev</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden sm:flex absolute bottom-5 w-full justify-center items-center z-10 pointer-events-none">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[30px] h-[52px] rounded-3xl border-2 border-secondary/60 flex justify-center items-start p-1.5 hover:border-[#915eff] transition-colors">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2.5 h-2.5 rounded-full bg-[#915eff] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;