import React, { useState } from "react";
import { SiReactos } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../utils/navconstants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const changeMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="w-full shadow-xl fixed top-0 left-0 font-serif">
        <div className="md:flex justify-between items-center bg-[#171721] p-2 text-white shadow-xl">
          <Link to="/">
            <div className="flex mx-2 items-center gap-2">
              <span>
                <SiReactos size={25} />
              </span>
              <h1>Hariharen</h1>
            </div>
          </Link>

          <div
            className="absolute mx-2 right-3 top-2 cursor-pointer md:hidden"
            onClick={changeMenu}
          >
            {showMenu ? (
              <AiFillCloseCircle size={25} />
            ) : (
              <GiHamburgerMenu size={25} />
            )}
          </div>
          <ul
            className={`md:mx-2 duration-700 ease-in-out md:flex md:items-center gap-4 md:static absolute pb-2 pt-2 md:pb-0 md:pt-0 bg-[#171721] md:bg-none md:w-auto w-full left-0 pl-3 md:pl-0 md:z-auto z-[-1]  ${
              showMenu
                ? "top-10 opacity-100 transition-opacity shadow-xl border border-white shadow-xl shadow-indigo-500/50 md:border-0 md:shadow-none md:shadow-indigo-500/50-none "
                : "top-[-490px] md:opacity-100 opacity-0 transition-opacity"
            }`}
          >
            {navItems.map((nav) => (
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "text-cyan-600"
                    : "text-white hover:text-cyan-600 transition-all";
                }}
                to={nav.path}
                key={nav.id}
                onClick={() => setShowMenu(false)}
              >
                <li className="mb-2 md:mb-0">{nav.pathname}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
