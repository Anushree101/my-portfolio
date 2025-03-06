import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const skills = [
  { name: "Java", level: "90%" },
  { name: "Python", level: "85%" },
  { name: "Docker", level: "80%" },
  { name: "Terraform", level: "75%" },
  { name: "JavaScript", level: "70%" },
];

const About = () => {
  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>About Me</h1>
      <p>B.E. in Information Science | CGPA: 9.2</p>
      <p>Passionate about AI, ML, and Web Development.</p>
      
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <p>{skill.name}</p>
            <motion.div
              className="skill-bar"
              initial={{ width: 0 }}
              animate={{ width: skill.level }}
              transition={{ duration: 1.5 }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
