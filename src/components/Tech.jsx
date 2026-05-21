import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center xs:gap-4 gap-3 sm:gap-10'>
      {technologies.map((technology) => (
        <div
          className='flex flex-col items-center gap-2'
          key={technology.name}
        >
          <div className='xs:w-20 xs:h-20 w-16 h-16 sm:w-28 sm:h-28'>
            <BallCanvas icon={technology.icon} />
          </div>
          <p className='text-secondary xs:text-[10px] text-[9px] sm:text-[13px] font-medium tracking-wide text-center'>
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
