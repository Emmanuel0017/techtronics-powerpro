import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Powered by <span className="highlight">Purpose</span> Wired for Trust
            </h1>
            <p className="hero-subtitle">
              Professional electrical services for residential, commercial, and industrial clients across Malawi. 
              Certified technicians ensuring safety and compliance with Malawi standards.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
              >
                Request a Quote
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary"
              >
                Contact Us
              </button>
            </div>
          </div>
          {/* <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Emergency Service</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;