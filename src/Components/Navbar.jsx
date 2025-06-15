import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/iymra.png';

// Lucide icons
import { Home, Users, Info, Box, MessageSquare, Phone, Wallet } from 'lucide-react';

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const handleClick = () => setOpen(!Open);

  const [scrollClass, setScrollClass] = useState("");

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Link items for map rendering
  const navLinks = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/team', label: 'Team', icon: <Users size={18} /> },
    { path: '/about', label: 'About', icon: <Info size={18} /> },
    { path: '/products', label: 'Products', icon: <Box size={18} /> },
    { path: '/testimonials', label: 'Testimonials', icon: <MessageSquare size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Phone size={18} /> },
    { path: '/what', label: 'Invest', icon: <Wallet size={18} />, highlight: true },
  ];

  return (
    <div className='bg-transparent'>
      <nav className={`flex justify-between items-center px-5 py-3 z-[9999] ${scrollClass}`}>
        <div className="logo flex items-center justify-center">
          <Link to='/' className='flex items-center gap-2' onClick={() => setOpen(false)}>
            <img className='max-w-[3rem]' src={logo} alt="IYMRA Logo" />
            <p className='text-2xl font-bold'>IYMRA</p>
          </Link>
        </div>

        <ul className={`md:flex w-full md:w-auto ${Open ? 'block' : 'hidden'} md:block`}>
          {navLinks.map(({ path, label, icon, highlight }) => (
            <li key={path} className='md:inline-block'>
              <Link
                to={path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 rounded-md font-bold w-full
                  ${highlight ? 'bg-gray-700 text-white' : 'hover:bg-gray-100 text-black'}
                `}
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger menu */}
        <div className="cursor-pointer lg:hidden flex" onClick={handleClick}>
          {Open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
              <path d="M19 5L5 19M5 5l14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
