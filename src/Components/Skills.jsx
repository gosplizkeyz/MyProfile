// src/components/Skills.jsx

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Skills.css';

// --- Data for the component ---
// The "Blockchain" object has been replaced with "Forex Trading".

const skillCategories = [
  {
    title: 'Frontend Development',
    color: '#61DAFB', // A React-blue color
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    color: '#68A063', // A Node.js-green color
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Django', 'REST APIs', 'Database Design', 'Authentication'],
  },
  
  {
    title: 'Tools & Technologies',
    color: '#007ACC', // A VS Code-blue color
    skills: ['Git', 'Github', 'VS Code', 'Postman', 'Linux', 'Docker', 'AWS Basics'],
  },
];



// --- The Main Component (No other changes needed here) ---

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Main Title */}
        <Fade direction="down" triggerOnce>
          <h2 className="skills-title d-block">Skills & Expertise</h2>
          <p className="skills-subtitle">
            A comprehensive toolkit for building modern, secure, and scalable applications
          </p>
        </Fade>

        {/* Skill Categories Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Fade direction="up" delay={index * 100} key={category.title} triggerOnce>
              <div className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-card-dot" style={{ backgroundColor: category.color }}></span>
                  <h3>{category.title}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>

  
      </div>
    </section>
  );
};

export default Skills;