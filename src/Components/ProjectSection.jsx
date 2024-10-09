import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const allProjects = {
  ourProject: [
    {
      title: "কুরআনুল কারীম",
      image: ' https://i.postimg.cc/rmm2bfVY/Screenshot-2024-09-27-203711.png ',
      technologies: ["React Js", "Tailwind CSS"],
      description:  "This project is a digital Quran platform with easy navigation for reading and understanding the Quran in an interactive and user-friendly interface.",
      liveLink:"https://the-islamic-bd.vercel.app/",
      codeLink:"https://github.com/dev-hmyousuf/the_islamic_bd",
    },
    {
      title: "Expense Tracker"  ,
      image: "https://i.postimg.cc/3RzPSGzc/Screenshot-2024-09-30-000257.png ",
      technologies: ["React Js","FireBase","Tailwind Css"],
      description:   " The Expense Tracker is a simple and user-friendly application that allows users to easily track their daily expenses.  ",
      liveLink: "https://expense-tracker-one-pink-15.vercel.app/ " ,
      codeLink:" https://github.com/coderBelal/Expense-Tracker/tree/main"  ,
    },
    {
      title: "Clinic"  ,
      image: " https://i.postimg.cc/KzBMrmjC/Screenshot-2024-10-07-122503.png ",
      technologies: ["React Js", "Tailwind Css"],
      description:   "   This clinic website was designed to provide a seamless user experience, offering all essential services and information in an organized and professional manner. ",
      liveLink: " https://clinic-two-umber.vercel.app/ " ,
      codeLink:"  https://github.com/coderBelal/Clinic"  ,
    },
   
  ],
  client: [
    {
      title: 'Spaajman',
      image: ' https://i.postimg.cc/dQyM7WyP/Screenshot-2024-09-30-000210.png',
      technologies: ['Node.js','React Js' ,'Express', 'MongoDB'],
      description: 'A luxury spa and wellness service platform that offers a range of treatments and booking features, designed with modern web technologies.',
      liveLink: 'https://sparlax.com/',
 
    },
  
    
 
  ],
};

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('ourProject');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => handleCategoryChange('ourProject')}
            className={`px-6 py-3 mx-2 rounded-lg ${selectedCategory === 'ourProject' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-500'}`}
          >
           Our Project
          </button>
          <button
            onClick={() => handleCategoryChange('client')}
            className={`px-6 py-3 mx-2 rounded-lg ${selectedCategory === 'client' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-500'}`}
          >
            Client Project
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