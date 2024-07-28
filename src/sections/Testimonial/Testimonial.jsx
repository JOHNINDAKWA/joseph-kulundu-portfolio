import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-container">
      <div className="testimonial-header">
        <h1 className="testimonial-header-below">Testimonials</h1>
        <p className="testimonial-header-top">What People Say?</p>
      </div>
      <div className="testimonial-items">
        <div className="testimonial-item">
          <span>“</span>
          <p>
            Joseph's expertise in data science and IT service management is
            unparalleled. The moment I learned about his work at One Acre Fund,
            I was impressed by the impact and precision of his projects.
          </p>
          <h5>— @kenyatechreview on Joseph Kulundu</h5>
        </div>

        <div className="testimonial-item">
          <span>“</span>
          <p>
            “When you see Joseph's data visualizations and IT solutions, you
            know that learning from such an accomplished professional is your
            gateway to mastering these fields.”
          </p>
          <h5>— Mary Wanjiku</h5>
             </div>


        </div>

  
    </section>
  );
};

export default Testimonial;
