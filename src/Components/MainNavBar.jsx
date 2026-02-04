/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiBook, FiCode, FiLayers, FiMail, FiSun, FiMoon, FiGithub, FiLinkedin, FiX, FiBriefcase } from 'react-icons/fi';
import { PiCertificateBold } from "react-icons/pi";
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from "./Experience";
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import Certifications from "./Certifications"
import { useTheme } from './ThemeContext';
import socialLinks from '../Data/Sociallinks';
import { BsFillHeartFill } from 'react-icons/bs';
import { SiVite } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { useCursor } from "./CursorContext";
import { FiMousePointer } from "react-icons/fi";


const navItems = [
  { name: "Home", path: "/", icon: <FiHome size={18} /> },
  { name: "About", path: "/about", icon: <FiUser size={18} /> },
  { name: "Education", path: "/education", icon: <FiBook size={18} /> },
  { name: "Experience", path: "/experience", icon: <FiBriefcase size={18} /> },
  { name: "Certifications", path: "/certifications", icon: <PiCertificateBold size={18} /> },
  { name: "Skills", path: "/skills", icon: <FiCode size={18} /> },
  { name: "Projects", path: "/projects", icon: <FiLayers size={18} /> },
  // { name: "Contact", path: "/contact", icon: <FiMail size={18} /> },
];

const socialIcons = [
  { icon: <FiGithub size={18} />, url: socialLinks.GitHub },
  { icon: <FiLinkedin size={18} />, url: socialLinks.LinkedIn },
];

const AnimatedNavLink = ({ to, icon, name, darkMode, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 flex items-center ${isActive
          ? darkMode
            ? 'text-white'
            : 'text-gray-900'
          : darkMode
            ? 'text-gray-300 hover:text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span className="mr-2 z-10">{icon}</span>
          <span className="z-10 md:text-sm lg:text-base">{name}</span>
          {isActive && (
            <motion.span
              layoutId="navIndicator"
              className={`absolute inset-0 rounded-full ${darkMode
                ? 'bg-gray-800/50'
                : 'bg-white/80'
                }`}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
            />
          )}
        </>
      )}
    </NavLink>
  );
};

export default function MainNavBar() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleCursor, cursorEnabled, isDesktop } = useCursor();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${darkMode
        ? 'bg-[#020617] text-gray-100'         // dark cyberpunk
        : 'bg-slate-50 text-slate-900'        // light cyberpunk
        }`}
    >
      {/* Cyberpunk neon radial glow background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          {darkMode ? (
            <>
              <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,#22d3ee_0,#22d3ee10_40%,transparent_70%)] blur-3xl" />
              <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,#a855f7_0,#a855f710_40%,transparent_70%)] blur-3xl" />
            </>
          ) : (
            <>
              <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,#22c55e_0,#22c55e10_40%,transparent_70%)] blur-3xl opacity-70" />
              <div className="absolute bottom-0 right-4 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,#06b6d4_0,#06b6d410_40%,transparent_70%)] blur-3xl opacity-70" />
            </>
          )}
        </div>
      </div>

      {/* Glassmorphic Navbar - Reduced for iPad */}
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${scrolled
          ? 'py-1 md:py-2 backdrop-blur-xl shadow-[0_0_40px_rgba(56,189,248,0.25)]'
          : 'py-2 md:py-4 backdrop-blur-lg shadow-[0_0_30px_rgba(168,85,247,0.2)]'
          } ${darkMode
            ? 'bg-slate-950/80 border-b border-cyan-500/30'
            : 'bg-white/80 border-b border-cyan-400/40'
          }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 md:h-12">
            {/* Logo/Brand - Reduced for iPad */}
            <div className="flex-shrink-0 flex items-center">
              <div
                className={`h-6 w-6 md:h-8 md:w-8 rounded-xl md:rounded-2xl flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.8)] md:shadow-[0_0_18px_rgba(34,211,238,0.8)] border border-cyan-400/60 bg-slate-900`}
              >
                <span className="text-white font-bold text-xs">DP</span>
              </div>
              <span
                className={`ml-1 md:ml-2 font-semibold text-sm md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400`}
              >
                DevPortfolio
              </span>
            </div>

            {/* Desktop Navigation - Adjusted for iPad */}
            <div className="hidden md:flex items-center space-x-0 lg:space-x-1">
              {navItems.map((item) => (
                <AnimatedNavLink
                  key={item.name}
                  to={item.path}
                  icon={item.icon}
                  name={item.name}
                  darkMode={darkMode}
                />
              ))}
            </div>

            {/* Right side controls - Adjusted for iPad */}
            <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
              {/* Social icons */}
              <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                {socialIcons.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1.5 md:p-2 rounded-full transition-all ${darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                      }`}
                  >
                    {React.cloneElement(social.icon, { size: 16 })}
                  </a>
                ))}

                {isDesktop && (
                  <button
                    onClick={toggleCursor}
                    className={`p-1.5 md:p-2 rounded-full transition-all ${cursorEnabled
                      ? "text-cyan-400 hover:bg-cyan-400/10"
                      : "text-gray-400 hover:bg-gray-400/10"
                      }`}
                    title="Toggle Custom Cursor"
                  >
                    <FiMousePointer size={16} />
                  </button>
                )}

              </div>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={`p-1.5 md:p-2 rounded-full transition-all ${darkMode
                  ? 'text-yellow-300 hover:bg-gray-800/50'
                  : 'text-yellow-600 hover:bg-white/80'
                  }`}
              >
                {darkMode ? <FiSun size={16} className="md:w-5 md:h-5" /> : <FiMoon size={16} className="md:w-5 md:h-5" />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-1.5 rounded-md focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <FiX size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
                ) : (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={darkMode ? 'white' : 'currentColor'}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`px-3 pt-1 pb-3 space-y-1 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'
            }`}
          >
            {navItems.map((item) => (
              <AnimatedNavLink
                key={item.name}
                to={item.path}
                icon={item.icon}
                name={item.name}
                darkMode={darkMode}
                onClick={closeMobileMenu}
              />
            ))}
            <div className="flex justify-center space-x-3 pt-3">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-full transition-all ${darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                    }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Page Transitions - Adjusted for iPad */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 md:pt-24 lg:pt-28 pb-6 md:pb-8">
        <div className={`backdrop-blur-lg rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl transition-all duration-500 ${darkMode
          ? 'bg-gray-900/30 border border-gray-700/30'
          : 'bg-white/30 border border-gray-200/30'
          }`}
        >
          <AnimatePresence mode='wait'>
            <Routes>
              <Route path='/' element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Home darkMode={darkMode} />
                </motion.div>
              } />
              <Route path='/about' element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <About darkMode={darkMode} />
                </motion.div>
              } />
              <Route path='/education' element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Education darkMode={darkMode} />
                </motion.div>
              } />
              <Route path='/experience' element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Experience darkMode={darkMode} />
                </motion.div>
              } />
              <Route path="/certifications" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Certifications darkMode={darkMode} />
                </motion.div>
              } />
              <Route path='/skills' element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Skills darkMode={darkMode} />
                </motion.div>
              } />
              <Route path='/projects' element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Projects darkMode={darkMode} />
                </motion.div>
              } />
              <Route path='/contact' element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Contact darkMode={darkMode} />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </div>
      </main>

      <footer className={`relative py-4 md:py-6 transition-colors duration-500 backdrop-blur-xl overflow-hidden ${darkMode
        ? 'bg-slate-950/70 text-gray-300 border-t border-cyan-500/30 shadow-[0_-0_40px_rgba(56,189,248,0.25)]'
        : 'bg-white/70 text-gray-600 border-t border-cyan-400/40 shadow-[0_-0_30px_rgba(34,211,238,0.25)]'
        }`}>
        {/* Footer neon glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {darkMode ? (
            <>
              <div className="absolute top-0 left-1/4 h-32 md:h-40 w-32 md:w-40 rounded-full bg-[radial-gradient(circle_at_center,#22d3ee_0,#22d3ee20_40%,transparent_70%)] blur-2xl md:blur-3xl" />
              <div className="absolute top-0 right-1/4 h-32 md:h-40 w-32 md:w-40 rounded-full bg-[radial-gradient(circle_at_center,#a855f7_0,#a855f720_40%,transparent_70%)] blur-2xl md:blur-3xl" />
            </>
          ) : (
            <>
              <div className="absolute top-0 left-1/3 h-32 md:h-40 w-32 md:w-40 rounded-full bg-[radial-gradient(circle_at_center,#06b6d4_0,#06b6d420_40%,transparent_70%)] blur-2xl md:blur-3xl opacity-70" />
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="text-xs md:text-sm text-center">
              <p className="flex items-center justify-center">
                Made with <BsFillHeartFill className="mx-1 text-red-500 animate-pulse" /> by Harsha using
                <span className="relative mx-1 flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[#ffd028]/20 blur-md" />
                  <SiVite className={`relative text-[#ffd028] animate-bounce ${darkMode
                      ? 'drop-shadow-[0_0_6px_#ffd028aa]'
                      : 'drop-shadow-[0_0_6px_#ffd028]'
                    }`} />
                </span>

                Vite&nbsp;+

                <span className="relative mx-1 flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[#61dafb]/20 blur-md" />
                  <FaReact className={`relative text-[#61dafb] animate-spin-slow ${darkMode
                      ? 'drop-shadow-[0_0_6px_#61dafbaa]'
                      : 'drop-shadow-[0_0_6px_#61dafb]'
                    }`} />
                </span>

                React
              </p>
              <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx="true" global="true">{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}