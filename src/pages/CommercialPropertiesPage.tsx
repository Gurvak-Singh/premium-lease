import { useEffect } from 'react';
import { Building2, CheckCircle2, BarChart3, Briefcase, MapPin } from 'lucide-react';
import PropertyGrid from '../components/PropertyGrid';
import ContactForm from '../components/ContactForm';
import { commercialProperties } from '../data/properties';

const CommercialPropertiesPage = () => {
  useEffect(() => {
    document.title = 'Commercial Properties | PremiumLease';
  }, []);

  const propertyTypes = [
    {
      icon: <Building2 size={28} className="text-blue-800" />,
      title: "Office Spaces",
      description: "Modern office suites for businesses of all sizes, from startups to established corporations."
    },
    {
      icon: <Briefcase size={28} className="text-blue-800" />,
      title: "Retail Locations",
      description: "Prime storefronts in high-traffic areas designed to maximize customer engagement."
    },
    {
      icon: <BarChart3 size={28} className="text-blue-800" />,
      title: "Industrial Spaces",
      description: "Flexible industrial properties for manufacturing, warehousing, and distribution needs."
    }
  ];

  const benefits = [
    "Flexible lease terms tailored to your business growth",
    "Prime locations in business and commercial districts",
    "Modern infrastructure and technology readiness",
    "Professional property management services",
    "Customizable spaces to match your brand and operations",
    "Competitive pricing with transparent terms"
  ];

  return (
    <div>
      {/* Modern Header with Dynamic Overlay */}
      <div className="relative overflow-hidden mt-0">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Modern commercial district" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-indigo-900/95"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <span className="bg-blue-600 h-1 w-12 rounded-full mr-4"></span>
                <span className="text-blue-200 uppercase tracking-wider font-medium">Premium Commercial Space</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                <span className="text-white drop-shadow-md">Elevate Your Business </span>
                <span className="text-blue-300">With Premium Spaces</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-10 max-w-xl leading-relaxed">
                Discover premium commercial properties designed to enhance your business success, featuring modern amenities and prime locations.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#commercial-listings" 
                  className="bg-white text-blue-900 px-8 py-4 rounded-md font-medium hover:bg-blue-50 transition-colors shadow-lg"
                >
                  View Properties
                </a>
                <a 
                  href="#contact" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white/20 transition-colors"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
            
            <div className="bg-white/95 p-8 rounded-xl shadow-2xl backdrop-blur-sm hidden lg:block">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Property Search</h2>
              <p className="text-gray-600 mb-6">Find the perfect commercial space for your business needs.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm font-medium">Property Type</label>
                  <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Office Space</option>
                    <option>Retail Space</option>
                    <option>Industrial Space</option>
                    <option>Mixed Use</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-sm font-medium">Location</label>
                  <input 
                    type="text" 
                    placeholder="Enter city or area"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-sm font-medium">Space Required (sq ft)</label>
                  <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Under 1,000</option>
                    <option>1,000 - 2,500</option>
                    <option>2,500 - 5,000</option>
                    <option>5,000+</option>
                  </select>
                </div>
                
                <button className="w-full bg-blue-800 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Space Options</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg leading-relaxed">
              We offer a variety of commercial properties to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Our Commercial Properties</h2>
              <p className="text-gray-700 mb-10 text-lg leading-relaxed">
                Our commercial leasing options are designed with your business success in mind. We provide flexible terms, premium locations, and spaces that can grow with your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  // Highlight key phrases
                  const highlightedBenefit = benefit.replace(
                    /(Flexible lease terms|Prime locations|Modern infrastructure|Professional property management|Customizable spaces|Competitive pricing)/g, 
                    '<strong class="text-blue-800">$1</strong>'
                  );
                  
                  return (
                    <div key={index} className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-300">
                      <CheckCircle2 size={24} className="text-blue-800 mr-3 mt-1 flex-shrink-0" />
                      <span 
                        className="text-gray-700 text-base leading-relaxed" 
                        dangerouslySetInnerHTML={{ __html: highlightedBenefit }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-lg z-0"></div>
              
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Modern office interior" 
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Prime Locations</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg leading-relaxed">
              Strategically positioned commercial properties in business-friendly areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {["Downtown Business District", "Suburban Office Park", "Retail Corridor"].map((location, index) => (
              <div 
                key={index}
                className="relative h-72 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${
                      index === 0 ? "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" :
                      index === 1 ? "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" :
                      "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    })`
                  }}
                >
                  {/* Lighter overlay that still maintains text visibility */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  {/* Softer gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300 group-hover:translate-y-[-8px] z-10">
                  <h3 className="text-2xl font-bold mb-3 drop-shadow-lg text-white tracking-wide">{location}</h3>
                  <div className="flex items-center bg-blue-900/70 rounded-full py-2 px-4 backdrop-blur-sm w-fit border border-blue-800/40 shadow-lg">
                    <MapPin size={20} className="mr-2 text-white" />
                    <span className="text-base text-white font-medium">Multiple properties available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Listings */}
      <section id="commercial-listings" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Commercial Properties</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg leading-relaxed">
              Browse our selection of premium commercial spaces
            </p>
          </div>
          
          <PropertyGrid 
            properties={commercialProperties} 
            isCommercial={true} 
          />
        </div>
      </section>

      {/* Leasing Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Leasing Process</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg leading-relaxed">
              We make leasing commercial space straightforward and efficient
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg hover:bg-blue-50 transition-all duration-300 border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-800 font-bold text-2xl mx-auto mb-6">1</div>
                <h3 className="text-2xl font-semibold mb-4">Consultation</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Meet with our commercial leasing experts to discuss your business needs and space requirements.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg hover:bg-blue-50 transition-all duration-300 border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-800 font-bold text-2xl mx-auto mb-6">2</div>
                <h3 className="text-2xl font-semibold mb-4">Property Selection</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Tour available properties that match your criteria and visualize your business in the space.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg hover:bg-blue-50 transition-all duration-300 border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-800 font-bold text-2xl mx-auto mb-6">3</div>
                <h3 className="text-2xl font-semibold mb-4">Customization & Lease</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Finalize lease terms and discuss any customizations needed for your business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-md">Schedule a Commercial Consultation</h2>
              <p className="text-blue-50 mb-10 text-lg leading-relaxed">
                Our commercial property experts are ready to help you find the perfect space for your business. Fill out the form to schedule a personalized consultation.
              </p>
              
              <div className="bg-blue-800/60 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50">
                <h3 className="font-semibold text-xl mb-6 text-white">Commercial Leasing Team</h3>
                <div className="space-y-5">
                  <div className="flex items-center p-3 border-b border-blue-700/30 pb-4">
                    <MapPin size={24} className="mr-4 text-blue-200" />
                    <span className="text-blue-50 text-lg">123 Leasing Blvd, Suite 456, New York, NY 10001</span>
                  </div>
                  <div className="flex items-center p-3 border-b border-blue-700/30 pb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-blue-50 text-lg">(123) 456-7890</span>
                  </div>
                  <div className="flex items-center p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-blue-50 text-lg">commercial@premiumlease.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialPropertiesPage;