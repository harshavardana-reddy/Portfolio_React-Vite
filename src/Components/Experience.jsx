/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import {
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiArrowRight,
  FiCpu,
  FiUsers,
} from "react-icons/fi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFirebase, SiGooglecloud } from "react-icons/si";

const EXPERIENCE = {
  role: "Backend Engineer Intern",
  company: "Primordial Intelligence Pvt. Ltd. (Backed by RTIH)",
  period: "Nov 2025 – Jan 2026 | Remote",
  location: "Remote",
  product:
    "Campus AI-Aided Institutional Management System",
  overview:
    "Worked as a Backend Engineer Intern on a Campus AI-Aided Institutional Management System, contributing to the design, development, and optimization of scalable backend services. Collaborated closely with frontend and AI teams to support intelligent, data-driven academic workflows.",
  contributions: [
    "Developed and maintained scalable backend services using Node.js and Express.js to support core institutional operations and academic workflows.",
    "Designed and implemented RESTful APIs for modules such as user onboarding, authentication, student/faculty/administrator management, and academic workflows.",
    "Integrated Firebase Authentication for secure user login and identity management, and Firestore for real-time data storage and synchronization.",
    "Implemented Role-Based Access Control (RBAC) to enforce fine-grained permissions for students, faculty, and administrators.",
    "Optimized backend logic and database interactions to reduce API response times and improve data consistency across services.",
    "Collaborated with frontend developers to ensure smooth API integration and reliable data flow between client and server.",
    "Worked with AI/ML teams to connect backend services with AI-driven insights and automation features.",
    "Followed clean architecture principles and MVC design patterns to keep the codebase modular, maintainable, and production-ready.",
  ],
  techStack: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "Firebase Authentication", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Firestore", icon: <SiGooglecloud className="text-blue-500" /> },
    { name: "REST APIs", icon: <FiCpu className="text-cyan-400" /> },
    { name: "RBAC", icon: <FiUsers className="text-purple-400" /> },
    { name: "MVC Architecture", icon: <FiBriefcase className="text-emerald-400" /> },
  ],
  impact:
    "This internship strengthened my experience in building secure, scalable backend systems and collaborating across frontend and AI teams in a real-world production environment.",
};

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 16,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-[#020617] text-gray-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <div
            className={`inline-flex items-center px-4 py-1.5 rounded-full mb-4 text-xs sm:text-sm font-medium ${
              darkMode
                ? "bg-gray-800 text-cyan-300 border border-cyan-500/40"
                : "bg-white text-cyan-700 border border-cyan-300/60"
            } shadow-sm`}
          >
            <FiBriefcase className="mr-2" />
            Internship Experience
          </div>
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Backend Engineer{" "}
            <span
              className={
                darkMode
                  ? "text-yellow-300"
                  : "text-yellow-600"
              }
            >
              Internship
            </span>
          </h1>
          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Campus AI-Aided Institutional Management System &mdash; building
            secure, scalable backend services for data-driven academic
            workflows.
          </p>
        </motion.div>

        {/* Top summary card */}
        <motion.div
          variants={cardItem}
          initial="hidden"
          animate="visible"
          className={`mb-10 p-6 sm:p-8 rounded-2xl shadow-xl border ${
            darkMode
              ? "bg-gray-900/70 border-gray-700/60"
              : "bg-white border-gray-200/80"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2
                className={`text-xl sm:text-2xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {EXPERIENCE.role}
              </h2>
              <p
                className={`mt-1 text-sm sm:text-base font-medium ${
                  darkMode ? "text-cyan-300" : "text-cyan-700"
                }`}
              >
                {EXPERIENCE.company}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full ${
                  darkMode
                    ? "bg-gray-800 text-gray-200"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <FiCalendar className="mr-1.5" />
                {EXPERIENCE.period}
              </div>
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full ${
                  darkMode
                    ? "bg-gray-800 text-gray-200"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <FiMapPin className="mr-1.5" />
                {EXPERIENCE.location}
              </div>
            </div>
          </div>
          <p
            className={`mt-4 text-sm sm:text-base leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {EXPERIENCE.overview}
          </p>
        </motion.div>

        {/* Main grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Key Contributions */}
          <motion.div
            variants={cardItem}
            className={`lg:col-span-2 p-6 sm:p-7 rounded-2xl shadow-lg border ${
              darkMode
                ? "bg-gray-900/80 border-gray-700/60"
                : "bg-white border-gray-200/80"
            }`}
          >
            <div className="flex items-center mb-4">
              <div
                className={`p-2.5 rounded-xl mr-3 ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <FiArrowRight
                  className={
                    darkMode ? "text-yellow-300" : "text-yellow-600"
                  }
                />
              </div>
              <div>
                <h3
                  className={`text-lg sm:text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Key Contributions &amp; Responsibilities
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Hands-on ownership across API design, security, and
                  performance.
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-sm sm:text-base">
              {EXPERIENCE.contributions.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={cardItem}
                  className="flex items-start"
                >
                  <span
                    className={`mt-1 mr-3 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs ${
                      darkMode
                        ? "bg-yellow-500/10 text-yellow-300 border border-yellow-400/40"
                        : "bg-yellow-100 text-yellow-700 border border-yellow-300/80"
                    }`}
                  >
                    ●
                  </span>
                  <span
                    className={
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech & Impact */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <motion.div
              variants={cardItem}
              className={`p-5 sm:p-6 rounded-2xl shadow-lg border ${
                darkMode
                  ? "bg-gray-900/80 border-gray-700/60"
                  : "bg-white border-gray-200/80"
              }`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-2.5 rounded-xl mr-3 ${
                    darkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <FiCpu
                    className={
                      darkMode ? "text-cyan-300" : "text-cyan-600"
                    }
                  />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Tech Stack
                  </h3>
                  <p
                    className={`text-xs sm:text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Tools and technologies used throughout the internship.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {EXPERIENCE.techStack.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -2, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm ${
                      darkMode
                        ? "bg-gray-800 text-gray-200 border border-gray-700"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                  >
                    <span className="mr-2 text-base">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Impact */}
            <motion.div
              variants={cardItem}
              className={`p-5 sm:p-6 rounded-2xl shadow-lg border ${
                darkMode
                  ? "bg-gradient-to-br from-emerald-900/70 via-gray-900/80 to-cyan-900/60 border-emerald-600/60"
                  : "bg-gradient-to-br from-emerald-50 via-white to-cyan-50 border-emerald-200"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-2 ${
                  darkMode ? "text-emerald-200" : "text-emerald-700"
                }`}
              >
                Impact & Learnings
              </h3>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? "text-emerald-50" : "text-emerald-800"
                }`}
              >
                {EXPERIENCE.impact}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


