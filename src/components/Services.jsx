// src/components/Services.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Creating responsive and high-quality websites.' },
    { title: 'App Development', description: 'Building user-friendly mobile applications.' },
    { title: 'SEO Services', description: 'Optimizing your website for better visibility.' },
  ];

  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default Services;
