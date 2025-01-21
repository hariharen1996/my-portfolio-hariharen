import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const PortfolioDetails = () => {
  const location = useLocation();
  const { state } = location;
  const parsedObj = JSON.parse(state);

  return (
    <div>
      <Navbar />
      <div className="font-serif bg-[#f1f1f1] dark:bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <h1 className=" text-xl md:text-3xl underline text-center text-black dark:text-white">
          {parsedObj.title}
        </h1>
        <div className="mx-10 my-5 md:my-10 bg-white dark:bg-[#171721] border border-black dark:border-white shadow-xl shadow-blue-500/70 dark:shadow-indigo-500/70 p-5">
          <div className="flex items-center">
            <p className="text-lg underline mx-1 mb-2 text-black dark:text-white">Project Description</p>
          </div>
          <ul className="list-disc">
            {/* Avoid index as key  */}
            {parsedObj.description.map((item, index) => (
              <li className="my-2 mx-2 text-md text-black dark:text-white" key={item}>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex mt-5 gap-2">
            <Link to={parsedObj.github} target="_blank">
              <button className="bg-[#1770c8] dark:bg-cyan-900 border border-cyan-700 hover:border-white transition-all text-xs p-2 rounded-md">
                View Code
              </button>
            </Link>
            <Link to={parsedObj.projectLink} target="_blank">
              <button className="bg-[#1770c8] dark:bg-cyan-900 border border-cyan-700 hover:border-white transition-all text-xs p-2 rounded-md">
                View Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
