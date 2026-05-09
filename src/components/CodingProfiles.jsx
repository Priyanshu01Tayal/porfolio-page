import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { codingProfiles } from "../constants";

const CodingProfiles = () => {
  return (
    <section id="coding" className="max-w-7xl mx-auto px-6 sm:px-16 py-10 sm:py-20 relative z-0">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Problem Solving</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Coding Profiles.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7">
        {codingProfiles.map((profile, index) => (
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={profile.platform}
            className="w-full sm:w-[350px] violet-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => window.open(profile.link, "_blank")}
          >
            <div className="bg-tertiary rounded-[20px] py-8 px-12 min-h-[220px] flex justify-center items-center flex-col">
              <img src={profile.icon} alt={profile.platform} className="w-20 h-20 object-contain mb-4" />
              <h3 className="text-white text-[24px] font-bold text-center">
                {profile.platform}
              </h3>
              <p className="text-secondary text-[16px] text-center mt-2">
                {profile.stats}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
