// import React from 'react';
// import Slider from './Slider';

// const Card = ({ project }) => {
//   // Vérification si 'project' et 'project.attributes' existent
//   if (!project || !project.attributes) {
//     return <div className="p-4">Invalid project data</div>;
//   }

//   // Extraction des attributs du projet
//   const { Title, Description, Image } = project.attributes;

//   // Vérification si 'Image' et 'Image.data' existent et sont valides
//   const images = Image && Image.data && Array.isArray(Image.data) 
//     ? Image.data.map(image => image.attributes.url)
//     : [];

//   return (
//     <div className="max-w-md border rounded-lg overflow-hidden shadow-lg m-4">
//       {/* Slider en haut de la card */}
//       <div className="h-80"> 
//         <Slider images={images} />
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-bold mb-2">{Title}</h3>
//         <p>{Description || "No description available"}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from 'react';
import Slider from './Slider';

const Card = ({ project }) => {
  // Vérification si 'project' et 'project.attributes' existent
  if (!project || !project.attributes) {
    return <div className="p-4">Invalid project data</div>;
  }

  // Extraction des attributs du projet
  const { Title, Description, Image, Name } = project.attributes;

  // Vérification si 'Image' et 'Image.data' existent et sont valides
  const images = Image && Image.data && Array.isArray(Image.data) 
    ? Image.data.map(image => image.attributes.url)
    : [];

    const names = Array.isArray(Name) 
    ? Name.map(tag => tag.name || tag.attributes.name) // Adapter selon la structure
    : [];

  return (
    <div className=" border rounded-2xl overflow-hidden shadow-2xl m-4 transition-transform duration-300 hover:scale-105 h-[400px]"> 
      {/* Slider en haut de la card */}
      <div className="h-[70%] bg-white flex justify-center items-center">
        <Slider images={images} />
      </div>
      <div className="p-4 bg-gray-400 h-[30%] flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-2">{Title}</h3>
        <p>{Description || "No description available"}</p>

{/* Affichage des tags (sous le champ Name) */}
<div className="mt-2">
          {names.length > 0 ? (
            <div className="tags flex flex-wrap">
              {names.map((name, index) => (
                <span key={index} className="tag bg-gray-200 rounded-full px-2 py-1 text-sm mr-2">
                  {name} {/* Affiche le nom du tag */}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-gray-600">No tags available</span>
          )}
        </div>

      </div>
    </div>
  );
};

export default Card;
