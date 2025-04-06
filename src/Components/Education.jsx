import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { useTheme } from "./ThemeContext";
import EducationData from "../Data/Education";

const Education = () => {
  const { darkMode } = useTheme();
  const educationItems = Object.values(EducationData);

  const getEducationIcon = (educationType) => {
    const icons = {
      BTech: <FaUniversity className="text-2xl" />,
      Intermediate: <MdSchool className="text-2xl" />,
      SSC: <FaSchool className="text-2xl" />,
      default: <FaGraduationCap className="text-2xl" />
    };
    
    return icons[educationType] || icons.default;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    },
    hover: { 
      y: -5, 
      scale: 1.02,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
      darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
  initial="hidden"
  animate="visible"
  variants={titleVariants}
  className="text-center mb-12"
>
  <motion.h2 
    className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-500 ${
      darkMode 
        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
        : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"
    }`}
  >
    Education Journey
  </motion.h2>
  
  <motion.p 
    className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
      darkMode ? "text-gray-300" : "text-gray-600"
    }`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    My academic milestones and achievements
  </motion.p>
  
  <motion.div 
    className={`w-20 h-1.5 mx-auto mt-6 rounded-full transition-colors duration-500 ${
      darkMode 
        ? "bg-gradient-to-r from-blue-400 to-teal-400"
        : "bg-gradient-to-r from-blue-600 to-teal-600"
    }`}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  />
</motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline track */}
          <div className={`absolute left-6 md:left-1/2 h-full w-1 ${
            darkMode ? "bg-gray-700/50" : "bg-gray-300/50"
          } transform -translate-x-1/2 rounded-full`} />

          {educationItems.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`relative mb-8 pl-10 md:pl-0 ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-6 md:left-1/2 w-5 h-5 rounded-full ${
                darkMode ? "bg-teal-400" : "bg-teal-500"
              } border-4 ${
                darkMode ? "border-gray-900" : "border-white"
              } transform -translate-x-1/2 z-10 shadow-md`} />

              {/* Education card */}
              <motion.div 
                className={`rounded-xl overflow-hidden transition-all ${
                  darkMode 
                    ? "bg-gray-800/80 border border-gray-700/50" 
                    : "bg-white border border-gray-200"
                } shadow-lg backdrop-blur-sm`}
              >
                <div className="p-6 relative">
                  {/* Header */}
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-lg ${
                      darkMode 
                        ? "bg-gray-700/50 text-teal-300" 
                        : "bg-gray-100 text-teal-600"
                    } mr-4 flex-shrink-0`}>
                      {getEducationIcon(Object.keys(EducationData)[index])}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}>
                        {edu.name}
                      </h3>
                      <p className={`${
                        darkMode ? "text-teal-300" : "text-teal-600"
                      } font-medium`}>
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } mt-2 mb-4`}>
                      {edu.description}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="flex justify-between items-center mt-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      darkMode 
                        ? "bg-gray-700/50 text-teal-300" 
                        : "bg-gray-100 text-teal-600"
                    }`}>
                      <FiAward className="mr-1" />
                      {typeof edu.year === 'number' ? edu.year : `${edu.year.start}-${edu.year.end}`}
                    </span>
                    <span className={`font-semibold ${
                      darkMode ? "text-teal-300" : "text-teal-600"
                    }`}>
                      {edu.grade}
                    </span>
                  </div>

                  {/* Current education indicator */}
                  {index === 0 && (
                    <div className={`absolute top-3 right-3 px-2 py-0.5 text-xs rounded-full ${
                      darkMode ? "bg-teal-900/50 text-teal-200" : "bg-teal-100 text-teal-800"
                    }`}>
                      Current
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;