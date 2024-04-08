import React from 'react';
import ourValues from '../assets/data/ourValues.json';

export default function Values() {
  return (
    <section id="values">
      <div className="container">
        <div className="lb-values">
          <div className="star">
            <img src="public/images/star.png" alt="star icon" />
          </div>
          <h2>Our Values</h2>
          <div className="subtitle-block">
            <div className="subtitle">
              Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
            </div>
          </div>
        </div>
        <div className="rb-values">
          <ul>
            {ourValues.map((item, index) => (
              <li key={index} className={index % 2 === 0 ? "right-border" : ""}>
                <div className="values-top">
                  <img src={item.icon} alt={`icon ${item.title}`} />
                  <h4>{item.title}</h4>
                </div>
                <div className="values-bottom">
                  {item.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
