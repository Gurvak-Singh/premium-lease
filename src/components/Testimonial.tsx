import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  position: string;
  quote: string;
  rating?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, position, quote, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {rating && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
      )}
      <blockquote className="text-gray-600 italic mb-4">{quote}</blockquote>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-blue-800 text-sm">{position}</p>
      </div>
    </div>
  );
};

export default Testimonial;
