import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card hover:shadow-[#915eff]/20 transition-all">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div
              onClick={() => window.open(live_demo_link, "_blank")}
              className="bg-black-200/50 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#915eff] transition-colors"
            >
              <FaExternalLinkAlt className="text-white text-sm" />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black-200/50 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#915eff] transition-colors"
            >
              <FaGithub className="text-white text-lg" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-16 py-10 sm:py-20 relative z-0">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
