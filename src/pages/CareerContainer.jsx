import React from "react";

const CareerContainer = ({ title, details }) => {
  return (
    <>
      <h1 className="text-center text-2xl md:text-3xl underline text-black dark:text-white relative">
        {title}
      </h1>
      <div className="flex flex-col items-center justify-center mt-5 relative">
        <div className="w-full sm:w-8/12 lg:w-5/12 mb-5">
          {details.map((items) => (
            <div
              key={items.id}
              className="flex gap-2 bg-[#fff] dark:bg-[#171721] shadow-lg shadow-blue-500/70 dark:shadow-[#0069a3] border-b-2 p-5 m-2 rounded-md relative z-10"
            >
              <div className="logo">
                <img
                  src={items.logo}
                  alt="logo"
                  className={`rounded ${
                    items.exp === "nxtexp" ? "w-32 md:w-24" : "w-14"
                  }`}
                />
              </div>
              <div className="details">
                <h1 className="text-sm md:text-lg text-black dark:text-white">
                  {items?.title}
                </h1>
                <p className="text-sm md:text-md text-[#b1b2b3] font-bold">
                  {items?.designation}
                </p>
                {items.class && items.percentage && (
                  <p className="text-sm md:text-md text-[#b1b2b3] font-bold">
                    {items?.class} : <span>{items?.percentage}</span>
                  </p>
                )}
                {items.description && (
                  <p className="text-sm md:text-md text-[#b1b2b3] font-bold my-2">
                    {items?.description}
                  </p>
                )}

                <p className="text-sm md:text-md text-[#b1b2b3] font-bold">
                  {items?.year}
                </p>
                {items.skills && (
                  <div className="flex items-start flex-wrap gap-2 mt-3">
                    {items.skills.map((item) => (
                      <button
                        key={item}
                        className="bg-[#0000c8] shadow-lg dark:bg-[#171717] border border-[#f1f1f1] transition-all shadow-blue-500/70 dark:shadow-indigo-500/70 shadow-lg text-xs p-2 rounded-md"
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

export default CareerContainer;
