import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';
import { IconType } from 'react-icons';
import { FaBuilding, FaChartLine, FaHome, FaIndustry, FaSolarPanel, FaTools } from 'react-icons/fa';

interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  features: string[];
  benefits: string[];
}

const ServicesPage: React.FC = () => {
  const serviceDetails: ServiceDetail[] = [
    {
      id: 1,
      title: 'Residential Electrical Installations',
      description: 'Complete home electrical solutions including wiring, lighting, sockets, and smart home systems for Malawian homes. We ensure all installations comply with Malawi safety standards.',
      icon: FaHome,
      features: [
        'Complete home wiring',
        'Lighting installation & design',
        'Socket and switch installation',
        'Smart home automation',
        'Electrical safety inspections',
        'Backup power solutions'
      ],
      benefits: [
        'Enhanced home safety',
        'Energy efficiency',
        'Increased property value',
        '24/7 emergency support',
        'Malawi standards compliance'
      ]
    },
    {
      id: 2,
      title: 'Commercial & Office Electrical Systems',
      description: 'Professional electrical installations for businesses, offices, retail spaces, and commercial buildings across Malawi. We design systems that support productivity and safety.',
      icon: FaBuilding,
      features: [
        'Office lighting systems',
        'Power distribution panels',
        'Data and communication cabling',
        'Emergency lighting',
        'Generator integration',
        'Energy management systems'
      ],
      benefits: [
        'Increased productivity',
        'Reduced energy costs',
        'Enhanced safety compliance',
        'Minimal business disruption',
        'Scalable solutions'
      ]
    },
    {
      id: 3,
      title: 'Industrial Electrical Solutions',
      description: 'Heavy-duty electrical systems for factories, manufacturing plants, and industrial facilities in Malawi. We provide robust solutions that withstand demanding industrial environments.',
      icon: FaIndustry,
      features: [
        'Motor control systems',
        'PLC programming',
        'Industrial lighting',
        'Power factor correction',
        'High voltage installations',
        'Preventive maintenance'
      ],
      benefits: [
        'Increased uptime',
        'Improved safety',
        'Reduced maintenance costs',
        'Energy optimization',
        'Compliance with regulations'
      ]
    },
    {
      id: 4,
      title: 'Solar Power & Backup Systems',
      description: 'Sustainable solar energy solutions and reliable backup power systems tailored for Malawi\'s energy needs. We help reduce dependence on the grid and provide uninterrupted power.',
      icon: FaSolarPanel,
      features: [
        'Solar panel installation',
        'Battery backup systems',
        'Inverter systems',
        'Grid-tie solutions',
        'Solar water heating',
        'Energy monitoring'
      ],
      benefits: [
        'Reduced electricity bills',
        'Energy independence',
        'Environmentally friendly',
        'Reliable backup power',
        'Government incentive eligible'
      ]
    },
    {
      id: 5,
      title: 'Electrical Maintenance & Repairs',
      description: 'Routine maintenance, inspections, and 24/7 emergency repair services to ensure electrical safety and reliability for homes and businesses across Malawi.',
      icon: FaTools,
      features: [
        'Preventive maintenance',
        'Emergency repairs',
        'Fault finding',
        'Circuit breaker replacement',
        'Wiring upgrades',
        'Safety testing'
      ],
      benefits: [
        'Prevent costly breakdowns',
        'Ensure safety compliance',
        'Extend equipment life',
        '24/7 emergency service',
        'Peace of mind'
      ]
    },
    {
      id: 6,
      title: 'Energy Efficiency Audits',
      description: 'Comprehensive energy assessments to optimize power consumption and reduce electricity costs for Malawian businesses and homes.',
      icon: FaChartLine,
      features: [
        'Energy consumption analysis',
        'Power quality monitoring',
        'Efficiency recommendations',
        'LED lighting upgrades',
        'Load balancing',
        'Power factor analysis'
      ],
      benefits: [
        'Significant cost savings',
        'Reduced carbon footprint',
        'Improved system performance',
        'Equipment longevity',
        'Government compliance'
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Services</span>
          </div>
          <h1>Our Services</h1>
          <p>
            Comprehensive electrical solutions designed to meet the unique needs of homes and businesses across Malawi. 
            We combine expertise with local understanding to deliver exceptional results.
          </p>
        </div>
      </section>

      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p className="section-description">
              From residential wiring to industrial power systems, we provide end-to-end electrical solutions 
              that prioritize safety, efficiency, and reliability.
            </p>
          </div>

          <div className="services-detailed">
            {serviceDetails.map((service) => {
              const Icon = service.icon;
              return (
              <div key={service.id} className="service-detail-card">
                <div className="service-header">
                  <div className="service-icon"><Icon /></div>
                  <h3>{service.title}</h3>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-details-grid">
                  <div className="service-features">
                    <h4>Key Features</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-benefits">
                    <h4>Benefits</h4>
                    <ul>
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="service-actions">
                  <Link to="/contact" className="btn btn-primary">
                    Get Quote for This Service
                  </Link>
                </div>
              </div>
              );
      })}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="container">
          <div className="section-header">
            <h2>Our Service Process</h2>
            <p className="section-description">
              We follow a systematic approach to ensure every project is completed to the highest standards.
            </p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation & Assessment</h3>
              <p>We discuss your needs and conduct a thorough site assessment to understand your requirements.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Planning</h3>
              <p>Our engineers create detailed electrical plans that meet Malawi standards and your specific needs.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Installation</h3>
              <p>Our certified technicians carry out the installation with minimal disruption to your daily activities.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Testing & Commissioning</h3>
              <p>We thoroughly test all systems to ensure they meet safety standards and perform optimally.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Support & Maintenance</h3>
              <p>We provide ongoing support and maintenance to ensure your electrical systems remain reliable.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;