import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | PremiumLease';
  }, []);

  const officeLocations = [
    {
      name: "Main Office",
      address: "123 Leasing Blvd, Suite 456, New York, NY 10001",
      phone: "(123) 456-7890",
      email: "info@premiumlease.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
    },
    {
      name: "Downtown Branch",
      address: "789 Urban Street, Suite 101, New York, NY 10002",
      phone: "(123) 456-7891",
      email: "downtown@premiumlease.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
    },
    {
      name: "Campus Office",
      address: "321 University Way, Student Center, New York, NY 10003",
      phone: "(123) 456-7892",
      email: "campus@premiumlease.com",
      hours: "Mon-Fri: 10AM-5PM"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Have questions or need assistance? Our team is here to help you find your perfect property solution.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking for a new home, student housing, or commercial space, our team is ready to assist you. Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-blue-800" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">Give us a call at <a href="tel:+11234567890" className="text-blue-800 hover:underline">(123) 456-7890</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-blue-800" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">Send us an email at <a href="mailto:info@premiumlease.com" className="text-blue-800 hover:underline">info@premiumlease.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare className="text-blue-800" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Live Chat</h3>
                    <p className="text-gray-600">Chat with our team during business hours for immediate assistance</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Clock className="mr-2" size={18} /> 
                  Business Hours
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Offices</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Visit one of our convenient locations to speak with our leasing experts in person
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{office.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={18} className="text-blue-800 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={18} className="text-blue-800 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={18} className="text-blue-800 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={18} className="text-blue-800 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Find Us</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Locate our offices on the map
            </p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg">
            {/* Placeholder for map */}
            <div className="w-full h-full flex items-center justify-center">
              <MapPin size={48} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;