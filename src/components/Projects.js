import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Real-Time Facial Emotion Recogniser",
    link: "https://huggingface.co/spaces/Anushree1/Facial_Emotion_Recogniser",
  },
  {
    title: "Spotify Playlist Automation",
    link: "https://github.com/Anushree101/SpotifyplaylistAutomation_Terraform-Docker",
  },
  {
    title: "Real-Time Resume and Job Description Analyser",
    link: "https://huggingface.co/spaces/Anushree1/Resumeanalyser",
  },
  {
    title: "Web Automation Testing of Giva.co",
    link: "https://github.com/Anushree101/Selenium-WebTesting",
  },
  {
    title: "Credit Card Fraud Detection",
    link: "https://github.com/Anushree101/Creditcard-Fraud-Detection",
  },
  {
    title: "Healthcare Information Management System",
    link: "https://github.com/Anushree101/webdevelopment/tree/main/Healthcare-Information-Management-System-master",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.div 
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Projects</h1>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <h2>{project.title}</h2>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Projects;