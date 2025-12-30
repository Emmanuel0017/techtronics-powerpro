import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Thank you for your message! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        service: '',
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
    'Other'
  ];

  return (
    <section id="contact-section" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">

          <div className="contact-info">
            <h2>Ready to Power Your Project?</h2>
            <p className="contact-description">
              Contact us today for professional electrical solutions across Malawi.
              Our team is ready to discuss your project and provide expert advice.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <FaPhoneAlt />
                </div>
                <div className="method-details">
                  <h4>Call Us</h4>
                  <p>+265 123 456 789</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-details">
                  <h4>Email Us</h4>
                  <p>info.techtronicspowerpro@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="method-details">
                  <h4>Visit Us</h4>
                  <p>Chirimba Kameza Road</p>
                  <p>Blantyre, Malawi</p>
                </div>
              </div>
            </div>

            <div className="quick-contact">
              <Link to="/contact" className="btn btn-secondary">
                View Full Contact Details
              </Link>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <p>Fill out the form below and we'll get back to you within 24 hours</p>

            <form onSubmit={handleSubmit} className="quick-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select Service *</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={4}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
