import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import axios from "axios";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import About from "../components/About";
import { FaProjectDiagram } from 'react-icons/fa'; 

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [homeData, setHomeData] = useState(null);
  const API_URL = process.env.REACT_APP_STRAPI_URL;
  const [isVisible, setIsVisible] = useState(false); 

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/homes/3?populate=*`);
        setHomeData(data.data.attributes);
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };

    fetchHomeData();

    const handleScroll = () => {
      const section = document.getElementById("projets");
      const { top } = section.getBoundingClientRect();
      if (top < window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [API_URL]);

  if (!homeData) return <p>Loading...</p>;

  const { Title, Description, Image } = homeData;

  return (
    <>
      {/* Header */}
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      {/* Home Section */}
      <section
        id="accueil"
        className={`py-20 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">{Title || "Bienvenue"}</h1>
          
          {/* Phrase d'accroche */}
          <p className="text-xl mb-8">Enthousiaste et proactive, je développe des applications web intuitives et performantes.</p>

          {/* Logo/Image */}
          {Image?.data?.[0]?.attributes?.url && (
            <div className="flex justify-center mt-8">
              <img
                src={Image.data[0].attributes.url.startsWith('http')
                  ? Image.data[0].attributes.url
                  : `${API_URL}${Image.data[0].attributes.url}`}
                alt={Image.data[0].attributes.alternativeText || "Logo"}
                className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 transition-transform transition-opacity duration-300 ease-in-out hover:scale-110" 
              />
            </div>
          )}
        </div>

        <svg className="absolute bottom-0 right-0 w-1/2 opacity-20" viewBox="0 0 1440 320">
          <circle cx="700" cy="400" r="200" fill="#FFB6C1" />
        </svg>
      </section>

      {/* Divider */}
      <div className={`h-1 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div>

      {/* Section Skills */}
      <section id="compétences" className={`relative w-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <Skills isDarkMode={isDarkMode} />
      </section>

      {/* Divider */}
      <div id="projets" className={`h-1 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div>

      {/* Projects Section */}
      <section id="projets" className={`py-20 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <div className="container mx-auto text-center">
          <h2 className={`text-6xl font-extrabold mb-4 p-4 rounded-lg uppercase tracking-wide drop-shadow-lg transition-transform duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            Projets <FaProjectDiagram className="inline-block mr-2 text-5xl text-purple-700" />
          </h2>
          <Project /> 
        </div>
      </section>

      {/* Divider */}
      <div id="à propos" className={`h-1 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div>

      {/* About Section */}
      <About isDarkMode={isDarkMode} />

      {/* Divider */}
      <div className={`h-1 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div>

      {/* Contact Section */}
      <section id="contact" className={`py-30 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <div className="container mx-auto text-center">
          <div className="container mx-auto px-4 text-center">
            <Contact />
          </div>
        </div>
      </section>

      <BackToTopButton isDarkMode={isDarkMode} />

      <Footer />
    </>
  );
};

export default Home;
