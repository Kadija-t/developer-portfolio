import React, { useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header({ toggleDarkMode, isDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Kadija.dev</h1>
                <div className="hidden md:flex flex-grow justify-center"> {/* hidden on mobile */}
                    <nav className={`bg-gray-800 text-white rounded-full border border-blue-600 pl-4 px-6 mt-4 mr-32`}>
                        <ul className="flex space-x-10">
                            <li><a href="#accueil" className="text-xl hover:text-blue-300">Accueil</a></li>
                            <li><a href="#competences" className="text-xl hover:text-blue-300">Compétences</a></li>
                            <li><a href="#projets" className="text-xl hover:text-blue-300">Projets</a></li>
                            <li><a href="#apropos" className="text-xl hover:text-blue-300">À propos</a></li>
                            <li><a href="#contact" className="text-xl hover:text-blue-300">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                {/* Menu Burger */}
                <div className="md:hidden flex items-center pl-30">
                    <button onClick={handleMenuToggle} className="text-black hover:text-blue-300">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <button onClick={toggleDarkMode} className="text-white bg-gray-800 rounded-full p-2 mt-1 ml-2 hover:bg-gray-600">
                    {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
                </button>
            </div>

            {/* Menu déroulant pour mobile */}
            {isMenuOpen && (
                <div className={`md:hidden rounded-lg mt-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white text-black'}`}>
                    <nav>
                        <ul className="flex flex-col space-y-2 p-4">
                            <li><a href="#accueil" className={`hover:text-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}>Accueil</a></li>
                            <li><a href="#competences" className={`hover:text-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}>Compétences</a></li>
                            <li><a href="#projets" className={`hover:text-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}>Projets</a></li>
                            <li><a href="#apropos" className={`hover:text-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}>À propos</a></li>
                            <li><a href="#contact" className={`hover:text-blue-400 ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default Header;
