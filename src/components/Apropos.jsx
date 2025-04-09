const Apropos = () => {
  return (
    <div className="apropos-container">
      <h1>À propos</h1>
      <br/>
      <div className="content">
        <section className="moi">
          <h2>Mon Parcours</h2>
          <br/>
          <div className="mavie">
            <p>Passionné d'informatique depuis mon plus jeune âge, j'ai développé des compétences variées dans le domaine du développement et les nouvelles technologies.</p>
          </div>
        </section>

        <section className="values">
          <h2>Mes Valeurs et qualités</h2>
          <ul>
            <li>Innovation</li>
            <li>Adaptation aux changements</li>
            <li>Partage de connaissances</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Me contacter</h2>
          <p>Email: <a href="mailto:depaninfo54@gmail.com">depaninfo54@gmail.com</a></p>
          <p>Téléphone: +33 6 82 23 85 13</p>
        </section>
      </div>
    </div>
  );
};

export default Apropos;
