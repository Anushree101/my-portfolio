import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import profilePic from "../assets/profile.jpg"; // Add your photo in src/assets folder

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>Hi, I'm Anushree 👋</h1>
      <p>Passionate Developer | AI & ML Enthusiast | Problem Solver</p>
    </motion.div>
  );
};

export default Home;
