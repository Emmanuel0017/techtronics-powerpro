import React, { JSX } from 'react';
import './WhyChooseUs.css';

import {
  FaCheckCircle,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaStar,
  FaClock,
  FaMoneyBillWave
} from 'react-icons/fa';

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const WhyChooseUs: React.FC = () => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: 'Certified & Experienced Technicians',
      description:
        'Our team consists of fully certified electricians with extensive training and years of experience in the Malawian electrical industry.',
      icon: <FaCheckCircle />
    },
    {
      id: 2,
      title: 'Safety & Compliance',
      description:
        "We strictly adhere to Malawi's electrical safety standards and regulations, ensuring all work meets the highest safety requirements.",
      icon: <FaShieldAlt />
    },
    {
      id: 3,
      title: 'Nationwide Service',
      description:
        'Serving homes and businesses across Malawi - from Blantyre to Lilongwe, Mzuzu to Zomba, we cover the entire country.',
      icon: <FaMapMarkedAlt />
    },
    {
      id: 4,
      title: 'Quality Materials',
      description:
        'We use only premium-grade electrical components and materials from trusted suppliers, ensuring durability and reliability.',
      icon: <FaStar />
    },
    {
      id: 5,
      title: 'Timely Completion',
      description:
        'We respect your time and commit to completing projects on schedule with minimal disruption to your daily operations.',
      icon: <FaClock />
    },
    {
      id: 6,
      title: 'Competitive Pricing',
      description:
        'Transparent, fair pricing with detailed quotes and no hidden costs. Quality electrical solutions that offer excellent value.',
      icon: <FaMoneyBillWave />
    }
  ];

  return (
    <section id="why-us" className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Malawi Electrical Solutions</h2>
          <p className="section-description">
            We go beyond just electrical work — we build lasting relationships
            based on trust, quality, and commitment to excellence in every
            project we undertake in Malawi.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map(benefit => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon-container">
                <span className="benefit-icon">{benefit.icon}</span>
              </div>
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="certification-banner">
          <div className="certification-content">
            <h3>Malawi Standards Compliant</h3>
            <p>
              All our work complies with the Malawi Bureau of Standards (MBS)
              and Electricity Supply Corporation of Malawi (ESCOM) regulations
            </p>
          </div>
          <div className="certification-badge">
            <span>MBS</span>
            <span>ESCOM</span>
            <span>Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
