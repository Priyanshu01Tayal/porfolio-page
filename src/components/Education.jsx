import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";
import { FaGraduationCap, FaUniversity, FaAward, FaBookReader } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] text-xs uppercase tracking-wider font-semibold mb-2">
          <FaGraduationCap />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-white font-black text-[32px] sm:text-[46px] md:text-[54px] tracking-tight">
          Education.
        </h2>
      </motion.div>

      <div className="mt-10 max-w-4xl">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="bg-tertiary/70 border border-[#211e35] hover:border-[#915eff]/40 p-6 sm:p-8 rounded-3xl shadow-card relative overflow-hidden transition-all"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#915eff]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#915eff]/20 border border-[#915eff]/30 flex items-center justify-center text-[#915eff] shrink-0">
                <FaUniversity className="text-2xl" />
              </div>
              <div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#00cea8]/15 text-[#00cea8] border border-[#00cea8]/30 inline-block mb-1">
                  {education.status}
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                  {education.institution}
                </h3>
                <p className="text-secondary text-sm sm:text-base font-medium mt-0.5">
                  {education.degree}
                </p>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="text-secondary text-xs sm:text-sm font-semibold bg-primary/80 px-3 py-1 rounded-xl border border-white/5 inline-block">
                {education.duration}
              </span>
              <div className="mt-2 flex items-center sm:justify-end gap-1.5 text-white font-bold text-sm">
                <FaAward className="text-yellow-400" />
                <span>CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 text-white font-semibold text-sm mb-3">
              <FaBookReader className="text-[#915eff]" />
              <span>Relevant Coursework:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="bg-primary/80 border border-white/5 text-secondary text-xs font-medium px-3 py-1 rounded-xl hover:text-white hover:border-[#915eff]/40 transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;