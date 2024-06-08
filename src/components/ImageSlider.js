import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`

  width: 100%;
  height: 90vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  margin-top:25px;
`;

const Slide = styled.div`
  width: 100%;
  height: 100vh;
  background-size: contain; 
  background-repeat: no-repeat; 
  background-position: center; 
  position: absolute;
  transition: opacity 1s ease-in-out;
  opacity: ${props => (props.active ? 1 : 0)};
`;

const images = [
  '/1.jpeg', 
  '/2.jpeg', 
  '/3.jpeg', 
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 10000); 

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide
          key={index}
          active={index === currentSlide}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + image})` }}
        />
      ))}
    </SliderContainer>
  );
};

export default ImageSlider;
