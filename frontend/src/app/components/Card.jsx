import React from 'react';
import Slider from './Slider';

const Card = ({ project }) => {
  // Vérification si 'project' et 'project.attributes' existent
  if (!project || !project.attributes) {
    return <div className="p-4">Invalid project data</div>;
  }

  // Extraction des attributs du projet
  const { Title, Description, Image } = project.attributes;

  // Vérification si 'Image' et 'Image.data' existent et sont valides
  const images = Image && Image.data && Array.isArray(Image.data) 
    ? Image.data.map(image => image.attributes.url)
    : [];

  return (
    <div className="max-w-md border rounded-lg overflow-hidden shadow-lg m-4">
      {/* Slider en haut de la card */}
      <div className="h-80"> 
        <Slider images={images} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{Title}</h3>
        <p>{Description || "No description available"}</p>
      </div>
    </div>
  );
};

export default Card;


