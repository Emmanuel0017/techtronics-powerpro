import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

interface Project {
  id: number;
  location: string;
  title: string;
  description: string;
  type: string;
  year: string;
  duration: string;
  client: string;
  scope: string[];
  image: string;
}

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      location: 'Blantyre',
      title: 'Central Business District Office Complex',
      description: 'Complete electrical system installation for a 15-story office building in Blantyre\'s central business district. The project involved comprehensive lighting, power distribution, and backup systems for a modern office environment.',
      type: 'Commercial',
      year: '2023',
      duration: '6 Months',
      client: 'CBD Developments Ltd',
      scope: [
        'Complete electrical wiring',
        'LED lighting system',
        'Backup generator integration',
        'Fire alarm system',
        'Building management system'
      ],
      image: '🏙️'
    },
    {
      id: 2,
      location: 'Lilongwe',
      title: 'Residential Estate Development',
      description: 'Electrical installations for 50 luxury homes in Lilongwe\'s newest residential estate. Each home features smart home automation, solar integration, and energy-efficient lighting.',
      type: 'Residential',
      year: '2023',
      duration: '8 Months',
      client: 'Greenfields Properties',
      scope: [
        'Smart home automation',
        'Solar power integration',
        'Complete home wiring',
        'Security lighting',
        'Energy management systems'
      ],
      image: '🏡'
    },
    {
      id: 3,
      location: 'Mzuzu',
      title: 'Industrial Manufacturing Plant',
      description: 'Heavy-duty electrical infrastructure for a new manufacturing facility in Mzuzu industrial area. The project included motor controls, production line power, and industrial lighting.',
      type: 'Industrial',
      year: '2022',
      duration: '12 Months',
      client: 'Mzuzu Manufacturing Co.',
      scope: [
        'Motor control centers',
        'PLC systems',
        'Industrial lighting',
        'Power factor correction',
        'High voltage distribution'
      ],
      image: '🏭'
    },
    {
      id: 4,
      location: 'Zomba',
      title: 'University Campus Upgrade',
      description: 'Modernization of electrical systems across Zomba University campus buildings, improving energy efficiency, safety, and reliability for educational facilities.',
      type: 'Institutional',
      year: '2022',
      duration: '10 Months',
      client: 'University of Zomba',
      scope: [
        'Campus-wide lighting upgrade',
        'Power distribution upgrade',
        'Lecture hall AV systems',
        'Emergency lighting',
        'Solar street lighting'
      ],
      image: '🎓'
    },
    {
      id: 5,
      location: 'Blantyre',
      title: 'Shopping Mall Electrical Systems',
      description: 'Full electrical fit-out for a major retail complex in Blantyre, including specialized lighting, emergency systems, and energy-efficient solutions.',
      type: 'Commercial',
      year: '2021',
      duration: '9 Months',
      client: 'Mall Group Limited',
      scope: [
        'Retail lighting design',
        'Emergency power systems',
        'HVAC electrical systems',
        'Security systems',
        'Energy monitoring'
      ],
      image: '🛍️'
    },
    {
      id: 6,
      location: 'Lilongwe',
      title: 'Hospital Backup Power Solution',
      description: 'Installation of robust backup power systems to ensure uninterrupted operation of critical medical equipment at Lilongwe Central Hospital.',
      type: 'Healthcare',
      year: '2021',
      duration: '5 Months',
      client: 'Ministry of Health',
      scope: [
        'Generator installation',
        'UPS systems',
        'Critical care power',
        'Power monitoring',
        'Maintenance program'
      ],
      image: '🏥'
    },
    {
      id: 7,
      location: 'Blantyre',
      title: 'Solar Farm Installation',
      description: 'Design and installation of a 500kW solar farm for industrial use, providing sustainable energy and reducing grid dependency.',
      type: 'Solar',
      year: '2023',
      duration: '7 Months',
      client: 'Sustainable Energy Ltd',
      scope: [
        'Solar panel installation',
        'Inverter systems',
        'Grid-tie systems',
        'Battery storage',
        'Monitoring systems'
      ],
      image: '☀️'
    },
    {
      id: 8,
      location: 'Kasungu',
      title: 'Agricultural Processing Plant',
      description: 'Electrical systems for a large-scale agricultural processing facility, including refrigeration, processing equipment, and packaging machinery.',
      type: 'Industrial',
      year: '2022',
      duration: '11 Months',
      client: 'Agro Processing Malawi',
      scope: [
        'Processing equipment power',
        'Refrigeration systems',
        'Motor controls',
        'Lighting systems',
        'Safety systems'
      ],
      image: '🌾'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type.toLowerCase() === filter.toLowerCase());

  const projectTypes = ['All', 'Commercial', 'Residential', 'Industrial', 'Solar', 'Healthcare', 'Institutional'];

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Projects</span>
          </div>
          <h1>Our Electrical Projects</h1>
          <p>
            Showcasing our expertise through successful electrical projects across Malawi. 
            Each project reflects our commitment to quality, safety, and innovation.
          </p>
        </div>
      </section>

      <section className="projects-gallery">
        <div className="container">
          <div className="section-header">
            <h2>Project Portfolio</h2>
            <p className="section-description">
              Browse through our completed projects across different sectors and locations in Malawi.
            </p>
          </div>

          <div className="project-filters">
            {projectTypes.map((type) => (
              <button
                key={type}
                className={`filter-btn ${filter === type.toLowerCase() ? 'active' : ''}`}
                onClick={() => setFilter(type.toLowerCase())}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    {project.image}
                  </div>
                  <div className="project-badges">
                    <span className="badge location">{project.location}</span>
                    <span className="badge type">{project.type}</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="meta-label">Year</span>
                      <span className="meta-value">{project.year}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">{project.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Client</span>
                      <span className="meta-value">{project.client}</span>
                    </div>
                  </div>
                  
                  <div className="project-scope">
                    <h4>Project Scope</h4>
                    <ul>
                      {project.scope.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-actions">
                    <Link to="/contact" className="btn btn-primary">
                      Request Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-stats">
        <div className="container">
          <div className="section-header">
            <h2>Projects by Numbers</h2>
            <p className="section-description">
              Our impact across Malawi through successful project delivery
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">28</div>
              <div className="stat-label">Cities Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;