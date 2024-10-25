import { FaGithub } from 'react-icons/fa';
import Slider from './Slider';
import ModalProject from './ModalProject';

const Card = ({ project }) => {
  // Vérification si 'project' et 'project.attributes' existent
  if (!project || !project.attributes) {
    return <div className="p-4">Invalid project data</div>;
  }

  // Extraction des attributs du projet
  const { Title, Description, Image, Name, Url } = project.attributes;

  // Vérification si 'Image' et 'Image.data' existent et sont valides
  const images = Image && Image.data && Array.isArray(Image.data)
    ? Image.data.map(image => image.attributes.url)
    : [];

  // Getting tag names
  const names = Name && Name.data && Array.isArray(Name.data)
    ? Name.data.map(tag => tag.attributes.Name)
    : [];

  return (
    <div className="relative border rounded-2xl overflow-hidden shadow-2xl mx-12 m-4 transition-transform duration-300 hover:scale-105 h-[350px] w-[380px]">
      {/* Slider en haut de la carte, qui prend toute la place */}
      {/* <div className="relative w-full h-full overflow-hidden">  */}
      <div className="h-full">
        <Slider images={images} />
      </div>  
  

      {/* Titre, description et tags, alignés en bas et affichés au survol */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-4" style={{ height: '50%' }}>
        <h3 className="text-lg font-bold mb-2">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {Title}
          </a>
        </h3>

        {/* Displaying tags */}
        <div className="mt-0 mb-1">
          {names.length > 0 ? (
            <div className="tags flex flex-wrap">
              {names.map((name, index) => (
                <span key={index} className="text-white bg-gray-400 rounded-full px-2 mb-1 mt-0 py-1 text-sm mr-2">
                  {name} {/* Affiche le tag */}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-gray-300">No tags available</span>
          )}
        </div>

{/* Lien GitHub en dessous des tags */}
{Url && (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
    <FaGithub className="text-white mr-2" size={24} /> {/* Icône GitHub */}
    <a href={Url} target="_blank" rel="noopener noreferrer" className="text-white underline">
      View on GitHub
    </a> 
    </div>
    <ModalProject />
  </div>
)}
 

      </div>
    </div>
  );
};

export default Card;

