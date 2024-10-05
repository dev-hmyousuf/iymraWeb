import React, { useState } from 'react';
import initialImages from '../assets/team_pic/team.js'
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaEarthAsia } from 'react-icons/fa6';
const Team = () => {
  const [images, setImages] = useState(initialImages);
  return (

    <>
      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">
              Our team
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight ">
              The brain behind{" "}
              <span className="mx-1 rounded-lg bg-violet-300 bg-opacity-30">
                Connect Agency
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">

            {
              images.map((image, index) => {
                return (
                 <div key={index} className=" w-full md:w-1/2 lg:w-1/4 p-4">
                    <div className="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-white rounded-3xl">
                      <div className="flex-initial mb-8">
                        <Link  to={image.pageLink}>

                        <img
                          className="cursor-pointer mb-8 mx-auto rounded-3xl"
                          src={image.src}
                          alt=""
                        />
                        </Link>
                        <h3 className="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">
                          {image.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-bold">{image.role}</p>
                      </div>
                      <div className="flex-initial">
                        <div className="flex flex-wrap justify-center -m-1.5">
                          <div className="w-auto p-1.5">
                            <a
                              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                              href={image.link} target='_blank'
                            >
                              <FaLinkedin className="text-gray-500" size={20} />
                            </a>
                          </div>
                          <div className="w-auto p-1.5">
                            <a
                              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                              href={image.github} target='_blank'
                            >
                              <FaGithub className="text-gray-500" size={20} />
                            </a>
                          </div>
                          <div className="w-auto p-1.5">
                            <a
                              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                              href={image.fb} target='_blank'
                            >
                              <FaFacebook className="text-gray-500" size={20} />
                            </a>
                          </div>
                          <div className="w-auto p-1.5">
                            <a
                              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
                              href={image.portfolio} target='_blank'
                            >
                              <FaEarthAsia className="text-gray-500" size={20} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
