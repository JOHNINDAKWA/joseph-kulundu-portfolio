import React, { useState } from "react";
import { portfolioData, portfolioData2 } from "./portfolioData";
import "./Portfolio.css";
import Modal from '../../components/Modal/Modal'; // Import your custom modal component

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="portfolio portfolio-container" id="portfolio">
      <div className="portfolio-header">
        <h1 className="portfolio-header-below">Portfolio</h1>
        <p className="portfolio-header-top">My Data Projects</p>
      </div>

      <div className="portfolio-items">
        {portfolioData.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="portfolio-item-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button onClick={(e) => { e.preventDefault(); openModal(item); }}>View Details</button>
            </div>
          </div>
        ))}
      </div>

 

      <div className="portfolio-header portfolio-two">
        <h1 className="portfolio-header-below">Portfolio</h1>
        <p className="portfolio-header-top">My ITSM Projects</p>
      </div>

      <div className="portfolio-items">
        {portfolioData2.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="portfolio-item-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button onClick={(e) => { e.preventDefault(); openModal(item); }}>View Details</button>
            </div>
          </div>
        ))}
      </div>



      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        item={selectedItem}
      />
    </section>
  );
};

export default Portfolio;
