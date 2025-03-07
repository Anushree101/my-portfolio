import React from "react";
import { motion } from "framer-motion";
import "../styles/Experience.css";
import uniconvergeLogo from "../assets/uct.jpg";
import cdfLogo from "../assets/cdflogo.jpg";
import edunetLogo from "../assets/edunetfoundation_logo.jpg";

const experiences = [
  { company: "Uniconverge Technologies", role: "Data Science Intern", duration: "April 2024 - June 2024", logo: uniconvergeLogo },
  { company: "Connecting Dreams Foundation", role: "AI & ML Intern", duration: "October 2023 - November 2023", logo: cdfLogo },
  { company: "Edunet Foundation", role: "AI & ML Intern", duration: "June 2023 - July 2023", logo: edunetLogo },
];

const Experience = () => {
  return (
    <motion.div className="experience" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1>Experience</h1>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div key={index} className="experience-card" whileHover={{ scale: 1.05 }}>
            <img src={exp.logo} alt={exp.company} className="company-logo" />
            <h2>{exp.company}</h2>
            <p>{exp.role}</p>
            <p className="duration">{exp.duration}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
