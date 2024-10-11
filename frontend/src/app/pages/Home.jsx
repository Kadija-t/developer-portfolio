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
        const { data } = await axios.get(`${API_URL}/api/homes/1?populate=*`);console.log('ok'
        );
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
          {Image?.data?.[0]?.attributes?.url && (
            <div className="flex justify-center mt-8">
              <img
                src={Image.data[0].attributes.url.startsWith('http')
                  ? Image.data[0].attributes.url
                  : `${API_URL}${Image.data[0].attributes.url}`}
                alt={Image.data[0].attributes.alternativeText || "Logo"}
                className="w-64 h-64 object-cover rounded-full border-4 border-blue-500"
              />
            </div>
          )}
        </div>
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
          <h2 className="text-3xl font-bold mb-4">À propos de moi!</h2>
          <div className="md:max-w-4xl border-2 border-blue-500 rounded-lg p-4 mx-auto">
          <p className="leading-relaxed text-center" style={{ lineHeight: "2.5", marginBottom: "1.5rem" }}>
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


































// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import Skills from "../components/Skills";
// import Project from "../components/Project";
// import axios from "axios";

// const renderBlock = (blocks) => {
//   if (!blocks || blocks.length === 0) return null;
//   const API_URL = process.env.REACT_APP_STRAPI_URL;
//   return blocks.map((block, index) => {
//     switch (block.type) {
//       case "paragraph":
//         return (
//           <p key={index}>
//             {block.children[0]?.text || "No paragraph text available"}
//           </p>
//         );
//       case "heading":
//         return (
//           <h2 key={index}>
//             {block.children[0]?.text || "No heading text available"}
//           </h2>
//         );
//       case "image":
//         return (
//           <img
//             key={index}
//             src={`${API_URL}/${block.data?.attributes?.url || ""}`}
//             alt={block.data?.attributes?.caption || "No caption available"}
//           />
//         );
//       default:
//         return null;
//     }
//   });
// };

// const Home = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [homeData, setHomeData] = useState(null);
//   const API_URL = process.env.REACT_APP_STRAPI_URL;
  
//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       document.body.classList.toggle("dark", newMode);
//       return newMode;
//     });
//   };

//   useEffect(() => {
//     const fetchHomeData = async () => {
//       try {
//         const { data } = await axios.get(`${API_URL}/api/homes/1?populate=*`);
//         setHomeData(data.data.attributes);
//       } catch (error) {
//         console.error("Error fetching home data:", error);
//       }
//     };
//     fetchHomeData();
//   }, [API_URL]);

//   if (!homeData) return <p>Loading...</p>;

//   const { Title, Description, Image } = homeData;

//   return (
//     <>
    
//       {/* Home section */}
//       <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
//       <section
//         id="home"
//         className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
//       >
        
//             {/* Title */}<div className="flex-1 md:max-w-1xl border-none rounded-lg p-8">
//       <div className="title-content leading-relaxed space-y-6 text-center">
//         {Title ? (
//           <h1 className="text-3xl font-bold font-sans">{Title}</h1> 
//         ) : (
//           <p>No title available</p>
//         )}
//       </div>
//     </div>


//         {/* Main container */}
//         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//           {/* Description on the left */}
//           <div className="flex-1 md:max-w-2xl border-2 border-blue-500 rounded-lg p-8 ml-28">
//             <div className="description-content leading-relaxed space-y-6">
//               {/* {renderBlock(Description)} */}
//               {/**/}
//               <p>Enthousiaste et proactive, je développe des applications web intuitives et performantes pour offrir une expérience utilisateur exceptionnelle et engageante.</p>
//             </div>
//           </div>

//     {/* Image on the right */}
//     {Image?.data?.[0]?.attributes?.url && (
//       <div className="md:w-1/3 flex justify-center mr-[250px] mt-8 md:mt-0">
//         {homeData?.Image?.data?.[0]?.attributes?.url && (
//           <img
//             src={homeData?.Image?.data?.[0]?.attributes?.url.startsWith('http')
//               ? homeData?.Image?.data?.[0]?.attributes?.url
//               : `${API_URL}${homeData?.Image?.data?.[0]?.attributes?.url}`}
//             alt={homeData?.Image?.data?.[0]?.attributes?.alternativeText || "Image"}
//             className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 ml-4 animate-spin-coin"
//           />
//         )}
//       </div>
// )}
//         </div> 
//       </section>

//       {/* Skills section */}
//       <section>
//         <Skills />
//       </section>
      

//       {/* Projects section */}
//       <section
//         id="projets"
//         className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
//       >
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Projets</h2>
//           <Project />
//         </div>
//       </section>

//       {/* About section */}
//       <section
//         id="apropos" 
//         className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
//       >
//         <div className="container mx-auto px-4 flex flex-col items-center">
//           {/* Titre centré */}
//           <h2 className="text-3xl font-bold mb-4 text-center">À propos</h2>

//           {/* Description dans un carré bleu */}
//           <div className="flex-1 md:max-w-6xl border-2 border-blue-500 rounded-lg p-4 pr-0">
//             <div className="description-content leading-relaxed space-y-6">
//               {renderBlock(Description)}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact section */}
//       <section
//         id="contact"
//         className={`py-40 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
//       >
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">Contact</h2>
//           <p className="text-lg">Form...</p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
