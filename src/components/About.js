import React from "react";
import { Link } from "react-router-dom";
import { GITHUB_URL, LINKEDIN_URL } from "../utils/constants";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload, FaGithub } from "react-icons/fa6";
import resume from "../assets/hariharen.pdf";

const About = () => {
  return (
    <div>
      <div className="font-serif bg-[#f1f1f1] dark:bg-[#171730]  flex justify-center items-center min-h-screen text-white  pt-20 pb-20">
        <h1 className="text-6xl lg:text-[7rem] font-bold text-gray-400 dark:text-gray-500 absolute top-10 lg:top-[30rem] left-1/2 lg:left-32 lg:-rotate-90 transform lg:origin-left opacity-30 whitespace-nowrap -translate-x-1/2 lg:translate-x-0">
          ABOUT
        </h1>
        <div className="text-center w-full mx-2 md:w-8/12 bg-[#fff] dark:bg-[#171721] p-10 rounded-md shadow-lg shadow-blue-500/70 dark:shadow-indigo-500/70 hover:transition-all">
          <h1 className="text-4xl lg:text-5xl my-2 pb-2 text-black dark:text-white">
            I am <span>🤝Hariharen</span>
          </h1>
          <p className="text-sm text-black dark:text-[#b1b2b3] lg:text-xl my-2">
            A passionate and innovative developer with a deep love for turning
            ideas into reality through code. I believe in the power of
            collaboration, working closely with clients and teammates, I've
            discovered that the best results often come from open communication
            and shared ideas. Explore my{" "}
            <Link to="/portfolio">
              <span className="text-[#000] font-bold dark:text-white underline">
                Portfolio
              </span>
            </Link>{" "}
            to witness a range of projects that showcase my ability to transform
            concepts into functional, scalable applications. I'm excited about
            the endless possibilities that coding offers. Whether you're looking
            for a developer to enhance your team, have a project in mind, let's
            connect and explore the world of code together. I'm always eager to
            explore new opportunities and contribute to exciting projects.
          </p>
          <div className="flex justify-center items-center md:justify-center items-center gap-3 mt-5">
            <Link to={LINKEDIN_URL} target="_blank">
              <div className="flex gap-2 justify-center">
                <button className="px-3 text-sm md:px-6 py-2 rounded-xl bg-[#00008b] dark:bg-[#171717] dark:border-white border border-cyan-700 hover:border-white transition-all shadow-lg shadow-[#00008b]/50 dark:shadow-indigo-500/70 flex items-center space-x-2">
                  <FaLinkedin size={18} />
                </button>
              </div>
            </Link>
            <Link to={GITHUB_URL} target="_blank">
              <div className="flex gap-2 justify-center">
                <button
                  title="Let's Connect on LinkedIn"
                  className="px-3 text-sm md:px-6 py-2 rounded-xl bg-[#00008b] dark:bg-[#171717] dark:border-white border border-cyan-700 hover:border-white transition-all shadow-lg shadow-[#00008b]/50 dark:shadow-indigo-500/70 flex items-center space-x-2"
                >
                  <FaGithub size={18} />
                </button>
              </div>
            </Link>
            <a href={resume} download="hariharen.pdf">
              <div className="flex gap-2 justify-center">
                <button
                  title="Let's Connect on LinkedIn"
                  className="px-3 text-sm md:px-6 py-2 rounded-xl bg-[#00008b] dark:bg-[#171717] dark:border-white border border-cyan-700 hover:border-white transition-all shadow-lg shadow-[#00008b]/50 dark:shadow-indigo-500/70 flex items-center space-x-2"
                >
                  <FaDownload size={18} />
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
