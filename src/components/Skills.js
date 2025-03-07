import React from "react";
import { FaJava, FaPython, FaCuttlefish, FaReact, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiScikitlearn, SiHtml5, SiCss3, SiSelenium, SiGoogleanalytics, SiGooglesheets } from "react-icons/si";
import "../styles/Skills.css";

const skills = [
  { name: "Java", icon: <FaJava className="skill-icon" /> },
  { name: "Python", icon: <FaPython className="skill-icon" /> },
  { name: "C", icon: <FaCuttlefish className="skill-icon" /> },
  { name: "React.js", icon: <FaReact className="skill-icon" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="skill-icon" /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn className="skill-icon" /> },
  { name: "HTML", icon: <SiHtml5 className="skill-icon" /> },
  { name: "CSS", icon: <SiCss3 className="skill-icon" /> },
  { name: "Selenium", icon: <SiSelenium className="skill-icon" /> },
  { name: "DSA", icon: <SiGoogleanalytics className="skill-icon" /> },
  { name: "SQL", icon: <FaDatabase className="skill-icon" /> },
  { name: "AIML", icon: <SiTensorflow className="skill-icon" /> },
  { name: "Data Analysis", icon: <SiGoogleanalytics className="skill-icon" /> },
  { name: "Google Sheets", icon: <SiGooglesheets className="skill-icon" /> },
  { name: "DBMS", icon: <FaDatabase className="skill-icon" /> }
];

function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bubble">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
