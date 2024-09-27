import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Previous image
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Next image
  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (images.length === 1) {
      setCurrentIndex(0);
    }
  }, [images]);

  return (
    <div className="relative w-full h-full">
      {/* Slide container for the image */}
      {images.length > 0 && (
        <img 
          src={images[currentIndex]} 
          alt={`Image ${currentIndex + 1}`} 
          className="w-full h-full object-contain" // Utiliser object-contain pour afficher l'image entière
        />
      )}
      
      {/* Show navigation only if there are multiple images */}
      {images.length > 1 && (
        <>
          {/* Left Chevron */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition duration-300"
            onClick={handlePrev}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Right Chevron */}
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition duration-300"
            onClick={handleNext}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

export default Slider;
