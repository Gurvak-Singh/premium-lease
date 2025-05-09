import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Bed, Bath, Move, Calendar, CheckCircle2, ArrowLeft } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { allProperties } from '../data/properties';
import { Property } from '../types';

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);
  
  useEffect(() => {
    const foundProperty = allProperties.find(p => p.id === id);
    if (foundProperty) {
      setProperty(foundProperty);
      document.title = `${foundProperty.title} | PremiumLease`;
    }
  }, [id]);
  
  if (!property) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-gray-100 p-12 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h2>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/properties/all" 
            className="inline-flex items-center bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }
  
  const features = [
    "High-speed internet ready",
    "Modern appliances",
    "Central air conditioning",
    "In-unit washer and dryer",
    "Fitness center access",
    "24/7 maintenance"
  ];
  
  // Mock additional images for gallery
  const propertyImages = [
    property.imageUrl,
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];
  
  return (
    <div>
      {/* Navigation Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-800">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/properties/all" className="hover:text-blue-800">Properties</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">{property.title}</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-1">
              <MapPin size={16} className="mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <span className="text-3xl font-bold text-blue-800">${property.price.toLocaleString()}</span>
            <span className="text-gray-600">/month</span>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-10">
          <div className="relative h-[500px] rounded-lg overflow-hidden mb-4">
            <img
              src={propertyImages[activeImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {propertyImages.map((image, index) => (
              <div 
                key={index}
                className={`relative h-24 rounded-md overflow-hidden cursor-pointer transition-all ${
                  activeImage === index ? 'ring-2 ring-blue-800' : 'opacity-80 hover:opacity-100'
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt={`Property view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Overview</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                  <Home size={24} className="text-blue-800 mb-2" />
                  <span className="text-gray-600 text-sm">Type</span>
                  <span className="font-semibold">{property.type}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                  <Bed size={24} className="text-blue-800 mb-2" />
                  <span className="text-gray-600 text-sm">Bedrooms</span>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                  <Bath size={24} className="text-blue-800 mb-2" />
                  <span className="text-gray-600 text-sm">Bathrooms</span>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                  <Move size={24} className="text-blue-800 mb-2" />
                  <span className="text-gray-600 text-sm">Area</span>
                  <span className="font-semibold">{property.squareFeet.toLocaleString()} sq ft</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  This beautiful {property.type.toLowerCase()} offers modern living spaces with premium amenities and a convenient location. Located in the heart of {property.location}, you'll be close to shopping, dining, and entertainment options.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  The property features {property.bedrooms} spacious bedrooms, {property.bathrooms} well-appointed bathrooms, and a total living space of {property.squareFeet.toLocaleString()} square feet. The open concept layout creates a welcoming atmosphere perfect for both relaxation and entertaining.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Features & Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 size={18} className="text-blue-800 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Availability */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Availability</h2>
              <div className="flex items-center text-gray-700 mb-4">
                <Calendar size={20} className="text-blue-800 mr-2" />
                <span>Available from <strong>July 1, 2025</strong></span>
              </div>
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-gray-800">
                  This property is in high demand. Schedule a viewing today to secure your spot.
                </p>
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Location</h2>
              <div className="bg-gray-200 h-64 rounded-lg mb-4">
                {/* Placeholder for map */}
                <div className="w-full h-full flex items-center justify-center">
                  <MapPin size={40} className="text-gray-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Neighborhood Highlights</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Walking distance to public transportation</li>
                  <li>5 minutes to grocery stores and shopping</li>
                  <li>Nearby parks and recreational areas</li>
                  <li>Multiple dining options within walking distance</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Interested in this property?</h2>
                <ContactForm />
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Need assistance?</h3>
                <p className="text-gray-600 mb-4">
                  Our leasing specialists are available to answer your questions.
                </p>
                <a 
                  href="tel:+11234567890" 
                  className="block w-full bg-blue-800 text-center text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Call Now: (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;