import React from "react";

const AboutContainer = ({ title, details }) => {
  return (
    <>
      <h1 className="text-center text-2xl md:text-3xl underline">{title}</h1>
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="w-full sm:w-8/12 lg:w-5/12 mb-5">
          {details.map((items) => (
            <div
              key={items.id}
              className="flex gap-2 bg-[#171721] shadow-lg shadow-indigo-500/50 border-b-2 p-5 m-2 rounded-md"
            >
              <div className="logo">
                <img
                  src={items.logo}
                  alt="logo"
                  className={`${
                    items.exp === "nxtexp" ? "w-32 md:w-24" : "w-14"
                  }`}
                />
              </div>
              <div className="details">
                <h1 className="text-sm md:text-lg">{items?.title}</h1>
                <p className="text-sm md:text-md text-[#b1b2b3]">
                  {items?.designation}
                </p>
                {items.class && items.percentage && (
                  <p className="text-sm md:text-md text-[#b1b2b3]">
                    {items?.class} : <span>{items?.percentage}</span>
                  </p>
                )}
                {items.description && (
                  <p className="text-sm md:text-md text-[#b1b2b3] my-2">
                    {items?.description}
                  </p>
                )}

                <p className="text-sm md:text-md text-[#b1b2b3]">
                  {items?.year}
                </p>
                {items.skills && (
                  <div className="flex items-start flex-wrap gap-2 mt-3">
                    {items.skills.map((item) => (
                      <button
                        key={item}
                        className="p-1 bg-cyan-700 text-xs rounded-md text-white"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
