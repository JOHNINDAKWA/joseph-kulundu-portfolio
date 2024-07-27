import { IoIosColorFilter } from "react-icons/io";
import "./Services.css";

const Services = () => {
  return (
    <section className="service service-container" id="service">
      <div className="service-header">
        <h1 className="service-header-below">SERVICES</h1>
        <p className="service-header-top">What I Do?</p>
      </div>

      <div className="service-details">
        <div className="service-item">
          <div className="service-icon">
            <IoIosColorFilter />
          </div>
          <div className="service-content">
            <h2>Data Analysis</h2>
            <p>Providing comprehensive data analysis for insights.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <IoIosColorFilter />
          </div>
          <div className="service-content">
            <h2>Machine Learning</h2>
            <p>Developing predictive models using advanced algorithms.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <IoIosColorFilter />
          </div>
          <div className="service-content">
            <h2>ITSM</h2>
            <p>Implementing ITSM best practices for efficient IT services.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <IoIosColorFilter />
          </div>
          <div className="service-content">
            <h2>Cloud Solutions</h2>
            <p>Providing scalable cloud computing solutions.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <IoIosColorFilter />
          </div>
          <div className="service-content">
            <h2>Cybersecurity</h2>
            <p>Offering robust cybersecurity services for data protection.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <IoIosColorFilter />
          </div>
          <div className="service-content">
            <h2>Data Visualization</h2>
            <p>Creating impactful data visualizations for insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
