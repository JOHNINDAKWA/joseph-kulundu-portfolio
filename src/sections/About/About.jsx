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
            Scientist{" "}
          </h3>
          <p>
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p>
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
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
