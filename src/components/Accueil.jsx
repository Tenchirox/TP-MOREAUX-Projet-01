import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Accueil = () => {
  return (
    <div className="accueil-container">
      <header className="accueil-header">
        <div className="d-flex justify-content-between align-items-center">
          <h3>Bienvenue</h3>
          <ThemeSwitcher />
        </div>
      </header>
      
      <main className="accueil-main">
        <section className="hero-section">
          <p>Développeur et passionné de technologies</p>
        </section>

        <section className="content-section">
          <div className="content-item">
            <h3>Expertise</h3>
            <p>Développement web et solutions informatiques</p>
          </div>
          
        </section>
      </main>


    </div>
  );
};

export default Accueil;
