
import { Link } from 'react-router-dom';
import { Building, Home, Building2 } from 'lucide-react';

const PropertyCategories = () => {
  const categories = [
    {
      id: 'apartments',
      title: 'Apartments',
      description: 'Modern living spaces with premium amenities and convenient locations.',
      icon: <Home size={28} />,
      bgImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/properties/apartments'
    },
    {
      id: 'townhouses',
      title: 'Townhouses',
      description: 'Spacious multi-level homes offering privacy and comfort for families.',
      icon: <Building size={28} />,
      bgImage: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/properties/townhouses'
    },
    {
      id: 'commercial',
      title: 'Commercial',
      description: 'Prime retail and office spaces designed for business success.',
      icon: <Building2 size={28} />,
      bgImage: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/commercial'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Our Properties</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Find the perfect space that fits your lifestyle and needs, from cozy apartments to spacious townhouses and premium commercial locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${category.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <div className="mb-4 bg-blue-800/90 w-14 h-14 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">{category.title}</h3>
                  <p className="text-gray-100 mb-4 drop-shadow-md">{category.description}</p>
                  <span className="text-blue-300 font-medium inline-flex items-center">
                    Explore Properties
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;