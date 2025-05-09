import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, TrendingUp, Award, Building2 } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | PremiumLease';
  }, []);

  const values = [
    {
      icon: <Users size={32} className="text-blue-800" />,
      title: "Client-Centric Approach",
      description: "We put our clients' needs first, ensuring personalized service and tailored solutions."
    },
    {
      icon: <ShieldCheck size={32} className="text-blue-800" />,
      title: "Integrity & Transparency",
      description: "We operate with honesty and clear communication in all our business practices."
    },
    {
      icon: <TrendingUp size={32} className="text-blue-800" />,
      title: "Quality & Excellence",
      description: "We maintain high standards in our properties and services, exceeding expectations."
    },
    {
      icon: <Award size={32} className="text-blue-800" />,
      title: "Expertise & Innovation",
      description: "Our experienced team combines industry knowledge with forward-thinking solutions."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sarah has over 20 years of experience in real estate and property management."
    },
    {
      name: "Michael Rodriguez",
      role: "Commercial Properties Director",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Michael specializes in commercial real estate with expertise in market analysis."
    },
    {
      name: "Emily Chen",
      role: "Student Housing Manager",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Emily focuses on creating optimal living experiences for student communities."
    },
    {
      name: "James Wilson",
      role: "Residential Leasing Director",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "James has helped thousands of families find their perfect homes."
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About PremiumLease</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Your trusted partner in finding exceptional residential and commercial spaces.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Committed to Excellence in Property Leasing</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2010, PremiumLease began with a simple mission: to transform the property leasing experience by combining exceptional spaces with outstanding service. What started as a small operation has grown into a comprehensive leasing company serving diverse clients across residential, commercial, and student markets.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of experienced professionals is dedicated to understanding the unique needs of each client, whether they're searching for their first apartment, expanding their business, or looking for the perfect student housing solution. We take pride in our personalized approach and commitment to excellence.
              </p>
              
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://images.pexels.com/photos/22205${i}/pexels-photo-22205${i}.jpeg?auto=compress&cs=tinysrgb&w=120`} 
                      alt={`Team member ${i}`}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-800">Join our growing team</p>
                  <a href="#careers" className="text-blue-800 hover:underline text-sm">View open positions</a>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-lg z-0"></div>
              
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team" 
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Guiding Principles That Define Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values shape every aspect of our business and drive our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Our Team
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Experts Behind PremiumLease</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team brings together decades of experience in property management and real estate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-800 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Milestones in Our Growth</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our humble beginnings to becoming a leading property leasing company
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div className="w-1 bg-blue-200 flex-grow mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2010: Founded in New York</h3>
                  <p className="text-gray-600 mb-4">
                    PremiumLease was established with a focus on premium residential properties in New York City.
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <Building2 size={18} className="text-blue-800 mr-2" />
                      <span className="text-gray-700">Started with a portfolio of 25 residential properties</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div className="w-1 bg-blue-200 flex-grow mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2015: Expanded to Commercial Properties</h3>
                  <p className="text-gray-600 mb-4">
                    Launched our commercial division to serve business clients with the same level of excellence.
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <Building2 size={18} className="text-blue-800 mr-2" />
                      <span className="text-gray-700">Added 100+ commercial spaces to our portfolio</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div className="w-1 bg-blue-200 flex-grow mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2018: Student Housing Program</h3>
                  <p className="text-gray-600 mb-4">
                    Introduced specialized leasing programs for students to address their unique housing needs.
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <Building2 size={18} className="text-blue-800 mr-2" />
                      <span className="text-gray-700">Partnered with 5 major universities</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2023: Digital Transformation</h3>
                  <p className="text-gray-600 mb-4">
                    Launched our comprehensive online platform to streamline the leasing process.
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <Building2 size={18} className="text-blue-800 mr-2" />
                      <span className="text-gray-700">Now managing 500+ properties across all segments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Space?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for a residential, commercial, or student property, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/properties/all"
              className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;