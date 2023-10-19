import React from 'react';
import './ContactMe.css'; 
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; 

const ContactMe = () => {
  return (
    <section id="contact">
    <div className="contact-me-box">
      
      <h2 className="contact-me-heading">Contact Me</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/rishitha-chowdary-cherukuri-0a2314248" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/rishitha-21bce7023" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
      </div>
      <p id="contactme">cherukuririshithachowdary@gmail.com</p>
     
     
    </div>
    </section>

  );
};

export default ContactMe;