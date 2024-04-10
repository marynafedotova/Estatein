import React from 'react';
import { Link } from 'react-router-dom';
import investmentData from '../assets/data/investments.json';

export default function Investmens() {
  return (
    <section id="investments">
      <div className="container">
        <div className="investmens-lb">
          <div className="star"><img src="./images/star.png" alt="star icon" /></div>
          <h2>Smart Investments, Informed Decisions</h2>
          <div className="subtitle">Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.</div>
          <div className="potential">
            <div className="title">Unlock Your Investment Potential</div>
            <div className="text">Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</div>
            <Link to="/#properties" >Learn More</Link>
          </div>
        </div>
        <div className="investmens-block">
          {investmentData.investmentItems.map((item, index) => (
            <div className="investmens-item" key={index}>
              <div className="investmens-top">
                <img src={item.iconSrc} alt={item.iconAlt} />
                <div className="investmens-title">{item.title}</div>
              </div>
              <div className="investmens-bottom">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
