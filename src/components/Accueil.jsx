import React from 'react';

const Accueil = () => {
  return (
    <div className="accueil-container">
      <header className="accueil-header">
        <h1>Welcome</h1>
      </header>
      
      <main className="accueil-main">
        <section className="hero-section">
          <h2>Main Title</h2>
          <p>Description text goes here</p>
        </section>

        <section className="content-section">
          <div className="content-item">
            <h3>Section 1</h3>
            <p>Content for section 1</p>
          </div>
          
          <div className="content-item">
            <h3>Section 2</h3>
            <p>Content for section 2</p>
          </div>
        </section>
      </main>

      <footer className="accueil-footer">
        <p>&copy; 2024 Your Website Name</p>
      </footer>
    </div>
  );
};

export default Accueil;
