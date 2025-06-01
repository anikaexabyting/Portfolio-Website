import React from 'react';
import './WorkHistory.css';

const workHistoryData = [
  {
    title: 'Job Portal UI',
    desc: 'A multi-page React app with user authentication, job listings, and status-based filters.',
    icon: '/assets/icons8-code-50.png'
  },
  {
    title: 'E-commerce Landing Page',
    desc: 'Built a mobile-friendly landing page with a responsive grid and product cards.',
    icon: '/assets/icons8-code-50.png'
  },
  {
    title: 'Portfolio Website',
    desc: 'Designed and developed a personal portfolio using React and SCSS. Showcased projects, skills, and contact form with form validation. Fully responsive with smooth scroll and animated UI elements.',
    icon: '/assets/icons8-code-50.png'
  }
];

const WorkHistory = () => (
  <section className="work-history" id="work">
    <h2 className="work-history-title">Work History</h2>
    <div className="work-history-cards">
      {workHistoryData.map((item, idx) => (
        <div className="work-history-card" key={idx}>
          <img src={item.icon} alt="icon" className="work-history-card-icon" />
          <div className="work-history-card-content">
            <div className="work-history-card-title">{item.title}</div>
            <div className="work-history-card-desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WorkHistory; 