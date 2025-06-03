import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaEarthAsia, FaTwitter } from 'react-icons/fa6';
import ScrollToTop from '../Hooks/scrollToUp.js';
import TeamData from '../assets/team_pic/team.json';

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
            {images.map(({ name, role, src, link, github, x, portfolio, slug }) => {
              const safeSlug = slug || name.replace(/\s+/g, '-').toLowerCase();

              return (
                <div key={safeSlug} className="w-full md:w-1/2 lg:w-1/4 p-2">
                  <div className="flex flex-col justify-between px-8 pt-10 h-full text-center bg-white rounded-3xl">
                    <div className="flex-initial mb-8">
                      <img
                        className="cursor-pointer max-h-60 mb-8 mx-auto rounded-3xl"
                        src={src}
                        alt={name}
                      />
                      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                      <p className="text-gray-600">{role}</p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <FaLinkedin size={30} />
                        </a>
                      )}
                      {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <FaGithub size={30} />
                        </a>
                      )}
                      {x && (
                        <a href={x} target="_blank" rel="noopener noreferrer" aria-label="X Twitter">
                          <FaTwitter size={30} />
                        </a>
                      )}
                      {portfolio && (
                        <a href={portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                          <FaEarthAsia size={30} />
                        </a>
                      )}
                    </div>
                    <Link
                      to={`/team/${safeSlug}`}
                      className="button mt-2 rounded-t-lg text-white cursor-pointer p-2 w-full flex items-center justify-center bg-indigo-600"
                    >
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
