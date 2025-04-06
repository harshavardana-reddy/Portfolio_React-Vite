/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { FaAws, FaJava, FaReact, FaPython, FaNodeJs, FaGithub, FaLinkedin, FaCertificate } from "react-icons/fa";
import { SiSpring, SiMongodb, SiDjango, SiJenkins, SiDocker } from "react-icons/si";
import socialLinks from "../Data/Sociallinks";

// Constants for data that doesn't change
const PROFESSIONAL_SUMMARY = "Passionate Full Stack Engineer with expertise in Java (Spring Boot & Microservices), Python, and MERN stack development. Proven track record of building scalable web applications and optimizing system performance. DevOps enthusiast with hands-on experience implementing CI/CD pipelines using Jenkins, Docker, and Git, along with deploying cloud-native solutions on AWS. Committed to writing clean, efficient code and solving complex problems through innovative technical solutions.";

const EDUCATION = [
  {
    degree: "B.TECH IN COMPUTER SCIENCE AND ENGINEERING (HONORS)",
    institution: "K.L Deemed To Be University, Vaddeswaram",
    period: "Expected in 07/2026",
    gpa: "GPA: 9.4"
  },
  {
    degree: "INTERMEDIATE",
    institution: "BIIT Junior College, Guntur",
    period: "03/2022",
    gpa: "GPA: 8.3"
  },
  {
    degree: "SSC",
    institution: "BHASYAM E.M, HS, Vijayawada",
    period: "03/2020",
    gpa: "GPA: 10.0"
  }
];

const EXPERIENCE = {
  role: "Student and Subject Peer Mentor",
  institution: "KL University, Vaddeswaram, India",
  period: "08/2023 to Current",
  description: "Working as a student and subject peer-mentor at K L University."
};

const CERTIFICATIONS = [
  {
    name: "AWS Certified Developer-Associate (DVA-C02)",
    issuer: "Amazon Web Services",
    date: "January 2025",
    icon: <FaAws className="text-orange-500" />
  },
  {
    name: "Red Hat Certified Application Developer (EX183)",
    issuer: "Red Hat",
    date: "September 2024",
    icon: <FaCertificate className="text-red-500" />
  },
  {
    name: "Certified Oracle Professional Java SE11 Developer (1Z0-819)",
    issuer: "Oracle",
    date: "August 2024",
    icon: <FaJava className="text-red-500" />
  },
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    date: "April 2024",
    icon: <FaAws className="text-orange-500" />
  }
];

const SKILLS = [
  { name: "Java", icon: <FaJava className="text-red-500" />, level: 90 },
  { name: "Spring Boot", icon: <SiSpring className="text-green-500" />, level: 85 },
  { name: "React.js", icon: <FaReact className="text-blue-400" />, level: 80 },
  { name: "Python", icon: <FaPython className="text-blue-600" />, level: 75 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 70 },
  { name: "Django", icon: <SiDjango className="text-green-700" />, level: 65 },
  { name: "Jenkins", icon: <SiJenkins className="text-red-400" />, level: 70 },
  { name: "Docker", icon: <SiDocker className="text-blue-500" />, level: 75 },
  { name: "AWS", icon: <FaAws className="text-orange-500" />, level: 80 }
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: <FaGithub className="text-lg" />,
    href: socialLinks.GitHub
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-lg text-blue-500" />,
    href: socialLinks.LinkedIn
  },
  {
    name: "Credly",
    icon: <FaCertificate className="text-lg text-yellow-500" />,
    href: socialLinks.credly
  },
  {
    name: "CodeChef",
    icon: <span className="text-lg">👨‍💻</span>,
    href: "https://www.codechef.com/users/klu2200030963"
  },
  {
    name: "StopStalk",
    icon: <span className="text-lg">📊</span>,
    href: "https://www.stopstalk.com/user/profile/klu_2200030963"
  },
  {
    name: "HackerRank",
    icon: <span className="text-lg">💻</span>,
    href: "https://www.hackerrank.com/profile/klu_2200030963"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FloatingParticles = ({ darkMode }) => (
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
);

const SectionHeader = ({ title, darkMode }) => (
  <div className="text-center mb-12">
    <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      About <span className={`${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Me</span>
    </h1>
    <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-yellow-400' : 'bg-yellow-500'}`}></div>
  </div>
);

const ProfessionalSummary = ({ darkMode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`mb-16 p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
  >
    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Professional Summary</h2>
    <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{PROFESSIONAL_SUMMARY}</p>
  </motion.div>
);

const EducationSection = ({ darkMode }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
  >
    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Education</h2>
    {EDUCATION.map((edu, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        className={`mb-6 pb-6 ${index !== EDUCATION.length - 1 ? 'border-b' : ''} ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
      >
        <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{edu.degree}</h3>
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.institution}</p>
        <div className="flex justify-between mt-2">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{edu.period}</span>
          <span className={`text-sm font-medium ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>{edu.gpa}</span>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

const ExperienceSection = ({ darkMode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
  >
    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Experience</h2>
    <div>
      <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{EXPERIENCE.role}</h3>
      <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{EXPERIENCE.institution}</p>
      <div className="flex justify-between mt-2 mb-4">
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{EXPERIENCE.period}</span>
      </div>
      <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{EXPERIENCE.description}</p>
    </div>
  </motion.div>
);

const CertificationsSection = ({ darkMode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`mb-16 p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
  >
    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Certifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {CERTIFICATIONS.map((cert, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className={`p-6 rounded-xl transition-all ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700/70' : 'bg-white hover:bg-gray-100'}`}
        >
          <div className="flex items-start">
            <div className="text-3xl mr-4">
              {cert.icon}
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{cert.name}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{cert.issuer}</p>
              <p className={`text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{cert.date}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = ({ darkMode }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`mb-16 p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
  >
    <h2 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {SKILLS.map((skill, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={darkMode ? '#f6e05e' : '#d97706'}
                strokeWidth="3"
                strokeDasharray={`${skill.level}, 100`}
              />
            </svg>
            <div className="absolute text-3xl">
              {skill.icon}
            </div>
          </div>
          <span className={`text-center font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{skill.name}</span>
          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.level}%</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SocialLinksSection = ({ darkMode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700/30' : 'bg-white/80 backdrop-blur-md border border-gray-200/30'}`}
  >
    <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>Social & Coding Profiles</h2>
    <div className="flex flex-wrap gap-4">
      {SOCIAL_LINKS.map((link, index) => (
        <motion.a
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {link.icon}
          <span>{link.name}</span>
        </motion.a>
      ))}
    </div>
  </motion.div>
);

export default function About() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <FloatingParticles darkMode={darkMode} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader title="About Me" darkMode={darkMode} />
        </motion.div>

        <ProfessionalSummary darkMode={darkMode} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <EducationSection darkMode={darkMode} />
          <ExperienceSection darkMode={darkMode} />
        </div>

        <CertificationsSection darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <SocialLinksSection darkMode={darkMode} />
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