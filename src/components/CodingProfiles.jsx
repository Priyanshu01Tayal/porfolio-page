import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { codingProfiles } from "../constants";
import { FaLaptopCode, FaExternalLinkAlt, FaFire, FaCheckDouble } from "react-icons/fa";

const CodingProfiles = () => {
  return (
    <section id="coding" className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] text-xs uppercase tracking-wider font-semibold mb-2">
          <FaLaptopCode />
          <span>Competitive Coding</span>
        </div>
        <h2 className="text-white font-black text-[32px] sm:text-[46px] md:text-[54px] tracking-tight">
          Coding Profiles & DSA.
        </h2>
        <p className="mt-3 text-secondary text-[16px] max-w-3xl leading-relaxed">
          Demonstrated analytical thinking and data structures proficiency across premier competitive programming platforms.
        </p>
      </motion.div>

      {/* Prominent Stat Banner */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#915eff]/20 via-tertiary to-[#00cea8]/15 border border-[#915eff]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-orange-500/30 shrink-0">
            <FaFire />
          </div>
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-black">
              200+ Problems Solved
            </h3>
            <p className="text-secondary text-sm">
              Consistently practicing Data Structures & Algorithms across LeetCode & CodeChef
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-xl border border-white/10 shrink-0">
          <FaCheckDouble className="text-[#00cea8] text-sm" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Verified Milestone
          </span>
        </div>
      </motion.div>

      {/* Profiles Cards Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {codingProfiles.map((profile, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={profile.platform}
            className="bg-tertiary/70 border border-[#211e35] hover:border-[#915eff]/50 p-6 rounded-2xl shadow-card hover:shadow-xl hover:shadow-[#915eff]/10 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/80 p-2 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={profile.icon}
                    alt={profile.platform}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary text-[#00cea8] border border-white/5">
                  {profile.badge}
                </span>
              </div>

              <h3 className="text-white text-lg font-bold">
                {profile.platform}
              </h3>
              <p className="text-[#915eff] text-sm font-semibold mt-0.5">
                {profile.stats}
              </p>
              <p className="text-secondary text-xs mt-2 leading-relaxed">
                {profile.detail}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5">
              <a
                href={profile.link}
                target={profile.link !== "#" ? "_blank" : "_self"}
                rel="noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 bg-primary/70 hover:bg-[#915eff] hover:text-white text-secondary py-2 px-3 rounded-xl text-xs font-bold transition-all border border-white/5"
              >
                <span>Visit {profile.platform}</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;