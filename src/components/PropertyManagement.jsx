import React from 'react';
import { Link } from 'react-router-dom';
import managementData from '../assets/data/propertyManagement.json';

export default function PropertyManagement() {
  return (
    <section id="propertyManagement">
      <div className="container">
        <div className="star"><img src="./images/star.png" alt="star icon" /></div>
        <h2>Effortless Property Management</h2>
        <div className="subtitle">Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you</div>

        <div className="mangement-block">
          {managementData.managementItems.map((item, index) => (
            <div className="mangement-item" key={index}>
              <div className="mangement-top">
                <img src={item.iconSrc} alt={item.iconAlt} />
                <span className="mangement-title">{item.title}</span>
              </div>
              <div className="mangement-bottom">{item.description}</div>
            </div>
          ))}
                  <div className="mangement-pan">
          <div className="mangement-top">
            <div className="title">{managementData.callToAction.title}</div>
            <div className="mangement-link">
            <Link to="/#properties" >Learn More</Link>
            </div>
          </div>
          <div className="mangement-bottom">{managementData.callToAction.description}</div>
        </div>
        </div>
      </div>
    </section>
  );
}
