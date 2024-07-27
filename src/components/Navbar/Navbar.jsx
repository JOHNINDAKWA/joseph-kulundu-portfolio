import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { CgMenuGridR } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.navbar') === null && isOpen) {
        closeNavbar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <div className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="navbar-top">
          <h3>Joseph Kulundu</h3>
          <IoMdClose className="navbar-close-icon" onClick={closeNavbar} />
        </div>
        <ul className="navbar-links">
          <li><a href="#home" onClick={closeNavbar}>Home</a></li>
          <li><a href="#about" onClick={closeNavbar}>About Me</a></li>
          <li><a href="#service" onClick={closeNavbar}>What I do</a></li>
          <li><a href="#resume" onClick={closeNavbar}>Resume</a></li>
          <li><a href="#skills" onClick={closeNavbar}>Skills</a></li>
          <li><a href="#experience" onClick={closeNavbar}>Experience</a></li>
          <li><a href="#portfolio" onClick={closeNavbar}>Portfolio</a></li>
          <li><a href="#contact" onClick={closeNavbar}>Contact</a></li>
        </ul>

      </div>
      {!isOpen && <CgMenuGridR className="menu-icon" onClick={toggleNavbar} />}
    </div>
  );
};

export default Navbar;
