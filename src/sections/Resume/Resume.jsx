import "./Resume.css";
import Award1 from "../../images/a1.png"; 
import Award2 from "../../images/a2.png"; 
import Award3 from "../../images/a3.png"; 

const Resume = () => {
  return (
    <section className="resume resume-container" id="resume">
      <div className="resume-header">
        <h1 className="resume-header-below">Awards</h1>
        <p className="resume-header-top">Certifications</p>
      </div>

      <div className="awards">
        <div className="award-item">
          <img src={Award1} alt="Award" />
          <div className="award-text">
            <h3>Certified Data Scientist</h3>
            <p>Recognized for advanced skills in data analysis and machine learning.</p>
          </div>
        </div>

        <div className="award-item">
          <img src={Award2} alt="Award" />
          <div className="award-text">
            <h3>ITSM Expert Award</h3>
            <p>Certification in ITSM best practices for effective service management.</p>
          </div>
        </div>

        <div className="award-item">
          <img src={Award3} alt="Award" />
          <div className="award-text">
            <h3>Top Innovator Award</h3>
            <p>Acknowledged for contributions to innovative IT solutions and practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
