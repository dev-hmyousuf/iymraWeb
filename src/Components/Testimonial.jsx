import React, { useRef } from 'react';
import './scrollbar.css'; // Your custom scrollbar styles
import ScrollToTop from '../Hooks/scrollToUp';

const Testimonial = () => {
  const scrollRef = useRef(null);

  const testimonials = [
   
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <ScrollToTop>
      <div className="max-w-7xl mx-auto h-4/6 mt-20 px-4">
        <div className="max-w-xl mb-24 mx-auto text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-violet-700 bg-violet-100 rounded-full">
            TESTIMONIALS
          </span>
          <h2 className="font-heading text-4xl xs:text-6xl font-bold text-gray-900 mb-6">
            <span>What our customers say about </span>
            <span className="font-serif italic text-violet-600">Iymra Labs</span>
          </h2>
        </div>

        <div className="relative bg-gray-50 rounded-xl py-12 px-6">
          {/* Left Scroll Button */}
          <button
            aria-label="Scroll Left"
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:bg-violet-100 transition"
          >
            <i className="fa-solid fa-chevron-left text-violet-600 text-2xl"></i>
          </button>

          {/* Testimonials scroll container */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {testimonials.map(({ name, role, text, rating, image }, idx) => (
              <article
                key={idx}
                className="bg-white rounded-lg shadow-lg p-6 w-80 flex-shrink-0 flex flex-col"
              >
                <header className="flex items-center space-x-4 mb-4">
                  <img
                    src={image}
                    alt={`${name}'s portrait`}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                </header>
                <p className="text-gray-700 flex-grow">{text}</p>
                <footer className="mt-4 flex space-x-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.438c.969 0 1.372 1.24.588 1.81l-3.594 2.616a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.538 1.118l-3.594-2.616a1 1 0 00-1.175 0l-3.594 2.616c-.783.57-1.838-.197-1.538-1.118l1.374-4.223a1 1 0 00-.364-1.118L2.097 9.65c-.783-.57-.38-1.81.588-1.81h4.438a1 1 0 00.95-.69l1.374-4.223z" />
                    </svg>
                  ))}
                </footer>
              </article>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            aria-label="Scroll Right"
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:bg-violet-100 transition"
          >
            <i className="fa-solid fa-chevron-right text-violet-600 text-2xl"></i>
          </button>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default Testimonial;
