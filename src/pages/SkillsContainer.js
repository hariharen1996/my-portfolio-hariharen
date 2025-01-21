import React from "react";

const SkillsContainer = ({ title, techStach }) => {
  return (
    <>
      <h1 className="text-center underline text-2xl md:text-4xl text-black dark:text-white">{title}</h1>
      <div className="flex justify-center items-center pt-2">
        <div className="flex flex-wrap my-5 justify-center items-center mx-2 rounded-lg shadow-xl shadow-blue-500/70 dark:shadow-indigo-500/70 sm:w-6/12 xl:w-4/12 gap-2 bg-white dark:bg-[#171721] p-5 rounded-md ">
          {techStach.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-2 border border-[#b1b2b3] text-white p-2 rounded-md"
            >
              <p className={tech.color}>{tech.icons}</p>
              <h1 className="text-black dark:text-[#b1b2b3] text-sm">{tech.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsContainer;
