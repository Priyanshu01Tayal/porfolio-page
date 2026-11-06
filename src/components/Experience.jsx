import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#151030",
        color: "#fff",
        boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
        border: "1px solid #211e35",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #151030" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg || "#1d1836",
        color: "#fff",
        boxShadow: "0 0 0 4px #915eff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <FaBriefcase className="text-[#00cea8] text-lg" />
        </div>
      }
    >
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#915eff]/20 text-[#dfd9ff] text-xs font-semibold mb-1.5">
          <span>{experience.roleType}</span>
        </div>
        <h3 className="text-white text-[22px] font-bold leading-tight">
          {experience.title}
        </h3>
        <p className="text-[#00cea8] text-[15px] font-semibold flex items-center gap-1.5 mt-1" style={{ margin: 0 }}>
          <FaBuilding className="text-xs" />
          <span>{experience.company_name}</span>
        </p>
      </div>

      <ul className="mt-4 list-none space-y-2.5">
        {experience.responsibilities.map((resp, index) => (
          <li
            key={`exp-resp-${index}`}
            className="text-white-100 text-[13.5px] leading-relaxed flex items-start gap-2.5"
          >
            <FaCheckCircle className="text-[#915eff] text-xs mt-1 shrink-0" />
            <span>{resp}</span>
          </li>
        ))}
      </ul>

      {experience.technologies && (
        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-primary/70 text-secondary border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] text-xs uppercase tracking-wider font-semibold mb-2">
          <FaCalendarAlt />
          <span>Career Journey</span>
        </div>
        <h2 className="text-white font-black text-[32px] sm:text-[46px] md:text-[54px] tracking-tight">
          Work Experience.
        </h2>
        <p className="mt-3 text-secondary text-[16px] max-w-3xl leading-relaxed">
          Practical industry experience contributing to full-stack web development, API integration, database operations, and machine learning pipelines.
        </p>
      </motion.div>

      <div className="mt-14 flex flex-col">
        <VerticalTimeline lineColor="#211e35">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;