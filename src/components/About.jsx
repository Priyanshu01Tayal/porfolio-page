import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { aboutHighlights, personalInfo } from "../constants";
import Tilt from "react-parallax-tilt";
import { FaLaptopCode, FaCheckCircle } from "react-icons/fa";

const HighlightCard = ({ index, title, description, icon, gradient, border }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.02}
        transitionSpeed={400}
        className={`h-full bg-gradient-to-b ${gradient} bg-tertiary/70 backdrop-blur-sm p-6 rounded-2xl border ${border} shadow-card hover:shadow-[#915eff]/20 transition-all flex flex-col justify-between`}
      >
        <div>
          <div className="w-12 h-12 rounded-xl bg-primary/80 border border-white/10 flex items-center justify-center mb-4 shadow-inner">
            <img src={icon} alt={title} className="w-7 h-7 object-contain" />
          </div>
          <h3 className="text-white font-bold text-[18px] sm:text-[19px] mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#00cea8] font-medium">
          <FaCheckCircle className="text-[11px]" />
          <span>Core Competency</span>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] text-xs uppercase tracking-wider font-semibold mb-2">
          <FaLaptopCode />
          <span>Introduction</span>
        </div>
        <h2 className="text-white font-black text-[32px] sm:text-[46px] md:text-[54px] tracking-tight">
          About Me.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-6 text-secondary text-[16px] sm:text-[17px] max-w-4xl leading-[32px] bg-tertiary/40 border border-[#211e35] p-6 sm:p-8 rounded-2xl"
      >
        <p className="mb-4">
          {personalInfo.intro}
        </p>
        <div className="flex flex-wrap gap-2.5 pt-2">
          {[
            "React.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "Next.js",
            "HTML5 & CSS3",
            "REST APIs",
            "Node.js & Express.js",
            "DSA (200+ Solved)",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/80 border border-[#915eff]/40 text-[#dfd9ff]"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Highlights Grid */}
      <div className="mt-12 flex flex-wrap gap-6 justify-start">
        {aboutHighlights.map((highlight, index) => (
          <HighlightCard
            key={highlight.title}
            index={index}
            {...highlight}
          />
        ))}
      </div>
    </section>
  );
};

export default About;