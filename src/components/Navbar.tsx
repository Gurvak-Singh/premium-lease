import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2, Home, Users, Building, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = `transition-colors duration-200 flex items-center gap-1 ${
    isScrolled ? 'text-gray-800 hover:text-blue-800' : 'text-white hover:text-blue-200'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="font-bold text-2xl flex items-center" 
            onClick={closeMenu}
          >
            <Building2 
              className={`mr-2 ${isScrolled ? 'text-blue-800' : 'text-white'}`} 
              size={28} 
            />
            <span className={isScrolled ? 'text-blue-800' : 'text-white'}>
              PremiumLease
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className={linkClasses}>
                Properties <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                <Link to="/properties/apartments" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex items-center">
                  <Home size={16} className="mr-2" /> Apartments
                </Link>
                <Link to="/properties/townhouses" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex items-center">
                  <Building size={16} className="mr-2" /> Townhouses
                </Link>
                <Link to="/commercial" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 flex items-center">
                  <Building2 size={16} className="mr-2" /> Commercial
                </Link>
              </div>
            </div>
            <Link to="/student-programs" className={linkClasses}>
              <Users size={16} className="mr-1" /> Student Programs
            </Link>
            <Link to="/about" className={linkClasses}>
              About Us
            </Link>
            <Link to="/contact" className={linkClasses}>
              <Phone size={16} className="mr-1" /> Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out transform ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            <div className="border-b pb-2">
              <p className="font-semibold text-gray-800 mb-2">Properties</p>
              <Link to="/properties/apartments" className="block pl-4 py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
                <Home size={16} className="inline mr-2" /> Apartments
              </Link>
              <Link to="/properties/townhouses" className="block pl-4 py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
                <Building size={16} className="inline mr-2" /> Townhouses
              </Link>
              <Link to="/commercial" className="block pl-4 py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
                <Building2 size={16} className="inline mr-2" /> Commercial
              </Link>
            </div>
            <Link to="/student-programs" className="block py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
              <Users size={16} className="inline mr-2" /> Student Programs
            </Link>
            <Link to="/about" className="block py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/contact" className="block py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
              <Phone size={16} className="inline mr-2" /> Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;