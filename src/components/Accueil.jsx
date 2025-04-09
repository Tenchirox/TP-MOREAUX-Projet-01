import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Accueil = () => {
  return (
    <div className="accueil-container">
      <header className="accueil-header">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Bienvenue</h1>
          <ThemeSwitcher />
        </div>
      </header>
      
      <main className="accueil-main">
        <section className="hero-section">
          <h2>Kevin MOREAUX</h2>
          <p>Développeur et passionné de technologies</p>
        </section>

        <section className="content-section">
          <div className="content-item">
            <h3>Expertise</h3>
            <p>Développement web et solutions informatiques</p>
          </div>
          
          <div className="content-item">
            <h3>Passions</h3>
            <p>Impression 3D et gyroroue</p>
          </div>
        </section>
      </main>

      <footer className="accueil-footer">
        <p>&copy; 2025 Kevin MOREAUX</p>
      </footer>
    </div>
  );
};

export default Accueil;
