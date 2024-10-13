import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-green-600">
          <Link to="/">Stock Market Predictor</Link>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-green-600 transition duration-300">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-green-600 transition duration-300">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-green-600 transition duration-300">Contact Us</Link>
          <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">Login</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 py-2 px-6">
            <Link to="/" className="text-gray-800 hover:text-green-600 transition duration-300" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-green-600 transition duration-300" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-green-600 transition duration-300" onClick={toggleMenu}>Contact Us</Link>
            <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300" onClick={toggleMenu}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
