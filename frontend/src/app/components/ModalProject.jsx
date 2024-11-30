import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import Slider from './Slider';
import { FaGithub } from 'react-icons/fa'; 

function ModalProject({ open, handleClose, project}) {
  if (!project) return null;

  const { attributes } = project;
  const { Title, Description, Image, Name, Infos, Problematic, Solution, Url } = attributes;

  // Récupérer les images du projet
  const images = Image && Image.data && Array.isArray(Image.data)
    ? Image.data.map(image => image.attributes.url)
    : [];

  // Récupérer les tags du projet
  const tags = Name && Name.data && Array.isArray(Name.data)
    ? Name.data.map(tag => tag.attributes.Name)
    : [];

  return (
    <Modal open={open} onClose={handleClose}>
      {/* Box de la modal avec la couleur de fond et les nouvelles dimensions */}
      <Box className="w-full max-w-[90vw] md:max-w-[750px] p-4 bg-gray-100 rounded-lg shadow-xl mx-auto my-8 max-h-[90vh] overflow-hidden sm: overflow-y-auto flex flex-col lg:flex-row">
        
        {/* Colonne gauche pour les informations textuelles */}
        <div className="w-full lg:w-1/2 pr-4">
          {/* Titre du projet */}
          <h2 className="text-xl text-black font-semibold mb-2">{Title || 'Titre non disponible'}</h2>

          {/* Description du projet */}
          <p className="mb-4 text-sm text-gray-600">{Description || 'Description non disponible'}</p>

          {/* Tags associés au projet */}
          <h3 className="font-semibold mt-2  dark:text-gray-600">Stack</h3>
          <div className="flex flex-wrap mb-4">
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <span key={index} className="text-white bg-purple-700 rounded-full px-2 mb-1 mr-2 text-sm">
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-gray-500">Aucun tag disponible</span>
            )}
          </div>

          {/* Informations supplémentaires sur le projet */}
          <h3 className="font-semibold mt-2  dark:text-gray-600">Informations</h3>
          <p className="mb-4 text-sm text-gray-600">{Infos || 'Pas d\'informations disponibles'}</p>

          {/* Problématiques associées au projet */}
          <h3 className="font-semibold mt-2  dark:text-gray-600">Problématiques</h3>
          <p className="mb-4 text-sm text-gray-600">{Problematic || 'Pas de problématiques disponibles'}</p>

          {/* Solutions associées au projet */}
          <h3 className="font-semibold mt-2  dark:text-gray-600">Solutions</h3>
          <p className="mb-4 text-sm text-gray-600">{Solution || 'Pas de solutions disponibles'}</p>

          {/* Bouton de fermeture de la modal */}
          <Button onClick={handleClose} variant="outlined" className="mt-4">
            Fermer
          </Button>
        </div>

        {/* Colonne droite pour le carrousel */}
        <div className="w-full lg:w-1/2 lg:pl-4 flex flex-col items-center">
          {/* Slider avec une ombre et une hauteur augmentée */}
          <div className="h-[250px] sm:h-[300px] lg:h-[350px] w-full shadow-lg bg-white rounded-lg overflow-hidden mb-4">
            <Slider images={images} />
          </div>

          {/* Lien GitHub en dessous du carrousel */}
          {Url && (
            <div className="flex items-center mt-4">
              <Button 
                component="a" 
                href={Url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center bg-gray-200 p-3 rounded-lg w-full text-center hover:bg-gray-300 transition-colors"
              >
                <FaGithub className="text-gray-700 mr-2" size={24} /> {/* Icône GitHub */}
                <span className="text-lg text-gray-700">View on GitHub</span>
              </Button>
            </div>
          )}
        </div>
      </Box>
    </Modal>
  );
}

export default ModalProject;
