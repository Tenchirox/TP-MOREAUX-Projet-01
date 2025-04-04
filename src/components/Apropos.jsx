const Apropos = () => {
  return (
    <div className="apropos-container">
      <h1>About Us</h1>
      <div className="content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>Add your mission statement here</p>
        </section>
        
        <section className="team">
          <h2>Our Team</h2>
          <div className="team-members">
            {/* Add team member components here */}
          </div>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li>Value 1</li>
            <li>Value 2</li>
            <li>Value 3</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>Email: example@email.com</p>
          <p>Phone: (123) 456-7890</p>
        </section>
      </div>
    </div>
  );
};

export default Apropos;
