import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaCheck,
  FaCalendarAlt,
} from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  category,
  year,
  description,
  keyContributions,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full lg:w-[calc(33.333%-18px)] sm:w-[calc(50%-14px)] flex"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.01}
        transitionSpeed={400}
        className="bg-tertiary/80 border border-[#211e35] hover:border-[#915eff]/40 p-5 rounded-3xl w-full shadow-card hover:shadow-2xl hover:shadow-[#915eff]/15 transition-all flex flex-col justify-between"
      >
        <div>
          {/* Project Preview Image */}
          <div className="relative w-full h-[220px] rounded-2xl overflow-hidden group">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80" />

            {/* Quick Action Overlay */}
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
              {live_demo_link && (
                <a
                  href={live_demo_link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary/80 backdrop-blur-md border border-white/10 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#00cea8] hover:text-primary transition-all text-white shadow-md"
                  title="Live Demo"
                  aria-label={`Live Demo of ${name}`}
                >
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
              {source_code_link && (
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary/80 backdrop-blur-md border border-white/10 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#915eff] transition-all text-white shadow-md"
                  title="Source Code"
                  aria-label={`Source code of ${name}`}
                >
                  <FaGithub className="text-sm" />
                </a>
              )}
            </div>

            {/* Category / Year Badge on Image */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-black-200/80 backdrop-blur-md border border-white/10 text-[#00cea8]">
                {category}
              </span>
              {year && (
                <span className="text-[11px] font-medium px-2 py-1 rounded-lg bg-black-200/80 backdrop-blur-md border border-white/10 text-secondary flex items-center gap-1">
                  <FaCalendarAlt className="text-[9px]" /> {year}
                </span>
              )}
            </div>
          </div>

          {/* Project Title & Summary */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[20px] leading-snug">
              {name}
            </h3>
            <p className="mt-2.5 text-secondary text-[13.5px] leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Key Contributions Section */}
          {keyContributions && keyContributions.length > 0 && (
            <div className="mt-4 pt-3 border-t border-white/5">
              <p className="text-[11px] font-bold text-[#dfd9ff] uppercase tracking-wider mb-2">
                Key Highlights:
              </p>
              <ul className="space-y-1.5">
                {keyContributions.slice(0, 3).map((contrib, cIdx) => (
                  <li
                    key={cIdx}
                    className="text-[12.5px] text-secondary flex items-start gap-2 leading-tight"
                  >
                    <FaCheck className="text-[#915eff] text-[10px] mt-1 shrink-0" />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer: Tags & Buttons */}
        <div className="mt-5 pt-3 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-primary/60 text-[#dfd9ff] border border-white/5"
              >
                #{tag.name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {live_demo_link ? (
              <a
                href={live_demo_link}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 bg-[#00cea8] hover:bg-[#00cea8]/90 text-primary py-2 px-3 rounded-xl text-xs font-bold transition-all shadow-md shadow-[#00cea8]/20"
              >
                <span>Live Demo</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            ) : (
              <span className="flex-1 inline-flex justify-center items-center py-2 px-3 rounded-xl text-xs font-medium bg-primary/40 text-secondary/60 border border-white/5 cursor-default">
                Full-Stack Architecture
              </span>
            )}

            <a
              href={source_code_link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-primary/80 hover:bg-[#915eff] hover:text-white border border-[#211e35] py-2 px-3.5 rounded-xl text-xs font-bold text-white transition-all"
            >
              <FaGithub className="text-sm" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] text-xs uppercase tracking-wider font-semibold mb-2">
          <FaCode />
          <span>Real-World Engineering</span>
        </div>
        <h2 className="text-white font-black text-[32px] sm:text-[46px] md:text-[54px] tracking-tight">
          Featured Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-3 text-secondary text-[16px] max-w-3xl leading-relaxed"
        >
          Selected projects demonstrating end-to-end frontend craftsmanship, reusable component design, REST API integration, and full-stack connectivity with backend and machine learning services.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-6 justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={project.name || index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
