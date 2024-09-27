import React from "react";
import { FaJs, FaReact, FaWordpress, FaSearch, FaNodeJs, FaDatabase } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-500"/>, description: "Langage essentiel pour le développement web." },
    { name: "React", icon: <FaReact size={50} className="text-cyan-500" />, description: "Bibliothèque populaire pour créer des interfaces." },
    { name: "WordPress", icon: <FaWordpress size={50} className="text-indigo-500" />, description: "CMS pour créer des sites web." },
    { name: "SEO", icon: <FaSearch size={50}  />, description: "Optimisation pour les moteurs de recherche." },
    { name: "REST API", icon: <FaNodeJs size={50} className="text-green-600"  />, description: "Création et utilisation de services RESTful." },
    { name: "Node.js", icon: <FaNodeJs size={50}  />, description: "Environnement JavaScript côté serveur." },
    { name: "MongoDB", icon: <FaDatabase size={50} className="text-teal-500" />, description: "Base de données NoSQL pour les applications." },
  ];

  return (
    <section
      id="competences"
      className="py-40 bg-white text-black dark:bg-gray-800 dark:text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Compétences</h2>
        <p className="text-lg mb-8">Voici mes principales compétences :</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg dark:bg-gray-700"
            >
              <div className="text-blue-500 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-md">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
