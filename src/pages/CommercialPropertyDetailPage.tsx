import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Building2, Users, Wifi, Car, CheckCircle2, MapPin, Bath, Move } from 'lucide-react';
import { commercialProperties } from '../data/properties';
import { Property } from '../types';

const CommercialPropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [nextProperty, setNextProperty] = useState<Property | null>(null);
  const [prevProperty, setPrevProperty] = useState<Property | null>(null);

  // Mock additional images for the property
  const propertyImages = [
    'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg',
    'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
    'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg',
    'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg'
  ];

  useEffect(() => {
    const currentProperty = commercialProperties.find(p => p.id === id);
    const currentIndex = commercialProperties.findIndex(p => p.id === id);
    
    if (currentProperty) {
      setProperty(currentProperty);
      document.title = `${currentProperty.title} | PremiumLease Commercial`;
      
      // Set next property
      if (currentIndex < commercialProperties.length - 1) {
        setNextProperty(commercialProperties[currentIndex + 1]);
      }
      
      // Set previous property
      if (currentIndex > 0) {
        setPrevProperty(commercialProperties[currentIndex - 1]);
      }
    }
  }, [id]);

  const amenities = [
    { icon: <Wifi size={20} />, label: 'High-Speed Internet' },
    { icon: <Users size={20} />, label: 'Conference Rooms' },
    { icon: <Building2 size={20} />, label: '24/7 Access' },
    { icon: <Car size={20} />, label: 'Parking Available' }
  ];

  const features = [
    'Professional Reception',
    'Mail & Package Handling',
    'Cleaning Services',
    'Security System',
    'Utilities Included',
    'Break Room Access'
  ];

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-gray-100 p-12 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h2>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/commercial" 
            className="inline-flex items-center bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Commercial Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Back to Commercial Properties */}
      <div className="bg-blue-900 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/commercial" className="inline-flex items-center text-blue-100 hover:text-white">
              <ArrowLeft size={16} className="mr-1" />
              Back to Commercial Properties
            </Link>
            {prevProperty && (
              <Link 
                to={`/commercial-property/${prevProperty.id}`}
                className="inline-flex items-center text-blue-100 hover:text-white"
              >
                <ArrowLeft size={16} className="mr-1" />
                Previous Property
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Property Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
            <p className="text-gray-600 flex items-center mt-2">
              <MapPin size={18} className="mr-2" />
              {property.location}
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-800">
              ${property.price.toLocaleString()}
              <span className="text-base font-normal text-gray-600">/month</span>
            </div>
            <p className="text-sm text-gray-600">Available now</p>
          </div>
        </div>
      </header>

      {/* Property Images */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src={propertyImages[selectedImage]} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 grid grid-rows-3 gap-4">
            {propertyImages.slice(1, 4).map((image, index) => (
              <div 
                key={index}
                className="relative h-[120px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(index + 1)}
              >
                <img 
                  src={image} 
                  alt={`${property.title} view ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Key Details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building2 size={20} className="mr-2" />
                    <span>Property Type</span>
                  </div>
                  <div className="text-lg font-semibold">Commercial</div>
                </div>
                <div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Move size={20} className="mr-2" />
                    <span>Square Feet</span>
                  </div>
                  <div className="text-lg font-semibold">{property.squareFeet.toLocaleString()}</div>
                </div>
                <div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Bath size={20} className="mr-2" />
                    <span>Bathrooms</span>
                  </div>
                  <div className="text-lg font-semibold">{property.bathrooms}</div>
                </div>
                <div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Users size={20} className="mr-2" />
                    <span>Capacity</span>
                  </div>
                  <div className="text-lg font-semibold">20-50 people</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Description</h2>
              <p className="text-gray-600 leading-relaxed">
                Modern commercial space located in a prime business district. This property offers a perfect blend of functionality and style, featuring open floor plans, natural lighting, and state-of-the-art facilities. Ideal for businesses looking for a professional environment with excellent amenities and accessibility.
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Building Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-blue-800 mr-3">{amenity.icon}</div>
                    <span className="text-gray-700">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 size={20} className="text-green-600 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in this property?</h3>
              <p className="text-gray-600 mb-6">
                Complete the form below to schedule a tour or request more information about this property.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="(123) 456-7890"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">I'm interested in</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="tour">Scheduling a tour</option>
                    <option value="info">More information</option>
                    <option value="lease">Leasing options</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your needs or any questions..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-800 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Next Property */}
      {nextProperty && (
        <div className="container mx-auto px-4 pb-12">
          <div className="border-t pt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Next Property</h2>
              <Link 
                to={`/commercial-property/${nextProperty.id}`}
                className="text-blue-800 hover:text-blue-900 flex items-center"
              >
                View Details
                <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-64 md:h-full">
                  <img 
                    src={nextProperty.imageUrl}
                    alt={nextProperty.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{nextProperty.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={18} className="mr-2" />
                    <span>{nextProperty.location}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <Move size={18} className="mr-2" />
                      <span>{nextProperty.squareFeet.toLocaleString()} sq ft</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={18} className="mr-2" />
                      <span>{nextProperty.bathrooms} Bath</span>
                    </div>
                  </div>
                  <div className="mt-4 text-2xl font-bold text-blue-800">
                    ${nextProperty.price.toLocaleString()}<span className="text-base font-normal text-gray-600">/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommercialPropertyDetailPage;
