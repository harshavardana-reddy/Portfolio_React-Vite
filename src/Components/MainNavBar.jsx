/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiBook, FiCode, FiLayers, FiMail, FiSun, FiMoon, FiGithub, FiLinkedin, FiX } from 'react-icons/fi';
import { PiCertificateBold } from "react-icons/pi";
import Home from './Home';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import Certifications from "./Certifications"
import { useTheme } from './ThemeContext';
import socialLinks from '../Data/Sociallinks';
import { BsFillHeartFill } from 'react-icons/bs';
import { SiVite } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const navItems = [
  { name: "Home", path: "/", icon: <FiHome size={18} /> },
  { name: "About", path: "/about", icon: <FiUser size={18} /> },
  { name: "Education", path: "/education", icon: <FiBook size={18} /> },
  { name: "Certifications", path: "/certifications", icon: <PiCertificateBold size={18} /> },
  { name: "Skills", path: "/skills", icon: <FiCode size={18} /> },
  { name: "Projects", path: "/projects", icon: <FiLayers size={18} /> },
  { name: "Contact", path: "/contact", icon: <FiMail size={18} /> },
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
        `relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 flex items-center ${
          isActive 
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
          <span className="z-10">{name}</span>
          {isActive && (
            <motion.span 
              layoutId="navIndicator"
              className={`absolute inset-0 rounded-full ${
                darkMode 
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
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 
      'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-gray-100' : 
      'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'}`}
    >
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden opacity-20 dark:opacity-10">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full ${darkMode ? 'bg-white' : 'bg-purple-600'}`}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Glassmorphic Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled 
          ? 'py-2 backdrop-blur-xl shadow-xl' 
          : 'py-4 backdrop-blur-lg shadow-lg'
        } ${
          darkMode 
            ? 'bg-gray-900/70 border-b border-gray-700/50' 
            : 'bg-white/70 border-b border-gray-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 flex items-center">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center shadow-lg ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600'
                }`}
              >
                <span className="text-white font-bold text-xs">DP</span>
              </div>
              <span className={`ml-2 font-semibold text-lg bg-clip-text ${
                darkMode 
                  ? 'text-transparent bg-gradient-to-r from-purple-400 to-blue-400' 
                  : 'text-transparent bg-gradient-to-r from-purple-600 to-blue-600'
                }`}
              >
                DevPortfolio
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
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
            
            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Social icons */}
              <div className="hidden md:flex items-center space-x-3">
                {socialIcons.map((social, i) => (
                  <a 
                    key={i}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all ${
                      darkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all ${
                  darkMode 
                    ? 'text-yellow-300 hover:bg-gray-800/50' 
                    : 'text-yellow-600 hover:bg-white/80'
                }`}
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-md focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <FiX size={24} className={darkMode ? 'text-white' : 'text-gray-900'} />
                ) : (
                  <svg
                    className="h-6 w-6"
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
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        >
          <div className={`px-4 pt-2 pb-4 space-y-2 ${
            darkMode ? 'bg-gray-900/90' : 'bg-white/90'
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
            <div className="flex justify-center space-x-4 pt-4">
              {socialIcons.map((social, i) => (
                <a 
                  key={i}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all ${
                    darkMode 
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

      {/* Main Content with Page Transitions */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8">
        <div className={`backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
          darkMode 
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

      <footer className={`py-6 transition-colors duration-500 backdrop-blur-sm ${darkMode? 'bg-gray-900/10 text-gray-300':'bg-white/10 text-gray-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="text-sm text-center">
              <p className="flex items-center justify-center">
                Made with <BsFillHeartFill className="mx-1 text-red-500 animate-pulse" /> by Harsha using  
                <span className="relative mx-1">
                  <SiVite className={`text-[#ffd028] animate-bounce ${darkMode ? 'drop-shadow-[0_0_4px_#ffd02880]' : 'drop-shadow-[0_0_4px_#ffd028]'}`} />
                </span>
                Vite&nbsp;+ 
                <span className="relative mx-1">
                  <FaReact className={`text-[#61dafb] animate-spin-slow ${darkMode ? 'drop-shadow-[0_0_4px_#61dafb80]' : 'drop-shadow-[0_0_4px_#61dafb]'}`} />
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