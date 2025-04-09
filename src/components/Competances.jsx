const Competances = () => {
  return (
    <div className="Competances-container">
      <h2>Mes Compétences</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Outils</h3>
          <ul>
            <li>Git</li>
            <li>VS Code</li>
            <li>Docker</li>
            <li>PostgreSQL</li>
            <li>MariaDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Competances;
