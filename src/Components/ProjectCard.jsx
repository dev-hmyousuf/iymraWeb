import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-2">{project.technologies.join(', ')}</p>
          <p className="text-gray-800">{project.description}</p>
          <button onClick={openModal} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
            <p className="text-gray-800 mb-4">{project.description}</p>
            <p className="text-gray-600 mb-4">Technologies: {project.technologies.join(', ')}</p>
            <div className="flex space-x-4">
              <a target='_black' href={project.liveLink} className="bg-green-500 text-white px-4 py-2 rounded">
                Live
              </a>
              <a target='_black' href={project.codeLink} className="bg-gray-800 text-white px-4 py-2 rounded">
                Code
              </a>
            </div>
            <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;