import React from 'react';
import { Quote, Trophy } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  // Get initials from name
  const initials = testimonial.name
    .split(' ')
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden">

      {/* Top achievement banner */}
      <div className="bg-navy-900 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-gold flex-shrink-0" />
          <span className="text-gold font-bold text-sm tracking-wide">{testimonial.achievement}</span>
        </div>
        {testimonial.rank && (
          <span className="bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full">
            Rank {testimonial.rank}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Quote icon */}
        <div className="mb-4">
          <Quote className="w-8 h-8 text-gold/30 fill-gold/20" />
        </div>

        {/* Review text */}
        <p className="text-gray-600 italic leading-relaxed flex-1 text-sm">
          "{testimonial.review}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
          {/* Initials avatar */}
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-white font-black text-sm">{initials}</span>
          </div>
          <div>
            <h4 className="font-bold font-poppins text-navy-900 text-sm">{testimonial.name}</h4>
            <p className="text-xs text-gray-400 font-medium">{testimonial.achievement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

