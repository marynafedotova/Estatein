import React from 'react';
import achievements from '../assets/data/achievements.json';

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="star">
          <img src="public/images/star.png" alt="star icon" />
        </div>
        <h2>Our Achievements</h2>
        <div className="subtitle">
          Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
        </div>
        <div className="achievements-bl">
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>
                <h3>{achievement.title}</h3>
                <div className="subtitle">{achievement.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

