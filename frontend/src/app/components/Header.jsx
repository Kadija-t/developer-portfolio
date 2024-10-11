import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

function Header({ toggleDarkMode, isDarkMode }) {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className=" text-3xl font-bold">Kadija.dev</h1>
                <div className="flex flex-grow justify-center">
                    <nav className="bg-gray-800 text-white rounded-full border border-blue-600 mr-28 pl-4 px-6 mt-2">
                        <ul className="flex space-x-10">
                            <li><a href="#accueil" className="text-white text-xl hover:text-blue-300">Accueil</a></li>
                            <li><a href="#competences" className="text-white text-xl hover:text-blue-300">Compétences</a></li>
                            <li><a href="#projets" className="text-white text-xl hover:text-blue-300">Projets</a></li>
                            <li><a href="#apropos" className="text-white text-xl hover:text-blue-300">A propos</a></li>
                            <li><a href="#contact" className="text-white text-xl hover:text-blue-300">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <button onClick={toggleDarkMode} className="text-white bg-gray-800 rounded-full p-2 mt-1">
                    {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
                </button>
            </div>
        </div>
    );
}

export default Header;
