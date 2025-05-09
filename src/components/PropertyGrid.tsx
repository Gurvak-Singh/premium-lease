import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';

interface PropertyGridProps {
  properties: Property[];
  featured?: boolean;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, featured = false }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard 
          key={property.id} 
          property={property} 
          featured={featured} 
        />
      ))}
    </div>
  );
};

export default PropertyGrid;