import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { id: 1, title: 'Smart Parking System', description: 'Identifies a vehicles presence or absence in a particular parking space with a high degree of  accuracy. This is Design & develop radio frequency identification parking system With Raspberry-pi using Python.' },
  { id: 2, title: 'E- Boutique Store Management System', description: 'This is to develop a budget friendly and effective E- Boutique Management System which is  designed and programmed to deal with everyday orders and management of registered  customers, new users, out of stock items, database, items available, payment.' },
  { id: 3, title: 'An effective soil pollution monitoring system', description: 'In this IOT based Arduino project, a soil Nutrient monitoring & analysis system is proposed in  which the farmer will be able to monitor soil moisture, soil temperature, and soil nutrient content.  The farmer can monitor all these parameters wirelessly on a mobile phone or the PC System.' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I worked on</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
   
  );
  
};


export default Projects;
