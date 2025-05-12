import { Search } from 'lucide-react';

const Hero = () => {

  return (
    <div className="relative h-[80vh]">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
          backgroundSize: '100% auto'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Find Your Perfect Space
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Discover premium residential and commercial properties with flexible 
            leasing options tailored to your needs.
          </p>
          
          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Location</option>
                  <option value="downtown">Downtown</option>
                  <option value="suburb">Suburb</option>
                  <option value="campus">Campus Adjacent</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Price Range</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000-3000">$2,000 - $3,000</option>
                  <option value="3000+">$3,000+</option>
                </select>
              </div>
              <button className="bg-blue-800 hover:bg-blue-700 text-white p-3 rounded-md transition-colors duration-300 flex items-center justify-center">
                <Search size={20} className="mr-2" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;