import React from "react";
import { backEnd, frontEnd, tools } from "../../utils/skillsconstants";
import SkillsContainer from "./SkillsContainer";

const Skills = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-[#f8f9ff] to-[#e8eeff] dark:from-[#0f0f2d] dark:to-[#171730] w-full min-h-screen text-gray-800 dark:text-gray-200 pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <h1 className="text-6xl lg:text-[7rem] font-bold text-gray-400 dark:text-gray-500 absolute top-10 lg:top-[30rem] left-1/2 lg:left-32 lg:-rotate-90 transform lg:origin-left opacity-30 whitespace-nowrap -translate-x-1/2 lg:translate-x-0">
        SKILLS
      </h1>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0000c8] dark:text-blue-400">
            Technical Expertise
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <SkillsContainer
            title={"Frontend Development"}
            techStack={frontEnd}
            gradient="from-blue-500 to-cyan-500"
          />
          <SkillsContainer
            title={"Backend Development"}
            techStack={backEnd}
            gradient="from-purple-500 to-pink-500"
          />
          <SkillsContainer
            title={"Tools & Technologies"}
            techStack={tools}
            gradient="from-green-500 to-teal-500"
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Continuously learning and expanding my skill set
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
