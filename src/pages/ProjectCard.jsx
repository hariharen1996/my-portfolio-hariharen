import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { MdSpeakerNotes } from "react-icons/md";

const ProjectCard = ({ items }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-[480px] shadow-blue-500/70 dark:shadow-indigo-500/70 shadow-xl bg-white dark:bg-[#171721] border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-md relative group">
      <div className="relative overflow-hidden">
        {!items.image ? (
          <div className="flex justify-center items-center h-48 bg-gray-200 dark:bg-gray-800">
            Loading...
          </div>
        ) : (
          <img
            src={items.image}
            alt={items.title}
            className="w-full h-56 object-cover"
          />
        )}
        <div className="absolute bottom-0 left-0 w-full  bg-white bg-opacity-90 dark:bg-[#171721] dark:bg-opacity-90 p-4 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300 flex flex-col justify-between">
          <div className="flex gap-2 items-start mt-2 z-10">
            {items.projectLink && (
              <Link
                to={items.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="transition bg-[#0000c8] dark:bg-[#171717] dark:border-white text-white border border-transparent transition-all text-xs p-2 rounded-md cursor-pointer px-4 py-2 shadow-blue-500/70 dark:shadow-indigo-500/70 shadow-lg hover:scale-105">
                  <RiLiveFill size={15} />
                </button>
              </Link>
            )}
            <Link to={items.github} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 transition bg-[#0000c8] dark:bg-[#171717] dark:border-white text-white border border-transparent transition-all text-xs p-2 rounded-md cursor-pointer px-4 py-2 shadow-blue-500/70 dark:shadow-indigo-500/70 shadow-lg hover:scale-105">
                <FaGithub size={15} />
              </button>
            </Link>
            <button
              className="transition bg-[#0000c8] dark:bg-[#171717] dark:border-white text-white border border-transparent transition-all text-xs p-2 rounded-md cursor-pointer px-4 py-2 shadow-blue-500/70 dark:shadow-indigo-500/70 shadow-lg hover:scale-105"
              onClick={() => setShowModal(true)}
            >
              <MdSpeakerNotes size={15} />
            </button>
          </div>
        </div>
      </div>

      <h1 className="w-full text-lg font-bold text-white bg-[#00008b] dark:bg-[#171721] px-2 py-1 absolute bottom-0 left-0 group-hover:opacity-0 transition-opacity duration-300 shadow">
        {items.title}
      </h1>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-[#171721] p-6 rounded-lg shadow-lg max-w-sm text-center">
            <p className="text-black dark:text-white">{items.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {items.techStach.map((tech, index) => (
                <button
                  key={index}
                  className="transition bg-[#0000c8] dark:bg-[#171717] dark:border-white text-white border border-transparent transition-all text-xs p-2 rounded-md cursor-pointer px-4 py-2 shadow-blue-500/70 dark:shadow-indigo-500/70 shadow-lg hover:scale-105"
                >
                  {tech}
                </button>
              ))}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md shadow-red-500/70 shadow-lg hover:bg-red-600 transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
