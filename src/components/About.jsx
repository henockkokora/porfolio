import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[220px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] xs:py-3 py-2 xs:px-8 px-6 xs:min-h-[240px] min-h-[200px] sm:min-h-[280px] sm:py-5 sm:px-12 flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='xs:w-12 xs:h-12 w-10 h-10 sm:w-16 sm:h-16 object-contain'
        />

        <h3 className='text-white xs:text-[16px] text-[14px] sm:text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary xs:text-[13px] text-[12px] sm:text-[17px] max-w-3xl xs:leading-[24px] leading-[22px] sm:leading-[30px]'
      >
        Je suis <strong>Kokora Henoch</strong>, développeur d'application web et mobile basé à Yopougon, en Côte d'Ivoire.
        Mon profil couvre le full stack web, le mobile et la conception de systèmes d'information, avec une forte
        appétence pour la modélisation, l'intégration d'API et la gestion de projets.
        Je m'appuie sur des compétences en HTML, CSS, JavaScript, TailwindCSS, React, Node.js, Django, MySQL,
        PostgreSQL, Merise et UML, renforcées par des expériences en entreprise à la Mairie du Plateau,
        Talentium et le Groupe ECEFA.
        Je poursuis actuellement un Master 1 BIHAR à l'ESATIC.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
