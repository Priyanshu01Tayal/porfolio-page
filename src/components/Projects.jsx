import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card"
    >
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

        <div className="absolute inset-0 flex justify-end m-3 gap-2">
          <div
            onClick={() => window.open(live_demo_link, "_blank")}
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaExternalLinkAlt className="text-white text-sm" />
          </div>

          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaGithub className="text-white text-lg" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
      >
        <p className="text-secondary uppercase tracking-wider">My work</p>
        <h2 className="text-white font-black text-5xl">Projects.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;