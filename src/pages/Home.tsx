import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyChooseUs from '../sections/WhyChooseUs';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <WhyChooseUs />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;