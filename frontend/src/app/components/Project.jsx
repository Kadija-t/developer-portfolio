import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'; 

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_STRAPI_URL ;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/projects?populate=*`);
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

  return (
    <section id="projects" className="background">
    {/* <section id="projects" className="py-40 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"></section> */}
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {projects.map(project => (
            <Card key={project.id} project={project} />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Project;