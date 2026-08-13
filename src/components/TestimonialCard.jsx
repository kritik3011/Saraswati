import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative mt-8">
      <div className="absolute -top-6 left-8">
        <div className="bg-gold text-white p-3 rounded-full shadow-md">
          <Quote className="w-6 h-6 fill-current" />
        </div>
      </div>
      <p className="text-gray-600 mb-6 italic leading-relaxed pt-4">
        "{testimonial.review}"
      </p>
      <div className="flex items-center">
        <img 
          src={testimonial.imageUrl} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-100"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold font-poppins text-navy-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.course}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
