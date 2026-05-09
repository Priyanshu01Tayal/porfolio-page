import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 sm:px-16 py-10 sm:py-20 relative z-0">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">What I've learned</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">My Skills.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10">
        {skills.map((skill, index) => (
          <motion.div
            variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={skill.name}
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
          >
            <div className="w-full h-full p-[1px] rounded-[20px] shadow-card green-pink-gradient">
              <div className="bg-tertiary rounded-[20px] w-full h-full flex justify-center items-center flex-col p-4 hover:bg-black-100 transition-colors">
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
                <h3 className="text-white text-[14px] sm:text-[16px] font-bold text-center mt-2">
                  {skill.name}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
