import React, { JSX } from 'react';
import './Services.css';

import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaSolarPanel,
  FaTools,
  FaChartLine
} from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Residential Electrical Installations',
      description:
        'Complete home electrical solutions including wiring, lighting, sockets, and smart home systems for Malawian homes.',
      icon: <FaHome />
    },
    {
      id: 2,
      title: 'Commercial & Office Electrical Systems',
      description:
        'Professional electrical installations for businesses, offices, retail spaces, and commercial buildings across Malawi.',
      icon: <FaBuilding />
    },
    {
      id: 3,
      title: 'Industrial Electrical Solutions',
      description:
        'Heavy-duty electrical systems for factories, manufacturing plants, and industrial facilities in Malawi.',
      icon: <FaIndustry />
    },
    {
      id: 4,
      title: 'Solar Power & Backup Systems',
      description:
        "Sustainable solar energy solutions and reliable backup power systems tailored for Malawi's energy needs.",
      icon: <FaSolarPanel />
    },
    {
      id: 5,
      title: 'Electrical Maintenance & Repairs',
      description:
        'Routine maintenance, inspections, and 24/7 emergency repair services to ensure electrical safety.',
      icon: <FaTools />
    },
    {
      id: 6,
      title: 'Energy Efficiency Audits',
      description:
        'Comprehensive energy assessments to optimize power consumption and reduce electricity costs for Malawian businesses.',
      icon: <FaChartLine />
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p className="section-description">
            Comprehensive electrical solutions designed to meet the unique needs
            of homes and businesses across Malawi. We combine expertise with
            local understanding to deliver exceptional results.
          </p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-cta">
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="btn-service"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
