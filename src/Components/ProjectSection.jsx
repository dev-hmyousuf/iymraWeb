import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const allProjects = {
  frontend: [
    {
      title: "IMDB Clone",
      image: 'https://raw.githubusercontent.com/coderBelal/image/main/imdb.jpg ',
      technologies: ["React Js", "CSS"],
      description:  "Display a catalogue of movies with titles, posters, and maybe short descriptions.",
      liveLink:"https://imdb-clone-xi-ten.vercel.app/",
      codeLink:"https://github.com/coderBelal/IMDB-Clone.git",
    },
    {
      title: "Short Music"  ,
      image: "https://raw.githubusercontent.com/coderBelal/image/main/Screenshot%202024-05-16%20110528.jpg",
      technologies: ["React Js"],
      description:   "Upbeat and energetic pop track perfect for a summer road tripHaunting melody with a driving rhythm, ideal for a suspenseful movie scene Relaxing piano piece with calming strings, great for unwinding after a long day",
 
      liveLink: "https://react-shorts-music.vercel.app/" ,
      codeLink:"https://github.com/coderBelal/React-Shorts-Music.git"  ,
    },
    {
        title:   "Gemini Clone",
        image:  "https://raw.githubusercontent.com/coderBelal/image/main/Screenshot%202024-05-16%20111026.jpg",
        technologies: ["CSS", "React JS"] ,
        description:     "This technology uses machine learning to mimic a specific person's voice. By analyzing voice recordings, AI can create synthetic speech that sounds remarkably similar to the original speaker. This is useful for various applications like creating audiobooks, generating voiceovers, or preserving the voices of historical figures.",
        image:"https://raw.githubusercontent.com/coderBelal/image/main/Screenshot%202024-05-16%20111026.jpg",
        liveLink:  "https://gemini-ai-clone-nu.vercel.app/",
    
      },
    // Add 3 more front-end project objects...
  ],
  backend: [
    {
      title: 'Back-end Project One',
      image: 'https://via.placeholder.com/300',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      description: 'A short description of Back-end Project One.',
      liveLink: 'https://live-backend-one.com',
      codeLink: 'https://github.com/user/backend-one',
    },
    {
      title: 'Back-end Project Two',
      image: 'https://via.placeholder.com/300',
      technologies: ['Node.js', 'Express', 'MySQL'],
      description: 'A short description of Back-end Project Two.',
      liveLink: 'https://live-backend-two.com',
      codeLink: 'https://github.com/user/backend-two',
    },
    {
        title: 'Back-end Project Two',
        image: 'https://via.placeholder.com/300',
        technologies: ['Node.js', 'Express', 'MySQL'],
        description: 'A short description of Back-end Project Two.',
        liveLink: 'https://live-backend-two.com',
        codeLink: 'https://github.com/user/backend-two',
      },
    
    // Add 3 more back-end project objects...
  ],
};

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => handleCategoryChange('frontend')}
            className={`px-6 py-3 mx-2 rounded-lg ${selectedCategory === 'frontend' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-500'}`}
          >
            Front-end
          </button>
          <button
            onClick={() => handleCategoryChange('backend')}
            className={`px-6 py-3 mx-2 rounded-lg ${selectedCategory === 'backend' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-500'}`}
          >
            Back-end
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects[selectedCategory].map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
           
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;