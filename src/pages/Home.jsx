import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Target, Award, CheckCircle, MapPin } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import FacultyCard from '../components/FacultyCard';
import TestimonialCard from '../components/TestimonialCard';
import { courses, optionalSubjects } from '../data/courses';
import { faculty } from '../data/faculty';
import { testimonials } from '../data/testimonials';
import { contactInfo } from '../data/contact';

const heroImages = [
  '/channel-banner.png',
  '/s4r.webp',
  '/slider4.webp'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4500); // 4.5 seconds display time
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white overflow-hidden py-16 lg:py-24">
        {/* Subtle Gradient Background instead of duplicate image */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-blue-900/80 to-navy-900 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-4/12 lg:pr-4 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-bold font-poppins mb-4 leading-tight fade-up">
              Prepare for UPSC with the <br className="hidden lg:block" />
              <span className="text-gold">Right Guidance</span>
            </h1>
            <p className="text-sm lg:text-base text-gray-200 mb-6 max-w-lg mx-auto lg:mx-0 fade-up" style={{ animationDelay: '0.2s' }}>
              Structured courses, experienced faculty, comprehensive study material, and focused mentorship to help you move closer to your Civil Services dream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/courses" className="btn-primary">
                Explore Courses
              </Link>
              <Link to="/contact" className="btn-secondary text-white border-white bg-transparent hover:bg-white hover:text-navy-900">
                Book Free Counselling
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-8/12 mt-4 lg:mt-0 fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 max-w-5xl mx-auto group">
              <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px]">
                {heroImages.map((imgSrc, index) => (
                  <img 
                    key={index}
                    src={imgSrc}
                    alt="" 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      currentImageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Pagination Bubbles */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index ? 'bg-gold w-6' : 'bg-white/50 w-2 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statistics */}
      <section className="relative z-20 -mt-10 mb-4 container mx-auto px-4">
        <div className="py-10 md:py-12 bg-white rounded-xl shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-50 text-gold rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 font-poppins">25+</h3>
            <p className="text-gray-500 text-sm">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-50 text-gold rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 font-poppins">Proven</h3>
            <p className="text-gray-500 text-sm">Track Record</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-50 text-gold rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 font-poppins">Expert</h3>
            <p className="text-gray-500 text-sm">Faculty Team</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-50 text-gold rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 font-poppins">Specialized</h3>
            <p className="text-gray-500 text-sm">Course Programs</p>
          </div>
        </div>
      </div>
    </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy-900 mb-4">Why Choose Saraswati IAS?</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600">We provide a holistic learning environment tailored for the rigorous demands of the Civil Services Examination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Experienced Faculty', desc: 'Learn from experienced educators and subject experts.' },
              { title: 'Structured Preparation', desc: 'Clear preparation strategy from foundation to examination.' },
              { title: 'Study Material', desc: 'Well-organized resources for effective preparation.' },
              { title: 'Personal Guidance', desc: 'Focused mentorship and academic support.' },
              { title: 'Test Series', desc: 'Practice-oriented preparation with regular assessments.' },
              { title: 'Competitive Environment', desc: 'Study alongside serious Civil Services aspirants.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <CheckCircle className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-navy-900 font-poppins mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy-900 mb-4">Our Programs</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600">Comprehensive courses designed to cover every aspect of your preparation journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.slice(0, 3).map((course, idx) => (
              <CourseCard key={idx} course={course} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/courses" className="btn-secondary group">
              View All Programs <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy-900 mb-4">Student Success Stories</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600">Hear from our students about their experience and preparation journey with Saraswati IAS.</p>
          </div>

          {/* Mobile: Vertical stack, Desktop: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="h-full">
                <TestimonialCard testimonial={test} />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Location / Google Maps Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy-900 mb-4">Find Us</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-gray-600">Visit us at our coaching centre in Gorakhpur. We're easy to find!</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 max-w-5xl mx-auto">
            {/* Map Header */}
            <div className="bg-navy-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-white font-semibold text-sm">Saraswati IAS — Gorakhpur</span>
              </div>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-gold text-white px-3 py-1.5 rounded-md font-semibold hover:bg-orange-500 transition-colors flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" /> Open in Google Maps
              </a>
            </div>

            {/* Iframe */}
            <iframe
              title="Saraswati IAS Gorakhpur Location"
              src={contactInfo.mapsEmbed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />

            {/* Address strip */}
            <div className="bg-white px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-sm text-gray-500 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                {contactInfo.address}
              </p>
              <Link
                to="/contact"
                className="flex-shrink-0 text-xs bg-navy-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-900 transition-colors"
              >
                Get Directions &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
