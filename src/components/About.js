import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <h1>About Me</h1>
      <h2>B.E. in Information Science | CGPA: 9.2</h2>
      <h3>Just a curious human who convinced a bunch of zeros and ones to do cool things! 🤖</h3>
<br></br>
<h3>I love breaking down problems, automating the boring stuff, and making tech work smarter, not harder. I’m always up for a challenge!<br></br>
When I’m not coding, you’ll find me debugging life 😆
<br></br>
Let’s create something awesome together! 🚀.</h3>
    </motion.div>
  );
};

export default About;

