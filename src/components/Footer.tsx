import React from 'react';
import './Footer.css';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

import { IconType } from 'react-icons';

interface SocialMediaItem {
  name: string;
  icon: IconType;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialMedia: SocialMediaItem[] = [
    { name: 'Facebook', icon: FaFacebookF },
    { name: 'Twitter', icon: FaTwitter },
    { name: 'LinkedIn', icon: FaLinkedinIn },
    { name: 'Instagram', icon: FaInstagram }
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">

          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">Techtronics<br/></span>
              <span className="logo-highlight">Power pro<br/></span>
              <span className="logo-text">Solutions</span>
            </div>

            <p className="footer-tagline">
              Powering progress across Malawi with reliable, safe, and professional electrical solutions.
            </p>

            <div className="footer-social-media">
              <p>Follow Us:</p>
              <div className="footer-social-icons">
                {socialMedia.map((social, index) => (
                  <button
                    key={index}
                    className="footer-social-icon"
                    aria-label={social.name}
                  >
                    {React.createElement(social.icon)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button
                    className="footer-link"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-services">
              <li>Residential Electrical</li>
              <li>Commercial Systems</li>
              <li>Industrial Solutions</li>
              <li>Solar Power Systems</li>
              <li>24/7 Emergency Repairs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact-info">
              <p>{React.createElement(FaPhoneAlt)} +265 123 456 789</p>
              <p>{React.createElement(FaEnvelope)} info.techtronicspowerpro@gmail.com</p>
              <p>{React.createElement(FaMapMarkerAlt)} Chirimba Kameza Road, Blantyre</p>
              <p>{React.createElement(FaClock)} Mon–Fri: 7:30AM – 5:00PM</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-certifications">
            <span className="cert-badge">MBS Certified</span>
            <span className="cert-badge">ESCOM Approved</span>
            {/* <span className="cert-badge">Insured & Bonded</span> */}
          </div>

          <div className="copyright">
            <p>&copy; {currentYear} Techtronics Power Pro Solutions. All rights reserved.</p>
            <p>Proudly serving communities across the country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
