import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const getGreeting = () => {
  const currentHour = new Date().getHours();

  return currentHour >= 18 ? "Bonsoir" : "Bonjour";
};

const Hero = () => {
  const greeting = getGreeting();

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[96px] pointer-events-none max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='max-w-3xl pt-2'>
          <h1 className={`${styles.heroHeadText} text-white max-w-3xl`}>
            {greeting}, je suis <span className='text-[#915EFF] block sm:inline'>Kokora Henoch</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100 max-w-2xl`}>
            Développeur d'application web et mobile full stack, <br className='sm:block hidden' />
            orienté conception et modélisation de systèmes d'information
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;