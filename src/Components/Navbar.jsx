import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/iymra.png';

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!Open);
  };

  const [scrollClass, setScrollClass] = useState("");

  // Function to handle scroll and update class
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 500) {
      setScrollClass("md:w-3/4 w-[90%] mx-auto rounded-xl fixed top-4 bg-white/30 backdrop-blur-md shadow-lg");
    } else {
      setScrollClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='bg-transparent'>
      <nav className={`flex justify-between items-center px-5 py-3 z-[9999] ${scrollClass}`}>
        <div className="logo flex items-center justify-center">
          <Link to='/' className='logo flex items-center justify-center' onClick={() => setOpen(false)}>
            <img className='max-w-[3rem]' src={logo} alt="IYMRA Logo" />
            <p className='text-2xl font-bold'>IYMRA</p>
          </Link>
        </div>

        <ul className={`md:flex w-full md:w-auto ${Open ? 'open' : 'hidden'} md:block`}>
          <li className='hover:bg-gray-100 flex justify-center items-center font-bold p-3 rounded-md'>
            <Link to='/' onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li className='hover:bg-gray-100 flex justify-center items-center font-bold p-3 rounded-md'>
            <Link to='/team' onClick={() => setOpen(false)}>Team</Link>
          </li>
          <li className='hover:bg-gray-100 flex justify-center items-center font-bold p-3 rounded-md'>
            <Link to='/about' onClick={() => setOpen(false)}>About</Link>
          </li>
          <li className='hover:bg-gray-100 flex justify-center items-center font-bold p-3 rounded-md'>
            <Link to='/products' onClick={() => setOpen(false)}>Products</Link>
          </li>
          <li className='hover:bg-gray-100 flex justify-center items-center font-bold p-3 rounded-md'>
            <Link to='/testimonials' onClick={() => setOpen(false)}>Testimonials</Link>
          </li>
          <li className='hover:bg-gray-100 flex justify-center items-center font-bold p-3 rounded-md'>
            <Link to='/contact' onClick={() => setOpen(false)}>Contact</Link>
          </li>
          <li className='text-gray-100 flex justify-center items-center bg-gray-600 font-bold p-3 rounded-md'>
            <Link to='/what' onClick={() => setOpen(false)}>Invest</Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="cursor-pointer lg:hidden flex" onClick={handleClick}>
          {
            Open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
                <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
                <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )
          }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
