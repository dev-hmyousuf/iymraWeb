import { useEffect, useState } from 'react';
import logo from '../assets/logo_new/navbar.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!Open);
  };
  const [scrollClass, setScrollClass] = useState("");

  // Function to handle scroll and update class
  const handleScroll = () => {
    const scrollY = window.scrollY; // Gets current vertical scroll position
    if (scrollY > 500) { // Add condition to check when to apply the class
      setScrollClass("md:w-3/4 w-[90%] mx-auto rounded-xl fixed top-4");
    } else {
      setScrollClass(""); // Remove class when scrolled back to top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener on component unmount
    };
  }, []);
  return (
    
    <div className='bg-transparent'>
      <nav className={`flex  justify-between items-center px-5 py-3 z-[9999] ${scrollClass}`}>
        <div className="logo">
          <img className='max-w-[10rem]' src={logo} alt="" />
        </div>
        <ul className={`md:flex w-full md:w-auto ${Open ? 'open' : ''}`}>
          <li className='hover:bg-gray-100 font-bold p-3 rounded-md'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='hover:bg-gray-100 font-bold p-3 rounded-md'>
            <Link to={'/team'}>Team</Link>
          </li>
          <li className='hover:bg-gray-100 font-bold p-3 rounded-md'>
            <Link to={'/about'}>About</Link>
          </li>
          <li className='hover:bg-gray-100 font-bold p-3 rounded-md'>
            <Link to={'/services'}>Services</Link>
          </li>
          <li className='hover:bg-gray-100 font-bold p-3 rounded-md'>
            <Link to={'/feature'}>Features</Link>
          </li>
          <li className='hover:bg-gray-100 font-bold p-3 rounded-md'>
            <Link to={'/testimonials'}>Testimonials</Link>
          </li>
          <li className='hover:bg-gray-100 font-bold p-3 rounded-md'>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
        {
          Open ? 
          <div className="cursor-pointer lg:hidden flex" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
              <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" 
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          :
          <div className="cursor-pointer lg:hidden flex" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
              <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        }
      </nav>
    </div>
  );
}

export default Navbar;
