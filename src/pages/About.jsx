import React from 'react';
import { Target, Lightbulb, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">About Saraswati IAS</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted partner in the journey to clear the Civil Services Examination.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
              alt="Institute Building" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Saraswati IAS was founded with a single, clear vision: to provide quality guidance and structured preparation for aspirants aiming for the Civil Services Examination. 
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Over the years, we have built a reputation for academic excellence, dedicated mentorship, and a student-first approach. We believe that with the right strategy, consistent effort, and expert guidance, any aspirant can achieve their dream.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-gold pl-4">
                <h4 className="text-2xl font-bold text-navy-900">25+</h4>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <h4 className="text-2xl font-bold text-navy-900">10k+</h4>
                <p className="text-sm text-gray-500">Students Guided</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-gold rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower aspirants with the right knowledge, analytical skills, and ethical foundation required to excel in the Civil Services Examination and serve the nation effectively.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-gold rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and result-oriented coaching institute in India, recognized for our commitment to student success and academic rigor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4">
          <Award className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold font-poppins mb-6">Be a Part of Our Success Story</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Saraswati IAS and take the first step towards a prestigious career in the Civil Services.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
