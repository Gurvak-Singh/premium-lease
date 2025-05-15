import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';

interface PropertyGridProps {
  properties: Property[];
  featured?: boolean;
  isCommercial?: boolean; // New prop for commercial properties layout
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ 
  properties, 
  featured = false,
  isCommercial = false 
}) => {
  // For commercial properties, we use a 2x2 grid layout with larger cards
  // For other properties, we maintain the original 3-column layout
  const gridClassName = isCommercial
    ? "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto"
    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    
  return (
    <div className={gridClassName}>
      {properties.map((property) => (
        <PropertyCard 
          key={property.id} 
          property={property} 
          featured={featured}
          isCommercial={isCommercial} 
        />
      ))}
    </div>
  );
};

export default PropertyGrid;