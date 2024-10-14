import React, { useState } from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaEarthAsia } from 'react-icons/fa6';
import ScrollToTop from '../Hooks/scrollToUp.js';
import TeamData from '../assets/team_pic/team.js';
import { Helmet } from 'react-helmet';
const currentPage = 'team'; 
const Team = () => {
  const [images] = useState(TeamData);

  return (
    <ScrollToTop>
       {currentPage == 'team' && (
      <Helmet>
      <title>Meet Our Team - Connect Agency</title>
      <meta
        name="description"
        content="Meet the talented team behind Connect Agency, dedicated to providing exceptional web development, graphic design, and SEO services."
      />
      <meta
        name="keywords"
        content="team, Connect Agency, web development, graphic design, SEO, professionals, experts"
      />
      <meta property="og:title" content="Meet Our Team - Connect Agency" />
      <meta
        property="og:description"
        content="Get to know the skilled professionals at Connect Agency who are committed to delivering outstanding digital solutions."
      />
      <meta property="og:image" content="https://connectagency.vercel.app/path/to/your/image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://connectagency.vercel.app/team" />
      <meta property="og:site_name" content="Connect Agency" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Meet Our Team - Connect Agency" />
      <meta
        name="twitter:description"
        content="Discover the dedicated team at Connect Agency, working tirelessly to elevate your brand with top-notch digital services."
      />
      <meta name="twitter:image" content="https://connectagency.vercel.app/path/to/your/image.jpg" />
      <link rel="canonical" href="https://connectagency.vercel.app/team" />
    </Helmet>
    )}
      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">
              Our team
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
              The brain behind{" "}
              <span className="mx-1 rounded-lg bg-violet-300 bg-opacity-30">
                Connect Agency
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {images.map((image, index) => {
              const slug = image.name.replace(/\s+/g, '-'); // Dynamic slug creation

              return (
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
                  <div className="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-white rounded-3xl">
                    <div className="flex-initial mb-8">
                      <Link to={`/team/${slug}`}>
                        <img
                          className="cursor-pointer max-h-60 mb-8 mx-auto rounded-3xl"
                          src={image.src}
                          alt={image.name}
                        />
                      </Link>
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
                      {image.fb && (
                        <a href={image.fb} target="_blank" rel="noopener noreferrer">
                          <FaFacebook size={30} />
                        </a>
                      )}
                      {image.portfolio && (
                        <a href={image.portfolio} target="_blank" rel="noopener noreferrer">
                          <FaEarthAsia size={30} />
                        </a>
                      )}
                    </div>
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
