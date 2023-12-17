import React from "react";
import { education, training } from "../utils/educonstants";
import { experience, volunteerExperience } from "../utils/expconstants";
import AboutContainer from "../pages/AboutContainer";

const About = () => {
  return (
    <div>
      <div className="font-serif bg-[#171730] w-full min-h-screen text-white pt-20 pb-20">
        <AboutContainer title={"Work Experince"} details={experience} />
        <AboutContainer
          title={"Volunteer Experience"}
          details={volunteerExperience}
        />
        <AboutContainer title={"Training"} details={training} />
        <AboutContainer title={"Education"} details={education} />
      </div>
    </div>
  );
};

export default About;
