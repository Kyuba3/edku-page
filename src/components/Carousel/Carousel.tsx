import React, { useEffect, useState } from 'react';
import './Carousel.scss'; // Make sure to create a corresponding SCSS file for styles

const Carousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const [indicatorIndex, setIndicatorIndex] = useState<number>(0);

  const maxIndicators = 5;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setIndicatorIndex((prevIndex) => (prevIndex === 0 ? Math.min(images.length - 1, maxIndicators - 1) : prevIndex - 1));
    setIsImageLoading(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setIndicatorIndex((prevIndex) => (prevIndex === Math.min(images.length - 1, maxIndicators - 1) ? 0 : prevIndex + 1));
    setIsImageLoading(false);
  };

  useEffect(() => {
    setIsImageLoading(true); 

    const timer = setTimeout(() => {
      setIsImageLoading(false); 
      goToNext();
    }, 5000); 

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel max-w-8xl mx-auto">
      <button onClick={goToPrevious} className="arrow left-arrow">&#9664;</button>
      <div className="carousel-slides ">
        {images.map((image: string, index: number) => (
          <img
            key={image}
            src={image}
            alt={`Slide ${index}`}
            className={`slide rounded-lg ${index === currentIndex ? 'active' : ''} `}
          />
        ))}
      </div>
      <div className="carousel-indicators">
        {images.slice(0, Math.min(images.length, maxIndicators)).map((_: any, index: any) => (
          <button
            key={index}
            className={`indicator ${index === indicatorIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index + (indicatorIndex - index) + indicatorIndex)}
          ></button> 
        ))}
        {isImageLoading && 
          <div className="loader">
            <svg viewBox='0 0 100 100'>
              <circle cx='50' cy='50' r='35'></circle>
            </svg>
          </div>
        }
      </div>
      <button onClick={goToNext} className="arrow right-arrow">&#9654;</button>
    </div> 
  );
};

export default Carousel;