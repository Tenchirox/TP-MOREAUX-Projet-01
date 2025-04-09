import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('Darkly');
  
  const themes = [
    'Darkly',
    'Flatly',
    'Lux',
    'Minty',
    'Quartz',
    'Superhero',
    'Vapor',
    'Zephyr',
    'United'
  ];
  
  const changeTheme = (theme) => {
    // Supprimer tous les liens de thème existants
    const existingLinks = document.querySelectorAll('link[id^="theme-"]');
    existingLinks.forEach(link => link.remove());
    
    // Créer un nouveau lien CSS avec un chemin absolu
    const link = document.createElement('link');
    link.id = `theme-${theme}`;
    link.rel = 'stylesheet';
    // Utiliser le chemin correct pour le développement et la production
    link.href = `${window.location.origin}/themes/bootstrap.min.${theme}.css`;
    
    // Désactiver les source maps pour éviter les erreurs
    link.setAttribute('data-sourcemap', 'false');
    
    // Ajouter au head avec une priorité élevée
    document.head.appendChild(link);
    
    // Forcer le rafraîchissement du DOM sans délai
    requestAnimationFrame(() => {
      document.body.classList.remove('theme-applied');
      document.body.classList.add('theme-applied');
    });
    
    localStorage.setItem('selectedTheme', theme);
    setCurrentTheme(theme);
  };
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'Darkly';
    changeTheme(savedTheme);
  }, []);
  
  return (
    <Dropdown className="theme-switcher">
      <Dropdown.Toggle variant="secondary" id="dropdown-theme">
        Thème: {currentTheme}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {themes.map((theme) => (
          <Dropdown.Item 
            key={theme} 
            onClick={() => changeTheme(theme)}
            active={currentTheme === theme}
          >
            {theme}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ThemeSwitcher;