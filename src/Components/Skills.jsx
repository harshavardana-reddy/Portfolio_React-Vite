/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { useEffect, useRef, useState } from "react";
import {
  FaCode, FaServer, FaCloud, FaDatabase, FaTools, FaUsers,
  FaJava, FaPython, FaReact, FaNodeJs, FaAws,
  FaHandshake, FaComments, FaLightbulb, FaClock, FaPeopleArrows,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";
import { DiVisualstudio, DiJavascript } from "react-icons/di";
import {
  SiSpring, SiDjango, SiJenkins, SiDocker,
  SiEclipseide, SiPycharm, SiPostgresql, SiMongodb, SiMysql,
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiGit, SiGithub,
  SiPostman, SiGooglecloud, SiExpress, SiCodechef
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { GiBrain, GiRank3 } from "react-icons/gi";
import { BsPeopleFill, BsGraphUp } from "react-icons/bs";

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
      <SiExpress className=" text-xl mx-1" />
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
  "Express.js": <SiExpress className="" />,
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
  const isHovered = useRef(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemsWidth, setItemsWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidths = () => {
      const containerWidth = container.offsetWidth;
      const skillElements = container.querySelectorAll('div > div');
      
      let totalItemsWidth = 0;
      skillElements.forEach(el => {
        const style = window.getComputedStyle(el);
        totalItemsWidth += el.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
      });

      setContainerWidth(containerWidth);
      setItemsWidth(totalItemsWidth / 3); // Divide by 3 because we have 3 copies of the skills
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);

    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, [skills]);

  useEffect(() => {
    if (itemsWidth === 0) return;

    const sequence = async () => {
      if (!isHovered.current) {
        await controls.set({ x: 0 });
        await controls.start({
          x: -itemsWidth,
          transition: {
            duration: itemsWidth / 50,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
          }
        });
      }
    };

    sequence();

    return () => {
      controls.stop();
    };
  }, [controls, itemsWidth]);

  return (
    <div className="relative overflow-hidden py-4">
      <div className={`absolute inset-y-0 left-0 w-16 z-10 pointer-events-none bg-gradient-to-r ${darkMode ? 'from-gray-900 via-gray-900/80 to-transparent' : 'from-gray-50 via-gray-50/80 to-transparent'
        }`}></div>
      <div className={`absolute inset-y-0 right-0 w-16 z-10 pointer-events-none bg-gradient-to-l ${darkMode ? 'from-gray-900 via-gray-900/80 to-transparent' : 'from-gray-50 via-gray-50/80 to-transparent'
        }`}></div>

      <motion.div
        ref={containerRef}
        animate={controls}
        className="flex"
        style={{ willChange: 'transform' }}
        onHoverStart={() => {
          isHovered.current = true;
          controls.stop();
        }}
        onHoverEnd={() => {
          isHovered.current = false;
          const currentX = parseInt(containerRef.current.style.transform?.split('(')[1]?.split('px)')[0]) || 0;
          controls.start({
            x: -itemsWidth,
            transition: {
              from: currentX,
              duration: (itemsWidth - Math.abs(currentX)) / 50,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0
            }
          });
        }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <motion.div
            key={`${skill}-${index}`}
            className={`flex-shrink-0 flex flex-col items-center p-4 rounded-xl mx-2 ${darkMode
              ? 'bg-gray-700/50 hover:bg-gray-700/80'
              : 'bg-white hover:bg-gray-100'
              } transition-all duration-300 shadow-lg border ${darkMode
                ? 'border-gray-600/30'
                : 'border-gray-200'
              }`}
            style={{
              minWidth: SkillsData.fullStacks.includes(skill) ? '220px' : '150px',
              width:'auto'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-4xl mb-3">
              {skillIcons[skill] || <FaCode />}
            </div>
            <span className={`text-center font-medium text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const StatsCard = ({ icon, title, value, description, color, darkMode, delay }) => {
  const colorVariants = {
    blue: {
      light: 'bg-blue-100 text-blue-800',
      dark: 'bg-blue-900/60 text-blue-200',
      iconLight: 'bg-blue-500',
      iconDark: 'bg-blue-600'
    },
    green: {
      light: 'bg-green-100 text-green-800',
      dark: 'bg-green-900/60 text-green-200',
      iconLight: 'bg-green-500',
      iconDark: 'bg-green-600'
    },
    purple: {
      light: 'bg-purple-100 text-purple-800',
      dark: 'bg-purple-900/60 text-purple-200',
      iconLight: 'bg-purple-500',
      iconDark: 'bg-purple-600'
    },
    yellow: {
      light: 'bg-yellow-100 text-yellow-800',
      dark: 'bg-yellow-900/60 text-yellow-200',
      iconLight: 'bg-yellow-500',
      iconDark: 'bg-yellow-600'
    }
  };

  const colors = colorVariants[color] || colorVariants.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        damping: 10,
        stiffness: 100
      }}
      whileHover={{
        y: -5,
        boxShadow: darkMode 
          ? "0 10px 25px -5px rgba(0, 0, 0, 0.5)" 
          : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      className={`p-3 sm:p-4 rounded-xl shadow-lg flex flex-col ${darkMode ? colors.dark : colors.light
        } backdrop-blur-md border ${darkMode ? 'border-gray-700/30' : 'border-gray-200/30'
        } relative group`} // Added 'relative' and 'group' classes
    >
      {/* Tooltip container */}
      <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 pointer-events-none z-10 px-3 py-1 rounded-lg text-xs whitespace-nowrap
        ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'}`}>
        {description}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 rotate-45 
          ${darkMode ? 'bg-gray-700' : 'bg-gray-800'}`}></div>
      </div>

      <motion.div 
        className="flex items-center mb-2 sm:mb-3"
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        transition={{ delay: delay + 0.1 }}
      >
        <motion.div 
          className={`p-2 rounded-lg mr-2 sm:mr-3 ${darkMode ? colors.iconDark : colors.iconLight
            } text-white`}
          initial={{ rotate: -15, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ 
            delay: delay + 0.2,
            type: "spring",
            stiffness: 300
          }}
        >
          {icon}
        </motion.div>
        <motion.h3 
          className={`text-sm sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'} truncate`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          {title}
        </motion.h3>
      </motion.div>
      
      <motion.p
        className={`text-xl sm:text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: delay + 0.4,
          type: "spring",
          stiffness: 200
        }}
      >
        {value}
      </motion.p>
      
      <motion.p
        className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} truncate`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const RatingCard = ({ icon, platform, rating, stars, problemsSolved, rank, totalProblems, darkMode, delay }) => {
  // Color variants for different platforms
  const platformColors = {
    CodeChef: {
      light: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        iconBg: 'bg-orange-500',
        border: 'border-orange-200',
        accent: 'bg-orange-500/20'
      },
      dark: {
        bg: 'bg-orange-900/30',
        text: 'text-orange-200',
        iconBg: 'bg-orange-600',
        border: 'border-orange-800/50',
        accent: 'bg-orange-600/20'
      }
    },
    LeetCode: {
      light: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        iconBg: 'bg-yellow-500',
        border: 'border-yellow-200',
        accent: 'bg-yellow-500/20'
      },
      dark: {
        bg: 'bg-yellow-900/30',
        text: 'text-yellow-200',
        iconBg: 'bg-yellow-600',
        border: 'border-yellow-800/50',
        accent: 'bg-yellow-600/20'
      }
    },
    HackerRank: {
      light: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        iconBg: 'bg-green-500',
        border: 'border-green-200',
        accent: 'bg-green-500/20'
      },
      dark: {
        bg: 'bg-green-900/30',
        text: 'text-green-200',
        iconBg: 'bg-green-600',
        border: 'border-green-800/50',
        accent: 'bg-green-600/20'
      }
    }
  };

  const colors = platformColors[platform] || platformColors.CodeChef;
  const mode = darkMode ? 'dark' : 'light';

   return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.7, 
        delay,
        type: "spring",
        stiffness: 90
      }}
      whileHover={{
        y: -5,
        boxShadow: darkMode 
          ? "0 15px 30px -5px rgba(0, 0, 0, 0.5)" 
          : "0 15px 30px -5px rgba(0, 0, 0, 0.1)"
      }}
      className={`p-6 rounded-2xl shadow-lg flex flex-col ${colors[mode].bg} backdrop-blur-md border ${colors[mode].border}`}
    >
      <motion.div 
        className="flex items-center mb-4"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: delay + 0.1 }}
      >
        <motion.div 
          className={`p-3 rounded-lg mr-4 ${colors[mode].iconBg} text-white`}
          initial={{ rotate: -20, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ 
            delay: delay + 0.2,
            type: "spring",
            stiffness: 300
          }}
        >
          {icon}
        </motion.div>
        <motion.h3 
          className={`text-xl font-bold ${colors[mode].text}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          {platform}
        </motion.h3>
      </motion.div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.4 }}
        >
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Rating</p>
          <motion.p 
            className={`text-2xl font-bold ${colors[mode].text}`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: delay + 0.5,
              type: "spring",
              stiffness: 200
            }}
          >
            {rating}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.6 }}
        >
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Stars</p>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: delay + 0.7,
              type: "spring"
            }}
          >
            <motion.span
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1.2, 1]
              }}
              transition={{ 
                delay: delay + 0.8,
                duration: 0.6,
                times: [0, 0.3, 0.6, 1]
              }}
            >
              <FaStar className="text-yellow-400 mr-1" />
            </motion.span>
            <span className={`text-2xl font-bold ${colors[mode].text}`}>
              {stars}
            </span>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.9 }}
        >
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Problems Solved</p>
          <motion.p 
            className={`text-xl font-bold ${colors[mode].text}`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: delay + 1.0,
              type: "spring",
              stiffness: 200
            }}
          >
            {problemsSolved}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 1.1 }}
        >
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Global Rank</p>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: delay + 1.2,
              type: "spring"
            }}
          >
            <GiRank3 className={`${darkMode ? 'text-blue-300' : 'text-blue-500'} mr-1 text-xl`} />
            <span className={`text-xl font-bold ${colors[mode].text}`}>
              {rank}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Total Problems Solved Section */}
      <motion.div 
        className={`mt-4 pt-4 border-t ${colors[mode].border}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 1.3 }}
      >
        <motion.p 
          className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ delay: delay + 1.4 }}
        >
          Total Problems Solved (All Platforms)
        </motion.p>
        <motion.div
          className={`p-3 rounded-lg ${colors[mode].accent} flex items-center justify-center`}
          initial={{ scale: 0.95, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + 1.5,
            type: "spring",
            stiffness: 150
          }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            animate={{ 
              rotate: [0, 10, -10, 0],
            }}
            transition={{ 
              delay: delay + 1.6,
              duration: 0.6
            }}
          >
            <FaCode className={`${darkMode ? 'text-purple-300' : 'text-purple-500'} mr-2 text-xl`} />
          </motion.span>
          <span className={`text-2xl font-bold ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
            {totalProblems}+
          </span>
        </motion.div>
        <motion.p 
          className={`text-xs mt-2 text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 1.7 }}
        >
          Combined from LeetCode, HackerRank & CodeChef
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const { darkMode } = useTheme();
  const [gitHubStats, setGitHubStats] = useState({
    totalRepos: 39,
    publicRepos: 29,
    Contributions: 244,
    issuesResolved: 12,
  });

  const [codeChefStats, setCodeChefStats] = useState({
    rating: "1796",
    stars: 3,
    problemsSolved: 150,
    rank: "Top 10%",
    totalProblems: 450
  });

  const totalRepos = import.meta.env.VITE_GITHUB_REPOS;
  const publicRepos = import.meta.env.VITE_GITHUB_PUBLIC_REPOS;
  const contributions = import.meta.env.VITE_GITHUB_CONTRIBUTIONS;
  const issuesResolved = import.meta.env.VITE_GITHUB_ISSUES_RESOLVED;

  const rating = import.meta.env.VITE_CODECHEF_RATING;
  const stars = import.meta.env.VITE_CODECHEF_STARS;
  const problemsSolved = import.meta.env.VITE_CODECHEF_PROBLEMS_SOLVED;
  const rank = import.meta.env.VITE_CODECHEF_RANK;
  const totalProblems = import.meta.env.VITE_CODECHEF_TOTAL_PROBLEMS;

  useEffect(()=>{
    setGitHubStats({
    totalRepos: totalRepos,
    publicRepos: publicRepos,
    Contributions: contributions,
    issuesResolved: issuesResolved,
  })

  setCodeChefStats({
    rating: rating,
    stars: stars,
    problemsSolved: problemsSolved,
    rank: rank,
    totalProblems: totalProblems
  })
  }, [totalRepos, publicRepos, contributions, issuesResolved, rating, stars, problemsSolved, rank, totalProblems])

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode
      ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-gray-100'
      : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'
      }`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
          }`}>
          My <span className={`${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Skills</span>
        </h1>
        <p className={`text-lg max-w-2xl mx-auto mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
          Technologies and tools I work with to build amazing applications
        </p>
        <motion.div
          className={`w-24 h-1 mx-auto ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        

        {/* Skills Categories with Scrolling Skills */}
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <div className="flex items-center mb-6 px-6">
              <motion.div
                className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} mr-4`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {category.icon}
              </motion.div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                {category.title}
              </h2>
            </div>

            <ScrollingSkills skills={category.skills} darkMode={darkMode} />
          </motion.div>
        ))}

        {/* GitHub Stats and CodeChef Rating Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl shadow-xl ${darkMode
                ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30'
                : 'bg-white/80 backdrop-blur-md border border-gray-200/30'
              }`}
          >
            <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              <SiGithub className="mr-3 text-gray-800 dark:text-white" /> GitHub Stats
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <StatsCard
                icon={<FaCode className="text-lg" />}
                title="Total Repos"
                value={gitHubStats.totalRepos}
                description="All repositories"
                color="blue"
                darkMode={darkMode}
                delay={0.3}
              />
              <StatsCard
                icon={<SiGithub className="text-lg" />}
                title="Public Repos"
                value={gitHubStats.publicRepos}
                description="Publicly available"
                color="green"
                darkMode={darkMode}
                delay={0.4}
              />
              <StatsCard
                icon={<BsGraphUp className="text-lg" />}
                title="Contributions"
                value={gitHubStats.Contributions}
                description="Total contributions"
                color="purple"
                darkMode={darkMode}
                delay={0.5}
              />
              <StatsCard
                icon={<FaCheckCircle className="text-lg" />}
                title="Issues Resolved"
                value={gitHubStats.issuesResolved}
                description="Closed issues/PRs"
                color="yellow"
                darkMode={darkMode}
                delay={0.6}
              />
            </div>
          </motion.div>

          {/* CodeChef Rating */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl shadow-xl ${darkMode
              ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30'
              : 'bg-white/80 backdrop-blur-md border border-gray-200/30'
              }`}
          >
            <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              <SiCodechef className="mr-3 text-orange-500" /> Competitive Coding
            </h2>

            <RatingCard
              icon={<SiCodechef className="text-xl" />}
              platform="CodeChef"
              rating={codeChefStats.rating}
              stars={codeChefStats.stars}
              problemsSolved={codeChefStats.problemsSolved}
              rank={codeChefStats.rank}
              totalProblems={codeChefStats.totalProblems}
              darkMode={darkMode}
              delay={0.3}
            />
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className={`p-4 sm:p-8 rounded-2xl shadow-xl ${darkMode
            ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30'
            : 'bg-white/80 backdrop-blur-md border border-gray-200/30'
            }`}
        >
          <h2 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'
            }`}>Tech Stack Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Development Tools */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'
                } mb-3 sm:mb-4 flex items-center`}>
                <FaCode className="mr-2 text-blue-500 text-lg sm:text-xl" /> Development Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                {["VS Code", "Eclipse", "PyCharm", "Git", "GitHub", "Postman"].map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`flex items-center p-3 sm:p-4 rounded-lg ${darkMode
                      ? 'bg-gray-700/50 hover:bg-gray-700'
                      : 'bg-gray-100 hover:bg-gray-200'
                      } border ${darkMode
                        ? 'border-gray-600/30'
                        : 'border-gray-200'
                      }`}
                  >
                    <div className={`p-2 sm:p-3 rounded-lg mr-3 ${darkMode ? 'bg-gray-600/50' : 'bg-white'
                      }`}>
                      {skillIcons[tool]}
                    </div>
                    <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                      } truncate`}>
                      {tool}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cloud & Deployment */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'
                } mb-3 sm:mb-4 flex items-center`}>
                <FaCloud className="mr-2 text-orange-500 text-lg sm:text-xl" /> Cloud & Deployment
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                {["AWS", "Azure", "GCP", "Docker", "Jenkins", "GitHub Actions"].map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`flex items-center p-3 sm:p-4 rounded-lg ${darkMode
                      ? 'bg-gray-700/50 hover:bg-gray-700'
                      : 'bg-gray-100 hover:bg-gray-200'
                      } border ${darkMode
                        ? 'border-gray-600/30'
                        : 'border-gray-200'
                      }`}
                  >
                    <div className={`p-2 sm:p-3 rounded-lg mr-3 ${darkMode ? 'bg-gray-600/50' : 'bg-white'
                      }`}>
                      {skillIcons[tech]}
                    </div>
                    <span className={`text-sm sm:text-base font-medium ${darkMode ? 'text-white' : 'text-gray-800'
                      } truncate`}>
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