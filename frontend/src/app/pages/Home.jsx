import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import axios from "axios";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";


const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [homeData, setHomeData] = useState(null);
  const API_URL = process.env.REACT_APP_STRAPI_URL;

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
  }, [API_URL]);

  const renderBlock = (blocks) => {
    if (!blocks || blocks.length === 0) return null;

    return blocks.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p key={index}>
              {block.children[0]?.text || "No text available"}
            </p>
          );
        case "heading":
          return (
            <h2 key={index}>
              {block.children[0]?.text || "No heading text available"}
            </h2>
          );
        case "image":
          return (
            <img
              key={index}
              src={`${API_URL}/${block.data?.attributes?.url || ""}`}
              alt={block.data?.attributes?.caption || "No caption available"}
            />
          );
        default:
          return null;
      }
    });
  };

  if (!homeData) return <p>Loading...</p>;

  const { Title, Description, Image } = homeData;

  return (
    <>
      {/* Header */}
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      {/* Home Section */}
      <section
        id="home"
        className={`py-20 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
       <h1 className="text-4xl font-bold mb-4">{Title || "Bienvenue"}</h1>
          
          {/* Phrase d'accroche */}
          <p className="text-xl mb-8">Enthousiaste et proactive, je développe des applications web intuitives et performantes.</p>

          {/* Logo/Image */}
          {/* {Image?.data?.[0]?.attributes?.url && (
            <div className="flex justify-center mt-8">
              <img
                src={Image.data[0].attributes.url.startsWith('http')
                  ? Image.data[0].attributes.url
                  : `${API_URL}${Image.data[0].attributes.url}`}
                alt={Image.data[0].attributes.alternativeText || "Logo"}
                className="w-64 h-64 object-cover rounded-full border-4 border-blue-500"
              />
            </div>
            
          )} */}
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
       <div className={`h-1 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div> {/* Ligne de séparation */}

      {/* Skills Section */}
      <section className={`py-20 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-800 text-white"}`}>
      {/* <section className={`py-20 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gradient-to-r from-teal-300 via-pink-300 to-yellow-400"}`}> */}

        <div className="container mx-auto text-center">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
     <section id="projets" className={`py-20 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}> 
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Projets</h2>
          <Project />
        </div>
        
      </section>
 {/* Divider */}
 <div id="apropos" className={`h-1 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div> {/* Ligne de séparation */}
      {/* About Section */}
      <section className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-800 text-white"}`}>
      {/* <section className={`py-20 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gradient-to-r from-teal-300 via-pink-300 to-yellow-400"}`}> */}
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">À propos de moi!</h2>
          <div className="md:max-w-4xl border-2 border-blue-500 rounded-lg p-4 mx-auto">
          <p className="leading-relaxed text-left" style={{ lineHeight: "2", marginBottom: "2rem" }}>
        {renderBlock(Description)}
      </p>
            {/* <p className="leading-relaxed text-center">{renderBlock(Description)}</p> */}
          </div>
        </div>
      </section>
       {/* Divider */}
       <div className={`h-1 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}></div> {/* Ligne de séparation */}

      {/* Contact Section */}
      <section id="contact" className={`py-30 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <div className="container mx-auto text-center">
          {/* <h2 className="text-3xl font-bold mb-4">Contact</h2> */}
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





