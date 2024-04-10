import React from 'react';
import locationContacts from '../assets/data/location-contacts.json';

export default function Location() {

  return (
      <section id="location-form">
        <div className="container">
          <div className="star"><img src="./images/star.png" alt="star icon" /></div>
          <h2>Discover Our Office Locations</h2>
          <div className="subtitle-block">
            <div className="subtitle">Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you</div>
          </div>
          <div className="location-contacts">
            <ul>
              {locationContacts.locations.map((location, index) => (
                <li key={index}>
                  <div className="location-title">{location.title}</div>
                  <div className="location-name">{location.name}</div>
                  <div className="location-desc">{location.description}</div>
                  <div className="location-bl">
                    <ul>
                      <li><a href={"mailto:" + location.contacts.email}>{location.contacts.email}</a></li>
                      <li><a href={"tel:" + location.contacts.phone}>{location.contacts.phone}</a></li>
                      <li><a href="https://www.google.com/maps/place/Metropolis,+%D0%86%D0%BB%D0%BB%D1%96%D0%BD%D0%BE%D0%B9%D1%81,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@37.1611564,-88.7329081,14z/data=!3m1!4b1!4m6!3m5!1s0x887a06e4e57107b7:0x3f21b2db51d41bec!8m2!3d37.1511655!4d-88.7319979!16zL20vMHNjd2Y?entry=ttu">
                        Metropolis</a></li>
                    </ul>
              </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  );
}
