import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const PortfolioDetails = () => {
  const location = useLocation();
  const { state } = location;
  const parsedObj = JSON.parse(state);
  const { title, description } = parsedObj;
  console.log(JSON.parse(state));

  return (
    <div>
      <Navbar />
      <div className="font-serif bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <h1 className=" text-xl md:text-3xl underline text-center">{title}</h1>
        <div className="mx-10 my-5 md:my-10 bg-[#171721] border border-white shadow-xl shadow-indigo-500/50 p-5">
          <ul className="list-disc">
            <div className="flex items-center">
              <p className="text-lg underline mx-1 mb-2">Project Description</p>
            </div>
            {/* Avoid index as key  */}
            {description.map((item, index) => (
              <li className="my-2 mx-2 text-md" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex mt-5 gap-2">
            <button className="border border-cyan-700 transition-all hover:bg-cyan-700 hover:text-white text-xs p-2 rounded-md text-[#b1b2b3]">
              View Code
            </button>
            <button className="border border-cyan-700 transition-all hover:bg-cyan-700 hover:text-white text-xs p-2 rounded-md text-[#b1b2b3]">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
