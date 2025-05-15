import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, Award, TrendingUp, UserCheck, Target, MapPin, Building2, Play, Mail, Linkedin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Testimonial from '../components/Testimonial';
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
  icon: LucideIcon;
  value: string;
  label: string;
}

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | PremiumLease';
  }, []);

  const values: Value[] = [
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We put our clients' needs first, ensuring personalized service and tailored solutions."
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Transparency",
      description: "We operate with honesty and clear communication in all our business practices."
    },
    {
      icon: Award,
      title: "Quality & Excellence",
      description: "We maintain high standards in our properties and services, exceeding expectations."
    },
    {
      icon: TrendingUp,
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
    {
      icon: Building2,
      value: "5000+",
      label: "Properties Managed"
    },
    {
      icon: UserCheck,
      value: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: Target,
      value: "15000+",
      label: "Successful Leases"
    },
    {
      icon: TrendingUp,
      value: "35%",
      label: "YoY Growth"
    },
    {
      icon: MapPin,
      value: "25+",
      label: "Cities Served"
    }
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
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight drop-shadow-xl">
              Transforming the property leasing experience with unmatched expertise and personalized service since 2010
            </h1>
            <p className="text-lg text-white/90 mb-10 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
              We're committed to finding the perfect space for every client, whether you're seeking a home, expanding your business, or looking for student housing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/properties/all"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl text-base"
              >
                Explore Properties
              </Link>
              <Link
                to="/contact"
                className="bg-white/15 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/25 transition-all shadow-xl hover:shadow-2xl text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Video Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/20 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Company Overview Video Thumbnail"
              className="w-full h-[500px] object-cover transform scale-105 group-hover:scale-100 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play size={48} className="text-white ml-2" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white z-20">
              <h3 className="text-3xl font-bold mb-3 drop-shadow-xl text-white/95">Our Journey to Excellence</h3>
              <p className="text-lg text-white/90 max-w-2xl drop-shadow-lg">Learn how we've transformed property leasing over the past decade</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-xl space-y-8 max-w-none w-full">
              <div>
                <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  Our Story
                </span>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Committed to Excellence in Property Leasing</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-blue-900/90 text-lg leading-relaxed">
                  Founded in 2010, PremiumLease began with a simple mission: to transform the property leasing experience by combining exceptional spaces with outstanding service. What started as a small operation has grown into a comprehensive leasing company serving diverse clients across residential, commercial, and student markets.
                </p>
                <p className="text-blue-900/90 text-lg leading-relaxed">
                  Our team of experienced professionals is dedicated to understanding the unique needs of each client, whether they're searching for their first apartment, expanding their business, or looking for the perfect student housing solution. We take pride in our personalized approach and commitment to excellence.
                </p>
              </div>
              
              <div className="pt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg hover:shadow-xl">
                  Start Your Journey With Us
                  <TrendingUp size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact & Values */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4">
          {/* Metrics Subsection */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <span className="inline-block bg-white/15 backdrop-blur-sm text-white/90 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                Our Impact
              </span>
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">PremiumLease by the Numbers</h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
                Our impact in the property leasing industry
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all transform hover:scale-105">
                  <metric.icon size={32} className="text-white/90 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">{metric.value}</div>
                  <div className="text-white/80 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Subsection */}
          <div>
            <div className="text-center mb-16">
              <span className="inline-block bg-white/15 backdrop-blur-sm text-white/90 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                Our Core Values
              </span>
              <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
                What Drives Us Forward
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Our values shape every interaction and decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white hover:bg-white/15 transition-all transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="bg-white/15 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <value.icon className="text-white/95" size={40} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white/95 drop-shadow-lg">{value.title}</h3>
                  <p className="text-white/90 leading-relaxed drop-shadow-md">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
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
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
              Ready to Find Your Perfect Space?
            </h2>
            <p className="text-white/90 text-base max-w-2xl mx-auto leading-relaxed">
              Whether you're looking for a new home, expanding your business, or seeking student housing, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <Link
              to="/student-housing"
              className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-blue-900">Find Student Housing</h3>
            </Link>
            <Link
              to="/commercial"
              className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-blue-900">Explore Commercial Properties</h3>
            </Link>
            <Link
              to="/residential"
              className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-blue-900">View Residential Options</h3>
            </Link>
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">Quick Inquiry Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
                />
              </div>
              <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all">
                <option value="">Select Property Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="student">Student Housing</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={3}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2.5 rounded-md font-semibold hover:bg-blue-800 transition-all shadow-md hover:shadow-lg text-sm"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;