import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import EarthCanvas from "./canvas/Earth";
import { personalInfo } from "../constants";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 lg:left-1/2 opacity-30 lg:opacity-100">
         <EarthCanvas />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 flex flex-col-reverse lg:flex-row items-center gap-10 mt-16 w-full">
        
        <div className="flex-1">
          <div className="flex flex-row items-center gap-5 mb-4">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 h-32 sm:h-40 violet-gradient" />
            </div>
            <div>
              <h1 className="font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]">
                Hi, I'm <span className="text-[#915eff]">{personalInfo.name.split(" ")[0]}</span>
              </h1>
              <p className="text-[#dfd9ff] font-medium lg:text-[28px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
                <TypeAnimation
                  sequence={[
                    "Computer Science Student",
                    1000,
                    "AI/ML Enthusiast",
                    1000,
                    "Web Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-6 text-secondary text-[14px] sm:text-[16px] bg-tertiary/60 backdrop-blur-sm p-5 rounded-2xl w-fit shadow-card border border-[#211e35]">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#915eff]" /> <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#915eff]" /> <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#915eff]" /> <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-[#915eff]" /> <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn Profile</a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="bg-[#915eff] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#7e4ce6] transition-colors">
              View Projects
            </a>
            <a href="#contact" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#1f1847] border border-secondary transition-colors">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center mb-10 lg:mb-0">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-48 h-48 sm:w-80 sm:h-80 rounded-full p-1"
            style={{
               boxShadow: "0 0 40px 15px rgba(145, 94, 255, 0.4)",
               background: "linear-gradient(45deg, #915eff, #00cea8)"
            }}
          >
            <img src={profileImg} alt="Priyanshu Tayal" className="w-full h-full object-cover rounded-full border-4 border-primary" />
          </motion.div>
        </div>

      </div>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:border-[#915eff] transition-colors">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
