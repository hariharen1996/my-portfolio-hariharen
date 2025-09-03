import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../utils/navconstants.jsx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const changeMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-gray-900 dark:to-gray-800 text-white shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => setShowMenu(false)}
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse opacity-70"></div>
                <div className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SH</span>
                </div>
              </div>
              <span className="text-lg font-semibold tracking-wide">
                Hariharen
              </span>
            </Link>
            <div className="hidden md:flex space-x-6 items-center">
              {navItems.map(({ id, path, pathname }) => (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    `transition-colors duration-200 font-medium ${
                      isActive
                        ? "underline underline-offset-4 text-white"
                        : "hover:text-white/80"
                    }`
                  }
                >
                  {pathname}
                </NavLink>
              ))}
            </div>
            <button
              onClick={changeMenu}
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-white/70 rounded"
            >
              {showMenu ? (
                <AiFillCloseCircle size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-max-height duration-300 ease-in-out ${
            showMenu ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 pt-2 pb-4 space-y-2">
            {navItems.map(({ id, path, pathname }) => (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-100 dark:bg-gray-700 font-semibold"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
                onClick={() => setShowMenu(false)}
              >
                {pathname}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
