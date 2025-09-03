import React from 'react';
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiHeart } from "react-icons/fi";
import { GITHUB_URL, LINKEDIN_URL } from "../../utils/constants";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-8 px-6 shadow-lg border-t border-blue-400/30 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8">
          <div
            className={`md:text-left text-center transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-xl font-bold font-serif mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className="bg-white/10 p-1 rounded-lg">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse opacity-70"></div>
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SH</span>
                  </div>
                </div>
              </span>
              Hariharen
            </h3>
            <p className="text-sm font-light max-w-xs mx-auto md:mx-0 text-blue-100 dark:text-gray-300">
              Crafting digital experiences with attention to detail and passion
              for innovation.
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-blue-200 dark:text-gray-400">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-4 flex-wrap">
              {[
                { href: GITHUB_URL, label: "GitHub Profile", Icon: SiGithub },
                {
                  href: LINKEDIN_URL,
                  label: "LinkedIn Profile",
                  Icon: SiLinkedin,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon
                    size={18}
                    className="group-hover:text-cyan-300 transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/30 dark:border-gray-700/50 my-6"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm font-light flex items-center justify-center gap-1 flex-wrap sm:flex-nowrap">
            Created with <FiHeart className="text-red-400 mx-1" /> by S
            Hariharen © {new Date().getFullYear()}
          </p>

          <div className="flex items-center text-xs text-blue-200 dark:text-gray-400 gap-2">
            <span className="animate-pulse">•</span>
            <span>Made with React.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
