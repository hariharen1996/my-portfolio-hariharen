import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="font-serif bg-[#1c1c27] w-screen flex justify-center items-center min-h-screen text-white  pt-20 pb-20">
        <div className="text-start md:text-center  w-full mx-2 md:w-8/12 bg-[#171721] p-10 rounded-md shadow-lg shadow-indigo-200/40 hover:transition-all">
          <h1 className="text-4xl lg:text-5xl my-2 pb-2">
            Hey 👋, I am <span>Hariharen</span>
          </h1>
          <p className="text-sm text-[#b1b2b3] lg:text-xl my-2">
            A passionate and innovative developer with a deep love for turning
            ideas into reality through code. I believe in the power of
            collaboration, working closely with clients and teammates, I've
            discovered that the best results often come from open communication
            and shared ideas. Explore my{" "}
            <Link to="/portfolio">
              <span className="text-cyan-400 underline">Portfolio</span>
            </Link>{" "}
            to witness a range of projects that showcase my ability to transform
            concepts into functional, scalable applications. I'm excited about
            the endless possibilities that coding offers. Whether you're looking
            for a developer to enhance your team, have a project in mind, let's
            connect and explore the world of code together. I'm always eager to
            explore new opportunities and contribute to exciting projects.
          </p>
          <Link to="/contact">
            <button className="px-3 text-sm my-2 md:px-6 p-2 rounded-lg  bg-cyan-900  hover:border border-white">
              Let's connect
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
