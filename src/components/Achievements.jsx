import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { achievements } from "../constants";
import { FaTrophy, FaCheckCircle } from "react-icons/fa";

const AchievementCard = ({ achievement }) => {
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
      date={achievement.date}
      iconStyle={{
        background: achievement.iconBg || "#383E56",
        boxShadow: "0 0 0 4px #00cea8, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={achievement.icon}
            alt={achievement.company_name}
            className="w-[55%] h-[55%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] font-bold leading-tight">
          {achievement.title}
        </h3>
        <p className="text-[#00cea8] text-[14px] font-semibold mt-1" style={{ margin: 0 }}>
          {achievement.company_name}
        </p>
      </div>

      <ul className="mt-4 list-none space-y-2">
        {achievement.points.map((point, index) => (
          <li
            key={`achievement-point-${index}`}
            className="text-white-100 text-[13.5px] flex items-start gap-2.5 leading-relaxed"
          >
            <FaCheckCircle className="text-[#915eff] text-xs mt-1 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-24 relative z-0">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] text-xs uppercase tracking-wider font-semibold mb-2">
          <FaTrophy />
          <span>Honors & Extracurriculars</span>
        </div>
        <h2 className="text-white font-black text-[32px] sm:text-[46px] md:text-[54px] tracking-tight">
          Achievements.
        </h2>
        <p className="mt-3 text-secondary text-[16px] max-w-3xl leading-relaxed">
          Recognitions, competitive hackathons, and community contributions reflecting dedication and teamwork.
        </p>
      </motion.div>

      <div className="mt-14 flex flex-col">
        <VerticalTimeline lineColor="#211e35">
          {achievements.map((achievement, index) => (
            <AchievementCard key={`achievement-${index}`} achievement={achievement} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Achievements;