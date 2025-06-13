import { motion } from "framer-motion";
import { FiAward, FiMapPin } from "react-icons/fi";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import { MdSchool, MdTimeline } from "react-icons/md";
import { useTheme } from "./ThemeContext";
import EducationData from "../Data/Education";

const Education = () => {
  const { darkMode } = useTheme();
  const educationItems = Object.values(EducationData);

  const getEducationIcon = (educationType) => {
    const icons = {
      BTech: <FaUniversity className="w-6 h-6" />,
      Intermediate: <MdSchool className="w-6 h-6" />,
      SSC: <FaSchool className="w-6 h-6" />,
      default: <FaGraduationCap className="w-6 h-6" />
    };
    
    return icons[educationType] || icons.default;
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  return (
    <section id="education" className={`min-h-screen py-20 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header with animated gradient */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16 relative"
        >
          <motion.span 
            className={`inline-flex items-center px-4 py-2 rounded-full mb-4 text-sm font-medium ${
              darkMode ? "bg-gray-800 text-teal-400" : "bg-gray-200 text-teal-600"
            } relative z-10`}
          >
            <MdTimeline className="mr-2" />
            Academic Timeline
          </motion.span>
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold mb-4 relative z-10 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Education</span> Journey
          </motion.h2>
          <motion.p 
            className={`text-lg max-w-2xl mx-auto relative z-10 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            From foundational learning to specialized expertise in Computer Science
          </motion.p>
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Education Cards */}
          <div className="space-y-12">
            {educationItems.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
              >
                {/* Education Card */}
                <div className={`relative rounded-2xl overflow-hidden p-0.5 ${
                  darkMode 
                    ? "bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900" 
                    : "bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100"
                } shadow-xl hover:shadow-2xl transition-shadow duration-300`}>
                  
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 ${
                    darkMode 
                      ? "bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.1),transparent]" 
                      : "bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.05),transparent]"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className={`relative h-full rounded-[15px] p-6 ${
                    darkMode ? "bg-gray-900" : "bg-white"
                  }`}>
                    {/* Header */}
                    <div className="flex items-start gap-5 mb-5">
                      <div className={`p-3.5 rounded-xl ${
                        darkMode 
                          ? "bg-gray-800 text-teal-400" 
                          : "bg-gray-100 text-teal-600"
                      }`}>
                        {getEducationIcon(Object.keys(EducationData)[index])}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h3 className={`text-xl font-bold ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}>
                            {edu.name}
                          </h3>
                          <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                            edu.status === 'Pursuing' 
                              ? darkMode 
                                ? "bg-teal-900/50 text-teal-300" 
                                : "bg-teal-100 text-teal-700"
                              : darkMode 
                                ? "bg-gray-800 text-gray-300" 
                                : "bg-gray-100 text-gray-700"
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                          <p className={`flex items-center ${
                            darkMode ? "text-teal-400" : "text-teal-600"
                          } text-sm font-medium`}>
                            {edu.institution}
                          </p>
                          <p className={`flex items-center text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}>
                            <FiMapPin className="mr-1.5" />
                            {edu.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className={`flex items-center mb-4 px-1 py-1.5 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    }`}>
                      <div className="flex-1 text-center">
                        <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Start</div>
                        <div className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{edu.year.start}</div>
                      </div>
                      <div className="h-0.5 flex-1 mx-2 relative">
                        <div className={`absolute inset-0 rounded-full ${
                          darkMode ? "bg-gray-700" : "bg-gray-300"
                        }`}></div>
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${
                          darkMode ? "from-teal-400 to-blue-400" : "from-teal-500 to-blue-500"
                        } ${edu.status === 'Pursuing' ? 'w-1/2' : 'w-full'}`}></div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          {edu.status === 'Pursuing' ? "Expected" : "Completed"}
                        </div>
                        <div className={`font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{edu.year.end}</div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className={`flex justify-between items-center mt-5 pt-4 border-t ${
                      darkMode ? "border-gray-800" : "border-gray-200"
                    }`}>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode 
                          ? "bg-gray-800 text-teal-400" 
                          : "bg-gray-100 text-teal-600"
                      }`}>
                        <FiAward className="mr-1.5" />
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;