import React, { useEffect, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Users, 
  Wrench, 
  DollarSign, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Check,
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import EnhancedContactForm from '../components/EnhancedContactForm';

const PropertyManagementContactPage = () => {
  useEffect(() => {
    document.title = 'Property Management Contact | PremiumLease';
  }, []);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Department contacts
  const departmentContacts = [
    {
      name: "Sales & Leasing",
      icon: <Users className="text-blue-800" size={20} />,
      phone: "(123) 456-7890",
      email: "sales@premiumlease.com",
      description: "For property inquiries and leasing information"
    },
    {
      name: "Maintenance & Repairs",
      icon: <Wrench className="text-blue-800" size={20} />,
      phone: "(123) 456-7891",
      email: "maintenance@premiumlease.com",
      description: "For repair requests and property maintenance"
    },
    {
      name: "Billing & Payments",
      icon: <DollarSign className="text-blue-800" size={20} />,
      phone: "(123) 456-7892",
      email: "billing@premiumlease.com",
      description: "For rent payments and billing questions"
    },
    {
      name: "General Inquiries",
      icon: <HelpCircle className="text-blue-800" size={20} />,
      phone: "(123) 456-7893",
      email: "info@premiumlease.com",
      description: "For all other questions and information"
    }
  ];

  // Office locations
  const officeLocations = [
    {
      name: "Main Office",
      address: "123 Leasing Blvd, Suite 456, New York, NY 10001",
      phone: "(123) 456-7890",
      email: "info@premiumlease.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      name: "Downtown Branch",
      address: "789 Urban Street, Suite 101, New York, NY 10002",
      phone: "(123) 456-7891",
      email: "downtown@premiumlease.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      coordinates: { lat: 40.7218, lng: -73.9980 }
    },
    {
      name: "Campus Office",
      address: "321 University Way, Student Center, New York, NY 10003",
      phone: "(123) 456-7892",
      email: "campus@premiumlease.com",
      hours: "Mon-Fri: 10AM-5PM",
      coordinates: { lat: 40.7338, lng: -73.9900 }
    }
  ];

  // Frequently asked questions
  const faqs = [
    {
      question: "What are your standard lease terms?",
      answer: "Our standard residential leases are 12 months, though we offer flexible 6 and 9-month options for some properties. Student housing is typically aligned with the academic calendar. Commercial leases range from 1-5 years with custom terms available."
    },
    {
      question: "How do I submit a maintenance request?",
      answer: "Current tenants can submit maintenance requests through our tenant portal, by emailing maintenance@premiumlease.com, or by calling our 24/7 maintenance line at (123) 456-7891. Emergency issues are addressed immediately, while routine maintenance is typically completed within 48 hours."
    },
    {
      question: "What is your pet policy?",
      answer: "Pet policies vary by property. Many of our residential properties are pet-friendly with certain restrictions on size and breed. A pet deposit and monthly pet rent may apply. Service animals are exempt from pet restrictions and fees according to fair housing regulations."
    },
    {
      question: "How do I pay my rent?",
      answer: "We offer multiple convenient payment options including online payments through our secure tenant portal, automatic recurring payments, checks by mail, or in-person payments at any of our office locations. A convenience fee may apply for credit card payments."
    },
    {
      question: "What's included in your property management services?",
      answer: "Our comprehensive property management services include tenant screening and placement, rent collection, maintenance coordination, financial reporting, property inspections, and legal compliance. We offer customized service packages tailored to your property's specific needs."
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      text: "PremiumLease has managed our multi-unit property for over 5 years with exceptional professionalism. Their responsive team and transparent reporting make property ownership stress-free.",
      author: "Michael J., Property Owner",
      rating: 5
    },
    {
      text: "As a tenant, I've been impressed by their maintenance response time and friendly staff. The online portal makes everything from rent payments to maintenance requests incredibly convenient.",
      author: "Sarah L., Tenant",
      rating: 5
    },
    {
      text: "Their property management team found quality tenants quickly and has kept our vacancy rate minimal. The detailed monthly reports give us complete confidence in their management.",
      author: "David C., Investment Group",
      rating: 5
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Header with enhanced visual styling */}
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-20 bg-pattern-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Property Management Contact</h1>
            <p className="text-xl text-blue-100 max-w-2xl mb-10">
              Professional property management services tailored to your needs. Our team of experts is ready to help you maximize your investment potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact-form" 
                className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Us Now
              </a>
              <a 
                href="tel:+11234567890" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center"
              >
                <Phone size={18} className="mr-2" />
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Section - New addition */}
      <div className="bg-white py-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 hidden md:inline-block">Quick Contact:</span>
              <a href="tel:+11234567890" className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
                <Phone size={16} className="mr-1" /> (123) 456-7890
              </a>
              <a href="mailto:info@premiumlease.com" className="text-blue-800 hover:text-blue-600 font-medium flex items-center">
                <Mail size={16} className="mr-1" /> info@premiumlease.com
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Live Chat Available</span>
              </div>
              <a 
                href="#contact-form" 
                className="bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                <MessageSquare size={14} className="mr-1" />
                Contact Us
              </a>
            </div>
            {/* Mobile sticky button */}
            <div className="md:hidden fixed bottom-6 right-6 z-50">
              <a 
                href="#contact-form" 
                className="bg-blue-800 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
              >
                <MessageSquare size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Department Contact Section - New addition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">Specialized Support</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-gray-900">Department Contacts</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get in touch with the specific department that can best address your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departmentContacts.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{dept.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{dept.description}</p>
                <div className="space-y-2">
                  <a href={`tel:${dept.phone.replace(/[^0-9]/g, '')}`} className="flex items-center text-blue-800 hover:text-blue-600 font-medium">
                    <Phone size={16} className="mr-2" />
                    <span>{dept.phone}</span>
                  </a>
                  <a href={`mailto:${dept.email}`} className="flex items-center text-blue-800 hover:text-blue-600 font-medium">
                    <Mail size={16} className="mr-2" />
                    <span>{dept.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section with enhanced form and testimonials */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Whether you're a property owner looking for management services or a tenant with questions, our team is ready to assist you. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-md">
                <p className="text-blue-800 flex items-center">
                  <Clock size={20} className="mr-2 flex-shrink-0" />
                  <span>We typically respond to all inquiries within 24 hours during business days.</span>
                </p>
              </div>
              
              {/* Customer Testimonials - New addition */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Users className="mr-2" size={20} />
                  What Our Clients Say
                </h3>
                
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-2 text-sm">"{testimonial.text}"</p>
                      <p className="text-gray-600 text-sm font-medium">{testimonial.author}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Media Contact Options - New addition */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Enhanced Contact Form */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <EnhancedContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations with Enhanced Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">Visit Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-gray-900">Our Offices</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visit one of our convenient locations to speak with our property management experts in person
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-semibold">{office.name}</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin size={18} className="text-blue-800 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{office.address}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone size={18} className="text-blue-800 mr-3 mt-1 flex-shrink-0" />
                      <a 
                        href={`tel:${office.phone.replace(/[^0-9]/g, '')}`}
                        className="text-gray-700 hover:text-blue-800 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail size={18} className="text-blue-800 mr-3 mt-1 flex-shrink-0" />
                      <a 
                        href={`mailto:${office.email}`}
                        className="text-gray-700 hover:text-blue-800 transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock size={18} className="text-blue-800 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{office.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={`https://maps.google.com/?q=${office.address}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium"
                    >
                      <MapPin size={16} className="mr-1" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">Locations</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-gray-900">Find Us on the Map</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Locate our offices or schedule an in-person appointment at your nearest location
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-md">
            {/* Note: In a real implementation, this would integrate with Google Maps or similar */}
            <div className="bg-gray-100 h-96 rounded-lg relative overflow-hidden">
              <iframe 
                title="Office Locations Map"
                className="absolute inset-0 w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1652564034797!5m2!1sen!2s" 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              {officeLocations.map((office, index) => (
                <button 
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-md transition-colors text-sm font-medium"
                  onClick={() => console.log(`Show ${office.name} on map`)}
                >
                  {office.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - New addition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">Support</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find quick answers to common questions about our property management services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp size={20} className="text-blue-800 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a 
                href="#contact-form" 
                className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium"
              >
                Contact our team for personalized assistance
                <ChevronDown size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA - New addition */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let our property management team help you maximize your investment potential with professional services tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact-form" 
              className="bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center"
            >
              <MessageSquare size={20} className="mr-2" />
              Contact Us Now
            </a>
            <a 
              href="tel:+11234567890" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-all duration-300 flex items-center"
            >
              <Phone size={20} className="mr-2" />
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </section>

      {/* Add this CSS to the head of your document */}
      <style jsx>{`
        .bg-pattern-overlay {
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
          background-repeat: repeat;
        }
      `}</style>
    </div>
  );
};

export default PropertyManagementContactPage;
