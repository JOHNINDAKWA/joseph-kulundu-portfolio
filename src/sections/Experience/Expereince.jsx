import React from "./Experience.css";

const Experience = () => {
  return (
    <section className="experience experience-container" id="experience">
      <div className="experience-header">
        <h1 className="experience-header-below">RESUME</h1>
        <p className="experience-header-top">Work Experiences</p>
      </div>
      
      <div className="timeline">

        
        <div className="timeline-divider">
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">
              ITSM Specialist, One Acre Fund.
            </h4>
            <span>May-2023 To Date </span>
            <p className="timeline-text">Developed functional, user-friendly, and secure websites.</p>
          
          </li>       
          <li className="timeline-item">
            <h4 className="timeline-item-title">Data Analyst, The Judiciary of Kenya</h4>
            <span>2023 Jan - April</span>
            <p className="timeline-text">Cleaned and analyzed datasets using Stata and Python.</p>
          </li>
        </ol>


        <ol className="timeline-list">
      
          <li className="timeline-item">
            <h4 className="timeline-item-title">Enumerator, Kenya National Bureau of Statistics</h4>
            <span>2020-2021</span>
            <p className="timeline-text">Adhered to rules, ensuring productivity and punctuality.</p>
          </li>
      
          <li className="timeline-item">
            <h4 className="timeline-item-title">Cyber Attendant and Computer Studies Tutor</h4>
            <span>2018 Nov - 2019 Aug</span>
            <p className="timeline-text">Cyber attendant and computer studies tutor.</p>
          </li>
        </ol>

        </div>
      </div>
    </section>
  );
};

export default Experience;
