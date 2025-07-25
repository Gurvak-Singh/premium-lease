import { useEffect } from 'react';
import { GraduationCap, Users, Clock, CreditCard, Shield, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import PropertyCard from '../components/PropertyCard';
import { studentProperties } from '../data/properties';

const StudentProgramsPage = () => {
  useEffect(() => {
    document.title = 'Student Leasing Programs | PremiumLease';
  }, []);

  const benefits = [
    {
      icon: <CreditCard size={32} className="text-blue-800" />,
      title: "Flexible Payment Plans",
      description: "Align your rent payments with financial aid disbursements. We offer semester-based payment schedules to match your academic calendar."
    },
    {
      icon: <Users size={32} className="text-blue-800" />,
      title: "Roommate Matching",
      description: "Find compatible roommates with our specialized matching system based on study habits, lifestyle preferences, and academic focus."
    },
    {
      icon: <Clock size={32} className="text-blue-800" />,
      title: "Academic Year Leases",
      description: "Our leases align with your school calendar, not the calendar year. No more paying rent during summer months if you're not in town."
    },
    {
      icon: <Shield size={32} className="text-blue-800" />,
      title: "Parental Guarantees",
      description: "Simplified approval process with parental guarantees, making it easier for students with limited credit history to qualify."
    }
  ];

  const campuses = [
    {
      name: "University Heights",
      distance: "0.5 miles from campus",
      features: ["Shuttle service to campus", "Study lounges", "High-speed internet"]
    },
    {
      name: "College Park Residences",
      distance: "Walking distance to campus",
      features: ["24/7 security", "On-site laundry", "Fitness center"]
    },
    {
      name: "Academic Village",
      distance: "1 mile from campus",
      features: ["Group study rooms", "Quiet hours policy", "Resident events"]
    }
  ];

  return (
    <div>
      {/* Modern Header with Overlay - Seamless connection with navbar */}
      <div className="relative overflow-hidden mt-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/8199422/pexels-photo-8199422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Students studying" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <span className="bg-blue-600 h-1 w-12 rounded-full mr-4"></span>
                <span className="text-blue-200 uppercase tracking-wider font-medium">Student Housing Solutions</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                <span className="text-white drop-shadow-md">Your Academic Success </span>
                <span className="text-blue-300">Starts With Great Housing</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-10 max-w-xl">
                Specialized housing solutions designed for student life, with flexible leases and amenities that support your academic journey.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#student-properties" className="bg-white text-blue-900 px-8 py-4 rounded-md font-medium hover:bg-blue-50 transition-colors shadow-lg">
                  View Properties
                </a>
                <a href="#apply" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white/20 transition-colors">
                  Apply Now
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-95 hidden lg:block">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Application</h2>
              <p className="text-gray-600 mb-6">Get started with your student housing application in minutes.</p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700 mb-2 text-sm font-medium">First Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 mb-2 text-sm font-medium">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-sm font-medium">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 text-sm font-medium">University/College</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                <button className="w-full bg-blue-800 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Get Housing Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Benefits for Students</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our student leasing programs are designed with your academic success in mind, offering flexibility and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Proximity Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Near Campus Options</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Properties conveniently located near major university campuses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{campus.name}</h3>
                <div className="flex items-center text-blue-800 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span>{campus.distance}</span>
                </div>
                <ul className="space-y-2">
                  {campus.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <CheckCircle2 size={16} className="text-green-600 mr-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Academic Lease Schedule</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our leases are designed to align with the academic calendar
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-800 p-6 rounded-lg text-center">
                <Calendar size={32} className="mx-auto mb-3 text-white/90" />
                <h3 className="text-xl font-semibold mb-2 text-white/95 drop-shadow-lg">Fall-Spring Lease</h3>
                <p className="text-white/90">August - May (9 months)</p>
                <p className="text-white/80 text-sm mt-2">Most popular option</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                <Calendar size={32} className="mx-auto mb-3 text-blue-800" />
                <h3 className="text-xl font-semibold mb-2">Full Academic Year</h3>
                <p className="text-gray-600">August - August (12 months)</p>
                <p className="mt-2 text-gray-500">Best value option</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-all">
                <Calendar size={32} className="mx-auto mb-3 text-blue-800" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Semester Lease</h3>
                <p className="text-gray-600">Per semester (4-5 months)</p>
                <p className="text-gray-500 text-sm mt-2">For exchange students</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <GraduationCap size={24} className="text-blue-800 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Special Graduate Student Options</h3>
                  <p className="text-gray-600">
                    We offer extended leases for graduate students that accommodate research schedules and comprehensive exams. Contact us for customized solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Properties */}
      <section id="student-properties" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Student Properties</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Browse our selection of properties ideal for students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Apply?</h2>
              <p className="text-gray-600 mb-6">
                Complete our simple application process to find your perfect student housing solution. Our team is ready to assist you with finding roommates, selecting the right property, and setting up your lease.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-3 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Submit Application</h3>
                    <p className="text-gray-600">Complete the form with your basic information and housing preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-3 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Property Matching</h3>
                    <p className="text-gray-600">Our team will help match you with properties that fit your needs and budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Lease Signing</h3>
                    <p className="text-gray-600">Complete your lease online or in person with the help of our leasing specialists.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                <p className="text-yellow-800 font-medium">
                  Limited spaces available for the upcoming academic year. Apply early to secure your preferred property!
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Student Leasing Application</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentProgramsPage;