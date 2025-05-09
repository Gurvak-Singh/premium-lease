import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Finding the perfect apartment was so easy with PremiumLease. Their team was attentive to my needs and found me exactly what I was looking for. The online portal made the application process seamless.",
    author: "Sarah Johnson",
    role: "Apartment Resident",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    id: 2,
    content: "As a business owner, finding the right commercial space was crucial. PremiumLease understood my requirements and presented me with perfect options. Their commercial team's knowledge of the market was impressive.",
    author: "Michael Rodriguez",
    role: "Business Owner",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    id: 3,
    content: "The student housing program was exactly what I needed during my graduate studies. Affordable, close to campus, and the roommate matching service helped me find compatible housemates.",
    author: "Emily Chen",
    role: "Graduate Student",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="text-gray-600 mt-2">Hear from people who have found their perfect space with us</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-8 -left-8 opacity-20">
            <Quote size={64} className="text-blue-800" />
          </div>
          
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="mb-6">
              <p className="text-lg text-gray-700 italic">
                "{testimonials[currentIndex].content}"
              </p>
            </div>
            
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].author}
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} className="text-gray-700" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} className="text-gray-700" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-colors ${
                  index === currentIndex ? 'bg-blue-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;