import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/hari.jpg";
import { FaArrowsToEye } from "react-icons/fa6";

const Home = () => {
  const skills = ["Django", "SQL", "React", "JavaScript", "Python"];

  const [currentSkill, setCurrentSkill] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = skills[index];
      if (isDeleting) {
        setCurrentSkill((prev) => prev.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setCurrentSkill((prev) => currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % skills.length);
      }
    };

    const intervalId = setInterval(typeEffect, isDeleting ? 100 : 200);

    return () => clearInterval(intervalId);
  }, [index, isDeleting, charIndex, skills]);

  return (
    <div className="font-serif bg-[#f1f1f1] dark:bg-[#171730] flex justify-center items-center min-h-screen text-white pt-20 pb-20 relative">
      <h1 className="text-6xl md:text-[7rem] font-bold text-gray-400 dark:text-gray-500 absolute top-12 xl:top-[30rem] left-1/2 xl:left-16 xl:-rotate-90 transform xl:origin-left opacity-30 whitespace-nowrap -translate-x-1/2 xl:translate-x-0">
        HOME
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full mx-2 md:w-9/12 bg-[#fff] dark:bg-[#171721] p-10 rounded-lg shadow-lg dark:shadow-indigo-500/70 shadow-blue-500/70 relative">
        <div className="text-center md:text-left md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl lg:text-5xl font-semibold text-black dark:text-white">
            Hey 👋
          </h1>
          <h1 className="mt-4 text-4xl lg:text-5xl font-semibold text-black dark:text-white">
            I'm Hariharen
          </h1>

          <h1 className="mt-5 text-2xl lg:text-3xl text-black dark:text-[#b1b2b3] mb-6">
            I Am Skilled in{" "}
            <span className="font-bold text-[#0000c8] dark:text-white uppercase">
              {currentSkill}
            </span>
          </h1>

          <div className="flex justify-center md:justify-start items-center gap-3">
            <Link to="/about">
              <div className="flex gap-2 justify-center">
                <button
                  title="Let's Connect on LinkedIn"
                  className="px-3 text-sm md:px-6 py-2 rounded-xl bg-[#00008b] dark:bg-[#171717] dark:border-white border border-cyan-700 hover:border-white transition-all shadow-lg shadow-[#00008b]/50 dark:shadow-indigo-500/70 flex items-center space-x-2"
                >
                  <span className="mr-0">About Me</span>{" "}
                  <FaArrowsToEye size={18} />
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full md:w-1/2 mb-6 md:mb-0">
          <img
            draggable="false"
            src={profileImage}
            alt="avatar"
            className="w-64 h-64 rounded-full object-cover shadow-xl dark:shadow-xl tilt-effect shadow-lg dark:shadow-indigo-500/70 shadow-blue-500/70"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
