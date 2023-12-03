import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ items }) => {
  return (
    <div className="w-[450px] bg-[#171721] shadow-xl shadow-indigo-500/50 p-2 font-serif rounded-md">
      <img
        src={items.image}
        alt={items.title}
        className="w-full h-48 rounded-lg"
      />
      <h1 className="text-lg text-[#b1b2b3] my-3">{items.title}</h1>
      <div className="flex flex-wrap gap-2 my-3">
        {items.techStach.map((btn) => (
          <button className="border border-cyan-700 transition-all hover:bg-cyan-700 hover:text-white text-xs p-2 rounded-md text-[#b1b2b3]">
            {btn}
          </button>
        ))}
      </div>
      <Link to={`/portfolio-details/${items.id}`} state={JSON.stringify(items)}>
        <button className="bg-cyan-700 text-xs p-2 rounded-md text-white">
          View More
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
