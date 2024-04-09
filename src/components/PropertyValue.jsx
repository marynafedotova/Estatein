import React from 'react';
import { Link } from 'react-router-dom';
import propertyValue from '../assets/data/propertyValue.json';

export default function PropertyValue() {
  return (
    <section id="propertyValue">
      <div className="container">
        <div className="star">
          <img src="./images/star.png" alt="star icon" />
        </div>
        <h2>Unlock Property Value</h2>
        <div className="subtitle">Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey</div>

        <div className="value-block">
          {propertyValue.valueItems.map((item, index) => (
            <div className="value-item" key={index}>
              <div className="value-top">
                <img src={item.iconSrc} alt={item.iconAlt} />
                <span className="value-title">{item.title}</span>
              </div>
              <div className="value-bottom">{item.description}</div>
            </div>
          ))}
          <div className="value-pan">
            <div className="pan-top">
              <div className="title">Unlock the Value of Your Property Today</div>
              <div className="pan-link"><Link to="/#properties" >Learn More</Link></div>
            </div>
            <div className="pan-bottom">Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
