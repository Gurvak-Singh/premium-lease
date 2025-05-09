import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyGrid from '../components/PropertyGrid';
import { Filter, Home, Building, Building2, Search, SlidersHorizontal } from 'lucide-react';
import { apartments, townhouses, commercialProperties } from '../data/properties';
import { Property } from '../types';

const PropertyListingPage = () => {
  const { category } = useParams<{ category: string }>();
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    bedrooms: '',
    location: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  
  // Get properties based on category
  useEffect(() => {
    let categoryProperties: Property[] = [];
    let title = '';
    let icon;
    
    switch(category) {
      case 'apartments':
        categoryProperties = apartments;
        title = 'Apartment';
        icon = <Home size={24} className="mr-2" />;
        break;
      case 'townhouses':
        categoryProperties = townhouses;
        title = 'Townhouse';
        icon = <Building size={24} className="mr-2" />;
        break;
      case 'commercial':
        categoryProperties = commercialProperties;
        title = 'Commercial';
        icon = <Building2 size={24} className="mr-2" />;
        break;
      default:
        categoryProperties = [...apartments, ...townhouses, ...commercialProperties];
        title = 'All';
        icon = <Building2 size={24} className="mr-2" />;
    }
    
    setProperties(categoryProperties);
    setFilteredProperties(categoryProperties);
    document.title = `${title} Properties | PremiumLease`;
    
  }, [category]);
  
  // Apply filters
  const applyFilters = () => {
    const filtered = properties.filter(property => {
      const matchesPrice = property.price >= filters.minPrice && property.price <= filters.maxPrice;
      const matchesBedrooms = filters.bedrooms === '' || property.bedrooms === parseInt(filters.bedrooms);
      const matchesLocation = filters.location === '' || property.location.includes(filters.location);
      
      return matchesPrice && matchesBedrooms && matchesLocation;
    });
    
    setFilteredProperties(filtered);
  };
  
  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: name === 'minPrice' || name === 'maxPrice' ? parseInt(value) : value
    }));
  };
  
  // Locations for filter dropdown
  const locations = [...new Set(properties.map(p => p.location))];
  
  return (
    <div>
      {/* Header Banner */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            {category === 'apartments' && <Home size={36} className="mr-3" />}
            {category === 'townhouses' && <Building size={36} className="mr-3" />}
            {category === 'commercial' && <Building2 size={36} className="mr-3" />}
            {category === 'all' && <Building2 size={36} className="mr-3" />}
            {category === 'apartments' ? 'Apartment' : 
             category === 'townhouses' ? 'Townhouse' : 
             category === 'commercial' ? 'Commercial' : 'All'} Properties
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Browse our selection of available properties and find your perfect space.
          </p>
        </div>
      </div>
      
      {/* Filter Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-600 flex items-center">
              <Filter size={18} className="mr-2" />
              <span>{filteredProperties.length} properties found</span>
            </div>
            
            <button 
              className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-medium md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={18} className="mr-2" />
              Filters
            </button>
          </div>
          
          <div className={`${showFilters ? 'block' : 'hidden'} md:block mt-4`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                <select
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Any</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Any Location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-end">
                <button
                  onClick={applyFilters}
                  className="w-full bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  <Search size={18} className="mr-2" />
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Property Results */}
      <div className="container mx-auto px-4 py-12">
        {filteredProperties.length > 0 ? (
          <PropertyGrid properties={filteredProperties} />
        ) : (
          <div className="text-center py-12">
            <div className="bg-blue-50 inline-block p-4 rounded-full mb-4">
              <Search size={36} className="text-blue-800" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No properties found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn't find any properties matching your criteria. Try adjusting your filters.
            </p>
            <button
              onClick={() => {
                setFilters({
                  minPrice: 0,
                  maxPrice: 10000,
                  bedrooms: '',
                  location: ''
                });
                setFilteredProperties(properties);
              }}
              className="mt-4 bg-white border border-blue-800 text-blue-800 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListingPage;