import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEye,
  FaCode,
  FaServer,
  FaDatabase,
  FaPalette,
} from "react-icons/fa";

const Home = () => {
  const skills = [
    "Django Developer",
    "SQL Specialist",
    "React Developer",
    "JavaScript Expert",
    "Python Programmer",
  ];
  const [currentSkill, setCurrentSkill] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentWord = skills[index];
    let timeoutId;
    console.log(currentWord)
    if (isDeleting) {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setCurrentSkill(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 80);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % skills.length);
        setCharIndex(0);
      }
    } else {
      if (charIndex < currentWord.length) {
        timeoutId = setTimeout(() => {
          setCurrentSkill(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 150);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }
    console.log(currentWord)

    return () => clearTimeout(timeoutId);
  }, [index, isDeleting, charIndex, skills]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-[#f8f9ff] to-[#e8eeff] dark:from-[#0f0f2d] dark:to-[#171730] flex justify-center items-center min-h-screen text-gray-800 dark:text-gray-200 pt-20 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <h1
        aria-hidden="true"
        className="text-6xl md:text-8xl font-bold text-gray-300 dark:text-gray-700 absolute top-8 md:top-12 left-1/2 transform -translate-x-1/2 xl:translate-x-0 xl:left-24 xl:top-1/2 xl:-translate-y-1/2 xl:-rotate-90 opacity-40 whitespace-nowrap pointer-events-none select-none z-0"
      >
        HOME
      </h1>

      <div
        className={`flex flex-col items-center justify-center w-full max-w-4xl mx-4 md:mx-8 bg-white/80 dark:bg-[#1d1d2e]/90 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-2xl shadow-blue-500/10 dark:shadow-indigo-500/10 border border-white/20 dark:border-gray-800/30 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center w-full mb-8">
          <div className="mb-2">
            <span className="text-lg font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
              Welcome to my portfolio
            </span>
          </div>

          <div className="flex flex-col items-center mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Hariharen
            </h1>
          </div>

          <div className="h-16 mb-6 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              I am a{" "}
              <span className="font-bold text-blue-600 dark:text-cyan-400 relative">
                {currentSkill}
                <span className="ml-1 animate-pulse">|</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-cyan-400"></span>
              </span>
            </p>
          </div>

          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in creating
            efficient, scalable solutions and bringing ideas to life through
            clean, maintainable code. I specialize in Django, React, and
            database management to build robust web applications.
          </p>

          <div className="flex justify-center space-x-6 mb-10">
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Frontend
              </span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <FaServer className="text-cyan-600 dark:text-cyan-400 text-xl" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Backend
              </span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <FaDatabase className="text-indigo-600 dark:text-indigo-400 text-xl" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Database
              </span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <FaPalette className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                UI/UX
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/portfolio" className="w-full sm:w-auto">
              <button className="group flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-blue-700 dark:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transform">
                <span>View My Work</span>
                <FaArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>

            <Link to="/about" className="w-full sm:w-auto">
              <button className="group flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform">
                <span>About Me</span>
                <FaEye size={16} className="group-hover:animate-pulse" />
              </button>
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-2xl mt-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>

          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Django",
                "React",
                "Python",
                "SQL",
                "JavaScript",
                "HTML/CSS",
                "REST APIs",
                "Git",
              ].map((tech, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white dark:bg-gray-800/50 rounded-lg text-center text-sm font-medium text-blue-600 dark:text-blue-400 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500 animate-ping opacity-75"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-cyan-500 animate-ping opacity-75 animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
