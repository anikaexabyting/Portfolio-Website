import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-subtitle">Full Stack Web Developer</div>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Anika</span><br />
          From Bangladesh.
        </h1>
        <a href="#contact" className="hero-btn">Contact</a>
        <div className="hero-socials">
          <a href="#" aria-label="LinkedIn" style={{color: '#111'}}>
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C3.32 3.5 2 4.82 2 6.48c0 1.66 1.32 2.98 2.98 2.98 1.66 0 2.98-1.32 2.98-2.98C7.96 4.82 6.64 3.5 4.98 3.5zM2.4 21.5h5.16V9.98H2.4V21.5zM9.34 9.98v11.52h5.16v-6.41c0-1.53.03-3.5 2.13-3.5 2.13 0 2.16 1.67 2.16 3.6v6.31h5.16v-6.77c0-3.36-.72-5.96-4.63-5.96-1.88 0-3.14 1.03-3.66 2.01h.05V9.98H9.34z" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="Behance" style={{color: '#111'}}>
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 13.5h-3v2h3s.5 0 .5-1-.5-1-1-1zm-3-1.5h2.5c.5 0 1.5 0 1.5-1s-1-1-1.5-1h-2.5v2zm13.5 1.5c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm-2.5-2.5c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5h-2c0-.5-.5-1-1-1s-1 .5-1 1 .5 1 1 1h2c0 1.5-1.5 2.5-3 2.5s-3-1-3-2.5zm-7.5-5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5h-5v-9h5zm0 2h-3v2h3c.5 0 1.5 0 1.5-1s-1-1-1.5-1zm10.5 7c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="GitHub" style={{color: '#111'}}>
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" fill="currentColor"/></svg>
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-image-bg-gradient">
          <img src="/assets/picture.png" alt="Sohag" className="hero-image" width={500} height={800}/>
        </div>
      </div>
    </section>
  );
};

export default Hero; 