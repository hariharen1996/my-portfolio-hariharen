import React from "react";

const CareerContainer = ({ title, details, icon, gradient }) => {
  return (
    <section className="relative">
      <div className="flex items-center justify-center mb-10">
        <div
          className={`w-14 h-14 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-2xl text-white mr-4`}
        >
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300/50 to-cyan-300/50 dark:from-blue-700/30 dark:to-cyan-700/30 transform -translate-x-1/2"></div>

        <div className="space-y-8 ml-4">
          {details.map((item, index) => (
            <div key={item.id} className="relative pl-14">
              <div
                className={`absolute left-0 w-4 h-4 rounded-full bg-gradient-to-r ${gradient} transform -translate-x-1/2 z-10`}
              ></div>

              <article className="bg-white/80 dark:bg-[#1d1d2e]/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 dark:border-gray-800/30 p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-gray-100/50 dark:bg-gray-800/50 rounded-xl p-3 border border-gray-200/50 dark:border-gray-700/30">
                      <img
                        src={item.logo}
                        alt={`${item.title} logo`}
                        className="object-contain w-full h-full"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                        <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">
                          {item.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <header className="mb-4">
                      <h3
                        id={`title-${item.id}`}
                        className="text-xl font-semibold text-gray-800 dark:text-white mb-1"
                      >
                        {item.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {item.designation}
                      </p>
                    </header>

                    {item.class && item.percentage && (
                      <div className="mb-3">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">{item.class}:</span>{" "}
                          {item.percentage}
                        </p>
                      </div>
                    )}

                    {item.description && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">
                      📅 {item.year}
                    </p>

                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200/50 dark:border-blue-700/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerContainer;
