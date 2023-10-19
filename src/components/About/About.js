import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <div className="text">
          <h2>Hello!! I am Rishitha Cherukuri</h2>
          <p id="para">
            Welcome to my portfolio! I am a passionate and dedicated BTech student with a strong foundation in Computer Science.Having hands-on experience in a diverse range of programming languages,
            I am driven by an unwavering commitment to continuous learning and a relentless pursuit of new challenges.
          </p>
          <div className="buttons">
            <a href="https://www.linkedin.com/in/rishitha-chowdary-cherukuri-0a2314248" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
