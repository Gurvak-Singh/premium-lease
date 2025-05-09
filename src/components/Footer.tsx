import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Building2 className="mr-2" size={28} />
              <span className="font-bold text-2xl text-white">PremiumLease</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Premium property solutions for residential and commercial leasing, with specialized programs for students and professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/properties/apartments" className="text-gray-400 hover:text-white transition-colors">Apartments</Link></li>
              <li><Link to="/properties/townhouses" className="text-gray-400 hover:text-white transition-colors">Townhouses</Link></li>
              <li><Link to="/commercial" className="text-gray-400 hover:text-white transition-colors">Commercial</Link></li>
              <li><Link to="/student-programs" className="text-gray-400 hover:text-white transition-colors">Student Programs</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3 - Legal Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Licensing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fair Housing</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-blue-400" size={18} />
                <span className="text-gray-400">123 Leasing Blvd, Suite 456<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0 text-blue-400" size={18} />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0 text-blue-400" size={18} />
                <a href="mailto:info@premiumlease.com" className="text-gray-400 hover:text-white transition-colors">info@premiumlease.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} PremiumLease. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;