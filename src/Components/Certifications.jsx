/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import CertificationsData from "../Data/Certifications"; // Import your certifications data

export default function Certifications() {
  const { darkMode } = useTheme();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span className={`${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Certifications</span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Industry-recognized credentials that validate my expertise in various technologies and platforms.
          </p>
          <div className={`w-24 h-1 mx-auto mt-4 ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'}`}></div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {CertificationsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
            >
              <div className="p-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      className={`w-24 h-24 rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                    >
                      <img 
                        src={cert.badge} 
                        alt={`${cert.issuer} badge`} 
                        className="w-full h-full object-contain p-2"
                      />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {cert.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                        {cert.issuer}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                        {cert.date}
                      </span>
                    </div>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {cert.description}
                    </p>
                    <motion.a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' : 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'}`}
                    >
                      Verify Credential
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* Glowing bottom border */}
              <div className={`h-1 w-full ${getCertificationColor(cert.issuer)}`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-2xl text-center ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Continuous Learning Journey
          </h3>
          <p className={`text-lg max-w-3xl mx-auto mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I&apos;m committed to staying at the forefront of technology by continually expanding my knowledge and skills through certifications and hands-on experience.
          </p>
          <motion.a
            href="https://www.credly.com/users/pathiputtoor-harshavardana-reddy.9fb32c53"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-6 py-3 rounded-full text-lg font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
          >
            View All Credentials on Credly
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <style jsx="true" global="true">{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Helper function to get color based on issuer
function getCertificationColor(issuer) {
  switch(issuer) {
    case 'Amazon Web Services':
      return 'bg-gradient-to-r from-yellow-400 to-orange-500';
    case 'Red Hat':
      return 'bg-gradient-to-r from-red-500 to-red-700';
    case 'Oracle':
      return 'bg-gradient-to-r from-red-400 to-red-600';
    default:
      return 'bg-gradient-to-r from-blue-400 to-blue-600';
  }
}