import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({ achievement }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={achievement.date}
      iconStyle={{ background: achievement.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={achievement.icon}
            alt={achievement.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{achievement.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {achievement.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {achievement.points.map((point, index) => (
          <li
            key={`achievement-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="max-w-7xl mx-auto px-6 sm:px-16 py-10 sm:py-20 relative z-0">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Milestones & Extracurriculars</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Achievements.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard key={`achievement-${index}`} achievement={achievement} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Achievements;
