import React from 'react';
import { Link } from 'react-router-dom';
import Form from "./Form";

export default function SiteFooter() {
  return (<footer>
    <section id="action">
      <div className="container">
        <div id="action-bl">
          <h2>Start Your Real Estate Journey Today</h2>
          <div className="act-text">
            <div className="act-subtitle">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</div>
            <Link to="/contacts#my-form">Explore Properties</Link>
          </div>
        </div>
      </div>
    </section>
    <div className="container" id='footer-container'>
      <div className="footer-lb">
        <div className="logo">
          <Link to="/"><img src="./images/Logo.png" alt="logo" /></Link>
        </div>
        <Form />
      </div>
      <div className="footer-rb">
        <div className="footer-nav">
        <Link to="/"><h4>Home</h4></Link>
          <ul>
            <li><Link to="/#first-screen" >Hero Section</Link></li>
            <li><Link to="/#properties" >Properties</Link></li>
            <li><Link to="/#reviews" >Features</Link></li>
            <li><Link to="/#questions" >FAQ’s</Link></li>
          </ul>
        </div>

        <div className="footer-nav">
          <Link to="/aboutus"><h4>About Us</h4></Link>
          <ul>
            <li><Link to="/aboutus#journey">Our Story</Link></li>
            <li><Link to="/aboutus#values">Our Works</Link></li>
            <li><Link to="/aboutus#navigating">How It Works</Link></li>
            <li><Link to="/aboutus#team" >Our Team</Link></li>
            <li><Link to="/aboutus#valuedclients">Our Clients</Link></li>
          </ul>
        </div>

        <div className="footer-nav">
          <Link to="/services"><h4>Services</h4></Link>
          <ul>
            <li><Link to="/services#propertyValue">Valuation Mastery</Link></li>
            <li><Link to="/services#investments">Closing Success</Link></li>
            <li><Link to="/services#propertyManagement">Property Management</Link></li>
          </ul>
        </div>

        <div className="footer-nav">
        <Link to="/contacts"><h4>Contact Us</h4></Link>
          <ul>
            <li><Link to="/contacts#my-form">Contact Form</Link></li>
            <li><Link to="/contacts#location-form" >Our Offices</Link></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="social-link">
        <div className="container">
          <ul>
            <li><a href="https://www.facebook.com/"><img src="./images/Icon-fb.png" alt="icon facebook" /></a></li>
            <li><a href="https://www.linkedin.com/"><img src="./images/Icon-ld.png" alt="icon linkedin" /></a></li>
            <li><a href="https://twitter.com/"><img src="./images/Icon-tw.png" alt="icon twitter" /></a></li>
            <li><a href="https://www.youtube.com/"><img src="./images/Icon-yt.png" alt="icon youtube" /></a></li>
          </ul>
        </div>
      </div>
  
  </footer>
  );
}
