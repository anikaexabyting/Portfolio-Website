import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-icon">✉️</span>
            <a href="https://github.com/anikaexabyting" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/enginnersohag</a>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">📞</span>
            <span className="contact-link">+88017-5096-5595</span>
          </div>
        </div>
        <div className="contact-socials">
          <a href="#" className="contact-social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="contact-social"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="contact-social"><i className="fab fa-github"></i></a>
          <a href="#" className="contact-social"><i className="fab fa-instagram"></i></a>
        </div>
        <a href="#" className="contact-cv-btn">Download CV</a>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" className="contact-textarea" rows="5"></textarea>
        <button type="submit" className="contact-submit-btn">Submit</button>
      </form>
    </div>
  </section>
);

export default Contact; 