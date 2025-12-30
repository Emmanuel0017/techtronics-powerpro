import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  qualification: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const AboutPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'James Banda',
      role: 'Chief Electrical Engineer',
      experience: '20+ years',
      qualification: 'MSc Electrical Engineering, Registered Malawi Engineer'
    },
    {
      id: 2,
      name: 'Sarah Chikondi',
      role: 'Project Manager',
      experience: '12 years',
      qualification: 'BSc Electrical Engineering, PMP Certified'
    },
    {
      id: 3,
      name: 'Peter Mwale',
      role: 'Solar Energy Specialist',
      experience: '8 years',
      qualification: 'Renewable Energy Diploma, NABCEP Certified'
    },
    {
      id: 4,
      name: 'Grace Kachala',
      role: 'Safety Compliance Officer',
      experience: '15 years',
      qualification: 'Electrical Safety Inspector, MBS Certified'
    }
  ];

  const milestones: Milestone[] = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Started as a small electrical repair service in Blantyre'
    },
    {
      year: '2012',
      title: 'MBS Certification',
      description: 'Received Malawi Bureau of Standards certification for electrical work'
    },
    {
      year: '2015',
      title: 'National Expansion',
      description: 'Expanded operations to Lilongwe and Mzuzu'
    },
    {
      year: '2018',
      title: 'Solar Division Launch',
      description: 'Started dedicated solar power and renewable energy division'
    },
    {
      year: '2021',
      title: 'Industrial Specialization',
      description: 'Developed specialized industrial electrical solutions division'
    },
    {
      year: '2023',
      title: '500+ Projects',
      description: 'Successfully completed over 500 projects across Malawi'
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
            For over 15 years, we have been powering Malawi's growth through innovative, 
            safe, and sustainable electrical solutions that enhance lives and drive business success.
          </p>
        </div>
      </section>

      <section className="company-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2008 with a vision to revolutionize electrical services in Malawi, 
                we have grown from a small workshop in Blantyre to become one of Malawi's 
                most trusted electrical solutions providers.
              </p>
              <p>
                Our journey began with a simple commitment: to provide safe, reliable, 
                and professional electrical solutions tailored to Malawi's unique needs. 
                Today, we serve clients across all regions of Malawi - from urban centers 
                like Blantyre and Lilongwe to rural communities.
              </p>
              <p>
                Our team of certified electricians brings local knowledge combined with 
                international standards of excellence. We believe in building lasting 
                relationships based on trust, quality, and commitment to excellence.
              </p>
            </div>
            <div className="overview-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Certified Staff</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">28</div>
                <div className="stat-label">Cities Served</div>
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
                To power Malawi's growth through innovative, safe, and sustainable 
                electrical solutions that enhance lives and drive business success.
              </p>
            </div>
            
            <div className="vision-card">
              <div className="vision-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To be Malawi's leading electrical services provider, recognized for 
                excellence, reliability, and commitment to community development.
              </p>
            </div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <h4>Safety First</h4>
              <p>Uncompromising commitment to electrical safety standards and regulations.</p>
            </div>
            <div className="value-card">
              <h4>Integrity</h4>
              <p>Honest, transparent, and ethical in all our dealings and communications.</p>
            </div>
            <div className="value-card">
              <h4>Excellence</h4>
              <p>Striving for perfection in every project we undertake, large or small.</p>
            </div>
            <div className="value-card">
              <h4>Innovation</h4>
              <p>Embracing new technologies and methods to deliver better solutions.</p>
            </div>
            <div className="value-card">
              <h4>Community</h4>
              <p>Committed to Malawi's growth and the well-being of our communities.</p>
            </div>
            <div className="value-card">
              <h4>Reliability</h4>
              <p>Consistently delivering on our promises with quality and timeliness.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership Team</h2>
            <p className="section-description">
              Meet the experienced professionals who lead our operations across Malawi
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
                    <div className="detail-item">
                      <span className="detail-label">Experience</span>
                      <span className="detail-value">{member.experience}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Qualification</span>
                      <span className="detail-value">{member.qualification}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="milestones-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p className="section-description">
              Key milestones in our journey of growth and excellence
            </p>
          </div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
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

          <div className="certifications-grid">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;