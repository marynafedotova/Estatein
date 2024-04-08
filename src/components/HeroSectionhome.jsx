import LinkHero from "./LinkHero";
import Links from "./LinkHero";
import { Link } from 'react-router-dom';

export default function HeroSectionHome() {
  return (
    <section id="first-screen">
      <div className="first-container">
        <div className="left-block">
          <h1>Discover Your Dream Property with Estatein</h1>
          <p className="sub-title">Your journey to finding the perfect property begins here. Explore our listings to find
            the home that matches your dreams.</p>
          <div className="btn_first_screen">
            <Link to="/#properties" className="btn-learnmore">Learn More</Link>
            <Link to="/services#propertyValue" className="btn-browse-properties">Browse Properties</Link>
          </div>
          <ul>
            <li>
              <div className="num">200+</div>
              <div className="num-title">Happy Customers</div>
            </li>
            <li className="num-bl">
              <div className="num">10k+</div>
              <div className="num-title">Properties For Clients</div>
            </li>
            <li className="num-bl">
              <div className="num">16+</div>
              <div className="num-title">Years of Experience</div>
            </li>
          </ul>
        </div>
        <div className="right-block">
          <img src="public/images/first-screen1.png" alt="first-screen" />
        </div>
      </div>
      <LinkHero />
    </section>
  );
}
