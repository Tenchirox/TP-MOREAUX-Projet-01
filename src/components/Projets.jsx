import React from 'react';

const Projets = () => {
  return (
    <div className="projets-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project Title</h3>
          <p>Project description goes here</p>
          <div className="project-links">
            <a href="#">View Demo</a>
            <a href="#">Source Code</a>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projets;
