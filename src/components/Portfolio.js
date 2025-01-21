import { useState } from "react";
import ProjectCard from "../pages/ProjectCard";
import { projects, tabBtns } from "../utils/projconstants";
import Loading from "./Loading";
import { FaExternalLinkAlt } from "react-icons/fa";


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
      <div className="font-serif bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <div className="mx-2 flex flex-wrap justify-center items-center gap-2">
          {tabBtns.map((btn) => (
            <div key={btn.id}>
              <button
                onClick={() => handleTabs(btn.text)}
                className={`${
                  btn.text === activeTabs
                    ? "border border-white transition-all bg-cyan-900 text-white text-xs p-2 rounded-md"
                    : "bg-cyan-900 border border-cyan-700 transition-all text-xs p-2 rounded-md"
                } cursor-pointer px-3 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 text-sm`}
              >
                {btn.btnName}
              </button>
            </div>
          ))}
        </div>
        {filteredData().length === 0 ? (
          <>
            <Loading />
          </> 
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
