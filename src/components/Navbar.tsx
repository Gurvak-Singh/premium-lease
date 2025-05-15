import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Home, Users, Building } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if current path is a property listing page or about page
  const isPropertyPage = 
    location.pathname.includes('/properties/') || 
    location.pathname.includes('/property/') ||
    location.pathname.includes('/commercial') ||
    location.pathname.includes('/student-programs') ||
    location.pathname.includes('/student-property/') ||
    location.pathname === '/about' ||
    location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        // Only switch to transparent if not on a property page or about page
        // Only switch to transparent if not on a property page
        setIsScrolled(isPropertyPage ? true : false);
      }
    };

    // Initial check - always use scrolled style on property pages
    setIsScrolled(isPropertyPage ? true : false);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPropertyPage]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? (isPropertyPage ? 'bg-white py-2 border-b border-gray-100' : 'bg-white shadow-md py-2') : 'bg-transparent py-6'
  }`;

  const linkClasses = `transition-colors duration-200 flex items-center gap-1 ${
    isScrolled ? 'text-gray-800 hover:text-blue-800' : 'text-white hover:text-blue-200 font-medium'
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
            <Link to="/properties/residential" className={linkClasses}>
              <Home size={16} className="mr-1" /> Residential
            </Link>
            <Link to="/student-programs" className={linkClasses}>
              <Users size={16} className="mr-1" /> Student Rentals
            </Link>
            <Link to="/commercial" className={linkClasses}>
              <Building size={16} className="mr-1" /> Commercial
            </Link>
            <Link to="/about" className={linkClasses}>
              About Us
            </Link>
            <Link to="/contact" className={linkClasses}>
              Contact
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
            <Link to="/properties/residential" className="block py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
              <Home size={16} className="inline mr-2" /> Residential
            </Link>
            <Link to="/student-programs" className="block py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
              <Users size={16} className="inline mr-2" /> Student Rentals
            </Link>
            <Link to="/commercial" className="block py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
              <Building size={16} className="inline mr-2" /> Commercial
            </Link>
            <Link to="/about" className="block py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/contact" className="block py-2 text-gray-800 hover:text-blue-800" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;