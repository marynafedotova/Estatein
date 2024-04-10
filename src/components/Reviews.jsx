import ReviewsSlider from "./ReviewsSlider";
import { Link } from "react-router-dom";

export default function Reviews() {
  return <section id="reviews">
    <div className="container">
      <div className="star"><img src="./images/star.png" alt="star icon" /></div>
      <h2>What Our Clients Say</h2>
      <div className="subtitle-block">
    <div className="subtitle">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</div>
    </div>
    <div id="reviews-slider">
    <ReviewsSlider />
    </div>
    </div>
  </section>
}