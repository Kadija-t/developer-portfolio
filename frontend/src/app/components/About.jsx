import React, { useEffect, useState, useRef } from 'react';
import logoAbout from '../assets/logo-about.png';

export default function About({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Référence à la section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // L'élément est visible
          observer.unobserve(sectionRef.current); // Ne pas observer à nouveau
        }
      },
      { threshold: 0.1 } // Se déclenche quand 10% de la section est visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-40 ${isDarkMode ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white" : "bg-gradient-to-r from-blue-400 to-purple-400 text-black"}`}
    >
      {/* Forme décorative en haut */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1440 320">
          <path fill="#FFD700" d="M0,160L30,170.7C60,181,120,203,180,213.3C240,224,300,224,360,218.7C420,213,480,203,540,186.7C600,171,660,149,720,128C780,107,840,85,900,90.7C960,96,1020,128,1080,170.7C1140,213,1200,267,1260,277.3C1320,288,1380,256,1410,240L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"></path>
        </svg>
      </div>

      <div className="relative container mx-auto text-center z-10">
        {/* Titre stylé avec une animation d'apparition */}
        <h2 className={`text-6xl font-extrabold mb-6 text-white uppercase tracking-wide drop-shadow-lg transition-opacity duration-700 ${isVisible ? 'opacity-100 animate-slide-down' : 'opacity-0'}`}>
          À propos de moi! 🌟
        </h2>

       
        <div className="flex flex-col md:flex-row justify-center items-center md:max-w-4xl mx-auto space-y-10 md:space-y-0 md:space-x-10">
          
         
          <div className="flex-shrink-0">
            <img 
              src={logoAbout} 
              alt="Description de l'image"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg transition-transform duration-300 hover:scale-110 transform-gpu" 
            />
          </div>
          
          
          <div className={`flex-1 text-left md:text-lg bg-white/60 p-8 border-4 border-yellow-500 rounded-lg shadow-2xl text-gray-800 leading-relaxed backdrop-blur-lg transition-opacity duration-700 ${isVisible ? 'opacity-100 animate-slide-down' : 'opacity-0'}`}>
          <p className="text-xl">
              💡 <em><strong>Mon  parcours? </strong></em> 
            </p>
            <p className="text-2xl font-light mb-4">
               <strong>Après plusieurs années d'expérience dans l'éducation, j'ai transformé mes compétences en communication, gestion de projet et résolution de problèmes en véritables atouts dans mon nouveau métier.</strong>
            </p>
            <p className="text-xl">
              🚀 <em><strong>Ce qui me motive ? </strong></em> 
            </p>
            <p className="text-2xl font-light mb-4">
              <strong>Concevoir des solutions numériques qui facilitent la vie des utilisateurs tout en nourrissant ma soif d'apprentissage et d'amélioration continue.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Forme décorative en bas */}
      <div className="absolute inset-x-0 bottom-0">
        <svg className="w-full h-32" viewBox="0 0 1440 320">
          <path fill="#FFB6C1" d="M0,192L30,213.3C60,235,120,277,180,288C240,299,300,277,360,245.3C420,213,480,171,540,160C600,149,660,171,720,186.7C780,203,840,213,900,202.7C960,192,1020,160,1080,138.7C1140,117,1200,107,1260,128C1320,149,1380,203,1410,229.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"></path>
        </svg>
      </div>
    </section>
  );
}
