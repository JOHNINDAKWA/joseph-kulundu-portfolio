import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Portfolio from './../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Skills from '../Skills/Skills';
import Expereince from '../Experience/Expereince';
import Contact from '../Contact/Contact';
import Navbar from '../../components/Navbar/Navbar';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <Sidebar />
      <div className="main-content">
        <Header />
        <About />
        <Services />        
        <Resume />
        <Skills/>
        <Expereince/>
        <Portfolio />
        <Testimonial/>
        <Contact/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
