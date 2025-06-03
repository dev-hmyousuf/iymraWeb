import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaEarthAsia, FaTwitter } from 'react-icons/fa6';
import ScrollToTop from '../Hooks/scrollToUp.js';
import TeamData from '../assets/team_pic/team.js';
const Team = () => {
  const [images] = useState(TeamData);

  return (
    <ScrollToTop>

      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">
              Our team
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
              The brain behind{" "}
              <span className="mx-1 rounded-lg bg-violet-300 bg-opacity-30">
                Iymra Labs
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {images.map((image, index) => {
              const slug = image.name.replace(/\s+/g, '-'); // Dynamic slug creation

              return (
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-2">
                  <div className="flex flex-col justify-between px-8 pt-10 h-full text-center bg-white rounded-3xl">
                    <div className="flex-initial mb-8">
                      <div>
                        <img
                          className="cursor-pointer max-h-60 mb-8 mx-auto rounded-3xl"
                          src={image.src}
                          alt={image.name}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{image.name}</h3>
                      <p className="text-gray-600">{image.role}</p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      {image.link && (
                        <a href={image.link} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin size={30} />
                        </a>
                      )}
                      {image.github && (
                        <a href={image.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub size={30} />
                        </a>
                      )}
                      {image.x && (
                        <a href={image.x} target="_blank" rel="noopener noreferrer">
                          <FaTwitter size={30} />
                        </a>
                      )}
                      {image.portfolio && (
                        <a href={image.portfolio} target="_blank" rel="noopener noreferrer">
                          <FaEarthAsia size={30} />
                        </a>
                      )}
                    </div>
                    <Link to={`/team/${slug}`} className="button mt-2 rounded-t-lg text-white cursor-pointer p-2 w-full flex items-center justify-center bg-indigo-600">
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollToTop>
  );
};

export default Team;
