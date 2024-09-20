import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2l6drno', 'template_uhakp9g', form.current, {
        publicKey: '7ADVHwDywhSXMUsmx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Messege send!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section className="relative py-36 bg-gray-50 overflow-hidden">
    <img
      className="absolute bottom-0 right-0"
      src="flaro-assets/images/contact/gradient2.svg"
      alt=""
    />
    <div className="relative container px-4 mx-auto">
      <div className="flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col justify-between h-full">
            <div className="mb-12 md:max-w-md block">
              <p className="mb-6 text-sm text-indigo-600 font-bold uppercase tracking-px">
                Contact us
              </p>
              <h2 className="text-4xl md:text-6xl xl:text-6xl font-bold font-heading tracking-px-n leading-none">
                Get connected to grow better business.
              </h2>
            </div>
            <div className="block">
              <p className="mb-4 text-sm text-gray-400 font-bold uppercase tracking-px">
                Email
              </p>
              <ul className="mb-14 flex flex-col gap-1 w-[400px]">
                <li className="contactEmail px-2 text-xl font-semibold leading-normal text-white bg-violet-600 p-[4px] rounded-lg">
                  <a href="mailto:webagency.connect@gmail.com">
                    <i className="fa-duotone fa-solid fa-envelope pr-2" />{" "}
                    webagency.connect@gmail.com
                  </a>
                </li>
              </ul>
              <p className="mb-4 text-sm text-gray-400 font-bold uppercase tracking-px">
                Phone
              </p>
              <ul className="mb-14 flex flex-col gap-1 w-[400px]">
                <li className="contactEmail text-xl font-semibold leading-normal text-white bg-violet-600 p-[4px] rounded-lg px-2">
                  <a href="tell:+880 1568-885065">
                  <i className="fa-solid fa-phone"></i>{" "}
                    +880 1568-885065
                  </a>
                </li>
                <li className="contactEmail text-xl font-semibold leading-normal text-white bg-violet-600 p-[4px] rounded-lg px-2">
                  <a href="tell:+880 1586-165618">
                  <i className="fa-solid fa-phone"></i>{" "}
                    +880 1586-165618
                  </a>
                </li>
               <p class="mb-4 text-sm text-gray-400 font-bold uppercase tracking-px">Whatsapp</p>
              <ul class=" flex flex-col gap-1 w-[400px]">
                <li class="contactEmail px-2 shadow-green-400 shadow-md text-xl font-semibold leading-normal text-green-500 bg-white p-2 rounded-lg"><a target="_blank" href="https://wa.me/message/PRLNCOVF575IA1"> <i class="fa-brands fa-whatsapp text-[#00E676]"></i> Messege on Whatsapp</a></li>
              </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <form  ref={form} onSubmit={sendEmail} className="px-11 pt-8 pb-12 bg-white bg-opacity-80 md:max-w-xl ml-auto rounded-4xl shadow-12xl">
            <label className="block mb-4">
              <p className="mb-2 text-gray-900 font-semibold leading-normal">
                Name
              </p>
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  width={20}
                  height={26}
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3327 8.83358C13.3327 10.6745 11.8403 12.1669 9.99935 12.1669C8.1584 12.1669 6.66602 10.6745 6.66602 8.83358C6.66602 6.99263 8.1584 5.50024 9.99935 5.50024C11.8403 5.50024 13.3327 6.99263 13.3327 8.83358Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99935 14.6669C6.77769 14.6669 4.16602 17.2786 4.16602 20.5002H15.8327C15.8327 17.2786 13.221 14.6669 9.99935 14.6669Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  className="pl-12 pr-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  id="contactInput3-1"
                  type="text"
                  placeholder="First & last name"
                  name="user_name"
                  required
                />
              </div>
            </label>
            <label className="block mb-4">
              <p className="mb-2 text-gray-900 font-semibold leading-normal">
                Email Address
              </p>
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  width={20}
                  height={26}
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3327 8.83358C13.3327 10.6745 11.8403 12.1669 9.99935 12.1669C8.1584 12.1669 6.66602 10.6745 6.66602 8.83358C6.66602 6.99263 8.1584 5.50024 9.99935 5.50024C11.8403 5.50024 13.3327 6.99263 13.3327 8.83358Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99935 14.6669C6.77769 14.6669 4.16602 17.2786 4.16602 20.5002H15.8327C15.8327 17.2786 13.221 14.6669 9.99935 14.6669Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  className="pl-12 pr-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  id="contactInput3-2"
                  type="text"
                  placeholder="Email address"
                  name="user_email"
                  required
                />
              </div>
            </label>
            <label className="block">
              <p className="mb-2 text-gray-900 font-semibold leading-normal">
                Message
              </p>
              <div className="relative">
                <svg
                  className="absolute left-4 top-4"
                  width={20}
                  height={26}
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3327 8.83358C13.3327 10.6745 11.8403 12.1669 9.99935 12.1669C8.1584 12.1669 6.66602 10.6745 6.66602 8.83358C6.66602 6.99263 8.1584 5.50024 9.99935 5.50024C11.8403 5.50024 13.3327 6.99263 13.3327 8.83358Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99935 14.6669C6.77769 14.6669 4.16602 17.2786 4.16602 20.5002H15.8327C15.8327 17.2786 13.221 14.6669 9.99935 14.6669Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <textarea
                  className="mb-6 p-4 px-12 w-full h-48 font-medium text-gray-500 outline-none placeholder-gray-500 border border-gray-300 resize-none rounded-lg focus:ring focus:ring-indigo-300"
                  id="contactInput3-3"
                  placeholder="Write message"
                  defaultValue={""}
                  name="message"
                  required
                />
                <div className="md:inline-block">
                
                <input type="submit" value="Send" className="cursor-pointer py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"/>
                <ToastContainer />
                </div>
              </div>
            </label>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Contact
