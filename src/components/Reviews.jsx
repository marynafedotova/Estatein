import ReviewsSlider from "./ReviewsSlider";
import { Link } from "react-router-dom";

export default function Reviews() {
  return <section id="reviews">
    <div className="container">
      <div className="star"><img src="public/images/star.png" alt="star icon" /></div>
      <h2 className="wow animate__animated animate__zoomInUp">What Our Clients Say</h2>
      <div className="subtitle-block">
    <div className="subtitle">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</div>
    <div className="properties-link">
      <Link to="/aboutus#valuedclients">View All Properties</Link>
    </div>
    </div>
    <div id="reviews-slider">
    <ReviewsSlider />
    </div>
    </div>
  </section>
}