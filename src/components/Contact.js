import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Contact</h1>
      <div className="contact-links">
        <motion.a href="mailto:anushreeanushree72@gmail.com" whileHover={{ scale: 1.1 }} className="contact-item">
          <FaEnvelope className="contact-icon" /> anushreeanushree72@gmail.com
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/anushree-3a826a254" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="contact-item">
          <FaLinkedin className="contact-icon" /> LinkedIn
        </motion.a>
        <motion.a href="https://github.com/Anushree101" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="contact-item">
          <FaGithub className="contact-icon" /> GitHub
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
