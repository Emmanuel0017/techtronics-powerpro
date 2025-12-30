import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

interface OfficeLocation {
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const services = [
    'Residential Electrical',
    'Commercial Electrical',
    'Industrial Solutions',
    'Solar Power Systems',
    'Maintenance & Repairs',
    'Energy Efficiency Audit',
    'Emergency Services',
    'Other'
  ];

  const locations = [
    'Blantyre',
    'Lilongwe',
    'Mzuzu',
    'Zomba',
    'Kasungu',
    'Mangochi',
    'Other'
  ];

  const officeLocations: OfficeLocation[] = [
    {
      city: 'Blantyre (Head Office)',
      address: 'Chirimba kameza Road, Blantyre',
      phone: '+265 123 456 789',
      email: 'blantyre@malawielectrical.mw',
      hours: 'Mon-Fri: 7:30AM-5:00PM, Sat: 8:00AM-1:00PM'
    },
    {
      city: 'Lilongwe Office',
      address: 'Area 3, Lilongwe',
      phone: '+265 987 654 321',
      email: 'lilongwe@malawielectrical.mw',
      hours: 'Mon-Fri: 7:30AM-5:00PM, Sat: 8:00AM-1:00PM'
    },
    {
      city: 'Mzuzu Office',
      address: 'Mzuzu Central, Mzuzu',
      phone: '+265 456 789 012',
      email: 'mzuzu@malawielectrical.mw',
      hours: 'Mon-Fri: 7:30AM-5:00PM, Sat: 8:00AM-1:00PM'
    }
  ];

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Contact</span>
          </div>
          <h1>Contact Us</h1>
          <p>
            Contact Techtronics Power Pro Solutions to discuss your electrical and HVAC needs. Our certified team is here to offer reliable advice and professional support.
          </p>
        </div>
      </section>


      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="form-intro">
              <h2>Request a Free Quote</h2>
              <p>
                Fill out the form below and we'll get back to you within 24 hours. 
                Our team will provide a detailed quote tailored to your specific needs.
              </p>
              <div className="form-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Fast response within 24 hours</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Free consultation and assessment</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>Detailed, transparent pricing</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>No obligation quote</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+265 xxx xxx xxx"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="location">Your Location *</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Select Location</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Required *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select Service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Tell us about your electrical project, including any specific requirements..."
                  rows={6}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Request Free Quote'}
              </button>
              
              <p className="form-note">
                By submitting this form, you agree to our Privacy Policy and consent to 
                being contacted by Malawi Electrical Solutions regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p className="section-description">
              Common questions about our services and process
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What areas in Malawi do you serve?</h3>
              <p>
                We serve clients across Malawi, including Blantyre, Lilongwe, Mzuzu, Zomba, 
                Kasungu, and surrounding areas. Our teams are mobile and can reach most 
                locations nationwide.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Are your electricians certified?</h3>
              <p>
                Yes, all our electricians are certified by the Malawi Bureau of Standards 
                and hold relevant qualifications. We provide ongoing training to ensure 
                our team stays current with the latest standards and technologies.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>How quickly can you respond to emergency calls?</h3>
              <p>
                For emergency situations, we aim to respond within 2 hours in urban areas 
                and 4 hours in rural areas. 
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Do you provide free quotes?</h3>
              <p>
                Yes, we provide free, no-obligation quotes for all projects. After 
                assessing your requirements, we'll provide a detailed breakdown of costs 
                and timeline.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept bank transfers, mobile money (Airtel Money, TNM Mpamba). 
                Payment terms vary based on project size and are discussed upfront.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer warranty on your work?</h3>
              <p>
                Yes, we offer a 2-year warranty on all electrical installations and a 
                1-year warranty on repairs. We stand behind the quality of our workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;