import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/hero_1.png';
import image2 from '../assets/hero_2.png';
import image3 from '../assets/hero_3.png';
import image4 from '../assets/hero_4.png';

import '../style/Hero.css';

export default function Hero() {
  useEffect(() => {
    [image1, image2, image3, image4].forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="slide-container">
        <div className="slide-content">
          <img className="carousel--img" src={image1} alt="Image 1" />
          <div className="slide-text">
            Experience comfort beyond measure! Unlock the door to your perfect getaway with our premium room rentals. Your home away from home awaits!
          </div>
        </div>
      </div>
      <div className="slide-container">
        <div className="slide-content">
          <img className="carousel--img" src={image2} alt="Image 2" />
          <div className="slide-text">
            Seize the moment, seize the comfort! Elevate your travel experience with our meticulously designed rooms. Book now and let tranquility be your travel companion.
          </div>
        </div>
      </div>
      <div className="slide-container">
        <div className="slide-content">
          <img className="carousel--img" src={image3} alt="Image 3" />
          <div className="slide-text">
            Where luxury meets affordability – our rooms redefine comfort. Book your stay with us and indulge in a retreat that feels as inviting as it is unforgettable.
          </div>
        </div>
      </div>
      <div className="slide-container">
        <div className="slide-content">
          <img className="carousel--img" src={image4} alt="Image 4" />
          <div className="slide-text">
            Discover a world of cozy elegance! Our room rentals are crafted for those who appreciate the finer things in life. Reserve your sanctuary now and make every stay a memorable escape.
          </div>
        </div>
      </div>
    </Slider>
  );
}
