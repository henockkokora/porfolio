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
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Prendre contact</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-6'>
          <p className='text-secondary text-[16px] leading-[28px]'>
            Vous pouvez me contacter directement à l'adresse ci-dessous.
          </p>

          <p className='text-white text-[20px] font-bold'>
            {OWNER_EMAIL}
          </p>

          <a
            href={`https://wa.me/${OWNER_PHONE}`}
            target='_blank'
            rel='noreferrer'
            className='text-green-400 text-[18px] font-semibold underline'
          >
            +225 0160346981 sur WhatsApp
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-black-100 rounded-2xl'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
