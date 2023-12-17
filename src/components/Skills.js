import React from "react";
import { backEnd, frontEnd, tools } from "../utils/skillsconstants";
import SkillsContainer from "../pages/SkillsContainer";

const Skills = () => {
  return (
    <div>
      <div className="font-serif bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <SkillsContainer title={"Front-end"} techStach={frontEnd} />
        <SkillsContainer title={"Back-end"} techStach={backEnd} />
        <SkillsContainer title={"Tech-Tools"} techStach={tools} />
      </div>
    </div>
  );
};

export default Skills;
