import { Link } from 'react-router-dom'
import img from '../assets/Notfound/illustration2.png'


const NotFound = () => {
  return (
    <>
        <section className="relative w-2/3 mx-auto py-20 flex justify-center items-center flex-col md:flex-row bg-white overflow-hidden">
  <img
    className=""
    src={img}
    alt=""
  />
  <div className="relative z-10 container px-4 mx-auto">
    <img
      className="mb-16 mx-auto transform hover:scale-105 transition ease-in-out duration-1000"
      src="flaro-assets/images/http-codes/illustration2.png"
      alt=""
    />
    <h3 className="mb-4 text-4xl text-center font-bold font-heading leading-tight">
      Page Not Found
    </h3>
    <p className="mb-11 hidden md:block text-gray-600 text-center font-medium leading-relaxed md:max-w-md mx-auto">
      Something went Wrong! This Page is not found . Check the Url Or Go to Home Page
    </p>
    <div className="md:max-w-max mx-auto">
      <Link to='/'>
      <button
        className="inline-flex flex-wrap justify-center items-center py-4 px-6 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
        type="button"
      >
        <svg
          className="mr-2.5"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66667 12.6666L2 7.99998M2 7.99998L6.66667 3.33331M2 7.99998L14 7.99998"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Go Back to Homepage</span>
      </button>
      </Link>
    </div>
  </div>
</section>
  
    </>
  )
}

export default NotFound

