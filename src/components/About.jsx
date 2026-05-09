import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 sm:px-16 py-10 sm:py-20 relative z-0">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Priyanshu Tayal, a passionate B.Tech Computer Science student at ABES Institute of Technology. I am an active learner focusing on Data Structures and Algorithms (DSA), AI/ML, and Web Development. As a fast learner and an adaptable individual, I enjoy solving real-world problems through code and creating interactive, scalable, and user-friendly digital experiences.
      </motion.p>
    </section>
  );
};

export default About;
