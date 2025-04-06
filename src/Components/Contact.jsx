/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend
} from "react-icons/fi";
import { useTheme } from "./ThemeContext";
import sociallinks from "../Data/Sociallinks";


const contactMethods = [
  {
    icon: <FiMail size={20} />,
    title: "Email Me",
    value: "harshapdevportfolio@gmail.com",
    action: "mailto:harshapdevportfolio@gmail.com",
    colorClass: "text-blue-400",
  },
  {
    icon: <FiPhone size={20} />,
    title: "Call Me",
    value: "+919491995885",
    action: "tel:+919491995885",
    colorClass: "text-green-400",
  },
  {
    icon: <FiMapPin size={20} />,
    title: "Location",
    value: "Vijayawada, India",
    action: "https://maps.google.com",
    colorClass: "text-purple-400",
  },
];

const socialLinks = [
  {
    icon: <FiGithub size={18} />,
    name: "github",
    url: sociallinks.GitHub,
  },
  {
    icon: <FiLinkedin size={18} />,
    name: "linkedin",
    url: sociallinks.LinkedIn,
  }
];

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const key = import.meta.env.VITE_APP_ACCESS_KEY;
      if (!key) throw new Error("API key is missing");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: key,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  

  const getContainerClasses = () => 
    darkMode 
      ? "bg-gray-900/50 border border-gray-700/30" 
      : "bg-white/70 border border-gray-200/30";

  const getTextClasses = () => 
    darkMode ? "text-white" : "text-gray-800";

  const getSecondaryTextClasses = () =>
    darkMode ? "text-gray-300" : "text-gray-600";

  const getInputClasses = () =>
    darkMode
      ? "bg-gray-800/50 border-gray-700 focus:ring-purple-500/50 focus:border-purple-500 text-white placeholder-gray-400"
      : "bg-white/90 border-gray-300 focus:ring-blue-500/50 focus:border-blue-500 text-gray-900 placeholder-gray-500";

  const getButtonClasses = () =>
    darkMode
      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
      : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600";

  const renderContactMethods = () => (
    <div className="space-y-4 sm:space-y-6">
      {contactMethods.map((method, index) => (
        <motion.a
          key={index}
          href={method.action}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className={`flex items-start p-4 sm:p-5 rounded-lg sm:rounded-xl transition-all duration-300 ${
            darkMode ? "hover:bg-gray-800/50" : "hover:bg-white/90"
          }`}
        >
          <div
            className={`p-2 sm:p-3 rounded-full ${
              darkMode ? "bg-gray-800/70" : "bg-white/90"
            } shadow-md mr-4 sm:mr-5`}
          >
            {React.cloneElement(method.icon, {
              className: `${darkMode ? method.colorClass : method.colorClass.replace('400', '600')}`,
            })}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className={`text-sm sm:text-base font-medium ${getSecondaryTextClasses()}`}>
              {method.title}
            </h4>
            <p
              className={`mt-1 text-sm sm:text-base md:text-lg truncate ${getTextClasses()}`}
              title={method.value}
            >
              {method.value}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );

  const renderSocialLinks = () => (
    <div className="flex space-x-3 sm:space-x-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 sm:p-3 rounded-full transition-all ${
            darkMode
              ? "bg-gray-800/70 hover:bg-gray-700/70 text-gray-300 hover:text-white"
              : "bg-white/90 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
          }`}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );

  const renderSuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`p-4 sm:p-6 rounded-lg sm:rounded-xl text-center ${
        darkMode
          ? "bg-green-900/30 border border-green-700/30"
          : "bg-green-100/80 border border-green-200/30"
      }`}
    >
      <FiCheckCircle className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-green-500" />
      <h4 className={`text-lg sm:text-xl font-medium mb-1 sm:mb-2 ${getTextClasses()}`}>
        Message Sent Successfully!
      </h4>
      <p className={`text-sm sm:text-base ${getSecondaryTextClasses()}`}>
        Thank you for reaching out. I&apos;ll get back to you soon.
      </p>
    </motion.div>
  );

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
            darkMode
              ? "bg-red-900/30 border border-red-700/30 text-red-300"
              : "bg-red-100/80 border border-red-200/30 text-red-700"
          }`}
        >
          {error}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label
            htmlFor="name"
            className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${getSecondaryTextClasses()}`}
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border transition-all focus:ring-2 focus:outline-none ${getInputClasses()}`}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${getSecondaryTextClasses()}`}
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border transition-all focus:ring-2 focus:outline-none ${getInputClasses()}`}
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className={`block text-xs sm:text-sm font-medium mb-1 sm:mb-2 ${getSecondaryTextClasses()}`}
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border transition-all focus:ring-2 focus:outline-none ${getInputClasses()}`}
          placeholder="Hi there, I'd like to talk about..."
        ></textarea>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base rounded-lg font-medium flex items-center justify-center space-x-2 transition-all text-white ${getButtonClasses()}`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Send Message</span>
          </>
        )}
      </motion.button>
    </form>
  );

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-clip-text ${
              darkMode
                ? "text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                : "text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
            }`}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-base sm:text-lg md:text-xl ${getSecondaryTextClasses()}`}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-lg shadow-lg lg:col-span-2 ${getContainerClasses()}`}
          >
            <h3 className={`text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 ${getTextClasses()}`}>
              Contact Information
            </h3>

            {renderContactMethods()}

            {/* Social Links */}
            <div className="mt-8 sm:mt-12">
              <h4 className={`text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${getSecondaryTextClasses()}`}>
                CONNECT WITH ME
              </h4>
              {renderSocialLinks()}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-lg shadow-lg lg:col-span-3 ${getContainerClasses()}`}
          >
            <h3 className={`text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 ${getTextClasses()}`}>
              Send Me a Message
            </h3>

            {submitSuccess ? renderSuccessMessage() : renderForm()}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`mt-8 sm:mt-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl ${
            darkMode ? "border border-gray-700/30" : "border border-gray-200/30"
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.441035448618!2d80.6488593152949!3d16.45054098863848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className={`${darkMode ? "filter grayscale-30 contrast-110" : ""}`}
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;