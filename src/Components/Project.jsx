// src/components/Projects.jsx

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

// --- PROJECT DATA ---
// You can easily update your projects here.
// For images, you can use a service like Cloudinary or just place them in your public folder.
const projectsData = [
 
];

// Reusable Project Card Component with Animation
const ProjectCard = ({ project }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="project-card"
    >
      <div className="project-image-container">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
        />
        {project.status && (
          <div className="project-status-badge">{project.status}</div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech-stack">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects Section Component
const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container max-w-6xl mx-auto px-4 py-12">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="projects-main-title text-3xl md:text-4xl font-bold text-white">
            My Projects
          </h2>
          <p className="projects-subtitle text-gray-400 mt-2">
            Here are some of the projects I've worked on.
          </p>
        </div>

        {/* GitHub Button aligned to right */}
        <div className="flex justify-end mb-8">
          <a
            href="https://github.com/gosplizkeyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Find on GitHub
            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
