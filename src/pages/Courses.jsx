import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { courses, optionalSubjects } from '../data/courses';

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">Our Programs</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Comprehensive preparation programs designed to guide you from the foundation stage to final selection.
          </p>
        </div>

        {/* Main Courses */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-8 border-l-4 border-gold pl-4">Civil Services Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Optional Subjects */}
        <div>
          <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-8 border-l-4 border-gold pl-4">Optional Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optionalSubjects.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
        
        {/* Help CTA */}
        <div className="mt-20 bg-navy-900 text-white p-10 rounded-2xl text-center shadow-xl">
          <h3 className="text-3xl font-bold font-poppins mb-4">Not Sure Which Course to Choose?</h3>
          <p className="mb-8 max-w-2xl mx-auto text-gray-300">
            Our expert counsellors can help you understand the examination pattern and recommend the best program based on your current preparation level.
          </p>
          <Link to="/contact" className="btn-primary">
            Request a Callback
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
