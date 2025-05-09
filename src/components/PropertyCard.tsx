import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Bed, Bath, Move, ArrowRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
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

  return (
    <div 
      className={`overflow-hidden transition-all duration-300 group rounded-lg shadow-md hover:shadow-xl ${
        featured ? 'bg-white' : 'bg-white'
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${
            type === 'Apartment' ? 'bg-blue-600' :
            type === 'Townhouse' ? 'bg-emerald-600' :
            'bg-purple-600'
          }`}>
            {type}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-amber-500">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        
        <p className="text-blue-800 font-bold text-xl mb-4">
          ${price.toLocaleString()}<span className="text-gray-500 text-sm font-normal">/month</span>
        </p>

        <div className="flex justify-between text-sm text-gray-600 border-t border-gray-100 pt-4">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center">
            <Move size={16} className="mr-1" />
            <span>{squareFeet.toLocaleString()} sq ft</span>
          </div>
        </div>
        
        <div className="mt-6">
          <Link
            to={`/property/${id}`}
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