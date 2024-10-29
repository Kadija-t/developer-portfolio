import React, { useEffect, useState, useRef } from "react";
import { FaJs, FaReact, FaWordpress, FaSearch, FaNodeJs, FaDatabase } from "react-icons/fa";

const Skills = ({ isDarkMode }) => {
  const skills = [
    { name: "JavaScript", icon: <FaJs size={60} className="text-yellow-500" />, description: "Langage essentiel pour le développement web." },
    { name: "React", icon: <FaReact size={60} className="text-cyan-500" />, description: "Bibliothèque populaire pour créer des interfaces." },
    { name: "WordPress", icon: <FaWordpress size={60} className="text-indigo-500" />, description: "CMS pour créer des sites web." },
    { name: "SEO", icon: <FaSearch size={60} className="text-orange-400" />, description: "Optimisation pour les moteurs de recherche." },
    { name: "REST API", icon: <FaNodeJs size={60} className="text-green-600" />, description: "Création et utilisation de services RESTful." },
    { name: "Node.js", icon: <FaNodeJs size={60} className="text-green-600" />, description: "Environnement JavaScript côté serveur." },
    { name: "MongoDB", icon: <FaDatabase size={60} className="text-teal-500" />, description: "Base de données NoSQL pour les applications." },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
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
      id="competences"
      ref={sectionRef}
      className={`relative py-40 w-full pb-2  ${isDarkMode ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white" : "bg-gradient-to-r from-blue-400 to-purple-400 text-black"}`}
    >
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1440 320">
          <path fill="#FFD700" d="M0,160L30,170.7C60,181,120,203,180,213.3C240,224,300,224,360,218.7C420,213,480,203,540,186.7C600,171,660,149,720,128C780,107,840,85,900,90.7C960,96,1020,128,1080,170.7C1140,213,1200,267,1260,277.3C1320,288,1380,256,1410,240L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"></path>
        </svg>
      </div>

      <div className="relative z-10 w-full text-center"> 
        {/* Titre avec effet de défilement */}
        <h2 className={`text-4xl md:text-6xl font-extrabold mb-2 text-white uppercase tracking-wide drop-shadow-lg transition-transform duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Compétences 🚀
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 px-16 p-32 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/100 shadow-box-red p-12 mb-12 mr-5 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl ease-in-out"
              style={{ maxWidth: "900px" }}
            >
              <div className="text-blue-500 mb-6">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">{skill.name}</h3>
              <p className="text-md text-gray-700">{skill.description}</p>
            </div>
          ))}
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
};

export default Skills;


