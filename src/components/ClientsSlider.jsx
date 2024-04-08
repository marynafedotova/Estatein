import React from 'react';
import jsonData from '../assets/data/client.json';
import Slider from "react-slick";
import '../assets/style/index.scss';

export default function ClientsSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
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
  const slides = jsonData;

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className='slide'>
          <div id="clients">
            {slide.client_points.map((point, i) => (
              <div key={i} className="client-block">
                <div className="client-data">{slide.clients_data}</div>
                <div className="top-block">
                  <div className="client-title">{slide.clients_title}</div>
                </div>

                <div className="client-point">
                  <div className="cl-top">
                    <img src={point.point_image} alt="" />
                    <div className="client-sub">{point.point_text}</div>
                    <div className="client-subtitle">{point.subtitle}</div>
                  </div>
                  {point.category && (
                    <div className="client-category">
                      <div className="cat-icon">
                        <img src={point.category.icon} alt="" />
                      </div>
                      <div className="name-category">{point.category.name}</div>
                      <div className="sub-category">{point.category.sub}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="client-details">
              <div className="client-title">{slide.client_points[0]["client-title"]}</div>
              <div className="client-text">{slide.client_points[0].client_text}</div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
