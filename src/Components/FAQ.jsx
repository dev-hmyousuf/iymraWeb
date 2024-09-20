import women from "../assets/faq/woman.png"
import { useState } from 'react';
import { Link } from "react-router-dom";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="flex flex-col justify-between h-full">
              <div className="md:max-w-md block">
                <h2 className="mb-4 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                  Frequently <span className="text-indigo-600">Asked</span> Questions
                </h2>
                <p className="mb-12 text-gray-600 font-medium leading-relaxed">
                Have questions about working with Connect Agency? Our FAQ section covers everything you need to know, from our services to the hiring process. Find quick answers and get the insights you need to join our team.
                </p>
              </div>
              <div className="block">
                <div className="mb-7 flex flex-wrap">
                  {[{
                    question: "What services does Connect Agency provide?",
                    answer: "Connect Agency specializes in web development, graphic design, and SEO services. We help businesses build a strong online presence, create visually appealing designs, and improve their search engine rankings."
                  },
                  {
                    question: "How long does it take to develop a website?",
                    answer: "The timeline for website development varies depending on the complexity of the project. On average, a standard website can take between 4 to 8 weeks to design and develop, but this can vary based on specific requirements."
                  },
                  {
                    question: "What is your pricing model?",
                    answer: "Our pricing is customized based on the specific needs and scope of each project. We offer competitive rates and work closely with clients to develop solutions that fit their budget."
                  }].map((item, index) => (
                    <div className="w-full" key={index}>
                      <a
                        className="block border-b border-gray-300"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggle(index);
                        }}
                      >
                        <div className="flex flex-wrap justify-between py-7 -m-1.5">
                          <div className="flex-1 p-1.5">
                            <h3 className="text-lg font-bold font-heading leading-normal">
                              {item.question}
                            </h3>
                            <div
                              className={`overflow-hidden transition-all duration-50 ${openIndex === index ? 'h-auto' : 'h-0'}`}
                            >
                              <p className="mt-5 text-gray-600 font-medium leading-relaxed transition-all duration-50">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                          <div className="w-auto p-1.5 transform transition-transform duration-300">
                            <div className={`transform transition-transform duration-300 ${openIndex === index ? 'hidden' : ''}`}>
                              <svg
                                className="relative transform transition-transform duration-300 top-1.5"
                                fill="none"
                                height="18"
                                viewBox="0 0 18 18"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="9"
                                  cy="9"
                                  fill="#2563EB"
                                  r="9"
                                />
                                <path
                                  clipRule="evenodd"
                                  d="M9.00078 4.79999C9.33215 4.79999 9.60078 5.06862 9.60078 5.39999V8.39999H12.6008C12.9322 8.39999 13.2008 8.66862 13.2008 8.99999C13.2008 9.33136 12.9322 9.59999 12.6008 9.59999H9.60078V12.6C9.60078 12.9314 9.33215 13.2 9.00078 13.2C8.66941 13.2 8.40078 12.9314 8.40078 12.6V9.59999H5.40078C5.06941 9.59999 4.80078 9.33136 4.80078 8.99999C4.80078 8.66862 5.06941 8.39999 5.40078 8.39999L8.40078 8.39999V5.39999C8.40078 5.06862 8.66941 4.79999 9.00078 4.79999Z"
                                  fill="white"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className={openIndex === index ? '' : 'hidden'}>
                              <svg
                                className="relative top-1.5"
                                fill="none"
                                height="18"
                                viewBox="0 0 18 18"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="9"
                                  cy="9"
                                  fill="#2563EB"
                                  r="9"
                                />
                                <path
                                  clipRule="evenodd"
                                  d="M6 9.00002C6 8.66865 6.26863 8.40002 6.6 8.40002L11.4 8.40002C11.7314 8.40002 12 8.66865 12 9.00002C12 9.3314 11.7314 9.60002 11.4 9.60002L6.6 9.60002C6.26863 9.60002 6 9.3314 6 9.00002Z"
                                  fill="white"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                <p className="font-medium text-gray-600">
                  <span>Still have any questions?</span>
                  <span
                    className="text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    <Link to={'/contact'}>Contact us</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <img
              alt="FAQ illustration"
              className="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000"
              src={women}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
