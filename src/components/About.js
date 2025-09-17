import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img 
            src="/George.png" 
            alt="Profile" 
          />
        </div>

        <div className="about-info">
          <h2>George</h2>
          <p>
            I'm currently a Software Engineering student at the University of Victoria.
            Some technologies I work with are React, Javascript, and Python.
            I am also a campus celebrity, with merchandise and a student club dedicated to me, ✨iconic✨.  
          </p>

          <div className="social-links">
            <a 
              href="https://ca.linkedin.com/school/university-of-victoria/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a 
              href="https://www.instagram.com/campuspeacock/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;