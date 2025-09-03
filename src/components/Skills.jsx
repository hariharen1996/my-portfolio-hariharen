import React from "react";
import { backEnd, frontEnd, tools } from "../utils/skillsconstants";
import SkillsContainer from "../pages/SkillsContainer";

const Skills = () => {
  return (
    <div>
      <h1 className="text-6xl lg:text-[7rem] font-bold text-gray-400 dark:text-gray-500 absolute top-10 lg:top-[30rem] left-1/2 lg:left-32 lg:-rotate-90 transform lg:origin-left opacity-30 whitespace-nowrap -translate-x-1/2 lg:translate-x-0">
        SKILLS
      </h1>

      <div className="font-serif bg-[#f1f1f1] dark:bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <SkillsContainer title={"Front-end"} techStach={frontEnd} />
        <SkillsContainer title={"Back-end"} techStach={backEnd} />
        <SkillsContainer title={"Tech-Tools"} techStach={tools} />
      </div>
    </div>
  );
};

export default Skills;
