import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { formations, professionalExperiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              style={{ width: experience.iconSize || '60%', height: experience.iconSize || '60%' }}
              className='object-contain'
            />
          ) : (
            <span style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}>
              {index + 1}
            </span>
          )}
        </div>
      }
    >
      <div>
        <h3 className='text-white xs:text-[18px] text-[16px] sm:text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary xs:text-[13px] text-[12px] sm:text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-3 sm:mt-5 list-disc ml-4 sm:ml-5 space-y-1 sm:space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 xs:text-[12px] text-[11px] sm:text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const TimelineSection = ({ title, items }) => (
  <div className='mt-8'>
    <h3 className='text-white xs:text-[26px] text-[22px] sm:text-[36px] md:text-[44px] font-extrabold text-left mb-3 sm:mb-5 tracking-tight'>
      {title}
    </h3>
    <VerticalTimeline>
      {items.map((experience, index) => (
        <ExperienceCard
          key={`${title}-${experience.title}-${index}`}
          index={index}
          experience={experience}
        />
      ))}
    </VerticalTimeline>
  </div>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} md:text-[72px] sm:text-[60px] xs:text-[48px] text-[36px]`}>
          Formation & Expérience professionnelle
        </h2>
      </motion.div>

      <div className='mt-8 flex flex-col'>
        <TimelineSection title='Expérience professionnelle' items={professionalExperiences} />
        <TimelineSection title='Formation' items={formations} />
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
