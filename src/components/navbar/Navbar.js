import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work History', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace('#', ''));
    const sections = sectionIds.map(id => document.getElementById(id));
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionName = navLinks.find(link => link.href === `#${entry.target.id}`)?.name;
          if (sectionName) {
            setActive(sectionName);
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        }
      });
    }, observerOptions);
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleClick = (e, href, name) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(name);
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-highlight">A</span>nika<span className="logo-dot">.</span>
      </div>
      <div className="navbar-links">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`navbar-link${active === link.name ? ' active' : ''}`}
            onClick={e => handleClick(e, link.href, link.name)}
            aria-current={active === link.name ? 'page' : undefined}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 