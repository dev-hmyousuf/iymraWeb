 
 import React, { useState } from 'react';

const JoinUs = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section className="pt-24 pb-36 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto mb-16">
          <h2 className="mb-5 font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
            Join our <span className='text-white bg-orange-300 px-2 rounded-se-2xl'>team</span>
          </h2>
          <p className="text-gray-600 text-center text-lg">
          Join Connect Agency and be part of a dynamic team where creativity meets innovation. We're looking for passionate professionals in web development, graphic design, and SEO to help us deliver exceptional results. Elevate your career with us and work on exciting projects that make a difference.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap -m-0.5">
            <div className="w-full p-0.5">
              <div className="p-6 bg-white border border-gray-100 rounded-lg">
                <div className="flex flex-wrap items-center justify-between -m-2">
                  <div className="w-full p-2 sm:flex-1">
                    <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">
                      Full-Stack Developer
                    </h3>
                    <p className="text-gray-600">
                      <span>Part time</span>
                      <span className="text-gray-300">Remote</span>
                    </p>
                  </div>
                  <div className="w-full sm:w-auto p-2">
                    <div className="group relative">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-full transition ease-out duration-300" />
                      <button
                        className="p-1 w-full font-heading font-medium text-base text-gray-900 overflow-hidden rounded-full"
                        onClick={handleApplyClick}
                      >
                        <div className="relative py-2 px-5 bg-gradient-green overflow-hidden rounded-full">
                          <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-indigo-600 transition ease-in-out duration-500" />
                          <p className="relative z-10 group-hover:text-white">
                            Apply now
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between -m-2">
                  <div className="w-full p-2 sm:flex-1">
                    <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">
                      Backend Developer
                    </h3>
                    <p className="text-gray-600">
                      <span>Part time</span>
                      <span className="text-gray-300">Remote</span>
                    </p>
                  </div>
                  <div className="w-full sm:w-auto p-2">
                    <div className="group relative">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-full transition ease-out duration-300" />
                      <button
                        className="p-1 w-full font-heading font-medium text-base text-gray-900 overflow-hidden rounded-full"
                        onClick={handleApplyClick}
                      >
                        <div className="relative py-2 px-5 bg-gradient-green overflow-hidden rounded-full">
                          <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-indigo-600 transition ease-in-out duration-500" />
                          <p className="relative z-10 group-hover:text-white">
                            Apply now
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        {showForm && (
          <section className="bg-coolGray-50 py-4">
            <div className="container px-4 mx-auto">
              <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
                <div className="pb-6 border-b border-coolGray-100">
                  <div className="flex flex-wrap items-center justify-between -m-2">
                    <div className="w-full md:w-auto p-2">
                      <h2 className="text-coolGray-900 text-lg font-semibold">
                        Personal info
                      </h2>
                      <p className="text-xs text-coolGray-500 font-medium">
                        Fill your Identity.
                      </p>
                    </div>
                    <div className="w-full md:w-auto p-2">
                      <div className="flex flex-wrap justify-between -m-1.5">
                        <div className="w-full md:w-auto p-1.5">
                          <button
                            className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button"
                            onClick={handleCloseForm}
                          >
                            <p>Cancel</p>
                          </button>
                        </div>
                        <div className="w-full md:w-auto p-1.5">
                          <button className="flex flex-wrap justify-center w-full px-4 py-2 bg-indigo-600  font-medium text-sm text-white border   rounded-md shadow-button">
                            <p>Submit</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                  <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full md:w-1/3 p-3">
                        <p className="text-sm text-coolGray-800 font-semibold">Name</p>
                      </div>
                      <div className="w-full md:w-1/3 p-3">
                      <input
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                          type="text"
                          placeholder="John"
                        />
                      </div>
                      <div className="w-full md:w-1/3 p-3">
                        <input
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                          type="text"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                  <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full md:w-1/3 p-3">
                        <p className="text-sm text-coolGray-800 font-semibold">
                          Email address
                        </p>
                      </div>
                      <div className="w-full md:flex-1 p-3">
                        <input
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                          type="text"
                          placeholder="johndoe@flex.co"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-6 border-b border-coolGray-100">
                  <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full md:w-1/3 p-3">
                        <p className="text-sm text-coolGray-800 font-semibold">Photo</p>
                        <p className="text-xs text-coolGray-500 font-medium">
                          Upload your Photo.
                        </p>
                      </div>
                      <div className="w-full md:w-auto p-3">
                        <img
                          src="flex-ui-assets/images/dashboard/forms/avatar.png"
                          alt=""
                        />
                      </div>
                      <div className="w-full md:flex-1 p-3">
                        <div className="relative flex flex-col items-center justify-center p-6 h-44 text-center text-infigo-600 focus-within:border-indigo-600 border border-dashed border-coolGray-200 rounded-lg shadow-input">
                          <svg
                            className="w-16 h-16 mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 10h16M4 14h16M4 18h16"
                            />
                          </svg>
                          <p className="text-sm font-medium">
                            Drag & drop or click to upload
                          </p>
                          <p className="text-xs text-coolGray-500 font-medium">
                            SVG, PNG, JPG or GIF (max. 800x400px)
                          </p>
                          <input
                            type="file"
                            className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default JoinUs;
