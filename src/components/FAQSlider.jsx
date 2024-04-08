import React, { useState } from 'react';
import Slider from 'react-slick';
import jsonData from '../assets/data/FAQ.json';

export default function FAQSlider() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
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

  return (
    <div>
      <Slider {...settings}>
        {jsonData.slider3.map((item, index) => (
          <div key={index} className="slide">
            <div className="questions">{item.question}</div>
            <div className="answer">{item.answer}</div>
            <a  onClick={() => openModal(item)}>Read More</a>
          </div>
        ))}
      </Slider>
      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>✕</span>
            <div className="questions">{modalContent.question}</div>
            <div className="answer">{modalContent.full_answer}</div>
          </div>
        </div>
      )}
    </div>
  );
}
