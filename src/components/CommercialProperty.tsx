import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Move, CheckCircle2 } from 'lucide-react';

const CommercialProperty = () => {
  const features = [
    "Prime locations in business districts",
    "Flexible lease terms for growing businesses",
    "Modern amenities and infrastructure",
    "Customizable spaces for your business needs"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Commercial Spaces
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Commercial Properties for Your Business</h2>
            <p className="text-gray-600 mb-8">
              From retail storefronts to executive office suites, our commercial properties provide the perfect setting for your business to thrive. 
              With flexible leasing options and prime locations, we help businesses of all sizes find their ideal space.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 size={20} className="text-blue-800 mr-2 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link
              to="/commercial"
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              View Commercial Listings
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-lg z-0"></div>
            
            <div className="relative z-10 bg-white shadow-xl rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Premium Office Space" 
                className="w-full h-64 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span>Downtown Financial District</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Executive Office Suites</h3>
                
                <p className="text-blue-800 font-bold text-xl mb-4">
                  $3,500<span className="text-gray-500 text-sm font-normal">/month</span>
                </p>
                
                <div className="flex justify-between text-sm text-gray-600 border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <Building2 size={16} className="mr-1" />
                    <span>Premium</span>
                  </div>
                  <div className="flex items-center">
                    <Move size={16} className="mr-1" />
                    <span>1,200 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialProperty;