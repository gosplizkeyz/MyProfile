// src/components/Experience.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import ElectricBorder from "./ElectricBorder";
import "./Experience.css";

// --- Data for the timeline ---
const timelineData = [
  
];

// --- Animation Variants ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Each child will animate 0.3s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- Main Component ---
const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>
        <motion.p
          className="experience-subtitle"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Linkedln Profile has a broad review on this. Feel free to check
        </motion.p>

        <div className="timeline-wrapper">
          <motion.div
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-icon-container">
                  <div className="timeline-icon">
                    {item.type === "experience" ? (
                      <FaCode />
                    ) : (
                      <FaGraduationCap />
                    )}
                  </div>
                </div>
                <div className="timeline-content">
                  <span className={`timeline-tag ${item.type}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                  <h3 className="item-title">{item.title}</h3>
                  <div className="item-meta">
                    <span>{item.institution}</span>
                    <span>{item.location}</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="item-description">{item.description}</p>

                  <div className="item-details">
                    <h4>Key Highlights:</h4>
                    <ul>
                      {item.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="item-details">
                    <h4>Skills Gained:</h4>
                    <div className="experience-skills-container">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="experience-skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
