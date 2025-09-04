import React from "react";
import { Link } from "react-router-dom";
import { GITHUB_URL, LINKEDIN_URL } from "../../utils/constants";
import {
  FaLinkedin,
  FaDownload,
  FaGithub,
  FaHandshake,
  FaArrowRight,
  FaCode,
  FaServer,
  FaDatabase,
  FaPalette,
  FaTools,
} from "react-icons/fa";
import resume from "../../assets/hariharen.pdf";

const About = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-[#f8f9ff] to-[#e8eeff] dark:from-[#0f0f2d] dark:to-[#171730] flex justify-center items-center min-h-screen text-gray-800 dark:text-gray-200 pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <h1 className="text-6xl md:text-8xl font-bold text-gray-300 dark:text-gray-700 absolute top-8 md:top-12 left-1/2 transform -translate-x-1/2 xl:translate-x-0 xl:left-24 xl:top-1/2 xl:-translate-y-1/2 xl:-rotate-90 opacity-40 whitespace-nowrap pointer-events-none select-none z-0">
        ABOUT
      </h1>

      <div className="w-full max-w-4xl bg-white/80 dark:bg-[#1d1d2e]/90 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-2xl shadow-blue-500/10 dark:shadow-indigo-500/10 border border-white/20 dark:border-gray-800/30 transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-900/10 dark:to-cyan-900/10 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full mb-5 transition-all duration-500 hover:scale-110">
              <FaHandshake className="text-3xl text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Hariharen
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              Full-Stack Developer & Quality Enthusiast
            </p>
          </div>

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

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50/70 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30 transition-all duration-300 hover:shadow-md">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-3 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Development Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Creating{" "}
                <strong className="text-blue-700 dark:text-blue-300">
                  efficient, scalable applications
                </strong>{" "}
                with clean, maintainable code. Passionate about turning ideas
                into reality through modern development practices.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50/70 to-cyan-100/50 dark:from-cyan-900/20 dark:to-cyan-800/20 p-5 rounded-xl border border-cyan-100 dark:border-cyan-800/30 transition-all duration-300 hover:shadow-md">
              <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 mb-3 flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                Quality Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Applying{" "}
                <strong className="text-cyan-700 dark:text-cyan-300">
                  rigorous testing practices
                </strong>{" "}
                to deliver reliable, bug-free software. Ensuring seamless user
                experiences through comprehensive quality assurance.
              </p>
            </div>
          </div>

          <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4 mb-8">
            <p>
              I'm a passionate full-stack developer with expertise in creating
              efficient, scalable solutions and bringing ideas to life through
              clean, maintainable code. I specialize in Django, React, and
              database management to build robust web applications.
            </p>

            <p>
              I believe in the power of{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                collaboration
              </strong>
              —working closely with clients, developers, and QA teams, I've
              discovered that the best results come from{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                open communication and shared ideas
              </strong>
              .
            </p>

            <p>
              Explore my{" "}
              <Link
                to="/portfolio"
                className="text-blue-600 dark:text-cyan-400 font-medium hover:text-blue-800 dark:hover:text-cyan-300 transition-colors inline-flex items-center group"
              >
                Portfolio{" "}
                <FaArrowRight className="ml-1 text-sm group-hover:translate-x-1 transition-transform" />
              </Link>{" "}
              to see projects that showcase my ability to{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                design and build robust software solutions
              </strong>
              .
            </p>

            <p>
              I'm excited about the endless possibilities that coding and
              quality assurance offer. Whether you're looking for a{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                developer who writes clean, efficient code
              </strong>{" "}
              or a{" "}
              <strong className="text-cyan-600 dark:text-cyan-400">
                tester ensuring seamless user experiences
              </strong>
              , let's connect and create exceptional products together.
            </p>
          </div>

          <div className="relative w-full max-w-2xl mx-auto mb-10">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>

            <Link
              to="/skills"
              className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-8 rounded-xl border border-blue-200 dark:border-blue-800/30 flex flex-col items-center justify-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-800/30 dark:to-cyan-800/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaTools className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Explore My Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                Discover my technical expertise and proficiency in various
                technologies
              </p>
              <div className="flex items-center text-blue-600 dark:text-cyan-400 font-medium group-hover:underline">
                <span>View Skills Details</span>
                <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto"
            >
              <button className="cursor-pointer group flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-blue-700 dark:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transform">
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
              </button>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto"
            >
              <button className="cursor-pointer flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all duration-300 shadow-lg shadow-gray-500/30 hover:shadow-gray-500/50 hover:scale-105 transform">
                <FaGithub size={16} />
                <span>GitHub</span>
              </button>
            </a>

            <a
              href={resume}
              download="Hariharen_Resume.pdf"
              className="group w-full sm:w-auto"
            >
              <button className="cursor-pointer group flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-blue-700 dark:to-cyan-700 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-medium transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transform">
                <FaDownload size={16} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
            </a>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Interested in working together? Let's connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
