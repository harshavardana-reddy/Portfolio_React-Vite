/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import profile from "./media/images/profile.png";
import { FaGithub, FaLinkedin, FaFileDownload, FaCode, FaServer, FaCloud, FaExternalLinkAlt } from "react-icons/fa";
import { RiOpenSourceFill } from "react-icons/ri";
import { SiKubernetes, SiDocker, SiAwslambda } from "react-icons/si";
import socialLinks from "../Data/Sociallinks";

// Constants for reusable values
const TYPING_EFFECT_TEXTS = [
  "Full Stack Developer",
  "DevOps Engineer",
  "Cloud Enthusiast",
  "Open Source Contributor"
];
const TYPING_SPEED_MS = 50;
const DELAY_BEFORE_BACKSPACE_MS = 150;  // Increased delay
const DELAY_BEFORE_NEXT_TEXT_MS = 500;

const FLOATING_ICONS = [
  { 
    icon: <FaCode className="text-blue-400" size={24} />, 
    text: "Frontend", 
    bg: "bg-blue-500/20",
    skills: ["React", "Next.js", "Tailwind", "Framer Motion"]
  },
  { 
    icon: <FaServer className="text-green-400" size={24} />, 
    text: "Backend", 
    bg: "bg-green-500/20",
    skills: ["Node.js", "Express", "Django", "FastAPI"]
  },
  { 
    icon: <FaCloud className="text-purple-400" size={24} />, 
    text: "DevOps", 
    bg: "bg-purple-500/20",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    icon: <RiOpenSourceFill className="text-orange-400" size={24} />,
    text: "Open Source",
    bg: "bg-orange-500/20",
    skills: ["GitHub", "Contributions", "Community"]
  }
];

const TECH_ICONS = [
  { icon: <SiKubernetes size={24} />, name: "Kubernetes", color: "text-blue-500" },
  { icon: <SiDocker size={24} />, name: "Docker", color: "text-blue-400" },
  { icon: <SiAwslambda size={24} />, name: "AWS Lambda", color: "text-amber-500" }
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
  const driveLink = import.meta.env.VITE_APP_RESUME_LINK;
  const [isDownloading, setIsDownloading] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Typing effect
  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      if (currentIndex < TYPING_EFFECT_TEXTS[textIndex].length) {
        timeout = setTimeout(() => {
          setTypedText(prev => prev + TYPING_EFFECT_TEXTS[textIndex][currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, TYPING_SPEED_MS);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, DELAY_BEFORE_BACKSPACE_MS);
      }
    } else {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setTypedText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, TYPING_SPEED_MS / 2);
      } else {
        timeout = setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % TYPING_EFFECT_TEXTS.length);
          setIsTyping(true);
        }, DELAY_BEFORE_NEXT_TEXT_MS);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, textIndex]);

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = driveLink;
    link.download = "Pathiputtoor_Harshavardana_Reddy_Resume.pdf";
    link.onload = () => setIsDownloading(false);
    setTimeout(() => setIsDownloading(false), 10000);
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
      ? 'bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300' 
      : 'bg-gradient-to-r from-yellow-500 via-amber-600 to-yellow-500',
    titleGradient: darkMode 
      ? 'bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300' 
      : 'bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500',
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
      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-cyan-500/30' 
      : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-cyan-500/50',
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
    skillCard: darkMode
      ? 'bg-gray-800/50 border border-gray-700/50'
      : 'bg-white/80 border border-gray-200/50',
    techIcon: darkMode
      ? 'bg-gray-800/50 border-gray-700'
      : 'bg-white/80 border-gray-200'
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
            isDownloading={isDownloading}
          />
        </div>

        <ProfileSection 
          darkMode={darkMode} 
          themeClasses={themeClasses} 
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
        />
      </div>

      {/* <TechIconsSection themeClasses={themeClasses} /> */}
      <GlobalStyles />
    </div>
  );
}

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

const ContentSection = ({ darkMode, typedText, themeClasses, handleDownload, isDownloading }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
      Hi, I&apos;m <span className={`text-transparent bg-clip-text ${themeClasses.nameGradient} animate-text-glow bg-300%`}>
        Harshavardana Reddy
      </span>
    </h1>
    
    <div className="h-16 mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold">
        <span className={`text-transparent bg-clip-text ${themeClasses.titleGradient} bg-300%`}>
          {typedText}
          <span className={`ml-1 inline-block w-1 h-8 ${themeClasses.cursor} animate-pulse`}>|</span>
        </span>
      </h2>
    </div>
    
    <p className={`text-lg mb-8 max-w-lg leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
      Passionate full-stack developer and DevOps enthusiast with expertise in building scalable web applications and automating deployment pipelines. Currently pursuing my studies at KL University.
    </p>

    <div className="flex flex-wrap gap-4 mb-8">
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: isDownloading ? 1 : 1.05 }}
        whileTap={{ scale: isDownloading ? 1 : 0.95 }}
        className={`flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${themeClasses.primaryButton}`}
        disabled={isDownloading}
      >
        {isDownloading ? (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        ) : (
          <>
            <FaFileDownload /> Download Resume
          </>
        )}
      </motion.button>
      
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ${themeClasses.secondaryButton}`}
      >
        Contact Me <FaExternalLinkAlt className="text-xs" />
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

const ProfileSection = ({ darkMode, themeClasses, hoveredSkill, setHoveredSkill }) => (
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
        <div className={`absolute inset-0 rounded-full border-4 border-transparent group-hover:border-cyan-300/50 transition-all duration-300 pointer-events-none ${
          darkMode ? '' : 'group-hover:border-cyan-500/50'
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
          isHovered={hoveredSkill === index}
          onHoverStart={() => setHoveredSkill(index)}
          onHoverEnd={() => setHoveredSkill(null)}
        />
      ))}
      
      {/* <AvailabilityBadge darkMode={darkMode} /> */}
    </div>
  </motion.div>
);

const FloatingBadge = ({ item, index, darkMode, isHovered, onHoverStart, onHoverEnd }) => {
  // Updated positions for better spacing
  const getPosition = (idx) => {
    switch(idx) {
      case 0: return 'top-0 left-0';          // Frontend (top-left)
      case 1: return 'top-1/2 -left-6';       // Backend (middle-left)
      case 2: return '-bottom-6 left-1/4';     // DevOps (bottom-left-center)
      case 3: return 'top-1/3 -right-12';         // Open Source (middle-right)
      default: return 'bottom-0 right-0';      // Fallback position
    }
  };

  return (
    <motion.div
      className={`absolute ${item.bg} backdrop-blur-md rounded-full p-3 flex flex-col items-center justify-center shadow-lg ${
        getPosition(index)
      } ${darkMode ? 'border border-white/10' : 'border border-gray-300/20'}`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        scale: isHovered ? 1.15 : 1
      }}
      transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ 
        backgroundColor: darkMode ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.7)",
      }}
    >
      {item.icon}
      <span className={`text-xs font-bold mt-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        {item.text}
      </span>
      
      {isHovered && (
        <motion.div 
          className={`absolute ${index < 2 ? 'bottom-full mb-4' : 'top-full mt-4'} left-1/2 transform -translate-x-1/2 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-lg shadow-xl p-3 min-w-max z-10`}
          initial={{ opacity: 0, y: index < 2 ? 10 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-sm font-semibold mb-1">{item.text} Skills</div>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, i) => (
              <span key={i} className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700/50 text-gray-200' : 'bg-gray-200/70 text-gray-800'}`}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

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

const TechIconsSection = ({ themeClasses }) => (
  <motion.div 
    className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.5 }}
  >
    {TECH_ICONS.map((tech, index) => (
      <motion.div
        key={index}
        className={`p-3 rounded-full backdrop-blur-sm border ${themeClasses.techIcon} shadow-md flex items-center justify-center`}
        whileHover={{ y: -10, scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className={`${tech.color}`}>
          {tech.icon}
        </div>
      </motion.div>
    ))}
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
      0% { 
        background-position: 0% 50%;
        text-shadow: 0 0 5px rgba(34, 211, 238, 0.3);
      }
      50% { 
        background-position: 100% 50%;
        text-shadow: 0 0 20px rgba(192, 132, 252, 0.6);
      }
      100% { 
        background-position: 0% 50%;
        text-shadow: 0 0 5px rgba(34, 211, 238, 0.3);
      }
    }
    
    .animate-blob {
      animation: blob 7s infinite ease-in-out;
    }
    
    .animate-text-glow {
      animation: text-glow 6s infinite ease;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    
    .bg-300% {
      background-size: 300% 100%;
    }
  `}</style>
);