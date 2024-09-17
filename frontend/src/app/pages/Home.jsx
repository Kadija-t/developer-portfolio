import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

const renderBlock = (blocks) => {
  if (!blocks || blocks.length === 0) return null;

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
            src={`http://localhost:1337${block.data?.attributes?.url || ""}`}
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const { data } = await axios.get("http://localhost:1337/api/homes/1?populate=*");
        setHomeData(data.data.attributes);
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };
    fetchHomeData();
  }, []);

  if (!homeData) return <p>Loading...</p>;

  const { Title, Description, Image } = homeData;

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} />
      <section
        id="home"
        className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">{Title}</h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex-1 max-w-md border-2 border-blue-500 rounded-lg p-4">
              <div className="description-content">
                {renderBlock(Description)}
              </div>
            </div>
            {Image?.data?.[0]?.attributes?.url && (
              <div className="flex-1 max-w-md border-2 border-blue-500 rounded-lg p-4">
                <img
                  src={`http://localhost:1337${Image.data[0].attributes.url}`}
                  alt={Title || "No caption available"}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other sections */}
      <section
        id="competences"
        className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Compétences</h2>
          <p className="text-lg">Voici mes compétences...</p>
        </div>
      </section>

      <section
        id="projets"
        className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Projets</h2>
          <p className="text-lg">Projets...</p>
        </div>
      </section>

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
