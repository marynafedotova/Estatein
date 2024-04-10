import React, { useState } from 'react';
import Slider from "react-slick";
import jsonData from '../assets/data/reviews.json';
import '../assets/style/index.scss';

export default function ReviewsSlider() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1594,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const slides = Object.values(jsonData.slider2);

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='slide'>
            <div id="rating">
              <ul>
                {Array.from({ length: slide.rating }, (_, i) => (
                  <li key={i}><img src="./images/star-rating.png" alt="rating" /></li>
                ))}
              </ul>
              <div className='rating-item'>
                <div className="rating-bl">
                  <div className="rating-title">{slide.rating_title}</div>
                  <div className="rating-text">{slide.rating_text}</div>
                </div>
                <div className="author-bl">
                  <div className="avatar">
                    <img src={slide.author.avatar} alt="avatar" />
                  </div>
                  <div className="author-info">
                    <div className="name_author">{slide.author.name}</div>
                    <div className="location-author">{slide.author.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
