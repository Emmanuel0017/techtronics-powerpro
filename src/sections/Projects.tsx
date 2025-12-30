import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  location: string;
  title: string;
  description: string;
  type: string;
  year: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      location: 'Blantyre',
      title: 'Central Business District Office Complex',
      description: 'Complete electrical system installation for a 15-story office building, including lighting, power distribution, and backup systems.',
      type: 'Commercial',
      year: '2023'
    },
    {
      id: 2,
      location: 'Lilongwe',
      title: 'Residential Estate Development',
      description: 'Electrical installations for 50 luxury homes, featuring smart home automation and solar integration.',
      type: 'Residential',
      year: '2023'
    },
    {
      id: 3,
      location: 'Mzuzu',
      title: 'Industrial Manufacturing Plant',
      description: 'Heavy-duty electrical infrastructure for a new manufacturing facility, including motor controls and production line power.',
      type: 'Industrial',
      year: '2022'
    },
    {
      id: 4,
      location: 'Zomba',
      title: 'University Campus Upgrade',
      description: 'Modernization of electrical systems across campus buildings, improving energy efficiency and safety.',
      type: 'Institutional',
      year: '2022'
    },
    {
      id: 5,
      location: 'Blantyre',
      title: 'Shopping Mall Electrical Systems',
      description: 'Full electrical fit-out for a major retail complex, including specialized lighting and emergency systems.',
      type: 'Commercial',
      year: '2021'
    },
    {
      id: 6,
      location: 'Lilongwe',
      title: 'Hospital Backup Power Solution',
      description: 'Installation of robust backup power systems to ensure uninterrupted operation of critical medical equipment.',
      type: 'Healthcare',
      year: '2021'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Our Projects</h2>
          <p className="section-description">
            Showcasing our expertise through successful electrical projects in major cities across Malawi. 
            Each project reflects our commitment to quality and innovation.
          </p>
        </div>
        
        {/* <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-location">
                  <span className="location-icon">📍</span>
                  <span className="location-text">{project.location}</span>
                </div>
                <div className="project-type">
                  {project.type}
                </div>
              </div>
              
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-footer">
                <div className="project-year">
                  <span className="year-label">Completed</span>
                  <span className="year-value">{project.year}</span>
                </div>
                <div className="project-achievement">
                  <span className="achievement-icon">✓</span>
                  <span className="achievement-text">Successfully Delivered</span>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Projects;