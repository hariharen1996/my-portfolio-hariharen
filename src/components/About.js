import React from "react";
import Navbar from "./Navbar";
import { education, training } from "../utils/educonstants";
import { experience, volunteerExperience } from "../utils/expconstants";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="font-serif bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <h1 className="text-center text-2xl md:text-3xl underline">
          Work Experience
        </h1>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-full sm:w-8/12 lg:w-5/12 mb-5">
            {experience.map((expItems) => (
              <div
                key={expItems.id}
                className="flex gap-2 bg-[#171721] shadow-lg shadow-indigo-500/50 border-b-2 p-5 m-2 rounded-md"
              >
                <div className="logo">
                  <img
                    src={expItems.logo}
                    alt="logo"
                    className=" w-10 md:w-14"
                  />
                </div>
                <div className="details">
                  <h1 className="text-sm md:text-lg">{expItems?.title}</h1>
                  <p className="text-sm md:text-md text-[#b1b2b3]">
                    {expItems?.designation}
                  </p>
                  <p className="text-sm md:text-md text-[#b1b2b3]">
                    {expItems?.year}
                  </p>
                  <div className="flex items-start flex-wrap gap-2 mt-3">
                    {expItems.skills.map((item) => (
                      <button className="p-1 bg-cyan-700 text-xs rounded-md text-white">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-center text-2xl md:text-3xl underline">
            Volunteer Experience
          </h1>
          <div className="w-full sm:w-8/12 lg:w-5/12">
            {volunteerExperience.map((volExp) => (
              <div
                key={volExp.id}
                className="flex gap-2 bg-[#171721] shadow-lg shadow-indigo-500/50 border-b-2 p-5 m-2 rounded-md"
              >
                <div className="logo">
                  <img
                    src={volExp.logo}
                    alt="logo"
                    className=" w-15 h-12 md:w-14"
                  />
                </div>
                <div className="details">
                  <h1 className="text-sm md:text-lg">{volExp?.title}</h1>
                  <p className="text-sm md:text-md text-[#b1b2b3]">
                    {volExp?.designation}
                  </p>
                  <p className="text-sm md:text-md text-[#b1b2b3] py-2">
                    {volExp?.description}
                  </p>
                  <p className="text-sm md:text-md text-[#b1b2b3]">
                    {volExp?.year}
                  </p>
                  <div className="flex items-start flex-wrap gap-2 mt-3">
                    {volExp.skills.map((item) => (
                      <button className="p-1 bg-cyan-700 text-xs rounded-md text-white">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-center text-2xl md:text-3xl underline mt-5">
            Training
          </h1>
          <div className="w-full sm:w-8/12 lg:w-5/12">
            {training.map((tr) => (
              <div
                key={tr.id}
                className="flex gap-2 bg-[#171721] shadow-lg shadow-indigo-500/50 border-b-2 p-5 m-2 rounded-md"
              >
                <div className="logo">
                  <img
                    src={tr.logo}
                    alt="logo"
                    className=" w-15 h-12 md:w-14"
                  />
                </div>
                <div className="details">
                  <h1 className="text-sm md:text-lg">{tr?.title}</h1>
                  <p className="text-sm md:text-md text-[#b1b2b3]">
                    {tr?.designation}
                  </p>
                  <p className="text-sm md:text-md text-[#b1b2b3]">
                    {tr?.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-center text-2xl md:text-3xl underline pt-5">
            Education
          </h1>
          <div className="w-full sm:w-8/12 lg:w-5/12">
            {education.map((edItems) => (
              <div
                key={edItems.id}
                className="flex gap-2 bg-[#171721] shadow-lg shadow-indigo-500/50 border-b-2 p-5 m-2 rounded-md"
              >
                <div className="logo">
                  <img
                    src={edItems.logo}
                    alt="logo"
                    className=" w-10 md:w-14"
                  />
                </div>
                <div className="details">
                  <h1 className="text-sm md:text-lg">{edItems?.title}</h1>
                  <p className="text-sm md:text-md text-[#b1b2b3]">
                    {edItems?.department}
                  </p>
                  <p className="text-sm md:text-md text-[#b1b2b3]">
                    {edItems?.year}
                  </p>
                  {edItems.class && edItems.percentage && (
                    <p className="text-sm md:text-md text-[#b1b2b3]">
                      {edItems?.class} : {edItems?.percentage}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
