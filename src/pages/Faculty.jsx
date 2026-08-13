import React from 'react';
import FacultyCard from '../components/FacultyCard';
import { faculty } from '../data/faculty';

const Faculty = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">Our Expert Faculty</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Learn from the best. Our educators bring years of experience and deep subject matter expertise to help you master the UPSC syllabus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {faculty.map((member) => (
            <FacultyCard key={member.id} faculty={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
