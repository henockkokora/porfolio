import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const OWNER_EMAIL = "henockkokora18@gmail.com";
const OWNER_PHONE = "2250160346981";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 xs:p-6 p-4 sm:p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Prendre contact</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-8 sm:mt-12 flex flex-col gap-4 sm:gap-6'>
          <p className='text-secondary xs:text-[14px] text-[13px] sm:text-[16px] leading-[24px] sm:leading-[28px]'>
            Vous pouvez me contacter directement à l'adresse ci-dessous.
          </p>

          <p className='text-white xs:text-[16px] text-[14px] sm:text-[20px] font-bold break-all'>
            {OWNER_EMAIL}
          </p>

          <a
            href={`https://wa.me/${OWNER_PHONE}`}
            target='_blank'
            rel='noreferrer'
            className='text-green-400 xs:text-[14px] text-[13px] sm:text-[18px] font-semibold underline'
          >
            +225 0160346981 sur WhatsApp
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] sm:h-[400px] h-[280px] bg-black-100 rounded-2xl'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
