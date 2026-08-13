import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
      <div className="p-6 flex-grow">
        <div className="w-12 h-12 bg-blue-50 text-navy-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
          <BookOpen className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold font-poppins text-navy-900 mb-3">{course.title}</h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {course.shortDescription}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Clock className="w-4 h-4 mr-2" />
          <span>Duration: {course.duration}</span>
        </div>
      </div>
      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 group-hover:bg-gold transition-colors duration-300">
        <Link 
          to={`/courses/${course.slug}`} 
          className="flex items-center text-navy-900 font-semibold group-hover:text-white transition-colors duration-300"
        >
          View Details <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
