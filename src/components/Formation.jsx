const Formation = () => {
  return (
    <div className="formation-container">
      <h1>Formation</h1>
      <div className="formation-content">
        <section className="formation-section">
          <h2>Éducation</h2>
          <div className="formation-item">
            <h3>Baccalauréat</h3>
            <p>Sciences et Technologies de Gestion</p>
            <p>Option Gestion des Systèmes d'Information</p>
            <p>Lycée Jean Zay, Nancy</p>
            <p>2010-2013</p>
            <p>Formation en informatique de gestion et systèmes d'information</p>
          </div>
        </section>

        <section className="formation-section">
          <h2>Formation Professionnelle</h2>
          <div className="formation-item">
            <h3>Développement Web</h3>
            <p>Formation continue</p>
            <p>2020-2023</p>
            <p>Compétences acquises en développement frontend et backend</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Formation;
