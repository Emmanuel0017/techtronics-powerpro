import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>About Malawi Electrical Solutions</h2>
            </div>
            
            <div className="about-description">
              <p>
                Founded with a vision to revolutionize electrical services in Malawi, 
                we have grown to become a trusted partner for homes and businesses nationwide. 
                Our journey began over 15 years ago with a simple commitment: to provide safe, 
                reliable, and professional electrical solutions tailored to Malawi's unique needs.
              </p>
              
              <p>
                Today, we serve clients across all regions of Malawi - from urban centers 
                like Blantyre and Lilongwe to rural communities. Our team of certified 
                electricians brings local knowledge combined with international standards 
                of excellence.
              </p>
              
              <div className="mission-vision">
                <div className="mission">
                  <h3>Our Mission</h3>
                  <p>
                    To power Malawi's growth through innovative, safe, and sustainable 
                    electrical solutions that enhance lives and drive business success.
                  </p>
                </div>
                
                <div className="vision">
                  <h3>Our Vision</h3>
                  <p>
                    To be Malawi's leading electrical services provider, recognized for 
                    excellence, reliability, and commitment to community development.
                  </p>
                </div>
              </div>
              
              <div className="values">
                <h3>Our Core Values</h3>
                <div className="values-grid">
                  <div className="value-item">
                    <div className="value-icon">⚡</div>
                    <h4>Safety First</h4>
                    <p>Uncompromising commitment to electrical safety standards</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🤝</div>
                    <h4>Integrity</h4>
                    <p>Honest, transparent, and ethical in all our dealings</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🎯</div>
                    <h4>Excellence</h4>
                    <p>Striving for perfection in every project we undertake</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🌍</div>
                    <h4>Community</h4>
                    <p>Committed to Malawi's growth and development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;