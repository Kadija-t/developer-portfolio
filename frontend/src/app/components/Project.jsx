import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'; 
import ModalProject from './ModalProject';  

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // État pour le projet sélectionné
  const API_URL = process.env.REACT_APP_STRAPI_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/projects?populate=*`);
        console.log(response.data.data);
        setProjects(response.data.data);
      } catch (error) {
        console.error('Error fetching projects:', error.response ? error.response.data : error.message);
        setError('Could not load projects.');
      }
    };

    fetchProjects();
  }, [API_URL]);

  if (error) return <p>{error}</p>;
  if (!projects || projects.length === 0) return <p>No projects found.</p>;

  // Fonction pour ouvrir la modal avec le projet sélectionné
  const handleOpen = (project) => {
    setSelectedProject(project); // Mettre à jour le projet sélectionné
  };

  return (
    <section id="projects" className="background">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {projects.map(project => (
            <div key={project.id} onClick={() => handleOpen(project)} style={{ cursor: 'pointer' }}>
              <Card project={project} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Appeler ModalProject avec le projet sélectionné */}
      {selectedProject && (
        <ModalProject
          open={!!selectedProject} // Vérifie si un projet est sélectionné
          handleClose={() => setSelectedProject(null)} // Fermer la modal
          project={selectedProject} // Passer le projet sélectionné
        />
      )}
    </section>
  );
};

export default Project;
