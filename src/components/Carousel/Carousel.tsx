import React, { useEffect, useState } from 'react';
import './Carousel.scss'; // Make sure to create a corresponding SCSS file for styles

const Carousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsImageLoading(false);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
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
      {isImageLoading && 
        <div className="loader">
          <svg viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='35'></circle>
          </svg>
        </div>
      }
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
      <button onClick={goToNext} className="arrow right-arrow">&#9654;</button>
    </div> 
  );
};

export default Carousel;