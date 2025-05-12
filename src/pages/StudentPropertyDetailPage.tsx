import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Move, Calendar, CheckCircle2, ArrowLeft, GraduationCap, Wifi, Clock, ChevronRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { studentProperties } from '../data/properties';
import { Property } from '../types';

const StudentPropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [nextProperty, setNextProperty] = useState<Property | null>(null);
  const [activeImage, setActiveImage] = useState<number>(0);
  
  useEffect(() => {
    // Find current property and its index in student properties
    const foundProperty = studentProperties.find(p => p.id === id);
    const currentIndex = studentProperties.findIndex(p => p.id === id);
    
    if (foundProperty) {
      setProperty(foundProperty);
      document.title = `${foundProperty.title} | PremiumLease Student Housing`;
      
      // Set next property (if exists)
      if (currentIndex < studentProperties.length - 1) {
        setNextProperty(studentProperties[currentIndex + 1]);
      } else {
        setNextProperty(null);
      }
    }
  }, [id]);
  
  if (!property) {
    return (
      <div className="container mx-auto px-4 py-12 text-center mt-16">
        <div className="bg-gray-100 p-12 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Property Not Found</h2>
          <p className="text-gray-600 mb-6">The student housing property you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/student-programs" 
            className="inline-flex items-center bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Student Housing
          </Link>
        </div>
      </div>
    );
  }
  
  // Mock additional images for gallery
  const propertyImages = [
    property.imageUrl,
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  return (
    <div className="pt-[47px] bg-gray-50">
      {/* Secondary navigation bar - sticky when scrolling */}
      <div className="bg-indigo-800 w-full py-3 sticky top-[47px] z-40">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            to="/student-programs"
            className="inline-flex items-center text-white hover:text-blue-100 transition-colors font-medium text-sm"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Student Housing
          </Link>
          
          {nextProperty && (
            <Link 
              to={`/student-property/${nextProperty.id}`}
              className="inline-flex items-center text-white hover:text-blue-100 transition-colors font-medium text-sm"
              title={`Next: ${nextProperty.title}`}
            >
              View Next Property
              <ChevronRight size={18} className="ml-2" />
            </Link>
          )}
        </div>
      </div>

      {/* Property Header */}
      <div className="container mx-auto px-4 py-6 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
            <div className="flex items-center text-gray-600 mt-2">
              <MapPin size={16} className="mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-3xl font-bold text-blue-800">${property.price}<span className="text-lg font-normal text-gray-600">/month</span></div>
            <div className="text-sm text-blue-600 mt-1">Academic-year leases available</div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={propertyImages[activeImage]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
            {propertyImages.map((img, index) => (
              <div
                key={index}
                className={`cursor-pointer h-32 bg-gray-200 rounded-lg overflow-hidden ${
                  activeImage === index ? 'ring-2 ring-blue-800' : ''
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={img}
                  alt={`${property.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Details</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                  <Bed size={24} className="text-blue-800 mb-2" />
                  <span className="text-sm text-gray-600">Bedrooms</span>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                  <Bath size={24} className="text-blue-800 mb-2" />
                  <span className="text-sm text-gray-600">Bathrooms</span>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                  <Move size={24} className="text-blue-800 mb-2" />
                  <span className="text-sm text-gray-600">Square Feet</span>
                  <span className="font-semibold">{property.squareFeet}</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                  <Calendar size={24} className="text-blue-800 mb-2" />
                  <span className="text-sm text-gray-600">Available</span>
                  <span className="font-semibold">Fall Semester</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{property.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Housing Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                  {property.amenities && property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Student-Focused Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <GraduationCap size={20} className="text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Academic-Friendly Environment</h4>
                      <p className="text-gray-600 text-sm">Designated study areas and quiet hours policy to support your academic success.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <Wifi size={20} className="text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">High-Speed Internet</h4>
                      <p className="text-gray-600 text-sm">Complimentary high-speed internet included in all of our student housing options.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <Clock size={20} className="text-blue-800" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Flexible Lease Terms</h4>
                      <p className="text-gray-600 text-sm">9-month academic year leases, semester options, and summer housing available.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Location & Campus Proximity</h2>
              <div className="bg-gray-200 h-72 rounded-lg mb-4 overflow-hidden">
                {/* Map Image Fallback */}
                <img 
                  src="https://images.pexels.com/photos/16015193/pexels-photo-16015193/free-photo-of-close-up-of-a-map.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Map location" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center text-blue-800 mb-2">
                  <MapPin size={16} className="mr-1 flex-shrink-0" />
                  <span className="font-medium">Campus Distance</span>
                </div>
                <p className="text-gray-700">This property is conveniently located within walking distance to campus, with easy access to university facilities and amenities.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in this property?</h3>
              <p className="text-gray-600 mb-6">Complete the form below to schedule a tour or learn more about this student housing option.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPropertyDetailPage;
