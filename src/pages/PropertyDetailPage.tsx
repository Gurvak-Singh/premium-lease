import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Home, Bed, Bath, Move, Calendar, CheckCircle2, ArrowLeft, ChevronRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { allProperties } from '../data/properties';
import { Property } from '../types';

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [nextProperty, setNextProperty] = useState<Property | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);
  
  useEffect(() => {
    // Get all residential properties (apartments and townhouses)
    const residentialProperties = allProperties.filter(p => 
      p.type === 'Apartment' || p.type === 'Townhouse'
    );
    
    // Find current property and its index
    const foundProperty = residentialProperties.find(p => p.id === id);
    const currentIndex = residentialProperties.findIndex(p => p.id === id);
    
    if (foundProperty) {
      setProperty(foundProperty);
      document.title = `${foundProperty.title} | PremiumLease`;
      
      // Set next property (if exists)
      if (currentIndex < residentialProperties.length - 1) {
        setNextProperty(residentialProperties[currentIndex + 1]);
      } else {
        setNextProperty(null);
      }
    }
  }, [id]);
  
  if (!property) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-gray-100 p-12 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h2>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/properties/residential" 
            className="inline-flex items-center bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Apartments & Townhomes
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
    <div className="pt-[47px] bg-gray-50">
      {/* Secondary navigation bar - sticky when scrolling */}
      <div className="bg-blue-800 w-full py-3 sticky top-[47px] z-40">
        <div className="container mx-auto py-3 px-4 flex justify-between items-center">
          <Link 
            to="/properties/residential" 
            className="inline-flex items-center text-white hover:text-blue-100 transition-colors font-medium text-sm"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Apartments & Townhomes
          </Link>
          
          {nextProperty && (
            <Link 
              to={`/property/${nextProperty.id}`}
              className="inline-flex items-center text-white hover:text-blue-100 transition-colors font-medium text-sm"
              title={`Next: ${nextProperty.title}`}
            >
              View Next Property
              <ChevronRight size={18} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 mt-8">
        {/* Property Title and Price */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
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
          <div className="mb-6">
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
                  Welcome to this exceptional {property.type.toLowerCase()} in the highly sought-after {property.location} area. This beautiful property offers modern living spaces with premium amenities and an ideal location. You'll be steps away from shopping, fine dining, and entertainment options that make this neighborhood so desirable.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  The property features {property.bedrooms} {property.bedrooms === 1 ? 'spacious bedroom' : 'spacious bedrooms'}, {property.bathrooms} well-appointed {property.bathrooms === 1 ? 'bathroom' : 'bathrooms'}, and a total living space of {property.squareFeet.toLocaleString()} square feet. The thoughtfully designed open concept layout creates a welcoming atmosphere perfect for both relaxation and entertaining guests.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Recent upgrades include modern fixtures, energy-efficient appliances, and designer finishes throughout. The living areas feature abundant natural light, while the bedrooms provide comfortable retreats with ample closet space.
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
              <div className="h-64 rounded-lg mb-4 overflow-hidden bg-blue-100">
                {/* Generic map view */}
                <div className="w-full h-full relative">
                  <img 
                    src="https://www.mapquestapi.com/staticmap/v5/map?key=KEY&center=Denver,CO&size=800,400&zoom=13&type=map" 
                    alt="Property location map" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-800 text-white p-3 rounded-lg shadow-lg opacity-90">
                      <MapPin size={20} className="inline-block mr-1" />
                      <span className="font-medium">{property.location}</span>
                    </div>
                  </div>
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
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-t-4 border-blue-800">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Schedule a Viewing</h2>
                <p className="text-gray-600 mb-4">Complete the form below to schedule a viewing of {property.title} or request more information.</p>
                <ContactForm propertyName={property.title} />
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-800 mb-2">Need immediate assistance?</h3>
                <p className="text-gray-600 mb-4">
                  Our leasing specialists are available 7 days a week to answer your questions about this {property.type.toLowerCase()}.
                </p>
                <a 
                  href="tel:+11234567890" 
                  className="w-full bg-blue-800 text-center text-white font-medium py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now: (123) 456-7890
                </a>
                <div className="mt-4 bg-white p-3 rounded-md border border-blue-200">
                  <p className="text-sm text-gray-500 mb-1">Or send an email:</p>
                  <a href="mailto:leasing@premiumlease.com" className="text-blue-800 font-medium hover:text-blue-600">leasing@premiumlease.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;