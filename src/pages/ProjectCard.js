import React from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";
import { IoNavigateCircle } from "react-icons/io5";



const ProjectCard = ({ items }) => {
  return (
    <div className="w-[450px] bg-[#171721] shadow-xl shadow-indigo-500/50 p-2 font-serif rounded-md">
      {!items.image ? (
        <div className="flex justify-center items-center">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <img
          src={items.image}
          alt={items.title}
          className="w-full h-48 rounded-lg"
        />
      )}
      <h1 className="text-lg text-[#b1b2b3] my-3">{items.title}</h1>
      <div className="flex flex-wrap gap-2 my-3">
        {items.techStach.map((btn) => (
          <button
            key={btn}
            className="border border-cyan-700 transition-all bg-cyan-900 text-white text-xs p-2 rounded-md"
          >
            {btn}
          </button>
        ))}
      </div>
      <Link to={`/portfolio-details/${items.id}`} state={JSON.stringify(items)}>
        <a className="mb-2 mt-2 text-md underline bg-cyan-900 text-white">
          <IoNavigateCircle size={35} />
        </a>
      </Link>

    </div>
  );
};

export default ProjectCard;
