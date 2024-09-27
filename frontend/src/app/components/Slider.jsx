
import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageStyle = images.length > 0 ? { backgroundImage: `url(${images[currentIndex]})` } : {};

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (images.length === 1) {
      setCurrentIndex(0);
    }
  }, [images]);

  return (
    <div className="relative">
      <div className="slide-container h-64 bg-cover bg-center" style={imageStyle}></div>
      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between">
          <button className="bg-white p-2" onClick={handlePrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="bg-white p-2" onClick={handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
      {images.length > 1 && (
        <div className="slider-image-counter text-white absolute bottom-2 right-2">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Slider;