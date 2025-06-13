import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import ProjectsData from "../Data/Projects";
import { FaGithub, FaExternalLinkAlt, FaMusic, FaUniversity, FaUserClock, FaBook, FaCode,FaJava,FaNodeJs,FaShoppingCart, FaDocker } from "react-icons/fa";
import { SiDjango, SiReact,  SiSpring, SiRedhat, SiPython, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiExpress, SiTerraform  } from "react-icons/si";
import { GrSecure } from "react-icons/gr";
import { FaJenkins, FaAws } from "react-icons/fa6";


export default function Projects() {
  const { darkMode } = useTheme();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      } 
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const techItem = {
    hidden: { scale: 0, opacity: 0 },
    show: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 150
      }
    }),
    hover: {
      scale: 1.05,
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  // Get project icon based on title
  const getProjectIcon = (title) => {
    if (title.includes("MUSIC")) return <FaMusic className="text-pink-500" />;
    if (title.includes("Employee")) return <FaUserClock className="text-blue-500" />;
    if (title.includes("University")) return <FaUniversity className="text-purple-500" />;
    if (title.includes("Assignment")) return <FaBook className="text-green-500" />;
    if (title.includes("E-Commerce")) return <FaShoppingCart className="text-orange-500" />;
    return <FaCode className="text-yellow-500" />;
  };

  // Get tech stack icons with text and animations
  const getTechIcons = (techStack) => {
    const techs = techStack.split(',');
    return techs.map((tech, index) => {
      const trimmedTech = tech.trim();
      let icon;
      
      switch(trimmedTech) {
        case 'Django': icon = <SiDjango className="text-green-700" />; break;
        case 'React.js': icon = <SiReact className="text-blue-400" />; break;
        case 'Java': icon = <FaJava className="text-red-500" />; break;
        case 'Spring Boot': icon = <SiSpring className="text-green-500" />; break;
        case 'JBOSS EAP': icon = <SiRedhat className="text-red-400" />; break;
        case 'Python': icon = <SiPython className="text-blue-400" />; break;
        case 'HTML': icon = <SiHtml5 className="text-orange-500" />; break;
        case 'CSS': icon = <SiCss3 className="text-blue-500" />; break;
        case 'JavaScript': icon = <SiJavascript className="text-yellow-400" />; break;
        case 'MongoDB': icon = <SiMongodb className="text-green-500" />; break;
        case 'MySQL': icon = <SiMysql className="text-blue-600" />; break;
        case 'PostgreSQL': icon = <SiPostgresql className="text-blue-700" />; break;
        case 'Node.js': icon = <FaNodeJs className="text-green-700" />; break;
        case 'Express.js': icon = <SiExpress className="text-yellow-700" />; break;
        case 'Jwt': icon = <GrSecure className="text-purple-600" />; break;
        case 'Docker': icon = <FaDocker className="text-blue-500" />; break;
        case 'Jenkins': icon = <FaJenkins className="text-orange-500" />; break;
        case 'AWS': icon = <FaAws className="text-yellow-600" />; break;
        case 'Terraform': icon = <SiTerraform className="text-purple-600" />; break;
        default: icon = <FaCode className="text-gray-500" />;
      }

      return (
        <motion.div
          key={index}
          custom={index}
          variants={techItem}
          initial="hidden"
          animate="show"
          whileHover="hover"
          className={`flex items-center px-3 py-1.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} mr-2 mb-2`}
        >
          <motion.span 
            className="mr-2 text-lg"
            whileHover={{ rotate: [0, 10, -10, 0] }}
          >
            {icon}
          </motion.span>
          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {trimmedTech}
          </span>
        </motion.div>
      );
    });
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-gray-100' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'}`}>
      {/* Header with animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.8
        }}
        className="text-center mb-12"
      >
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          My <span className={`${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Projects</span>
        </h1>
        <motion.p 
          className={`text-lg max-w-2xl mx-auto mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A showcase of my work and contributions to real-world applications
        </motion.p>
        <motion.div 
          className={`w-24 h-1 mx-auto ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {ProjectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardItem}
            whileHover="hover"
            className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
          >
            {/* Project Header with animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`p-6 ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'} flex items-center`}
            >
              <motion.div 
                className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} mr-4 shadow-md`}
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                {getProjectIcon(project.title)}
              </motion.div>
              <div>
                <motion.h2 
                  className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {project.title}
                </motion.h2>
                <motion.p 
                  className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {project.duration}
                </motion.p>
              </div>
            </motion.div>

            {/* Project Content */}
            <div className="p-6">
              <motion.p 
                className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {project.description}
              </motion.p>
              
              {/* Tech Stack with staggered animations */}
              <div className="mb-6">
                <motion.h3 
                  className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  TECH STACK
                </motion.h3>
                <motion.div 
                  className="flex flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {getTechIcons(project.techStack)}
                </motion.div>
              </div>

              {/* Project Footer with animation */}
              <motion.div
                className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <motion.a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                >
                  <FaGithub className="mr-2" />
                  View Code
                </motion.a>
                {project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center px-4 py-2 rounded-full ${darkMode ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-yellow-400 hover:bg-yellow-500'} transition-colors`}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}