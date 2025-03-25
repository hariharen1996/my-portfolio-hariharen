import React from "react";

const SkillsContainer = ({ title, techStach }) => {
  return (
    <>
      <h1 className="text-center underline text-2xl md:text-4xl text-black dark:text-white">{title}</h1>
      <div className="flex justify-center items-center pt-2">
        <div className="mx-2 my-2 rounded-lg shadow-xl shadow-blue-500/70 dark:shadow-indigo-500/70 sm:w-6/12 xl:w-4/12 gap-2 bg-[#0000c8] dark:bg-[#171721] p-5 rounded-md ">
          <div className="flex flex-wrap gap-3 justify-center items-center bg-[rgba(0,0,22,0.4)] p-5">
          {techStach.map((tech) => (
            <div
              key={tech.id}
              className="skill flex bg-[#000] shadow-lg hover:shadow-[0_8px_10px_rgba(0,2,68,0.8)] hover:bg-[rgba(0,0,0,0.9)] items-center gap-2 border border-[#b1b2b3] text-white p-2 rounded-md"
            >
              <p className={tech.color}>{tech.icons}</p>
              <h1 className="text-white text-sm">{tech.text}</h1>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsContainer;
