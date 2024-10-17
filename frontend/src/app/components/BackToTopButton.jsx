import React, { useState, useEffect} from 'react'

const BackToTopButton = ({isDarkMode}) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-14 right-8 p-4 rounded-full bg-blue-500 text-white opacity-90 hover:opacity-200 transition-opacity duration-300 ${
            isDarkMode ? 'bg-gray-600' : 'bg-gray-800'
          }`}
          style={{ zIndex: 1000 }}
        >
          ↑
        </button>
      )
    );
  };

export default BackToTopButton
