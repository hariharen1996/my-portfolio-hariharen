import React from "react";
import { Link } from "react-router-dom";
import { LINKEDIN_URL } from "../utils/constants";

const Home = () => {
  return (
    <div>
      <div className="font-serif bg-[#f1f1f1] dark:bg-[#171730]  flex justify-center items-center min-h-screen text-white  pt-20 pb-20">
        <div className="text-start md:text-center  w-full mx-2 md:w-8/12 bg-[#fff] dark:bg-[#171721] p-10 rounded-md shadow-lg shadow-blue-500/70 dark:shadow-indigo-500/70 hover:transition-all">
          <h1 className="text-4xl lg:text-5xl my-2 pb-2 text-black dark:text-white">
            Hey 👋, I am <span>Hariharen</span>
          </h1>
          <p className="text-sm text-black dark:text-[#b1b2b3] lg:text-xl my-2">
            A passionate and innovative developer with a deep love for turning
            ideas into reality through code. I believe in the power of
            collaboration, working closely with clients and teammates, I've
            discovered that the best results often come from open communication
            and shared ideas. Explore my{" "}
            <Link to="/portfolio">
              <span className="text-[#000] font-bold dark:text-cyan-400 underline">Portfolio</span>
            </Link>{" "}
            to witness a range of projects that showcase my ability to transform
            concepts into functional, scalable applications. I'm excited about
            the endless possibilities that coding offers. Whether you're looking
            for a developer to enhance your team, have a project in mind, let's
            connect and explore the world of code together. I'm always eager to
            explore new opportunities and contribute to exciting projects.
          </p>
          <Link to={LINKEDIN_URL} target="_blank">
            <button className="px-3 text-sm my-2 md:px-6 p-2 rounded-lg bg-[#1770c8]  dark:bg-cyan-900  border border-cyan-700 hover:border-white transition-all">
              Let's connect
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
