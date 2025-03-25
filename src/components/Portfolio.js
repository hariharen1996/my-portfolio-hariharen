import { useState } from "react";
import ProjectCard from "../pages/ProjectCard";
import { projects, tabBtns } from "../utils/projconstants";
import Loading from "./Loading";

const Portfolio = () => {
  const [activeTabs, setActiveTabs] = useState(tabBtns[0].text);

  const handleTabs = (text) => {
    setActiveTabs(text);
  };

  const filteredData = () => {
    const projectLists = projects.filter(
      (data) => data.category === activeTabs
    );
    if (activeTabs === "ALL") {
      return projects;
    } else {
      return projectLists;
    }
  };

  return (
    <div>
      <h1 className="text-4xl md:text-[4rem] font-bold text-gray-400 dark:text-gray-500 absolute top-12 xl:top-[35rem] left-1/2 xl:left-32 xl:-rotate-90 transform xl:origin-left opacity-30 whitespace-nowrap -translate-x-1/2 xl:translate-x-0">
        PORTFOLIO
      </h1>

      <div className="font-serif bg-[#f1f1f1] dark:bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <div className="mx-2 flex flex-wrap justify-center items-center gap-2">
          {tabBtns.map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleTabs(btn.text)}
              className={`${
                btn.text === activeTabs
                  ? "bg-[#000c66] text-white border border-[#4c8bf5]"
                  : "bg-[#0000c8] dark:bg-[#171717] dark:border-white text-white border border-transparent"
              } transition-all text-xs p-2 rounded-md cursor-pointer px-4 py-2 shadow-blue-500/70 dark:shadow-indigo-500/70 shadow-lg hover:scale-105`}
            >
              {btn.btnName}
            </button>
          ))}
        </div>

        {filteredData().length === 0 ? (
          <Loading />
        ) : (
          <div className="my-10 mx-2 flex justify-center items-start items-stretch flex-wrap gap-5">
            {filteredData().map((items) => (
              <ProjectCard items={items} key={items.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
