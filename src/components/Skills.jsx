import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { skillCategories } from "../constants";
import { FaStar, FaLayerGroup } from "react-icons/fa";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const frontendCategory = skillCategories.find((c) => c.isPrimary);
  const otherCategories = skillCategories.filter((c) => !c.isPrimary);

  const displayedCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.title.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] text-xs uppercase tracking-wider font-semibold mb-2">
          <FaLayerGroup />
          <span>Technical Expertise</span>
        </div>
        <h2 className="text-white font-black text-[32px] sm:text-[46px] md:text-[54px] tracking-tight">
          Skills & Tech Stack.
        </h2>
        <p className="mt-3 text-secondary text-[16px] max-w-3xl leading-relaxed">
          Comprehensive technical toolkit organized by engineering domain, with special emphasis on modern frontend frameworks, responsive architectures, and full-stack API integrations.
        </p>
      </motion.div>

      {/* Category Tabs for Quick Navigation */}
      <div className="mt-8 flex flex-wrap gap-2.5">
        <button
          onClick={() => setActiveTab("all")}
          className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === "all"
              ? "bg-[#915eff] text-white shadow-md shadow-[#915eff]/30"
              : "bg-tertiary text-secondary hover:text-white border border-[#211e35]"
          }`}
        >
          All Domains
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(cat.title.split(" ")[0])}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === cat.title.split(" ")[0]
                ? "bg-[#915eff] text-white shadow-md shadow-[#915eff]/30"
                : cat.isPrimary
                ? "bg-tertiary/80 text-[#00cea8] border border-[#00cea8]/40 hover:bg-[#00cea8]/10"
                : "bg-tertiary text-secondary hover:text-white border border-[#211e35]"
            }`}
          >
            {cat.isPrimary && <FaStar className="text-xs text-yellow-400" />}
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Featured Primary Frontend Spotlight */}
      {frontendCategory && (activeTab === "all" || activeTab === "Frontend") && (
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#915eff]/15 via-tertiary/90 to-[#00cea8]/10 border-2 border-[#915eff]/40 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#915eff]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-[#915eff]/20 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#915eff] text-white text-[11px] font-black uppercase tracking-wider mb-2">
                <FaStar className="text-yellow-300" />
                <span>Primary Focus • Frontend Engineering</span>
              </div>
              <h3 className="text-white text-2xl sm:text-3xl font-black">
                {frontendCategory.title}
              </h3>
              <p className="text-secondary text-sm mt-1">
                {frontendCategory.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 relative z-10">
            {frontendCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all group ${
                  skill.highlight
                    ? "bg-primary/80 border border-[#915eff]/50 hover:border-[#00cea8] hover:shadow-lg hover:shadow-[#915eff]/20 hover:-translate-y-1"
                    : "bg-primary/50 border border-white/5 hover:border-white/20 hover:-translate-y-1"
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-tertiary flex items-center justify-center p-2.5 mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <p className="text-white font-bold text-sm leading-tight">
                  {skill.name}
                </p>
                {skill.highlight && (
                  <span className="mt-1.5 text-[10px] font-semibold text-[#00cea8] uppercase tracking-wider">
                    Core Speciality
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Other Skill Categories Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {(activeTab === "all"
          ? otherCategories
          : displayedCategories.filter((c) => !c.isPrimary)
        ).map((category, catIdx) => (
          <motion.div
            variants={fadeIn("up", "spring", catIdx * 0.15, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            key={category.title}
            className="bg-tertiary/60 border border-[#211e35] hover:border-[#915eff]/40 p-6 rounded-2xl shadow-card transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white text-xl font-bold">{category.title}</h3>
              <span className="text-xs text-secondary font-medium px-2.5 py-1 rounded-md bg-primary/60 border border-white/5">
                {category.skills.length} Skills
              </span>
            </div>
            <p className="text-secondary text-xs sm:text-sm mb-5 leading-relaxed">
              {category.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-primary/60 border border-white/5 hover:border-[#915eff]/30 p-3 rounded-xl flex items-center gap-2.5 transition-colors"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 object-contain shrink-0"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <span className="text-white-100 text-xs font-semibold truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;