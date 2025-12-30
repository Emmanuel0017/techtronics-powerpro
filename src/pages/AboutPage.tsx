import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

const AboutPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Davie Kamwaza',
      role: 'Managing Director',

    },
    {
      id: 2,
      name: 'Yobe',
      role: 'Finance & Operations Manager',
    },
    {
      id: 3,
      name: 'Andrew Mbewe',
      role: 'Projects Manager',
    },
    {
      id: 4,
      name: 'Emmanuel Mbewe',
      role: 'Marketing and Branding Officer'
    }
  ];


  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>About Us</span>
          </div>
          <h1>About Malawi Electrical Solutions</h1>
          <p>
            We deliver safe, reliable, and compliant electrical solutions designed to support Malawi’s growing residential and commercial needs.
          </p>
        </div>
      </section>

      <section className="company-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Our Story</h2>
              <p>
                Founded with a clear focus on quality and safety, Techtronics Power Pro Solutions is an electrical and HVAC services provider based in Malawi.
              </p>
              <p>
                We deliver reliable electrical and HVAC solutions for residential, commercial, and light industrial clients, guided by local expertise and internationally recognized standards.
              </p>
              <p>
                Our approach is built on careful planning, regulatory compliance, and workmanship that prioritizes safety and long-term performance. As a growing company, we are committed to building lasting relationships through professionalism, transparency, and consistent service delivery.
              </p>
            </div>
            <div className="overview-stats">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Regulatory Compliance Focus</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">Certified</div>
              <div className="stat-label">Technical Oversight</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">Safety-First</div>
              <div className="stat-label">Work Standards</div>
            </div>

            <div className="stat-item">
              <div className="stat-number">Local</div>
              <div className="stat-label">Expertise & Support</div>
            </div>
          </div>

          </div>
        </div>
      </section>

      <section className="mission-values">
        <div className="container">
          <div className="section-header">
            <h2>Mission & Values</h2>
            <p className="section-description">
              Our commitment to excellence and our guiding principles
            </p>
          </div>

          <div className="mission-cards">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver trusted electrical and air conditioning solutions that empower our clients to live and work in safe, comfortable environments—combining expert craftsmanship, integrity, and innovation in everything we do.
              </p>
            </div>
            
            <div className="vision-card">
              <div className="vision-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To become most trusted name in home and industrial power solutions—where reliability, innovation, and integrity light the way
              </p>
            </div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <h4>Quality and Craftmanship</h4>
              <p>We prioritize quality and craftsmanship in every project, ensuring installations are safe, compliant, and built to last.</p>
            </div>
            <div className="value-card">
              <h4>Safety First</h4>
              <p>Uncompromising commitment to electrical safety standards and regulations.</p>
            </div>
            <div className="value-card">
              <h4>Integrity and Transparency</h4>
              <p>Honest, transparent, and ethical in all our dealings and communications.</p>
            </div>
            <div className="value-card">
              <h4>Excellence</h4>
              <p>Striving for perfection in every project we undertake, large or small.</p>
            </div>
            <div className="value-card">
              <h4>Innovation and Continous Improvement</h4>
              <p>Embracing new technologies and methods to deliver better solutions.</p>
            </div>
            <div className="value-card">
              <h4>Customer Satisfaction</h4>
              <p>Our goal is complete customer satisfaction through clear communication, reliable service, and solutions that meet each client’s needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership Team</h2>
            <p className="section-description">
              Meet our professionals who lead our operations 
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-avatar">
                  <span className="avatar-initials">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-details">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certifications-section">
        <div className="container">
          <div className="section-header">
            <h2>Certifications & Accreditations</h2>
            <p className="section-description">
              Our commitment to quality and compliance with Malawian standards
            </p>
          </div>

          {/* <div className="certifications-grid">
            <div className="certification-card">
              <div className="cert-icon">✅</div>
              <h3>Malawi Bureau of Standards</h3>
              <p>Fully certified for electrical installations and maintenance</p>
            </div>
            <div className="certification-card">
              <div className="cert-icon">⚡</div>
              <h3>ESCOM Approved</h3>
              <p>Authorized contractor for Electricity Supply Corporation of Malawi</p>
            </div>
            <div className="certification-card">
              <div className="cert-icon">🛡️</div>
              <h3>Fully Insured</h3>
              <p>Comprehensive liability and workers compensation insurance</p>
            </div>
            <div className="certification-card">
              <div className="cert-icon">🌱</div>
              <h3>Renewable Energy Certified</h3>
              <p>Certified installers for solar and renewable energy systems</p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;