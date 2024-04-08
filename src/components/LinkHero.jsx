import { Link } from 'react-router-dom';

export default function LinkHero() {
  return <div id="features">
    <ul>
      <li>
        <Link to="/aboutus#navigating">
          <div className="link-item">
            <img src="public/images/Icon-home.png" alt="icon home" />
            <span className="link-text">Find Your Dream Home</span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/services#propertyValue">
          <div className="link-item">
            <img src="public/images/icon-photo.png" alt="icon photo" />
            <span className="link-text"> Unlock Property Value</span>
          </div>
        </Link>
      </li>
      <li><Link to="/services#propertyManagement">
        <div className="link-item">
          <img src="public/images/icon-bildingpng.png" alt="icon bilding" />
          <span className="link-text">Effortless Property Management</span>
        </div>
      </Link>
      </li>
      <li><Link to="/services#investments">
        <div className="link-item">
          <img src="public/images/icon-sun.png" alt="icon sun" />
          <span className="link-text">Smart Investments, Informed Decisions</span>
        </div>
      </Link>
      </li>
    </ul>
  </div >
}