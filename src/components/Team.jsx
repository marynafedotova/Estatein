import React from 'react';
import team from '../assets/data/team.json';

export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="star">
          <img src="public/images/star.png" alt="star icon" />
        </div>
        <h2>Meet the Estatein Team</h2>
        <div className="subtitle">
          At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
        </div>
        <div className="team-list">
          <ul>
            {team.map((member, index) => (
              <li key={index}>
                <div className="team-photo">
                  <img src={member.photo} alt="photo" />
                </div>
                <div className="team-text">
                  <div className="name">{member.name}</div>
                  <div className="position">{member.position}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
