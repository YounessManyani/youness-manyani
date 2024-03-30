import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Logo.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300 z-50'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '5%' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='spotlight-section' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='lamp-demo' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='worksection' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-50 '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center z-50'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {/* Update this link to point to the Spotlight section */}
          <Link onClick={handleClick} to='spotlight-section' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='lamp-demo' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='worksection' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {/* Close icon for mobile menu */}
        <div onClick={handleClick} className="absolute top-4 right-4 text-gray-300 cursor-pointer">
          <FaTimes size={24} />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
