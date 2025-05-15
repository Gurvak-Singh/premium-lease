import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../types';
import { MapPin, Bed, Bath, Move, ArrowRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
  isCommercial?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false, isCommercial = false }) => {
  // Get the correct route based on property type and isCommercial prop
  const getPropertyRoute = () => {
    if (type === 'Student Housing') return `/student-property/${id}`;
    if (type === 'Commercial' || isCommercial) return `/commercial-property/${id}`;
    return `/property/${id}`;
  };
  const {
    id,
    title,
    type,
    price,
    location,
    bedrooms,
    bathrooms,
    squareFeet,
    imageUrl,
  } = property;

  // Enhanced styling for commercial properties including larger sizing and better spacing
  const cardClasses = isCommercial
    ? `overflow-hidden transition-all duration-300 group rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:border-blue-300 border border-gray-100 bg-white ${featured ? 'featured-card' : ''}`
    : `overflow-hidden transition-all duration-300 group rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:border-blue-200 border border-gray-100 ${featured ? 'bg-white' : 'bg-white'}`;
    
  // Enhanced image height for commercial properties
  const imageClasses = isCommercial
    ? "h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
    : "h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105";
    
  // Enhanced content padding for commercial properties
  const contentClasses = isCommercial
    ? "p-8"
    : "p-6";
    
  return (
    <div className={cardClasses}>
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className={imageClasses}
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 ${isCommercial ? 'text-sm' : 'text-xs'} font-semibold text-white rounded-full ${
            type === 'Apartment' ? 'bg-blue-600' :
            type === 'Townhouse' ? 'bg-emerald-600' :
            type === 'Student Housing' ? 'bg-indigo-600' :
            type === 'Commercial' ? 'bg-purple-700' :
            'bg-purple-600'
          }`}>
            {type}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 ${isCommercial ? 'text-sm' : 'text-xs'} font-semibold text-white rounded-full bg-amber-500`}>
              Featured
            </span>
          </div>
        )}
      </div>

      <div className={contentClasses}>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        
        <p className="text-blue-800 font-bold text-xl mb-4">
          ${price.toLocaleString()}<span className="text-gray-500 text-sm font-normal">/month</span>
        </p>

        <div className="flex justify-between text-sm text-gray-600 border-t border-gray-100 pt-4">
          <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md">
            <Bed size={18} className="mr-2 text-blue-600" />
            <span className="font-medium">{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md">
            <Bath size={18} className="mr-2 text-blue-600" />
            <span className="font-medium">{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center bg-gray-50 px-3 py-2 rounded-md">
            <Move size={18} className="mr-2 text-blue-600" />
            <span className="font-medium">{squareFeet.toLocaleString()} sq ft</span>
          </div>
        </div>
        
        <div className="mt-6">
          <Link
            to={getPropertyRoute()}
            className="inline-flex items-center text-blue-800 font-medium group-hover:text-blue-600"
          >
            View Details <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;