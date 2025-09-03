import React from "react";
import { education, training } from "../utils/educonstants";
import { experience, volunteerExperience } from "../utils/expconstants";
import CareerContainer from "../pages/CareerContainer";

const Career = () => {
  return (
    <div className="font-serif bg-[#f1f1f1] dark:bg-[#171730] w-full min-h-screen text-white pt-20 pb-20 relative flex flex-col items-center">
      <h1 className="text-4xl md:text-7xl lg:text-[6rem] font-bold text-gray-400 dark:text-gray-500 absolute top-10 lg:top-[30rem] left-1/2 lg:left-32 lg:-rotate-90 transform lg:origin-left opacity-30 whitespace-nowrap -translate-x-1/2 lg:translate-x-0">
        CAREER
      </h1>

      <div className="relative w-full px-4 md:px-10 lg:px-20">
        <CareerContainer title={"Work Experience"} details={experience} />
        <CareerContainer
          title={"Volunteer Experience"}
          details={volunteerExperience}
        />
        <CareerContainer title={"Training"} details={training} />
        <CareerContainer title={"Education"} details={education} />
      </div>
    </div>
  );
};

export default Career;
