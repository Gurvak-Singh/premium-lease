import React from 'react';
import { Link } from 'react-router-dom';
import PropertyGrid from './PropertyGrid';
import { ChevronRight } from 'lucide-react';
import { featuredProperties } from '../data/properties';

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            <p className="text-gray-600 mt-2">Explore our handpicked selection of premium properties</p>
          </div>
          <Link 
            to="/properties/all" 
            className="hidden md:flex items-center text-blue-800 hover:text-blue-700 font-medium"
          >
            View All <ChevronRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <PropertyGrid properties={featuredProperties} featured={true} />
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/properties/all" 
            className="inline-block px-6 py-3 bg-white border border-blue-800 rounded-md text-blue-800 font-medium hover:bg-blue-50 transition-colors"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;