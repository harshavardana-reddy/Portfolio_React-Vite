/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import {
  FaCode, FaServer, FaCloud, FaDatabase, FaTools, FaUsers,
  FaJava, FaPython, FaReact, FaNodeJs, FaAws,
  FaHandshake, FaComments, FaLightbulb, FaClock, FaPeopleArrows
} from "react-icons/fa";
import { DiVisualstudio, DiJavascript } from "react-icons/di";
import {
  SiSpring, SiDjango, SiJenkins, SiDocker,
  SiEclipseide, SiPycharm, SiPostgresql, SiMongodb, SiMysql,
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiGit, SiGithub,
  SiPostman, SiGooglecloud, SiExpress
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { GiBrain } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

const SkillsData = {
    languages: ["C/C++", "Java", "Python", "JavaScript"],
    fullStacks: ["Spring Boot with React.js", "MERN (MongoDB, Express, React.js, Node.js) Stack", "Python Full Stack with Django"],
    operatingSystems: ["Linux", "Windows"],
    versionControl: ["Git", "GitHub"],
    frontend: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
    backend: ["Spring Boot", "Express.js", "Node.js", "Django", "Microservices"],
    frameworks: ["Spring Framework", "Flask Framework"],
    tools: ["Docker", "Postman"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    cloud: ["AWS", "Azure", "GCP"],
    ci_cd: ["Jenkins", "GitHub Actions"],
    softSkills: ["Teamwork", "Communication", "Problem Solving", "Adaptability", "Time Management", "Leadership", "Collaboration", "Critical Thinking"],
};

const skillIcons = {
    // Languages
    "C/C++": <FaCode className="text-blue-500" />,
    "Java": <FaJava className="text-red-500" />,
    "Python": <FaPython className="text-blue-400" />,
    "JavaScript": <DiJavascript className="text-yellow-400" />,
    
    // Tech Stacks
    "Spring Boot with React.js": (
      <div className="flex items-center">
        <SiSpring className="text-green-500 text-2xl" />
        <span className="mx-1 text-sm">+</span>
        <FaReact className="text-cyan-500 text-2xl" />
      </div>
    ),
    "MERN (MongoDB, Express, React.js, Node.js) Stack": (
      <div className="flex items-center">
        <SiMongodb className="text-green-500 text-xl" />
        <SiExpress className="text-gray-800 dark:text-white text-xl mx-1" />
        <FaReact className="text-cyan-500 text-xl" />
        <FaNodeJs className="text-green-600 text-xl ml-1" />
      </div>
    ),
    "Python Full Stack with Django": (
      <div className="flex items-center">
        <FaPython className="text-blue-400 text-2xl" />
        <span className="mx-1 text-sm">+</span>
        <SiDjango className="text-green-700 text-2xl" />
      </div>
    ),
    
    // Frontend
    "HTML": <span className="text-orange-500">HTML</span>,
    "CSS": <span className="text-blue-400">CSS</span>,
    "React.js": <FaReact className="text-cyan-500" />,
    "Next.js": <SiNextdotjs className="text-gray-800 dark:text-white" />,
    "Bootstrap": <SiBootstrap className="text-purple-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    
    // Backend
    "Spring Boot": <SiSpring className="text-green-500" />,
    "Express.js": <SiExpress className="text-gray-800 dark:text-white" />,
    "Node.js": <FaNodeJs className="text-green-600" />,
    "Django": <SiDjango className="text-green-700" />,
    "Microservices": <FaServer className="text-purple-400" />,
    
    // Databases
    "MySQL": <SiMysql className="text-blue-600" />,
    "MongoDB": <SiMongodb className="text-green-500" />,
    "PostgreSQL": <SiPostgresql className="text-blue-700" />,
    
    // Cloud & DevOps
    "AWS": <FaAws className="text-orange-500" />,
    "Azure": <VscAzureDevops className="text-blue-500" />,
    "GCP": <SiGooglecloud className="text-red-500" />,
    "Jenkins": <SiJenkins className="text-red-400" />,
    "GitHub Actions": <SiGithub className="text-gray-800 dark:text-white" />,
    
    // Tools
    "Docker": <SiDocker className="text-blue-400" />,
    "Postman": <SiPostman className="text-orange-500" />,
    "Git": <SiGit className="text-orange-600" />,
    "GitHub": <SiGithub className="text-gray-800 dark:text-white" />,
    
    // IDEs
    "VS Code": <DiVisualstudio className="text-blue-500" />,
    "Eclipse": <SiEclipseide className="text-purple-600" />,
    "PyCharm": <SiPycharm className="text-green-500" />,
    
    // Soft Skills
    "Teamwork": <FaPeopleArrows className="text-blue-400" />,
    "Communication": <FaComments className="text-green-400" />,
    "Problem Solving": <FaLightbulb className="text-yellow-400" />,
    "Adaptability": <GiBrain className="text-purple-400" />,
    "Time Management": <FaClock className="text-red-400" />,
    "Leadership": <BsPeopleFill className="text-indigo-400" />,
    "Collaboration": <FaHandshake className="text-teal-400" />,
    "Critical Thinking": <GiBrain className="text-orange-400" />,
};

const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode className="text-blue-500" />,
      skills: SkillsData.languages
    },
    {
      title: "Full Stack",
      icon: <SiSpring className="text-green-500" />,
      skills: SkillsData.fullStacks
    },
    {
      title: "Frontend",
      icon: <FaReact className="text-cyan-500" />,
      skills: SkillsData.frontend
    },
    {
      title: "Backend",
      icon: <FaServer className="text-purple-500" />,
      skills: SkillsData.backend
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-yellow-500" />,
      skills: SkillsData.databases
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-orange-500" />,
      skills: [...SkillsData.cloud, ...SkillsData.ci_cd]
    },
    {
      title: "Tools & IDEs",
      icon: <FaTools className="text-pink-500" />,
      skills: [...SkillsData.tools, ...SkillsData.versionControl, "VS Code", "Eclipse", "PyCharm"]
    },
    {
      title: "Soft Skills",
      icon: <FaUsers className="text-teal-500" />,
      skills: SkillsData.softSkills
    }
];

const ScrollingSkills = ({ skills, darkMode }) => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const skillContainerRef = useRef(null);

  // In ScrollingSkills.js
useEffect(() => {
  const container = containerRef.current;
  const skillContainer = skillContainerRef.current;
  if (!container || !skillContainer) return;

  const scrollWidth = skillContainer.scrollWidth / 2;
  const duration = 20 + (skills.length * 2);

  let animationId;
  let mounted = true;

  const animate = async () => {
    if (!mounted) return;
    
    await controls.start({
      x: -scrollWidth,
      transition: { duration, ease: "linear" }
    });
    
    if (!mounted) return;
    controls.set({ x: 0 });
    animationId = requestAnimationFrame(animate);
  };

  animationId = requestAnimationFrame(animate);

  return () => {
    mounted = false;
    if (animationId) cancelAnimationFrame(animationId);
    controls.stop();
  };
}, [controls, skills.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade effect on sides */}
      <div className={`absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r ${darkMode ? 'from-gray-900' : 'from-gray-50'}`}></div>
      <div className={`absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l ${darkMode ? 'from-gray-900' : 'from-gray-50'}`}></div>
      
      <motion.div
        ref={containerRef}
        animate={controls}
        className="flex py-4"
      >
        <div ref={skillContainerRef} className="flex">
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={`${skill}-${index}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center p-6 rounded-xl min-w-[150px] mx-2 ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} transition-all duration-300 shadow-lg`}
            >
              <div className="text-4xl mb-3">
                {skillIcons[skill] || <FaCode />}
              </div>
              <span className={`text-center font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-gray-100' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'}`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          My <span className={`${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Skills</span>
        </h1>
        <p className={`text-lg max-w-2xl mx-auto mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Technologies and tools I work with to build amazing applications
        </p>
        <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'}`}></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* GitHub Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`p-6 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
        >
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>My Coding Activity</h2>
          <div className="flex justify-center overflow-x-auto py-4">
            <GitHubCalendar
              username="harshavardana-reddy"
              blockSize={14}
              blockMargin={4}
              fontSize={16}
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
              }}
              colorScheme={darkMode ? 'dark' : 'light'}
            />
          </div>
        </motion.div>

        {/* Skills Categories with Scrolling Skills */}
        {skillCategories.map((category, index) => (
          <div key={index} className="relative group">
            <div className="flex items-center mb-6 px-6">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} mr-4`}>
                {category.icon}
              </div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {category.title}
              </h2>
            </div>
            
            <ScrollingSkills skills={category.skills} darkMode={darkMode} />
          </div>
        ))}

        {/* Tech Stack Section */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className={`p-4 sm:p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
>
  <h2 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Tech Stack Overview</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
    {/* Development Tools */}
    <div className="space-y-4 sm:space-y-6">
      <h3 className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3 sm:mb-4 flex items-center`}>
        <FaCode className="mr-2 text-blue-500 text-lg sm:text-xl" /> Development Tools
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
        {["VS Code", "Eclipse", "PyCharm", "Git", "GitHub", "Postman"].map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <div className={`p-2 sm:p-3 rounded-lg mr-3 ${darkMode ? 'bg-gray-600/50' : 'bg-white'}`}>
              {skillIcons[tool]}
            </div>
            <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-white' : 'text-gray-800'} truncate`}>
              {tool}
            </span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Cloud & Deployment */}
    <div className="space-y-4 sm:space-y-6">
      <h3 className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-3 sm:mb-4 flex items-center`}>
        <FaCloud className="mr-2 text-orange-500 text-lg sm:text-xl" /> Cloud & Deployment
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
        {["AWS", "Azure", "GCP", "Docker", "Jenkins", "GitHub Actions"].map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <div className={`p-2 sm:p-3 rounded-lg mr-3 ${darkMode ? 'bg-gray-600/50' : 'bg-white'}`}>
              {skillIcons[tech]}
            </div>
            <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-white' : 'text-gray-800'} truncate`}>
              {tech}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </div>
  );
}