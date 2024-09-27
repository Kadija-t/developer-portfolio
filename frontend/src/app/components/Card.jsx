import React from 'react';
import Slider from './Slider';

const Card = ({ project }) => {
  if (!project || !project.attributes) {
    return <div className="p-4">Invalid project data</div>;
  }

  const { Title, Description, Image } = project.attributes;
  const images = Image.data.map(image => `http://localhost:1337${image.attributes.url}`);

  return (
    <div className="max-w-md border rounded-lg overflow-hidden shadow-lg m-4">
      {/* Slider en haut de la carte */}
      <Slider images={images} />
      {/* Titre et description en dehors de la carte */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{Title}</h3>
        <p>{Description || "No description available"}</p>
      </div>
    </div>
  );
};

export default Card;