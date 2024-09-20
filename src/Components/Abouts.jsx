import React from 'react'
import pic5 from '../assets/abouts/picture5.png'
import pic2 from '../assets/abouts/picture2.png'
import pic3 from '../assets/abouts/picture3.png'
import placeholder from '../assets/abouts/placeholder-logo1.png'
import Team from './Team'
import About from './About'
const Abouts = () => {
  return (
    <>
      <section className="py-4">
        <div className="container px-4 mx-auto">
          {/* this is about component */}
          <section className="py-4">
            <About />
          </section>
          {/* this is about component */}
          <div className="border border-gray-200 bg-white rounded-3xl flex flex-wrap mb-32">
            <div className="w-full md:w-1/2 lg:w-1/4 py-8">
              <div className="md:border-r border-gray-200 px-12">
                <p className="text-gray-600 mb-2 text-center">Founded</p>
                <h2 className="text-4xl lg:text-5xl font-semibold text-center">2024</h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-8">
              <div className="lg:border-r border-gray-200 px-12">
                <p className="text-gray-600 mb-2 text-center">Total funding</p>
                <h2 className="text-4xl lg:text-5xl font-semibold text-center ">$9.6M</h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-8">
              <div className="md:border-r border-gray-200 px-12">
                <p className="text-gray-600 mb-2 text-center">Team members</p>
                <h2 className="text-4xl lg:text-5xl font-semibold text-center">6</h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-8">
              <div className="px-12">
                <p className="text-gray-600 mb-2 text-center">Nationalities</p>
                <h2 className="text-4xl lg:text-5xl font-semibold text-center">24</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mb-32 -mx-8">
            <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-20 max-w-xs lg:max-w-lg">A company with values</h2>
              <img className="rounded-3xl w-full mb-8" src={pic2} alt="" />
              <img className="rounded-3xl w-full mb-8" src={pic5} alt="" />
            </div>
            <div className="w-full lg:w-1/2 px-8">
              <img className="rounded-3xl w-full mb-24" src={pic3} alt="" />
              <p className="text-gray-600 text-lg mb-10">Diversity, inclusion, and belonging are fundamental to our success. We believe the best solutions occur when a plurality of backgrounds, experiences, and identities work together.</p>
              <p className="text-gray-600 text-lg">All your operations are connected in a single platform, transforming work into a visible, automated, and collaborative experience. At every turn, you’re supported by smart suggestions and interventions that understand your business and anticipate your needs.</p>
            </div>
          </div>
          <h2 className="text-center text-4xl lg:text-5xl mb-9 font-bold font-heading">Our investors</h2>
          <div className="bg-gray-50 rounded-3xl mb-32 flex flex-wrap py-8">
            <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
              <img src={placeholder} alt="" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
              <img src={placeholder} alt="" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
              <img src={placeholder} alt="" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
              <img src={placeholder} alt="" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
              <img src={placeholder} alt="" />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 py-8 px-16 flex justify-center items-center">
              <img src={placeholder} alt="" />
            </div>
          </div>
          {/* this is Team component */}

          <Team />
          {/* this is Team component */}

        </div>
      </section>
    </>
  )
}

export default Abouts