import React from 'react';
import navigating from '../assets/data/navigating.json'; 

export default function Navigating() {
  return (
    <section id="navigating">
      <div className="container">
        <div className="star">
          <img src="./images/star.png" alt="star icon" />
        </div>
        <h2>Navigating the Estatein Experience</h2>
        <div className="subtitle">
          At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.
        </div>
        <div className="navigating-bl">
          <ul>
            {navigating.map((step, index) => (
              <li key={index}>
                <h3>{step.step}</h3>
                <div className="nav-text">
                  <div className="nav-title">
                    {step.title}
                  </div>
                  <div className="nav-subtitle">
                    {step.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
