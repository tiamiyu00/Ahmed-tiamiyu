import React, { useState, useRef, useEffect } from 'react';
import talogo from '//img/Logo/talogo.png';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const dropdownRef = useRef(null); 
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) && 
        !menuButtonRef.current.contains(event.target) 
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <header className='bg-slate-200 sm:bg-transparent relative sm:mb-10'>
      <div className="flex justify-between items-center py-4 px-4   sm:pl-20">
        <div className="flex justify-center">
        <img className='w-16 h-15 sm:w-42 sm:h-35' src={talogo} alt="Logo" />
          
        </div>
        <div className="sm:hidden">
          <button ref={menuButtonRef} onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex sm:justify-center w-2/5">
          <a href="#about" className="text-white pr-5 hover:text-gray-700">About</a>
          <a href="#projects" className="text-white pr-5 hover:text-gray-700">Projects</a>
          <a href="#contact" className="text-white pr-5 hover:text-gray-700">Contact</a>
          <a href="#contact" className="text-white  hover:text-gray-700">Contact</a>
        </div>
      </div>


      {isOpen && (
        <div className="absolute top-[4rem] right-0 w-1/2 bg-black text-white sm:hidden" ref={dropdownRef}>
          <a
            href="#about"
            onClick={() => handleLinkClick('about')}
            className={`block py-2 px-4 hover:bg-gray-700 ${activeLink === 'about' ? 'underline decoration-white' : ''}`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => handleLinkClick('projects')}
            className={`block py-2 px-4 hover:bg-gray-700 ${activeLink === 'projects' ? 'underline decoration-white' : ''}`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleLinkClick('contact')}
            className={`block py-2 px-4 hover:bg-gray-700 ${activeLink === 'contact' ? 'underline decoration-white' : ''}`}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
