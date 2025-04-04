import React from 'react';

const Formation = () => {
  return (
    <div className="formation-container">
      <h1>Formation</h1>
      <div className="formation-content">
        <section className="formation-section">
          <h2>Education</h2>
          <div className="formation-item">
            <h3>Degree Title</h3>
            <p>School Name</p>
            <p>Years of Study</p>
            <p>Description of studies and achievements</p>
          </div>
        </section>

        <section className="formation-section">
          <h2>Professional Training</h2>
          <div className="formation-item">
            <h3>Certificate/Course Name</h3>
            <p>Institution</p>
            <p>Date</p>
            <p>Skills acquired</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Formation;
