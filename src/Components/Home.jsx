/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import profile from "./media/images/profile.png";
import { FaGithub, FaLinkedin, FaFileDownload, FaCode, FaServer, FaCloud } from "react-icons/fa";
import socialLinks from "../Data/Sociallinks";

// Constants for reusable values
const TYPING_EFFECT_TEXTS = [
  "Full Stack Developer",
  "DevOps Engineer",
  "Cloud Enthusiast",
  "Open Source Contributor"
];
const TYPING_SPEED_MS = 100;
const DELAY_BEFORE_BACKSPACE_MS = 500;
const DELAY_BEFORE_NEXT_TEXT_MS = 500;

const FLOATING_ICONS = [
  { icon: <FaCode className="text-blue-400" size={24} />, text: "Frontend", bg: "bg-blue-500/20" },
  { icon: <FaServer className="text-green-400" size={24} />, text: "Backend", bg: "bg-green-500/20" },
  { icon: <FaCloud className="text-purple-400" size={24} />, text: "DevOps", bg: "bg-purple-500/20" }
];

const SOCIAL_LINKS = [
  { 
    icon: <FaGithub size={24} />, 
    url: socialLinks.GitHub, 
    gradient: "from-gray-700 to-gray-900", 
    hover: "hover:shadow-blue-500/30", 
    name: "GitHub" 
  },
  { 
    icon: <FaLinkedin size={24} />, 
    url: socialLinks.LinkedIn, 
    gradient: "from-blue-600 to-blue-800", 
    hover: "hover:shadow-blue-500/50", 
    name: "LinkedIn" 
  }
];

export default function Home() {
  const { darkMode } = useTheme();
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const driveLink = "https://drive.google.com/uc?export=download&id=1bSWY0r3-ZKLTemHFwf8ke6H5KUzpPdXN"

  // Typing effect
  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      // Typing forward
      if (currentIndex < TYPING_EFFECT_TEXTS[textIndex].length) {
        timeout = setTimeout(() => {
          setTypedText(prev => prev + TYPING_EFFECT_TEXTS[textIndex][currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, TYPING_SPEED_MS);
      } else {
        // Finished typing current text, wait then start backspacing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, DELAY_BEFORE_BACKSPACE_MS);
      }
    } else {
      // Backspacing
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setTypedText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, TYPING_SPEED_MS / 2); // Faster backspacing
      } else {
        // Finished backspacing, move to next text
        timeout = setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % TYPING_EFFECT_TEXTS.length);
          setIsTyping(true);
        }, DELAY_BEFORE_NEXT_TEXT_MS);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, textIndex]);


  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = driveLink;
    link.download = "Pathiputtoor_Harshavardana_Reddy_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Theme-based styles
  const themeClasses = {
    background: darkMode 
      ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-gray-100' 
      : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900',
    nameGradient: darkMode 
      ? 'bg-gradient-to-r from-yellow-300 to-amber-400' 
      : 'bg-gradient-to-r from-yellow-500 to-amber-600',
    titleGradient: darkMode 
      ? 'bg-gradient-to-r from-yellow-300 to-pink-300' 
      : 'bg-gradient-to-r from-yellow-500 to-pink-500',
    cursor: darkMode ? 'bg-white' : 'bg-gray-900',
    blob1: darkMode 
      ? 'bg-gradient-to-r from-purple-500 to-indigo-600' 
      : 'bg-gradient-to-r from-purple-200 to-indigo-300',
    blob2: darkMode 
      ? 'bg-gradient-to-r from-pink-500 to-rose-600' 
      : 'bg-gradient-to-r from-pink-200 to-rose-300',
    blob3: darkMode 
      ? 'bg-gradient-to-r from-blue-500 to-cyan-600' 
      : 'bg-gradient-to-r from-blue-200 to-cyan-300',
    primaryButton: darkMode 
      ? 'bg-gradient-to-r from-yellow-400 to-pink-500 hover:shadow-yellow-500/30' 
      : 'bg-gradient-to-r from-yellow-500 to-pink-600 hover:shadow-yellow-500/50',
    secondaryButton: darkMode 
      ? 'bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 hover:shadow-white/30' 
      : 'bg-white/80 backdrop-blur-lg text-gray-900 hover:bg-white hover:shadow-gray-500/30',
    profileBorder: darkMode 
      ? 'border-white/50 hover:border-white' 
      : 'border-gray-300/50 hover:border-gray-400',
    profileGlow: darkMode 
      ? 'to-purple-500/20' 
      : 'to-purple-400/20',
    profileOverlay: darkMode 
      ? 'bg-white/5 group-hover:bg-transparent' 
      : 'bg-gray-100/5 group-hover:bg-transparent',
    scrollText: darkMode ? 'text-white/80' : 'text-gray-600/80',
    scrollBorder: darkMode ? 'border-white/50' : 'border-gray-600/50',
    scrollDot: darkMode ? 'bg-white/80' : 'bg-gray-600/80',
  };

  return (
    <div className={`min-h-screen overflow-hidden relative ${themeClasses.background}`}>
      <ParticleBackground darkMode={darkMode} />
      <AnimatedGradientCircles darkMode={darkMode} themeClasses={themeClasses} />
      
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between min-h-screen">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <ContentSection 
            darkMode={darkMode}
            typedText={typedText}
            themeClasses={themeClasses}
            handleDownload={handleDownload}
          />
        </div>

        <ProfileSection darkMode={darkMode} themeClasses={themeClasses} />
      </div>

      <ScrollIndicator darkMode={darkMode} themeClasses={themeClasses} />
      <GlobalStyles />
    </div>
  );
}

// Sub-components for better organization
const ParticleBackground = ({ darkMode }) => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full ${darkMode ? 'bg-white/10' : 'bg-purple-600/10'}`}
        style={{
          width: Math.random() * 10 + 5,
          height: Math.random() * 10 + 5,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, Math.random() * 100 - 50],
          x: [0, Math.random() * 100 - 50],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const AnimatedGradientCircles = ({ darkMode, themeClasses }) => (
  <motion.div
    className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className={`absolute top-20 left-10 w-40 h-40 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob ${themeClasses.blob1}`}></div>
    <div className={`absolute top-1/4 right-20 w-48 h-48 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000 ${themeClasses.blob2}`}></div>
    <div className={`absolute bottom-20 left-1/3 w-52 h-52 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000 ${themeClasses.blob3}`}></div>
  </motion.div>
);

const ContentSection = ({ darkMode, typedText, themeClasses, handleDownload }) => (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
      Hi, I&apos;m <span className={`text-transparent bg-clip-text ${themeClasses.nameGradient} animate-text-glow`}>
        Harshavardana Reddy
      </span>
    </h1>
    
    <div className="h-16 mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold">
        <span className={`text-transparent bg-clip-text ${themeClasses.titleGradient}`}>
          {typedText}
          <span className={`ml-1 inline-block w-1 h-8 ${themeClasses.cursor}`}>|</span>
        </span>
      </h2>
    </div>
    
    <p className={`text-lg mb-8 max-w-lg leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      Passionate about building scalable web applications and automating 
      deployment pipelines. Currently pursuing my studies at KL University.
    </p>

    <div className="flex flex-wrap gap-4 mb-8">
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${themeClasses.primaryButton}`}
      >
        <FaFileDownload /> Download Resume
      </motion.button>
      
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ${themeClasses.secondaryButton}`}
      >
        Contact Me
      </motion.a>
    </div>

    <SocialIcons />
  </motion.div>
);

const SocialIcons = () => (
  <motion.div 
    className="flex gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    {SOCIAL_LINKS.map((social, index) => (
      <motion.a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 bg-gradient-to-br ${social.gradient} p-3 rounded-full text-white shadow-lg hover:shadow-xl ${social.hover} transition-all backdrop-blur-sm`}
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={social.name}
      >
        {social.icon}
      </motion.a>
    ))}
  </motion.div>
);

const ProfileSection = ({ darkMode, themeClasses }) => (
  <motion.div
    className="md:w-1/2 flex justify-center relative"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="relative">
      <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 overflow-hidden shadow-2xl group transition-all duration-500 ${themeClasses.profileBorder}`}>
        <img 
          src={profile}
          alt="Pathiputtoor Harshavardana Reddy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 rounded-full border-4 border-transparent group-hover:border-yellow-300/50 transition-all duration-300 pointer-events-none ${
          darkMode ? '' : 'group-hover:border-yellow-500/50'
        }`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent transition-opacity duration-500 ${themeClasses.profileGlow} opacity-0 group-hover:opacity-100`}></div>
        <div className={`absolute inset-0 transition-all duration-500 ${themeClasses.profileOverlay}`}></div>
      </div>
      
      {FLOATING_ICONS.map((item, index) => (
        <FloatingBadge 
          key={index}
          item={item}
          index={index}
          darkMode={darkMode}
        />
      ))}
      
      <AvailabilityBadge darkMode={darkMode} />
    </div>
  </motion.div>
);

const FloatingBadge = ({ item, index, darkMode }) => (
  <motion.div
    className={`absolute ${item.bg} backdrop-blur-md rounded-full p-3 flex flex-col items-center justify-center shadow-lg ${
      index === 0 ? 'top-0 left-0' : 
      index === 1 ? 'top-1/2 -left-6' : 
      'bottom-0 left-1/4'
    } ${darkMode ? 'border border-white/10' : 'border border-gray-300/20'}`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
    whileHover={{ scale: 1.1, backgroundColor: darkMode ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.7)" }}
  >
    {item.icon}
    <span className={`text-xs font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      {item.text}
    </span>
  </motion.div>
);

const AvailabilityBadge = ({ darkMode }) => (
  <motion.div
    className={`absolute -bottom-5 -right-5 font-bold py-2 px-4 rounded-full shadow-lg flex items-center ${
      darkMode 
        ? 'bg-white text-purple-900 border border-white/20' 
        : 'bg-white text-gray-900 border border-gray-200/50'
    }`}
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
  >
    <span className="relative flex h-3 w-3 mr-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
    Student @ KLU
  </motion.div>
);

const ScrollIndicator = ({ darkMode, themeClasses }) => (
  <motion.div 
    className="fixed bottom-8 right-8 flex flex-col items-center z-20"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <span className={`text-sm mb-2 ${themeClasses.scrollText}`}>Scroll Down</span>
    <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${themeClasses.scrollBorder}`}>
      <motion.div 
        className={`w-1 h-2 rounded-full mt-2 ${themeClasses.scrollDot}`}
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  </motion.div>
);

const GlobalStyles = () => (
  <style jsx="true" global="true">{`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    
    @keyframes text-glow {
      0% { text-shadow: 0 0 5px rgba(234, 179, 8, 0.5); }
      50% { text-shadow: 0 0 20px rgba(234, 179, 8, 0.8); }
      100% { text-shadow: 0 0 5px rgba(234, 179, 8, 0.5); }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animate-text-glow {
      animation: text-glow 3s infinite;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
);