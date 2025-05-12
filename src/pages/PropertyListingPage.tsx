import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyGrid from '../components/PropertyGrid';
import { Filter, MapPin, Search, SlidersHorizontal, Bed, DollarSign } from 'lucide-react';
import { apartments, townhouses } from '../data/properties';
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

  // Get properties based on category - showing exactly 6 apartments and 6 townhouses (12 total)
  useEffect(() => {
    let categoryProperties: Property[] = [];
    let title = '';
    
    // Ensure we have 6 apartments and 6 townhouses to display
    const apartmentsToShow = apartments.slice(0, 6);
    const townhousesToShow = townhouses.slice(0, 6);
    
    switch(category) {
      case 'apartments':
        categoryProperties = apartmentsToShow;
        title = 'Apartment';
        break;
      case 'townhouses':
        categoryProperties = townhousesToShow;
        title = 'Townhouse';
        break;
      default:
        // Show all 6 apartments and 6 townhouses for residential view (12 total listings)
        categoryProperties = [...apartmentsToShow, ...townhousesToShow];
        title = 'Apartments & Townhomes';
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
      {/* Header Banner - Seamless connection with navbar */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-28 pb-20 mt-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-15"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-800/90"></div>
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-xl">
              {category === 'apartments' ? 'Apartment Properties' : 
               category === 'townhouses' ? 'Townhouse Properties' : 'Apartments & Townhomes'}
            </h1>
            <div className="inline-block px-5 py-1.5 bg-blue-500/30 backdrop-blur-sm rounded-full text-white text-sm font-medium drop-shadow-md mb-6">
              Find Your Perfect Living Space
            </div>
            <p className="text-white text-lg drop-shadow-md mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover premium living spaces designed for comfort, convenience, and style in the most desirable neighborhoods.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm py-2">
              <div className="flex items-center gap-2 bg-white/15 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-lg border border-white/10">
                <MapPin size={18} className="text-blue-300" />
                <span className="text-white font-medium">Premium Locations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-lg border border-white/10">
                <Bed size={18} className="text-blue-300" />
                <span className="text-white font-medium">Quality Amenities</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-lg border border-white/10">
                <DollarSign size={18} className="text-blue-300" />
                <span className="text-white font-medium">Flexible Leasing</span>
              </div>
            </div>
          </div>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 opacity-0">Apply</label>
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