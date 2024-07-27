import "./About.css";

const About = () => {
  return (
    <section className="about about-container" id="about">
      <div className="about-header">
        <h1 className="about-header-below">ABOUT ME</h1>
        <p className="about-header-top">Know Me More</p>
      </div>

      <div className="about-content">
        <div className="about-content-left">
          <h3>
            I'm <span className="color-orange">Joseph Kulundu,</span> a Data
            Scientist, ITSM Specialist, and Tech Enthusiast
          </h3>
          <p>
            I leverage my expertise in data science to unlock insights and drive
            innovation for your business. My passion for ITSM ensures seamless
            management of technology solutions tailored to your needs.
          </p>
          <p>
            As a tech enthusiast, I stay ahead of industry trends to deliver
            cutting-edge solutions. My goal is to provide exceptional results
            that exceed client expectations while staying within budget and
            timeline.
          </p>
        </div>

        <div className="about-content-right">
          <div className="detailed-details">
            <p>
              <b>Name: </b> Joseph Kulundu
            </p>
            <p>
              <b>Email: </b>{" "}
              <span className="color-orange">josephkulundu@gmail.com</span>
            </p>
            <p>
              <b>Contact:</b> 0790648219
            </p>
            <p>
              <b>From:</b> Nairobi, Kenya
            </p>
          </div>
          <button className="btn">Download CV</button>
        </div>
      </div>

      <div className="about-bottom">
        <ul>
          <li>
            <h1>10+</h1>
            <p>Years of Experience</p>
          </li>

          <li>
            <h1>60+</h1>
            <p>Happy Clients</p>
          </li>

          <li>
            <h1>100+</h1>
            <p>Complete Projects</p>
          </li>

          <li>
            <h1>16</h1>
            <p>Awards</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
