import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Target, Award, CheckCircle, MapPin } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import FacultyCard from '../components/FacultyCard';
import TestimonialCard from '../components/TestimonialCard';
import { courses, optionalSubjects } from '../data/courses';
import { faculty } from '../data/faculty';
import { testimonials } from '../data/testimonials';
import { contactInfo } from '../data/contact';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-blue-900 opacity-90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold font-poppins mb-6 leading-tight fade-up">
              Prepare for UPSC with the <span className="text-gold">Right Guidance</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 fade-up" style={{ animationDelay: '0.2s' }}>
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
          
          <div className="w-full lg:w-1/2 fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200" 
                alt="Students studying" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl">
                  <p className="text-white font-semibold flex items-center text-xs sm:text-base">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-gold mr-2 sm:mr-3 flex-shrink-0" />
                    <span>Join the ranks of successful civil servants</span>
                  </p>
                </div>
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
            <h3 className="text-2xl font-bold text-navy-900 font-poppins">10,000+</h3>
            <p className="text-gray-500 text-sm">Students Guided</p>
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
            <h3 className="text-2xl font-bold text-navy-900 font-poppins">30+</h3>
            <p className="text-gray-500 text-sm">Comprehensive Courses</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <TestimonialCard key={idx} testimonial={test} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy-900 mb-6">Ready to Begin Your Civil Services Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get expert guidance and choose the right preparation program for your goals. Talk to our counsellors today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="btn-primary">
              Book Free Counselling
            </Link>
            <Link to="/courses" className="btn-secondary">
              Explore Courses
            </Link>
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
