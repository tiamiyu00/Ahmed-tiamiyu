import React, { useState, useRef, useEffect } from 'react';
import talogo from '/public/img/Logo/talogo.png';

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

  const handleLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='bg-slate-200 md:bg-transparent relative md:mb-10'>
      <div className="flex justify-between items-center py-4 px-4 sm:pl-20">
        <div className="flex justify-center">
          <img className='w-16 h-15 sm:w-42 sm:h-35' src={talogo} alt="Logo" />
        </div>
        <div className="md:hidden">
          <button ref={menuButtonRef} onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:justify-center w-2/5">
          <button onClick={() => handleLinkClick('about')} className="text-white pr-5 hover:text-gray-700">About</button>
          <button onClick={() => handleLinkClick('projects')} className="text-white pr-5 hover:text-gray-700">Projects</button>
          <button onClick={() => handleLinkClick('contact')} className="text-white hover:text-gray-700">Contact</button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[4rem] right-0 w-1/2 bg-black text-white md:hidden" ref={dropdownRef}>
          <button
            onClick={() => handleLinkClick('about')}
            className={`block py-2 px-4 hover:bg-gray-700 ${activeLink === 'about' ? 'underline decoration-white' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('projects')}
            className={`block py-2 px-4 hover:bg-gray-700 ${activeLink === 'projects' ? 'underline decoration-white' : ''}`}
          >
            Projects
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className={`block py-2 px-4 hover:bg-gray-700 ${activeLink === 'contact' ? 'underline decoration-white' : ''}`}
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
