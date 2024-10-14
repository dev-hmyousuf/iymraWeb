import React, { useState } from 'react';
import project from './ProjectSection'
import { FaGithubAlt, FaLink, FaX } from 'react-icons/fa6';
import { FaExternalLinkAlt, FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover" 
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <div className="bg-indigo-300 flex justify-center flex-wrap rounded-lg text-black p-1 mb-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className='bg-gray-100 m-1 px-2 py-1 rounded-lg text-sm'
              >
                {tech.name}
              </span>
            ))}
          </div>

          <p className="text-gray-700">{project.description}</p>
          <button 
            onClick={openModal} 
            className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-lg transition duration-200 transform hover:bg-indigo-700 hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed z-[99999] inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg transition-transform transform scale-100 hover:scale-105">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h2>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-lg object-cover mb-4" 
            />
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-gray-600 mb-4">
              Technologies: 
              {project.technologies.map((tech, index) => (
              <span key={`${tech.name}-${index}`}> {tech.name}{index < project.technologies.length - 1 ? ', ' : ''}</span>
            ))}

            </p>
            <div className="flex space-x-4 mb-4">
              <a 
                target='_blank' 
                rel='noopener noreferrer' 
                href={project.liveLink} 
                className="bg-green-500 flex items-center justify-between text-white px-4 py-2 w-1/2 rounded-lg transition duration-200 transform hover:bg-green-600 hover:scale-105"
              >
                Live 
                <FaExternalLinkAlt/>
              </a>
              <a 
                target='_blank' 
                rel='noopener noreferrer' 
                href={project.codeLink} 
                className="bg-gray-800 text-white px-4 py-2 w-1/2  rounded-lg transition duration-200 flex items-center justify-between transform hover:bg-gray-700 hover:scale-105"
              >
                Code
                <FaGithub/>
              </a>
            </div>
            <button 
              onClick={closeModal} 
              className="mt-4 flex items-center justify-center gap-3 bg-red-500 w-full text-white px-4 py-2 rounded-lg transition duration-200 transform hover:bg-red-600 hover:scale-105"
            >
              Close
              <FaX/>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
