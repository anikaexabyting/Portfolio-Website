import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skills.css';

const skillsData = [
  {
    icon: '⚛️',
    title: 'React.js',
    desc: 'Builds dynamic, component-based UIs with hooks, routing, and state management for modern web apps.'
  },
  {
    icon: '🟨',
    title: 'JavaScript (ES6+)',
    desc: 'Core language for web development, with expertise in modern syntax, DOM manipulation, and asynchronous programming.'
  },
  {
    icon: '🚀',
    title: 'Express.js',
    desc: 'Lightweight Node.js framework used to build scalable RESTful APIs with middleware, routing, and authentication.'
  },
  {
    icon: '☕',
    title: 'Java (Spring Boot)',
    desc: 'Back-end development with Spring Boot for building secure, high-performance APIs and microservices.'
  },
  {
    icon: '🧩',
    title: 'SQL (PostgreSQL / MySQL)',
    desc: 'Experienced in writing queries, joins, and designing relational schemas for data-driven applications.'
  },
  {
    icon: '🍃',
    title: 'MongoDB',
    desc: 'NoSQL database used for flexible data modeling, integrated with Mongoose for efficient CRUD operations.'
  },
  {
    icon: '🌐',
    title: 'HTML5 & CSS3',
    desc: 'Semantic markup and modern styling with responsive layouts, animations, and CSS preprocessors like SCSS.'
  },
  {
    icon: '🛠️',
    title: 'Git & GitHub',
    desc: 'Version control for collaborative development, feature branching, and CI workflows.'
  },
  {
    icon: '🌬️',
    title: 'Tailwind CSS',
    desc: 'Utility-first CSS framework for building fast, responsive UIs with custom design systems and minimal code.'
  },
  {
    icon: '🎨',
    title: 'Bootstrap',
    desc: 'Popular CSS framework for building responsive, mobile-first interfaces using pre-designed components and grid systems.'
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const Skills = () => (
  <section className="skills" id="skills">
    <h2 className="skills-title">Skills</h2>
    <div className="skills-slider">
      <Slider {...sliderSettings}>
        {skillsData.map((item, idx) => (
          <div className="skills-card" key={idx}>
            <div className="skills-card-icon">{item.icon}</div>
            <div className="skills-card-title">{item.title}</div>
            <div className="skills-card-desc">{item.desc}</div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default Skills; 