import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 text-white shadow-md transition-colors duration-300
        ${scrolled ? 'bg-coffee-brown bg-opacity-90' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-arizonia text-xl md:text-2xl xl:text-4xl font-bold tracking-wide">
          Caffe BarFly
        </h1>
        <ul className="flex space-x-6 text-sm uppercase">
          <li>
            <a href="#home" className="hover:text-[#D7CCC8]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#D7CCC8]">
              About
            </a>
          </li>
          <li>
            <a href="#menu" className="hover:text-[#D7CCC8]">
              Menu
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-[#D7CCC8]">
              Events
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#D7CCC8]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
