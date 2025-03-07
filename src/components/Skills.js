import React from "react";
import "../styles/Skills.css";

const skills = [
  "Java",
  "Python",
  "C",
  "React.js",
  "TensorFlow",
  "Scikit-Learn",
  "HTML",
  "CSS",
  "Selenium",
  "DSA",
  "SQL",
  "AIML",
  "Data Analysis",
  "Google Sheets",
  "DBMS"
];

function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bubble">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
