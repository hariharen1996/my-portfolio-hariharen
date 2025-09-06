import React from "react";

const SkillsContainer = ({ title, techStack, gradient }) => {
  return (
    <div className="bg-white/80 dark:bg-[#1d1d2e]/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 dark:border-gray-800/30 overflow-hidden group">
      <div className={`bg-gradient-to-r ${gradient} p-4 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10"></div>
        <h1 className="text-center text-xl font-bold text-white relative z-10">
          {title}
        </h1>
      </div>
      
      <div className="p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {techStack.map((tech) => {
            const Icon = tech.icons;

            return (
              <div
                key={tech.id}
                className="flex flex-col items-center justify-center bg-gray-50/50 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/30 hover:border-blue-300/50 dark:hover:border-blue-500/30 hover:shadow-md hover:scale-105 transition-all duration-300 group-hover:opacity-100 min-h-[100px] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300"></div>
                
                <Icon
                  size={32}
                  className={`mb-3 ${tech.color || 'text-gray-700 dark:text-gray-300'} group-hover:scale-110 transition-transform duration-300`}
                />
                <h2 className="text-gray-700 dark:text-gray-300 text-xs font-medium text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 break-words whitespace-normal max-w-full leading-tight">
                  {tech.text}
                </h2>
                
                {tech.level && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${gradient} transition-all duration-500`}
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;