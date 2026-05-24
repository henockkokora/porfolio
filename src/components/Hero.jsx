import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const getGreeting = () => {
  const currentHour = new Date().getHours();

  return currentHour >= 18 ? "Bonsoir" : "Bonjour";
};

const Hero = () => {
  const greeting = getGreeting();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const updateIsMobile = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden bg-primary'>
      {isMobile && (
        <div className='absolute inset-0 z-0'>
          <img
            src='/photo.png'
            alt='Kokora Henoch'
            className='h-full w-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-primary/72' />
          <div className='absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/25 to-primary/90' />
        </div>
      )}

      <div
        className={`absolute inset-0 top-[96px] pointer-events-none max-w-6xl mx-auto ${styles.paddingX} flex flex-row items-start xs:gap-3 gap-2 sm:gap-5 z-10`}
      >
        <div className='hidden sm:flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className={`max-w-3xl xs:pt-2 pt-0 sm:pt-2 ${isMobile ? "rounded-3xl bg-black/20 px-4 py-4 backdrop-blur-[2px]" : ""}`}>
          <h1
            className={`${styles.heroHeadText} text-white max-w-3xl ${isMobile ? "drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]" : ""}`}
          >
            {greeting}, je suis <span className='text-[#915EFF] block sm:inline'>Kokora Henoch</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-3 max-w-2xl ${isMobile ? "text-white font-semibold drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]" : "text-white-100"}`}
          >
            Développeur d'application web et mobile full stack, <br className='sm:block hidden' />
            orienté conception et modélisation de systèmes d'information
          </p>
        </div>
      </div>

      {!isMobile && <ComputersCanvas />}

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