import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Clock, CreditCard, Users } from 'lucide-react';

const StudentPrograms = () => {
  const programs = [
    {
      icon: <CreditCard size={24} className="text-blue-500" />,
      title: "Flexible Payment Plans",
      description: "Tailor your payments to match your financial aid disbursement schedule."
    },
    {
      icon: <Users size={24} className="text-blue-500" />,
      title: "Roommate Matching",
      description: "Find compatible roommates with our specialized matching system."
    },
    {
      icon: <Clock size={24} className="text-blue-500" />,
      title: "Academic Year Leases",
      description: "Leases aligned with your school calendar, not the calendar year."
    },
    {
      icon: <GraduationCap size={24} className="text-blue-500" />,
      title: "Student Discounts",
      description: "Special rates and move-in offers exclusively for enrolled students."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-700 text-blue-100 px-4 py-1 rounded-full text-sm font-semibold mb-3">
            For Students
          </span>
          <h2 className="text-3xl font-bold mb-4">Student Leasing Programs</h2>
          <p className="max-w-2xl mx-auto text-blue-100">
            Specialized leasing options designed specifically for students, making your housing experience stress-free and affordable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="bg-blue-800/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-blue-100">{program.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            to="/student-programs"
            className="inline-block bg-blue-100 hover:bg-white text-blue-900 px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            Explore Student Offers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentPrograms;