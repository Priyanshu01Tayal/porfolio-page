import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 sm:px-16 py-10 sm:py-20 relative z-0">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My Credentials</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Certifications.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7">
        {certifications.map((cert, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={cert.name}
            className="w-full sm:w-[300px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] min-h-[220px] flex justify-start items-center flex-col p-6">
              <img src={cert.icon} alt={cert.name} className="w-16 h-16 object-contain mb-4" />
              <h3 className="text-white text-[18px] font-bold text-center">
                {cert.name}
              </h3>
              <p className="text-secondary text-[14px] text-center mt-2 leading-relaxed">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
