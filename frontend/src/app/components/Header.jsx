import React, { useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header({ toggleDarkMode, isDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className={`p-6 ${isDarkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'}`}>
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <h1 className="text-4xl font-bold hover:text-black transition duration-300 lg:-mr-32">Kadija.dev</h1>
                <nav className={`hidden md:flex md:text-balance flex-grow justify-center lg:space-x-10 `}>
                    <ul className="flex md:space-x-6 lg:space-x-10">
                        {['Accueil', 'Compétences', 'Projets', 'À propos', 'Contact'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item.toLowerCase()}`} 
                                    className="text-xl text-bold transition duration-300 hover:underline"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Menu Burger */}
                <div className="md:hidden flex items-center">
                    <button onClick={handleMenuToggle} className="text-white hover:text-white">
                        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
                <button onClick={toggleDarkMode} className="bg-white text-gray-800 rounded-full p-2 hover:bg-gray-300 transition duration-300">
                    {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
                </button>
            </div>

            {/* Menu déroulant pour mobile */}
            {isMenuOpen && (
                <div className={`md:hidden rounded-lg mt-4 p-4 ${isDarkMode ? 'bg-white text-black' : 'bg-gray-800'}`}>
                    <nav>
                        <ul className="flex flex-col space-y-4">
                            {['Accueil', 'Compétences', 'Projets', 'À propos', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a 
                                        href={`#${item.toLowerCase()}`} 
                                        className={`block text-xl hover:underline transition duration-300 ${isDarkMode ? 'text-black' : 'text-white'}`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;


