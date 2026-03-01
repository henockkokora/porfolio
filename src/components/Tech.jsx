import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='flex flex-col items-center gap-2'
          key={technology.name}
        >
          <div className='w-28 h-28'>
            <BallCanvas icon={technology.icon} />
          </div>
          <p className='text-secondary text-[13px] font-medium tracking-wide text-center'>
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
