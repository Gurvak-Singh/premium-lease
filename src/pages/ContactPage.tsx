import { useEffect } from 'react';
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
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-20 bg-cover bg-center bg-fixed transform scale-105" 
          style={{
            backgroundPosition: '50% 20%',
            filter: 'saturate(1.2) brightness(0.8)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/85 to-blue-900/90" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white/90">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Whether you're looking for your next property or need assistance with leasing, our dedicated team is here to guide you every step of the way.
            </p>
          </div>
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
          
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620847109032!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;