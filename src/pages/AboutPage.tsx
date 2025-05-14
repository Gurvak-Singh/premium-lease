import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, TrendingUp, Award, Building2, Mail, Linkedin, Play, Building, UserCheck, Target, MapPin } from 'lucide-react';
import Testimonial from '../components/Testimonial';
import MetricCounter from '../components/MetricCounter';
import FAQItem from '../components/FAQItem';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  achievement: string;
  email: string;
  linkedin: string;
  interest: string;
}

interface Testimonial {
  name: string;
  position: string;
  quote: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Metric {
  icon: typeof Building;
  value: string;
  label: string;
}

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

  const team: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sarah has over 20 years of experience in real estate and property management.",
      achievement: "Led over $200M in property transactions",
      email: "sarah.johnson@premiumlease.com",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      interest: "Avid mountain climber"
    },
    {
      name: "Michael Rodriguez",
      role: "Commercial Properties Director",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Michael specializes in commercial real estate with expertise in market analysis.",
      achievement: "Managed portfolio of 50+ premium commercial properties",
      email: "michael.rodriguez@premiumlease.com",
      linkedin: "https://linkedin.com/in/michael-rodriguez",
      interest: "Jazz pianist"
    },
    {
      name: "Emily Chen",
      role: "Student Housing Manager",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Emily focuses on creating optimal living experiences for student communities.",
      achievement: "Placed 5000+ students in quality housing",
      email: "emily.chen@premiumlease.com",
      linkedin: "https://linkedin.com/in/emily-chen",
      interest: "Food blogger"
    },
    {
      name: "James Wilson",
      role: "Residential Leasing Director",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "James has helped thousands of families find their perfect homes.",
      achievement: "95% client satisfaction rate over 10 years",
      email: "james.wilson@premiumlease.com",
      linkedin: "https://linkedin.com/in/james-wilson",
      interest: "Amateur photographer"
    }
  ];

  const metrics: Metric[] = [
    { icon: Building, value: "5000+", label: "Properties Managed" },
    { icon: UserCheck, value: "98%", label: "Client Satisfaction" },
    { icon: Target, value: "15000+", label: "Successful Leases" },
    { icon: TrendingUp, value: "35%", label: "YoY Growth" },
    { icon: MapPin, value: "25+", label: "Cities Served" }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "David Thompson",
      position: "Residential Tenant",
      quote: "PremiumLease made finding my dream apartment a breeze. Their attention to detail and personalized service exceeded all expectations.",
      rating: 5
    },
    {
      name: "Jennifer Lee",
      position: "Commercial Property Owner",
      quote: "Working with PremiumLease has transformed how I manage my commercial properties. Their expertise and professionalism are unmatched.",
      rating: 5
    },
    {
      name: "Mark Stevens",
      position: "Student Housing Partner",
      quote: "Their student housing solutions have revolutionized our campus living options. A true partner in every sense.",
      rating: 5
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "What makes PremiumLease different from other property management companies?",
      answer: "We combine industry expertise with personalized service, leveraging technology and local market knowledge to deliver exceptional results for every client."
    },
    {
      question: "How does your leasing process work?",
      answer: "Our streamlined process includes property matching, guided viewings, application support, and seamless lease execution, all managed by dedicated specialists."
    },
    {
      question: "What areas do you service?",
      answer: "We operate in 25+ major cities across the country, with a strong presence in urban centers and growing communities."
    },
    {
      question: "Do you charge any fees to tenants?",
      answer: "We maintain full transparency about our fee structure, which varies by service. Contact us for detailed information about specific services."
    },
    {
      question: "How quickly can you help me find a property?",
      answer: "Most clients find their ideal property within 2-4 weeks, though timing can vary based on specific requirements and market conditions."
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About PremiumLease</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Transforming the property leasing experience with unmatched expertise and personalized service since 2010.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        {/* Video Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Company Overview Video Thumbnail"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group cursor-pointer hover:bg-opacity-30 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <Play size={40} className="text-blue-800 ml-2" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white">
              <h3 className="text-2xl font-semibold mb-2">Our Journey to Excellence</h3>
              <p>Learn how we've transformed property leasing over the past decade</p>
            </div>
          </div>
        </div>
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

      {/* Metrics Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">PremiumLease by the Numbers</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Our impact in the property leasing industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {metrics.map((metric, index) => (
              <MetricCounter
                key={index}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
              />
            ))}
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
                  <p className="text-gray-600 mb-3">{member.bio}</p>
                  <p className="text-gray-700 mb-3">{member.achievement}</p>
                  <p className="text-gray-600 italic mb-3">Interest: {member.interest}</p>
                  <div className="flex items-center gap-4">
                    <a href={`mailto:${member.email}`} className="text-blue-800 hover:text-blue-600 flex items-center gap-1">
                      <Mail size={16} />
                      <span>Email</span>
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 flex items-center gap-1">
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
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
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Client Success Stories
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from our valued clients across different sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our services
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            {faqs.map((faq: FAQ, index: number) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Space?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Whether you're looking for a new home, expanding your business, or seeking student housing, we're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link to="/properties/student" className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Find Student Housing
                </Link>
                <Link to="/properties/commercial" className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Explore Commercial Properties
                </Link>
                <Link to="/properties/residential" className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  View Residential Options
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-blue-800 font-semibold text-xl mb-4 text-center">Quick Inquiry Form</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 col-span-2">
                  <option value="">Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="student">Student Housing</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 col-span-2"
                ></textarea>
                <button
                  type="submit"
                  className="col-span-2 bg-blue-800 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;