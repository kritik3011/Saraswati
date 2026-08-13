import React from 'react';

const FacultyCard = ({ faculty }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="h-64 overflow-hidden">
        <img 
          src={faculty.imageUrl} 
          alt={faculty.name} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold font-poppins text-navy-900 mb-1">{faculty.name}</h3>
        <p className="text-gold font-semibold text-sm mb-3">Faculty - {faculty.subject}</p>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {faculty.description}
        </p>
        <div className="pt-4 border-t border-gray-100">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{faculty.experience}</span>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
