import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";
import { FaCertificate, FaExternalLinkAlt, FaAward } from "react-icons/fa";

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] text-xs uppercase tracking-wider font-semibold mb-2">
          <FaCertificate />
          <span>Professional Verification</span>
        </div>
        <h2 className="text-white font-black text-[32px] sm:text-[46px] md:text-[54px] tracking-tight">
          Certifications.
        </h2>
        <p className="mt-3 text-secondary text-[16px] max-w-3xl leading-relaxed">
          Industry and academic credentials validating competence in modern web development, algorithms, data engineering, cloud, and machine learning.
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={cert.name}
            className={`bg-tertiary/70 border border-[#211e35] hover:border-[#915eff]/50 p-6 rounded-2xl shadow-card flex flex-col justify-between transition-all group ${
              cert.link ? "cursor-pointer hover:shadow-xl hover:shadow-[#915eff]/10 hover:scale-[1.02]" : ""
            }`}
            onClick={() => cert.link && window.open(cert.link, "_blank")}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/80 border border-white/5 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform">
                  <img
                    src={cert.icon}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/70 text-[#dfd9ff] border border-white/5 flex items-center gap-1">
                  <FaAward className="text-yellow-400 text-[10px]" />
                  <span>{cert.issuer}</span>
                </span>
              </div>

              <h3 className="text-white text-[18px] font-bold leading-snug">
                {cert.name}
              </h3>
              <p className="text-secondary text-xs sm:text-[13px] mt-2.5 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
              {cert.link ? (
                <span className="text-xs font-semibold text-[#00cea8] flex items-center gap-1.5 group-hover:underline">
                  <span>View Certificate</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </span>
              ) : (
                <span className="text-xs text-secondary/60 font-medium">
                  Verified Credential
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
