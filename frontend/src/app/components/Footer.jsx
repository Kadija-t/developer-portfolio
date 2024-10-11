import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear(); 

    return (
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer
