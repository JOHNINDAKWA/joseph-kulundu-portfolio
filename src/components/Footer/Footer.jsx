import React from 'react';
import './Footer.css';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/terms-and-policy" className="footer-link">Terms & Policy</a>
        <a href="/disclaimer" className="footer-link">Disclaimer</a>
      </div>
      <div className="footer-copy">
        <p>Copyright © 2024 @kulundujoseph. All Rights Reserved.</p>
      </div>
      <button className="back-to-top" onClick={scrollToTop}>
        <MdOutlineKeyboardDoubleArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
