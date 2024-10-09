import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Project from "../components/Project";
import axios from "axios";

const renderBlock = (blocks) => {
  if (!blocks || blocks.length === 0) return null;
  const API_URL = process.env.REACT_APP_STRAPI_URL;
  return blocks.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index}>
            {block.children[0]?.text || "No paragraph text available"}
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
        const { data } = await axios.get(`${API_URL}/api/homes/1?populate=*`);
        console.log(console.log(`${API_URL}${homeData?.Image?.data?.[0]?.attributes?.url}`));
        console.log(homeData);

        setHomeData(data.data.attributes);
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };
    fetchHomeData();
  }, [API_URL]);

  if (!homeData) return <p>Loading...</p>;

  const { Title, Description, Image } = homeData;

  return (
    <>
      {/* Home section */}
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <section
        id="home"
        className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        {/* Title */}
        <div className="flex-1 md:max-w-2xl border-2 border-blue-500 rounded-lg p-8">
          <div className="title-content leading-relaxed space-y-6">
            {Title ? (
              <h1 className="text-2xl font-bold">{Title}</h1>
            ) : (
              <p>No title available</p>
            )}
          </div>
        </div>

        {/* Main container */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Description on the left */}
          <div className="flex-1 md:max-w-2xl border-2 border-blue-500 rounded-lg p-8">
            <div className="description-content leading-relaxed space-y-6">
              {renderBlock(Description)}
            </div>
          </div>

          {/* Image on the right */}
          {Image?.data?.[0]?.attributes?.url && (
            <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
              {homeData?.Image?.data?.[0]?.attributes?.url && (
                <img
                  src={homeData?.Image?.data?.[0]?.attributes?.url.startsWith('http')
                    ? homeData?.Image?.data?.[0]?.attributes?.url
                    : `${API_URL}${homeData?.Image?.data?.[0]?.attributes?.url}`}
                  alt={homeData?.Image?.data?.[0]?.attributes?.alternativeText || "Image"}
                  className="w-108 h-108 object-cover rounded-full border-4 border-blue-500"
                />
              )}
            </div>
          )}
        </div>
      </section>

      {/* Skills section */}
      <section>
        <Skills />
      </section>

      {/* Projects section */}
      <section
        id="projets"
        className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Projets</h2>
          <Project />
        </div>
      </section>

      {/* About section */}
      <section
        id="apropos" 
        className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Titre centré */}
          <h2 className="text-3xl font-bold mb-4 text-center">À propos</h2>

          {/* Description dans un carré bleu */}
          <div className="flex-1 md:max-w-2xl border-2 border-blue-500 rounded-lg p-8">
            <div className="description-content leading-relaxed space-y-6">
              {renderBlock(Description)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section
        id="contact"
        className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">Form...</p>
        </div>
      </section>
    </>
  );
};

export default Home;
