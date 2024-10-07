import React from 'react'
import pictureLargeImg from '../../assets/Blog/picture-large.png'
import picturesSmallImg from '../../assets/Blog/picture1.png'

const Blog = () => {
  return (
    <>
      <section className="overflow-hidden">
  <div className="bg-orange-50 pt-20 pb-80 px-10 relative">
    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 flex gap-6">
      <div
        className="mt-20 rounded-3xl w-80 h-80"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #FFE0A5 100%)"
        }}
      />
      <div
        className="rounded-3xl w-80 h-80"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #FFE0A5 100%)"
        }}
      />
      <div
        className="rounded-3xl w-80 h-80"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #FFE0A5 100%)"
        }}
      />
      <div
        className="mt-20 rounded-3xl w-80 h-80"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 242, 214, 0.00) 0%, #FFE0A5 100%)"
        }}
      />
    </div>
    <div className="relative z-10">
      <p className="uppercase text-center font-bold font-heading text-sm text-orange-500 mb-6">
        Blog
      </p>
      <h1 className="text-center font-bold font-heading text-4xl lg:text-6xl max-w-md lg:max-w-4xl mx-auto pb-32 lg:pb-0">
        Discover the latest news, stories &amp; insights
      </h1>
    </div>
  </div>
  <div className="container px-4 mx-auto">
    <a
      className="bg-white border border-orange-100 hover:border-orange-500 transition duration-200 shadow rounded-3xl transform -translate-y-1/2 flex flex-wrap"
      href="#"
    >
      <div className="w-full lg:w-1/2 px-8 lg:px-16 py-8">
        <div className="flex flex-col justify-center items-start h-full">
          <div className="py-1 px-3 rounded-md bg-orange-50 border border-orange-100 text-sm font-medium text-orange-500 inline-block mb-4">
            Productivity
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4 max-w-sm">
            How to Learn Anything Faster and Master It
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-gray-500 text-sm">20 Jul 2023</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={4}
              height={4}
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx={2} cy={2} r={2} fill="#B8B8B8" />
            </svg>
            <p className="text-gray-500 text-sm">4 min read</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative">
        <div className="relative" style={{ height: 396 }}>
          <div className="absolute top-0 left-0 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={155}
              height={154}
              viewBox="0 0 155 154"
              fill="none"
            >
              <path
                d="M-34 79.9324V153.361C-34 153.714 -33.7141 154 -33.3615 154H17.62C17.9724 154 18.2585 153.714 18.2585 153.361V94.299C18.2585 55.5087 56.5087 17.2585 95.299 17.2585H154.361C154.714 17.2585 155 16.9724 155 16.62V-34.3615C155 -34.7139 154.714 -35 154.361 -35H80.9324C17.4572 -35 -34 16.4572 -34 79.9324Z"
                fill="#FF7100"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 z-10">
            <svg
              className="rounded-br-3xl"
              xmlns="http://www.w3.org/2000/svg"
              width={154}
              height={158}
              viewBox="0 0 154 158"
              fill="none"
            >
              <path
                d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                fill="#FF7100"
              />
            </svg>
          </div>
          <img
            className="absolute inset-0 w-full h-full object-cover lg:rounded-tr-3xl rounded-br-3xl rounded-bl-3xl lg:rounded-bl-none"
            src={pictureLargeImg}
            alt=""
          />
        </div>
      </div>
    </a>
    <div className="relative h-16 -mt-48 lg:-mt-20 mb-16">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 h-px w-full" />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-8 rounded-2xl bg-orange-50 border border-gray-200 text-lg lg:text-2xl font-bold font-heading whitespace-nowrap">
        Latest articles
      </div>
    </div>
    <div className="flex flex-wrap mb-8 -mx-4">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <a href="#">
          <div className="bg-white border border-orange-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
            <div className="relative" style={{ height: 240 }}>
              <div className="absolute top-0 left-0 z-10">
                <svg
                  className="rounded-tl-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width={159}
                  height={156}
                  viewBox="0 0 159 156"
                  fill="none"
                >
                  <path
                    d="M-30 81.9324V155.361C-30 155.714 -29.7141 156 -29.3615 156H21.62C21.9724 156 22.2585 155.714 22.2585 155.361V96.299C22.2585 57.5087 60.5087 19.2585 99.299 19.2585H158.361C158.714 19.2585 159 18.9724 159 18.62V-32.3615C159 -32.7139 158.714 -33 158.361 -33H84.9324C21.4572 -33 -30 18.4572 -30 81.9324Z"
                    fill="#FFF2D6"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={150}
                  height={158}
                  viewBox="0 0 150 158"
                  fill="none"
                >
                  <path
                    d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                    fill="#FFF2D6"
                  />
                </svg>
              </div>
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                src={picturesSmallImg}
                alt=""
              />
            </div>
            <div className="p-6">
              <div className="py-1 px-2 rounded-md bg-orange-50 border border-orange-100 text-xs font-medium text-orange-500 inline-block mb-3">
                Tips
              </div>
              <h2 className="font-bold font-heading mb-3">
                Make Your Phone Your Best Study Tool
              </h2>
              <p className="text-gray-500 text-sm mb-9">
                How do we make our phone best study tool? Read on to find out
                more.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-gray-500 text-sm">17 Jul 2023</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={4}
                  height={4}
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx={2} cy={2} r={2} fill="#B8B8B8" />
                </svg>
                <p className="text-gray-500 text-sm">4 min read</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <a href="#">
          <div className="bg-white border border-orange-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
            <div className="relative" style={{ height: 240 }}>
              <div className="absolute top-0 left-0 z-10">
                <svg
                  className="rounded-tl-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width={159}
                  height={156}
                  viewBox="0 0 159 156"
                  fill="none"
                >
                  <path
                    d="M-30 81.9324V155.361C-30 155.714 -29.7141 156 -29.3615 156H21.62C21.9724 156 22.2585 155.714 22.2585 155.361V96.299C22.2585 57.5087 60.5087 19.2585 99.299 19.2585H158.361C158.714 19.2585 159 18.9724 159 18.62V-32.3615C159 -32.7139 158.714 -33 158.361 -33H84.9324C21.4572 -33 -30 18.4572 -30 81.9324Z"
                    fill="#530031"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={150}
                  height={158}
                  viewBox="0 0 150 158"
                  fill="none"
                >
                  <path
                    d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                    fill="#530031"
                  />
                </svg>
              </div>
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                src={picturesSmallImg}
                alt=""
              />
            </div>
            <div className="p-6">
              <div className="py-1 px-2 rounded-md bg-orange-50 border border-orange-100 text-xs font-medium text-orange-500 inline-block mb-3">
                Wellbeing
              </div>
              <h2 className="font-bold font-heading mb-3">
                How to Maintain Good Wellbeing While Studying
              </h2>
              <p className="text-gray-500 text-sm mb-3">
                Here are some tips on how to maintain good wellbeing while
                studying.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-gray-500 text-sm">17 Jul 2023</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={4}
                  height={4}
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx={2} cy={2} r={2} fill="#B8B8B8" />
                </svg>
                <p className="text-gray-500 text-sm">4 min read</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <a href="#">
          <div className="bg-white border border-orange-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
            <div className="relative" style={{ height: 240 }}>
              <div className="absolute top-0 left-0 z-10">
                <svg
                  className="rounded-tl-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width={159}
                  height={156}
                  viewBox="0 0 159 156"
                  fill="none"
                >
                  <path
                    d="M-30 81.9324V155.361C-30 155.714 -29.7141 156 -29.3615 156H21.62C21.9724 156 22.2585 155.714 22.2585 155.361V96.299C22.2585 57.5087 60.5087 19.2585 99.299 19.2585H158.361C158.714 19.2585 159 18.9724 159 18.62V-32.3615C159 -32.7139 158.714 -33 158.361 -33H84.9324C21.4572 -33 -30 18.4572 -30 81.9324Z"
                    fill="#FF7100"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={150}
                  height={158}
                  viewBox="0 0 150 158"
                  fill="none"
                >
                  <path
                    d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                    fill="#FF7100"
                  />
                </svg>
              </div>
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                src={picturesSmallImg}
                alt=""
              />
            </div>
            <div className="p-6">
              <div className="py-1 px-2 rounded-md bg-orange-50 border border-orange-100 text-xs font-medium text-orange-500 inline-block mb-3">
                Productivity
              </div>
              <h2 className="font-bold font-heading mb-3">
                Atomic Habits: Tiny Changes, Remarkable Results
              </h2>
              <p className="text-gray-500 text-sm mb-3">
                Here are some tips on how to maintain good wellbeing while
                studying.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-gray-500 text-sm">17 Jul 2023</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={4}
                  height={4}
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx={2} cy={2} r={2} fill="#B8B8B8" />
                </svg>
                <p className="text-gray-500 text-sm">4 min read</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <a href="#">
          <div className="bg-white border border-orange-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
            <div className="relative" style={{ height: 240 }}>
              <div className="absolute top-0 left-0 z-10 text-white text-opacity-20">
                <svg
                  className="rounded-tl-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width={159}
                  height={156}
                  viewBox="0 0 159 156"
                  fill="none"
                >
                  <path
                    d="M-30 81.9324V155.361C-30 155.714 -29.7141 156 -29.3615 156H21.62C21.9724 156 22.2585 155.714 22.2585 155.361V96.299C22.2585 57.5087 60.5087 19.2585 99.299 19.2585H158.361C158.714 19.2585 159 18.9724 159 18.62V-32.3615C159 -32.7139 158.714 -33 158.361 -33H84.9324C21.4572 -33 -30 18.4572 -30 81.9324Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 z-10 text-white text-opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={153}
                  height={155}
                  viewBox="0 0 153 155"
                  fill="none"
                >
                  <path
                    d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-900 w-full h-full rounded-t-2xl">
                <div className="flex items-center justify-center gap-4 h-full">
                  <img
                    src="solstice-assets/images/logos/solstice-logo-light.svg"
                    alt=""
                  />
                  <span className="font-medium text-white text-opacity-50">
                    +
                  </span>
                  <img
                    src="solstice-assets/images/logos/zoom-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="py-1 px-2 rounded-md bg-orange-50 border border-orange-100 text-xs font-medium text-orange-500 inline-block mb-3">
                Integration
              </div>
              <h2 className="font-bold font-heading mb-3">Zoom Integration</h2>
              <p className="text-gray-500 text-sm mb-3">
                New Zoom integration for hosting video meetings to learn and
                work together effortlessly.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-gray-500 text-sm">17 Jul 2023</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={4}
                  height={4}
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx={2} cy={2} r={2} fill="#B8B8B8" />
                </svg>
                <p className="text-gray-500 text-sm">4 min read</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <a href="#">
          <div className="bg-white border border-orange-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
            <div className="relative" style={{ height: 240 }}>
              <div className="absolute top-0 left-0 z-10 text-white text-opacity-20">
                <svg
                  className="rounded-tl-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width={159}
                  height={156}
                  viewBox="0 0 159 156"
                  fill="none"
                >
                  <path
                    d="M-30 81.9324V155.361C-30 155.714 -29.7141 156 -29.3615 156H21.62C21.9724 156 22.2585 155.714 22.2585 155.361V96.299C22.2585 57.5087 60.5087 19.2585 99.299 19.2585H158.361C158.714 19.2585 159 18.9724 159 18.62V-32.3615C159 -32.7139 158.714 -33 158.361 -33H84.9324C21.4572 -33 -30 18.4572 -30 81.9324Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 z-10 text-white text-opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={153}
                  height={155}
                  viewBox="0 0 153 155"
                  fill="none"
                >
                  <path
                    d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-full h-full rounded-t-2xl">
                <div className="flex items-center justify-center gap-4 h-full">
                  <img
                    src="solstice-assets/images/logos/solstice-logo-light.svg"
                    alt=""
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_185_6392)">
                      <path
                        d="M12 4L4 12"
                        stroke="#5A5A5A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 4L12 12"
                        stroke="#5A5A5A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_185_6392">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <img
                    src="solstice-assets/images/logos/udemy-logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="py-1 px-2 rounded-md bg-orange-50 border border-orange-100 text-xs font-medium text-orange-500 inline-block mb-3">
                Partnership
              </div>
              <h2 className="font-bold font-heading mb-3">Udemy Partnership</h2>
              <p className="text-gray-500 text-sm mb-3">
                We partnership with Udemy for those who loves to take course
                with friends.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-gray-500 text-sm">17 Jul 2023</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={4}
                  height={4}
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx={2} cy={2} r={2} fill="#B8B8B8" />
                </svg>
                <p className="text-gray-500 text-sm">4 min read</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <a href="#">
          <div className="bg-white border border-orange-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
            <div className="relative" style={{ height: 240 }}>
              <div className="absolute top-0 left-0 z-10">
                <svg
                  className="rounded-tl-2xl"
                  xmlns="http://www.w3.org/2000/svg"
                  width={159}
                  height={156}
                  viewBox="0 0 159 156"
                  fill="none"
                >
                  <path
                    d="M-30 81.9324V155.361C-30 155.714 -29.7141 156 -29.3615 156H21.62C21.9724 156 22.2585 155.714 22.2585 155.361V96.299C22.2585 57.5087 60.5087 19.2585 99.299 19.2585H158.361C158.714 19.2585 159 18.9724 159 18.62V-32.3615C159 -32.7139 158.714 -33 158.361 -33H84.9324C21.4572 -33 -30 18.4572 -30 81.9324Z"
                    fill="#FFF2D6"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={150}
                  height={158}
                  viewBox="0 0 150 158"
                  fill="none"
                >
                  <path
                    d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                    fill="#FFF2D6"
                  />
                </svg>
              </div>
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                src="solstice-assets/images/blog/picture4.png"
                alt=""
              />
            </div>
            <div className="p-6">
              <div className="py-1 px-2 rounded-md bg-orange-50 border border-orange-100 text-xs font-medium text-orange-500 inline-block mb-3">
                Productivity
              </div>
              <h2 className="font-bold font-heading mb-3">
                The Power of Collaborative Learning
              </h2>
              <p className="text-gray-500 text-sm mb-3">
                Read on to find out the power of learning together.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-gray-500 text-sm">17 Jul 2023</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={4}
                  height={4}
                  viewBox="0 0 4 4"
                  fill="none"
                >
                  <circle cx={2} cy={2} r={2} fill="#B8B8B8" />
                </svg>
                <p className="text-gray-500 text-sm">4 min read</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div className="hidden sm:flex flex-wrap items-center justify-between gap-4 pb-32">
      <a
        className="py-3 px-4 rounded-full bg-white border border-orange-100 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200"
        href="#"
      >
        Prev
      </a>
      <div className="flex items-center flex-wrap gap-1">
        <a
          className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-orange-100 hover: transition duration-200"
          href="#"
        >
          1
        </a>
        <a
          className="w-8 h-8 flex items-center justify-center rounded-lg text-sm bg-orange-100 "
          href="#"
        >
          2
        </a>
        <a
          className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-orange-100 hover: transition duration-200"
          href="#"
        >
          3
        </a>
        <a
          className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-orange-100 hover: transition duration-200"
          href="#"
        >
          ...
        </a>
        <a
          className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-orange-100 hover: transition duration-200"
          href="#"
        >
          10
        </a>
      </div>
      <a
        className="py-3 px-4 rounded-full bg-white border border-orange-100 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200"
        href="#"
      >
        Next
      </a>
    </div>
    <div className="sm:hidden pb-32">
      <div className="flex items-center justify-center flex-wrap gap-1 mb-8">
        <a
          className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-orange-100 hover: transition duration-200"
          href="#"
        >
          1
        </a>
        <a
          className="w-8 h-8 flex items-center justify-center rounded-lg text-sm bg-orange-100 "
          href="#"
        >
          2
        </a>
        <a
          className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-orange-100 hover: transition duration-200"
          href="#"
        >
          3
        </a>
        <a
          className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-orange-100 hover: transition duration-200"
          href="#"
        >
          ...
        </a>
        <a
          className="w-8 h-8 flex items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-orange-100 hover: transition duration-200"
          href="#"
        >
          10
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          className="py-3 px-4 rounded-full bg-white border border-orange-100 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200"
          href="#"
        >
          Prev
        </a>
        <a
          className="py-3 px-4 rounded-full bg-white border border-orange-100 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200"
          href="#"
        >
          Next
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Blog

