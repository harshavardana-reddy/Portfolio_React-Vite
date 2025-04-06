/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "./ThemeContext";
import React, { useEffect, useRef } from "react";
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
  "C/C++": <FaCode className="text-indigo-600 dark:text-indigo-400" />,
  "Java": <FaJava className="text-red-600 dark:text-red-400" />,
  "Python": <FaPython className="text-blue-600 dark:text-blue-400" />,
  "JavaScript": <DiJavascript className="text-yellow-600 dark:text-yellow-400" />,
  "Spring Boot with React.js": (
    <div className="flex items-center">
      <SiSpring className="text-emerald-600 dark:text-emerald-400 text-xl sm:text-2xl" />
      <span className="mx-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">+</span>
      <FaReact className="text-cyan-600 dark:text-cyan-400 text-xl sm:text-2xl" />
    </div>
  ),
  "MERN (MongoDB, Express, React.js, Node.js) Stack": (
    <div className="flex items-center">
      <SiMongodb className="text-green-600 dark:text-green-400 text-lg sm:text-xl" />
      <SiExpress className="text-gray-700 dark:text-gray-500 text-lg sm:text-xl mx-1" />
      <FaReact className="text-cyan-600 dark:text-cyan-400 text-lg sm:text-xl" />
      <FaNodeJs className="text-green-700 dark:text-green-500 text-lg sm:text-xl ml-1" />
    </div>
  ),
  "Python Full Stack with Django": (
    <div className="flex items-center">
      <FaPython className="text-blue-600 dark:text-blue-400 text-xl sm:text-2xl" />
      <span className="mx-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">+</span>
      <SiDjango className="text-green-800 dark:text-green-600 text-xl sm:text-2xl" />
    </div>
  ),
  "HTML": <span className="text-orange-600 dark:text-orange-400">HTML</span>,
  "CSS": <span className="text-blue-600 dark:text-blue-400">CSS</span>,
  "React.js": <FaReact className="text-cyan-600 dark:text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-gray-800 dark:text-gray-200" />,
  "Bootstrap": <SiBootstrap className="text-purple-600 dark:text-purple-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-600 dark:text-cyan-400" />,
  "Spring Boot": <SiSpring className="text-emerald-600 dark:text-emerald-400" />,
  "Express.js": <SiExpress className="text-gray-800 dark:text-gray-200" />,
  "Node.js": <FaNodeJs className="text-green-700 dark:text-green-500" />,
  "Django": <SiDjango className="text-green-800 dark:text-green-600" />,
  "Microservices": <FaServer className="text-violet-600 dark:text-violet-400" />,
  "MySQL": <SiMysql className="text-blue-700 dark:text-blue-500" />,
  "MongoDB": <SiMongodb className="text-green-600 dark:text-green-400" />,
  "PostgreSQL": <SiPostgresql className="text-blue-800 dark:text-blue-600" />,
  "AWS": <FaAws className="text-amber-600 dark:text-amber-400" />,
  "Azure": <VscAzureDevops className="text-blue-600 dark:text-blue-400" />,
  "GCP": <SiGooglecloud className="text-red-600 dark:text-red-400" />,
  "Jenkins": <SiJenkins className="text-red-600 dark:text-red-400" />,
  "GitHub Actions": <SiGithub className="text-gray-800 dark:text-gray-200" />,
  "Docker": <SiDocker className="text-blue-600 dark:text-blue-400" />,
  "Postman": <SiPostman className="text-orange-600 dark:text-orange-400" />,
  "Git": <SiGit className="text-orange-700 dark:text-orange-500" />,
  "GitHub": <SiGithub className="text-gray-800 dark:text-gray-200" />,
  "VS Code": <DiVisualstudio className="text-blue-600 dark:text-blue-400" />,
  "Eclipse": <SiEclipseide className="text-purple-700 dark:text-purple-500" />,
  "PyCharm": <SiPycharm className="text-emerald-700 dark:text-emerald-500" />,
  "Teamwork": <FaPeopleArrows className="text-indigo-600 dark:text-indigo-400" />,
  "Communication": <FaComments className="text-emerald-600 dark:text-emerald-400" />,
  "Problem Solving": <FaLightbulb className="text-amber-500 dark:text-amber-300" />,
  "Adaptability": <GiBrain className="text-purple-600 dark:text-purple-400" />,
  "Time Management": <FaClock className="text-rose-600 dark:text-rose-400" />,
  "Leadership": <BsPeopleFill className="text-indigo-700 dark:text-indigo-500" />,
  "Collaboration": <FaHandshake className="text-teal-600 dark:text-teal-400" />,
  "Critical Thinking": <GiBrain className="text-orange-600 dark:text-orange-400" />,
};

const skillCategories = [
  {
    title: "Languages",
    icon: <FaCode className="text-indigo-600 dark:text-indigo-400" />,
    skills: SkillsData.languages,
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800"
  },
  {
    title: "Full Stack",
    icon: <SiSpring className="text-emerald-600 dark:text-emerald-400" />,
    skills: SkillsData.fullStacks,
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "border-emerald-200 dark:border-emerald-800"
  },
  {
    title: "Frontend",
    icon: <FaReact className="text-cyan-600 dark:text-cyan-400" />,
    skills: SkillsData.frontend,
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    borderColor: "border-cyan-200 dark:border-cyan-800"
  },
  {
    title: "Backend",
    icon: <FaServer className="text-violet-600 dark:text-violet-400" />,
    skills: SkillsData.backend,
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    borderColor: "border-violet-200 dark:border-violet-800"
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-amber-600 dark:text-amber-400" />,
    skills: SkillsData.databases,
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800"
  },
  {
    title: "Cloud & DevOps",
    icon: <FaCloud className="text-blue-600 dark:text-blue-400" />,
    skills: [...SkillsData.cloud, ...SkillsData.ci_cd],
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    title: "Tools & IDEs",
    icon: <FaTools className="text-rose-600 dark:text-rose-400" />,
    skills: [...SkillsData.tools, ...SkillsData.versionControl, "VS Code", "Eclipse", "PyCharm"],
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    borderColor: "border-rose-200 dark:border-rose-800"
  },
  {
    title: "Soft Skills",
    icon: <FaUsers className="text-teal-600 dark:text-teal-400" />,
    skills: SkillsData.softSkills,
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800"
  }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};
const SkillCard = ({ category }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

 

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`rounded-xl p-6 shadow-lg ${category.bgColor} border ${category.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full bg-opacity-20 ${category.icon.props.className.replace('text-', 'bg-')} mr-3`}>
          {React.cloneElement(category.icon, { className: `${category.icon.props.className} text-2xl` })}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{category.title}</h3>
      </div>
      <ul className="space-y-2">
        {category.skills.map((skill, index) => (
          <motion.li
            key={skill}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={skillItemVariants}
            className={`flex items-center py-2 px-3 rounded-md hover:bg-opacity-20 ${
              darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'
            } transition-colors duration-200`}
          >
            <span className="mr-2 flex-shrink-0">
              {skillIcons[skill] || <FaCode className="text-gray-500" />}
            </span>
            <span className="text-gray-700 dark:text-gray-300">{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function Skills() {
  const controls = useAnimation();
  const ref = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);



  return (
    <section 
      id="skills" 
      className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={titleVariants} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            My Skills
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-700'  // Changed from gray-600 to gray-700 for better visibility
          }`}>
            Here are the technologies and skills I've worked with throughout my journey as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`rounded-xl p-6 shadow-lg ${category.bgColor} border ${category.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full bg-opacity-20 ${category.icon.props.className.replace('text-', 'bg-')} mr-3`}>
                  {React.cloneElement(category.icon, { className: `${category.icon.props.className} text-2xl` })}
                </div>
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-gray-100' : 'text-gray-800'  // Ensure good contrast in both modes
                }`}>
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={skillItemVariants}
                    className={`flex items-center py-2 px-3 rounded-md hover:bg-opacity-20 ${
                      darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'
                    } transition-colors duration-200`}
                  >
                    <span className="mr-2 flex-shrink-0">
                      {skillIcons[skill] || <FaCode className="text-gray-500" />}
                    </span>
                    <span className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-700'  // Changed from gray-600 to gray-700
                    }`}>
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
