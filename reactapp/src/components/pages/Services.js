import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
import { Link} from 'react-router-dom';

const Services = () => {
  const servicesData = [
    {
      title: 'Inventory Management',
      description: 'Efficiently manage your inventory with real-time updates and stock tracking.',
      icon: 'fas fa-box-open',
    },
    {
      title: 'Sales Tracking',
      description: 'Track and analyze your sales performance to boost revenue and growth.',
      icon: 'fas fa-chart-line',
    },
    {
      title: 'Manufacturing Support',
      description: 'Optimize your production process with comprehensive manufacturing support.',
      icon: 'fas fa-cogs',
    },
    {
      title: 'Advanced Reporting',
      description: 'Get valuable insights through advanced reporting and data visualization.',
      icon: 'fas fa-chart-bar',
    },
    {
      title: 'Customer Support',
      description: '24/7 customer support to help you with any issues or questions.',
      icon: 'fas fa-headset',
    },
    {
      title: 'User-Friendly Interface',
      description: 'Intuitive and easy-to-use interface for seamless navigation.',
      icon: 'fas fa-desktop',
    },
    // Add more services here...
  ];

  return (
    <div className="services-section">
      <div className="container">
        <div className="row">
          {servicesData.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="flip-flop-container card mb-4">
                <div className="front">
                  <div className="card-body">
                    <i className={`icon ${service.icon}`} />
                    <h5 className="service-title">{service.title}</h5>
                  </div>
                </div>
                <div className="back">
                  <div className="card-body">
                    <p className="service-description">{service.description}</p>
                   <Link to = '/about'><button className="btn btn-primary">Learn More</button></Link> 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
