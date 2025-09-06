import React from 'react';
import { useState, useEffect } from "react";
import { IoFlashlightOutline, IoFlashlightSharp } from "react-icons/io5";

const Theme = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (getTheme) {
      setTheme(getTheme === "dark");
    } else {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="fixed top-16 right-5 z-50">
      <button
        onClick={() => setTheme(!theme)}
        className="p-2 text-black dark:text-white"
      >
        {theme ? (
          <IoFlashlightSharp size={25} />
        ) : (
          <IoFlashlightOutline size={25} />
        )}
      </button>
    </div>
  );
};

export default Theme;
