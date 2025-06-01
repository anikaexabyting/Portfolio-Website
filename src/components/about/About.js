import React, { useState } from 'react';
import './About.css';


const tabData = {
  Skills: [
    { title: 'JavaScript', desc: 'Building interactive frontend applications using modern JS (ES6+)', color: '#ff267e' },
    { title: 'Java (Spring Boot)', desc: 'Developing secure and scalable backend APIs', color: '#ff267e' },
    { title: 'HTML & CSS', desc: 'Creating responsive and accessible web layouts', color: '#ff267e' },
    { title: 'React.js', desc: 'Component-based UI development and SPA architecture', color: '#ff267e' },
    { title: 'MongoDB', desc: 'NoSQL database design for flexible, document-based storage', color: '#ff267e' },
  ],
  
  Experience: [
    { title: 'Trainee Software Engineer', desc: 'Exabyting — Jan 2025 – Present', color: '#4d7cff' },
   
  ],
  Education: [
    { title: 'BSc in Computer Science & Engineering', desc: 'Mawlana Bhashani Science and Technology University, 2019–2024', color: '#00cba9' },
  ],
  
};

const tabNames = Object.keys(tabData);

const About = () => {
  const [activeTab, setActiveTab] = useState('Skills');

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-img-card">
          <img src="/assets/picture.png" alt="Profile" className="about-img" />
        </div>
        <div className="about-main">
          <h2 className="about-title">About Me</h2>
          <p className="about-desc">
          Hello! I’m Anika Islam, a Full Stack Engineer with hands-on experience in JavaScript, Java, HTML, CSS, and modern frameworks and tools. I’m passionate about building scalable web applications, writing clean code, and continuously learning new technologies to solve real-world problems.


          </p>
          <div className="about-tabs">
            {tabNames.map((tab) => (
              <button
                key={tab}
                className={`about-tab${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="about-tab-content">
            {tabData[activeTab].map((item, idx) => (
              <div className="about-tab-item" key={idx}>
                <div className="about-tab-item-title" style={{ color: item.color }}>{item.title}</div>
                <div className="about-tab-item-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 