import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Babjo from "../../images/pic1.jpg";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize active section on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sidebar">
      <div className="nav-top">
        <div className="nav-img">
          <img src={Babjo} alt="Profile" />
        </div>
        <h3>Joseph Kulundu</h3>
      </div>

      <div className="nav-middle">
        <ul>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#service"
              className={activeSection === "service" ? "active" : ""}
            >
              What I do
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={activeSection === "resume" ? "active" : ""}
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={activeSection === "experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={activeSection === "portfolio" ? "active" : ""}
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-bottom">
        <li><a href="/"> <FaFacebook /></a></li>
        <li><a href="/"><FaSquareXTwitter /></a></li>
        <li><a href="/"> <FaLinkedin /></a></li>
        <li><a href="/"><FaInstagramSquare /></a></li>
      </div>
    </nav>
  );
};

export default Sidebar;