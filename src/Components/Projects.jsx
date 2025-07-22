/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import ProjectsData from "../Data/Projects";
import { FaGithub, FaExternalLinkAlt, FaMusic, FaUniversity, FaUserClock, FaBook, FaCode, FaJava, FaNodeJs, FaShoppingCart, FaDocker, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { SiDjango, SiReact, SiSpring, SiRedhat, SiPython, SiHtml5, SiCss3, SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiExpress, SiTerraform } from "react-icons/si";
import { GrSecure } from "react-icons/gr";
import { FaJenkins, FaAws } from "react-icons/fa6";
import ecom1 from "../assets/projects/ecom/Screenshot (2856).png"
import ecom2 from "../assets/projects/ecom/Screenshot (2857).png"
import ecom3 from "../assets/projects/ecom/Screenshot (2858).png"
import ecom4 from "../assets/projects/ecom/Screenshot (2859).png"
import ecom5 from "../assets/projects/ecom/Screenshot (2860).png"
import ecom6 from "../assets/projects/ecom/Screenshot (2861).png"
import ecom7 from "../assets/projects/ecom/Screenshot (2862).png"
import ecom8 from "../assets/projects/ecom/Screenshot (2863).png"
import ecom9 from "../assets/projects/ecom/Screenshot (2864).png"
import ecom10 from "../assets/projects/ecom/Screenshot (2865).png"
import ecom11 from "../assets/projects/ecom/Screenshot (2866).png"
import ecom12 from "../assets/projects/ecom/Screenshot (2867).png"
import ecom13 from "../assets/projects/ecom/Screenshot (2868).png"
import ecom14 from "../assets/projects/ecom/Screenshot (2869).png"
import ecom15 from "../assets/projects/ecom/Screenshot (2870).png"
import ecom16 from "../assets/projects/ecom/Screenshot (2871).png"
import ecom17 from "../assets/projects/ecom/Screenshot (2872).png"
import ecom18 from "../assets/projects/ecom/Screenshot (2873).png"
import ecom19 from "../assets/projects/ecom/Screenshot (2874).png"
import ecom20 from "../assets/projects/ecom/Screenshot (2875).png"
import ecom21 from "../assets/projects/ecom/Screenshot (2876).png"
import ecom22 from "../assets/projects/ecom/Screenshot (2877).png"
import ecom23 from "../assets/projects/ecom/Screenshot (2878).png"
import ecom24 from "../assets/projects/ecom/Screenshot (2879).png"
import ecom25 from "../assets/projects/ecom/Screenshot (2880).png"
import ecom26 from "../assets/projects/ecom/Screenshot (2881).png"
import ecom27 from "../assets/projects/ecom/Screenshot (2882).png"
import ecom28 from "../assets/projects/ecom/Screenshot (2883).png"
import ecom29 from "../assets/projects/ecom/Screenshot (2884).png"
import ecom30 from "../assets/projects/ecom/Screenshot (2885).png"
import ecom31 from "../assets/projects/ecom/Screenshot (2886).png"
import ecom32 from "../assets/projects/ecom/Screenshot (2887).png"
import ecom33 from "../assets/projects/ecom/Screenshot (2888).png"
import ecom34 from "../assets/projects/ecom/Screenshot (2889).png"
import ecom35 from "../assets/projects/ecom/Screenshot (2890).png"
import ecom36 from "../assets/projects/ecom/Screenshot (2891).png"
import ecom37 from "../assets/projects/ecom/Screenshot (2892).png"
import ecom38 from "../assets/projects/ecom/Screenshot (2893).png"
import ecom39 from "../assets/projects/ecom/Screenshot (2894).png"
import ecom40 from "../assets/projects/ecom/Screenshot (2895).png"
import ecom41 from "../assets/projects/ecom/Screenshot (2896).png"
import ecom42 from "../assets/projects/ecom/Screenshot (2897).png"
import ecom43 from "../assets/projects/ecom/Screenshot (2898).png"
import ecom44 from "../assets/projects/ecom/Screenshot (2899).png"
import ecom45 from "../assets/projects/ecom/Screenshot (2900).png"

import elms1 from "../assets/projects/elms/Screenshot (2808).png"
import elms2 from "../assets/projects/elms/Screenshot (2809).png"
import elms3 from "../assets/projects/elms/Screenshot (2810).png"
import elms4 from "../assets/projects/elms/Screenshot (2811).png"
import elms5 from "../assets/projects/elms/Screenshot (2812).png"
import elms6 from "../assets/projects/elms/Screenshot (2813).png"
import elms7 from "../assets/projects/elms/Screenshot (2814).png"
import elms8 from "../assets/projects/elms/Screenshot (2815).png"
import elms9 from "../assets/projects/elms/Screenshot (2816).png"
import elms10 from "../assets/projects/elms/Screenshot (2817).png"
import elms11 from "../assets/projects/elms/Screenshot (2818).png"
import elms12 from "../assets/projects/elms/Screenshot (2819).png"
import elms13 from "../assets/projects/elms/Screenshot (2820).png"

import uems1 from "../assets/projects/uems/Screenshot (2837).png"
import uems2 from "../assets/projects/uems/Screenshot (2838).png"
import uems3 from "../assets/projects/uems/Screenshot (2839).png"
import uems4 from "../assets/projects/uems/Screenshot (2840).png"
import uems5 from "../assets/projects/uems/Screenshot (2841).png"
import uems6 from "../assets/projects/uems/Screenshot (2842).png"
import uems7 from "../assets/projects/uems/Screenshot (2843).png"
import uems8 from "../assets/projects/uems/Screenshot (2844).png"
import uems9 from "../assets/projects/uems/Screenshot (2845).png"
import uems10 from "../assets/projects/uems/Screenshot (2846).png"
import uems11 from "../assets/projects/uems/Screenshot (2847).png"
import uems12 from "../assets/projects/uems/Screenshot (2848).png"
import uems13 from "../assets/projects/uems/Screenshot (2849).png"
import uems14 from "../assets/projects/uems/Screenshot (2850).png"
import uems15 from "../assets/projects/uems/Screenshot (2851).png"
import uems16 from "../assets/projects/uems/Screenshot (2852).png"
import uems17 from "../assets/projects/uems/Screenshot (2853).png"
import uems18 from "../assets/projects/uems/Screenshot (2854).png"
import uems19 from "../assets/projects/uems/Screenshot (2855).png"

import oags1 from "../assets/projects/oags/Screenshot (2879).png"
import oags2 from "../assets/projects/oags/Screenshot (2880).png"
import oags3 from "../assets/projects/oags/Screenshot (2881).png"
import oags4 from "../assets/projects/oags/Screenshot (2882).png"
import oags5 from "../assets/projects/oags/Screenshot (2883).png"
import oags6 from "../assets/projects/oags/Screenshot (2884).png"
import oags7 from "../assets/projects/oags/Screenshot (2885).png"
import oags8 from "../assets/projects/oags/Screenshot (2886).png"
import oags9 from "../assets/projects/oags/Screenshot (2887).png"
import oags10 from "../assets/projects/oags/Screenshot (2888).png"
import oags11 from "../assets/projects/oags/Screenshot (2889).png"
import oags12 from "../assets/projects/oags/Screenshot (2890).png"
import oags13 from "../assets/projects/oags/Screenshot (2891).png"
import oags14 from "../assets/projects/oags/Screenshot (2892).png"
import oags15 from "../assets/projects/oags/Screenshot (2893).png"
import oags16 from "../assets/projects/oags/Screenshot (2894).png"
import oags17 from "../assets/projects/oags/Screenshot (2895).png"
import oags18 from "../assets/projects/oags/Screenshot (2896).png"
import oags19 from "../assets/projects/oags/Screenshot (2897).png"
import oags20 from "../assets/projects/oags/Screenshot (2898).png"
import oags21 from "../assets/projects/oags/Screenshot (2899).png"
import oags22 from "../assets/projects/oags/Screenshot (2900).png"
import oags23 from "../assets/projects/oags/Screenshot (2901).png"
import oags24 from "../assets/projects/oags/Screenshot (2902).png"
import oags25 from "../assets/projects/oags/Screenshot (2903).png"
import oags26 from "../assets/projects/oags/Screenshot (2904).png"
import oags27 from "../assets/projects/oags/Screenshot (2905).png"
import oags28 from "../assets/projects/oags/Screenshot (2906).png"

import mss1 from "../assets/projects/mss/Screenshot (2822).png"
import mss2 from "../assets/projects/mss/Screenshot (2823).png"
import mss3 from "../assets/projects/mss/Screenshot (2824).png"
import mss4 from "../assets/projects/mss/Screenshot (2825).png"
import mss5 from "../assets/projects/mss/Screenshot (2826).png"
import mss6 from "../assets/projects/mss/Screenshot (2827).png"
import mss7 from "../assets/projects/mss/Screenshot (2828).png"
import mss8 from "../assets/projects/mss/Screenshot (2829).png"
import mss9 from "../assets/projects/mss/Screenshot (2830).png"
import mss10 from "../assets/projects/mss/Screenshot (2831).png"
import mss11 from "../assets/projects/mss/Screenshot (2832).png"
import mss12 from "../assets/projects/mss/Screenshot (2833).png"
import mss13 from "../assets/projects/mss/Screenshot (2834).png"
import mss14 from "../assets/projects/mss/Screenshot (2835).png"
import mss15 from "../assets/projects/mss/Screenshot (2836).png"
import React, { useState, useEffect, useRef } from "react";
import ImageModal from "../utils/Modals";

const projectImages = {
  ecom: [ecom1, ecom2, ecom3, ecom4, ecom5, ecom6, ecom7, ecom8, ecom9, ecom10, ecom11, ecom12, ecom13, ecom14, ecom15, ecom16, ecom17, ecom18, ecom19, ecom20, ecom21, ecom22, ecom23, ecom24, ecom25, ecom26, ecom27, ecom28, ecom29, ecom30, ecom31, ecom32, ecom33, ecom34, ecom35, ecom36, ecom37, ecom38, ecom39, ecom40, ecom41, ecom42, ecom43, ecom44, ecom45],
  elms: [elms1, elms2, elms3, elms4, elms5, elms6, elms7, elms8, elms9, elms10, elms11, elms12, elms13],
  mss: [mss1, mss2, mss3, mss4, mss5, mss6, mss7, mss8, mss9, mss10, mss11, mss12, mss13, mss14, mss15],
  oags: [oags1, oags2, oags3, oags4, oags5, oags6, oags7, oags8, oags9, oags10, oags11, oags12, oags13, oags14, oags15, oags16, oags17, oags18, oags19, oags20, oags21, oags22, oags23, oags24, oags25, oags26, oags27, oags28],
  uems: [uems1, uems2, uems3, uems4, uems5, uems6, uems7, uems8, uems9, uems10, uems11, uems12, uems13, uems14, uems15, uems16, uems17, uems18, uems19]
}


export default function Projects() {
  const { darkMode } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRefs = useRef({});
  const [navDirection, setNavDirection] = useState('next'); // 'next' or 'prev'

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
        duration: 0.6
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.2
      }
    }
  };

  const techItem = {
    hidden: { scale: 0.8, opacity: 0 },
    show: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.07,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }),
    hover: {
      scale: 1.1,
      y: -3,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: { opacity: 0, scale: 0.95 }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const slideUp = {
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

  // Touch handlers for carousel
  const handleTouchStart = (e, projectIndex) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e, projectIndex) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (projectIndex) => {
    if (!touchStart || !touchEnd) return;

    const threshold = 50; // minimum distance to trigger swipe
    const difference = touchStart - touchEnd;

    if (difference > threshold) {
      // Swipe left - next image
      navigateImage('next', projectIndex);
    } else if (difference < -threshold) {
      // Swipe right - previous image
      navigateImage('prev', projectIndex);
    }

    setTouchStart(null);
    setTouchEnd(null);
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

  // Get project key for image mapping
  const getProjectKey = (title) => {
    if (title.includes("E-Commerce")) return "ecom";
    if (title.includes("Assignment")) return "oags";
    if (title.includes("University")) return "uems";
    if (title.includes("Employee")) return "elms";
    if (title.includes("MUSIC")) return "mss";
    return "";
  };

  // Get tech stack icons with text and animations
  const getTechIcons = (techStack) => {
    const techs = techStack.split(',');
    return techs.map((tech, index) => {
      const trimmedTech = tech.trim();
      let icon;

      switch (trimmedTech) {
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

  const openImageModal = (projectIndex, imageIndex = 0) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(prev => ({ ...prev, [projectIndex]: imageIndex }));
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  // Enhanced image navigation with spring physics
  const navigateImage = (direction, projectIndex) => {
    setNavDirection(direction); // Track the direction
    const projectKey = getProjectKey(ProjectsData[projectIndex].title);
    const imagesCount = projectImages[projectKey].length;

    setCurrentImageIndex(prev => {
      const currentIndex = prev[projectIndex] || 0;
      let newIndex;

      if (direction === 'prev') {
        newIndex = currentIndex === 0 ? imagesCount - 1 : currentIndex - 1;
      } else {
        newIndex = currentIndex === imagesCount - 1 ? 0 : currentIndex + 1;
      }

      return { ...prev, [projectIndex]: newIndex };
    });
  };

  useEffect(() => {
    ProjectsData.forEach((_, index) => {
      carouselRefs.current[index] = carouselRefs.current[index] || React.createRef();
    });
  }, []);


  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-gray-100' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'}`}>
      {/* Enhanced Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          mass: 0.5,
          duration: 0.8
        }}
        className="text-center mb-12"
      >
        <motion.h1
          className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My <motion.span
            className={`${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >Projects</motion.span>
        </motion.h1>

        <motion.p
          className={`text-lg max-w-2xl mx-auto mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          A showcase of my work and contributions to real-world applications
        </motion.p>

        <motion.div
          className={`w-24 h-1 mx-auto ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        />
      </motion.div>

      {/* Projects Grid with Enhanced Staggering */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {ProjectsData.map((project, projectIndex) => {
          const projectKey = getProjectKey(project.title);
          const images = projectImages[projectKey] || [];
          const currentIndex = currentImageIndex[projectIndex] || 0;

          return (
            <motion.div
              key={projectIndex}
              variants={cardItem}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30 hover:shadow-yellow-500/10' : 'bg-white/80 backdrop-blur-md border border-gray-200/30 hover:shadow-yellow-500/20'}`}
            >
              {/* Enhanced Project Header Animation */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + projectIndex * 0.1 }}
                className={`p-6 ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'} flex items-center`}
              >
                <motion.div
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} mr-4 shadow-md`}
                  whileHover={{ rotate: [0, 5, -5, 0], scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    duration: 0.5
                  }}
                >
                  {getProjectIcon(project.title)}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + projectIndex * 0.1 }}
                >
                  <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {project.title}
                  </h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {project.duration}
                  </p>
                </motion.div>
              </motion.div>

              {/* Project Content */}
              <div className="p-6">
                {/* Enhanced Image Gallery */}
                {images.length > 0 && (
                  <motion.div
                    className="mb-6 relative group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + projectIndex * 0.1 }}
                  >
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={imageVariants}
                      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                      onClick={() => openImageModal(projectIndex, currentIndex)}
                      onTouchStart={(e) => handleTouchStart(e, projectIndex)}
                      onTouchMove={(e) => handleTouchMove(e, projectIndex)}
                      onTouchEnd={() => handleTouchEnd(projectIndex)}
                      whileHover={{ scale: 1.01 }}
                    >
                      <img
                        src={images[currentIndex]}
                        alt={`${project.title} screenshot ${currentIndex + 1}`}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover"
                        loading="lazy"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          className="text-white bg-black/60 px-4 py-2 rounded-full text-sm sm:text-base backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          View Gallery ({images.length} images)
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Enhanced Image Navigation Dots */}
                    {images.length > 1 && (
                      <motion.div
                        className="flex justify-center mt-3 space-x-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + projectIndex * 0.1 }}
                      >
                        {images.map((_, idx) => (
                          <motion.button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => ({ ...prev, [projectIndex]: idx }));
                            }}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${currentIndex === idx ?
                              (darkMode ? 'bg-yellow-400' : 'bg-yellow-500') :
                              (darkMode ? 'bg-gray-600' : 'bg-gray-300')}`}
                            aria-label={`Go to image ${idx + 1}`}
                            whileHover={{ scale: 1.3 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                )}

                <motion.p
                  className={`mb-4 text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + projectIndex * 0.1 }}
                >
                  {project.description}
                </motion.p>

                {/* Enhanced Tech Stack Animation */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + projectIndex * 0.1 }}
                >
                  <motion.h3
                    className={`text-xs sm:text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + projectIndex * 0.1 }}
                  >
                    TECH STACK
                  </motion.h3>
                  <motion.div
                    className="flex flex-wrap"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {getTechIcons(project.techStack)}
                  </motion.div>
                </motion.div>

                {/* Enhanced Project Footer Animation */}
                <motion.div
                  className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + projectIndex * 0.1 }}
                >
                  <motion.a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: darkMode ? '0 5px 15px rgba(253, 230, 138, 0.3)' : '0 5px 15px rgba(234, 179, 8, 0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center px-4 py-2 rounded-full text-sm sm:text-base ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all w-full sm:w-auto justify-center`}
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </motion.a>

                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: darkMode ? '0 5px 15px rgba(253, 230, 138, 0.4)' : '0 5px 15px rgba(234, 179, 8, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center px-4 py-2 rounded-full text-sm sm:text-base ${darkMode ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-yellow-400 hover:bg-yellow-500'} transition-all w-full sm:w-auto justify-center`}
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Enhanced Image Modal */}
      <ImageModal isOpen={isModalOpen} onClose={closeImageModal}>
        <motion.div
          className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => handleTouchStart(e, currentProjectIndex)}
          onTouchMove={(e) => handleTouchMove(e, currentProjectIndex)}
          onTouchEnd={() => handleTouchEnd(currentProjectIndex)}
        >
          {/* Glass background with subtle animation */}
          <motion.div
            className={`absolute inset-0 ${darkMode ? 'bg-gray-900/70' : 'bg-white/70'} backdrop-blur-md`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal content */}
          <div className="relative h-full flex flex-col">
            {/* Header with enhanced animation */}
            <motion.div
              className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <motion.h3
                className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {ProjectsData[currentProjectIndex].title}
              </motion.h3>

              <motion.button
                onClick={closeImageModal}
                className={`p-2 rounded-full transition-all ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-200 text-gray-500'}`}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Image container with enhanced transitions */}
            <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
              <motion.div
                key={currentImageIndex[currentProjectIndex]}
                initial={{ opacity: 0, x: navDirection === 'next' ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: navDirection === 'next' ? -100 : 100 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.4
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <motion.img
                  src={projectImages[getProjectKey(ProjectsData[currentProjectIndex].title)][currentImageIndex[currentProjectIndex] || 0]}
                  alt={`${ProjectsData[currentProjectIndex].title} screenshot`}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-xl"
                  loading="eager"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Enhanced Navigation Arrows */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev', currentProjectIndex);
                  }}
                  className={`absolute left-2 sm:left-4 md:-left-12 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} shadow-lg transition-all hidden sm:flex items-center justify-center`}
                  whileHover={{ scale: 1.15, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronLeft className="text-lg sm:text-xl" />
                </motion.button>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next', currentProjectIndex);
                  }}
                  className={`absolute right-2 sm:right-4 md:-right-12 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} shadow-lg transition-all hidden sm:flex items-center justify-center`}
                  whileHover={{ scale: 1.15, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaChevronRight className="text-lg sm:text-xl" />
                </motion.button>

                {/* Mobile swipe indicators with animation */}
                <motion.div
                  className="sm:hidden absolute bottom-4 left-0 right-0 flex justify-center space-x-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[1, 2, 3].map((_, i) => (
                    <motion.span
                      key={i}
                      className={`block w-8 h-1 rounded-full ${darkMode ? 'bg-gray-500' : 'bg-gray-300'}`}
                      animate={{
                        width: i === 1 ? '2rem' : '0.5rem',
                        opacity: i === 1 ? 1 : 0.6
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Enhanced Footer with Thumbnails */}
            <motion.div
              className={`p-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col items-center space-y-2">
                {/* Animated Image Counter */}
                <motion.div
                  className={`text-sm w-full text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  key={currentImageIndex[currentProjectIndex]}
                >
                  {`Image ${currentImageIndex[currentProjectIndex] + 1} of ${projectImages[getProjectKey(ProjectsData[currentProjectIndex].title)].length}`}
                </motion.div>

                {/* Enhanced Thumbnail Navigation */}
                <motion.div
                  className="w-full overflow-x-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex space-x-2 justify-center min-w-max mx-auto pb-2">
                    {projectImages[getProjectKey(ProjectsData[currentProjectIndex].title)].map((img, idx) => (
                      <motion.button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(prev => ({ ...prev, [currentProjectIndex]: idx }));
                        }}
                        className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-md overflow-hidden border-2 transition-all ${currentImageIndex[currentProjectIndex] === idx ?
                          (darkMode ? 'border-yellow-400 scale-110' : 'border-yellow-500 scale-110') :
                          (darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300')}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + idx * 0.02 }}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </ImageModal>
    </div>
  );
}