import React, { useState } from 'react';
import jsonData from '../assets/data/properties.json';
import Slider from "react-slick";
import '../assets/style/index.scss';

export default function PropertiesSlider() {
  const [modalContent, setModalContent] = useState(null);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
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

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const slides = Object.values(jsonData.slider1);

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='slide'>
            <div className="slide-top">
              <img src={slide['slide-top'].img.src} alt={slide['slide-top'].img.alt} />
            </div>
            <div className="slide-mid">
              <h3>{slide['slide-mid'].h3}</h3>
              <p>
                {slide['slide-mid'].p}
                <a href="#" onClick={() => openModal(slide)}>Read More.</a>
              </p>
              <ul>
                <li>
                  <img src={slide['slide-mid'].ul.li1.img.src} alt={slide['slide-mid'].ul.li1.img.alt} />
                  {slide['slide-mid'].ul.li1.text}
                </li>
                <li>
                  <img src={slide['slide-mid'].ul.li2.img.src} alt={slide['slide-mid'].ul.li2.img.alt} />
                  {slide['slide-mid'].ul.li2.text}
                </li>
                <li>
                  <img src={slide['slide-mid'].ul.li3.img.src} alt={slide['slide-mid'].ul.li3.img.alt} />
                  {slide['slide-mid'].ul.li3.text}
                </li>
              </ul>
            </div>
            <div className="slide-bottom">
              <div className='price-title'>Price
                <div className="price">{slide['slide-bottom'].Price.div.text}</div>
              </div>
              <a className="btn-property" onClick={() => openModal(slide)}>{slide['slide-bottom'].a.text}</a>
            </div>
          </div>
        ))}
      </Slider>
      {modalContent && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}>✕</span>
      <h3>{modalContent['slide-mid'].h3}</h3>
      {modalContent['slide-top'] && (
        <div className='bilding'>
          <img src={modalContent['slide-top'].img.src} alt={modalContent['slide-top'].img.alt} />
        </div>
      )}
      <ul>
        <li>
          <img src={modalContent['slide-mid'].ul.li1.img.src} alt={modalContent['slide-mid'].ul.li1.img.alt} />
          {modalContent['slide-mid'].ul.li1.text}
        </li>
        <li>
          <img src={modalContent['slide-mid'].ul.li2.img.src} alt={modalContent['slide-mid'].ul.li2.img.alt} />
          {modalContent['slide-mid'].ul.li2.text}
        </li>
        <li>
          <img src={modalContent['slide-mid'].ul.li3.img.src} alt={modalContent['slide-mid'].ul.li3.img.alt} />
          {modalContent['slide-mid'].ul.li3.text}
        </li>
      </ul>
      <div>
        <h3>Full Details:</h3>
        <div>{modalContent['slide-mid']['full-details'].text}</div>
      </div>
    </div>
  </div>
)}



    </div>
  );
}
