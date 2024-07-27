import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const texts = [
      "I'm Joseph Kulundu",
      "Am a Data Magician",
      "An ITSM Specialist",
      "A Tech Enthusiast "
    ];

    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      setCurrentText(isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1));

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTypingSpeed(200);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 100 : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, typingSpeed]);

  return (
    <section className="header" id='home'>
      <div className="overlay">
        <h4>Nice to Meet You.🙋</h4>
        <h1 className="animated-text">{currentText}</h1>
        <p>I am based in Nairobi, Kenya - East Africa.</p>
        <div className="buttons">
          <button className="btn"><a href="#portfolio">See My Works</a></button>
          <button className="btn"><a href="#contact">Let's Talk Now</a></button>
        </div>
      </div>
    </section>
  );
}

export default Header;
