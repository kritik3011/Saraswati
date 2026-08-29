import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses, optionalSubjects } from '../data/courses';
import { BookOpen, CheckCircle, Clock, FileText, Target, Users } from 'lucide-react';
import NotFound from './NotFound';

const CourseDetails = () => {
  const { slug } = useParams();
  
  // Find course in both main courses and optional subjects
  const course = [...courses, ...optionalSubjects].find(c => c.slug === slug);

  if (!course) {
    return <NotFound />;
  }

  return (
    <div>
      {/* Course Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block border border-gold/30">
              Program Details
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {course.shortDescription}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-10">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gold" />
                <span>Duration: {course.duration}</span>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-gold" />
                <span>Target Year: 2026/2027</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary">
                Enroll Now
              </Link>
              <a href="#syllabus" className="btn-secondary text-white border-white bg-transparent hover:bg-white hover:text-navy-900">
                View Syllabus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
          
          {/* Main Content (Left) */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-5 sm:p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-6 border-b pb-4">Course Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                {course.overview || `The ${course.title} program is meticulously designed to provide a comprehensive and structured approach to your preparation. At Saraswati IAS, we believe in building strong fundamentals while simultaneously developing the analytical skills required for the examination.\n\nThis program includes extensive classroom sessions, regular doubt-clearing, dedicated answer writing practice, and full-length mock tests to ensure you are exam-ready.`}
              </p>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-6 border-b pb-4">Key Features</h2>
              <ul className="space-y-4">
                {(course.features || [
                  'Comprehensive coverage of syllabus',
                  'Updated study material aligned with the latest pattern',
                  'Regular answer writing practice sessions',
                  'Personalized mentorship and performance tracking',
                  'Integrated Test Series (Prelims + Mains)'
                ]).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="syllabus" className="bg-white p-5 sm:p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              {course.detailedSyllabus ? (
                <>
                  <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-6 border-b pb-4">Detailed Syllabus</h2>
                  <div className="space-y-6">
                    {course.detailedSyllabus.map((section, idx) => (
                      <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                        <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-4 flex items-start">
                          <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-gold mr-3 flex-shrink-0 mt-0.5" />
                          <span>{section.title}</span>
                        </h3>
                        <ul className="space-y-3">
                          {section.topics.map((topic, topicIdx) => (
                            <li key={topicIdx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold font-poppins text-navy-900 mb-6 border-b pb-4">Subjects Covered</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(course.subjects || ['History & Culture', 'Geography', 'Indian Polity & Governance', 'Economy', 'Science & Technology', 'Environment', 'International Relations', 'Ethics & Aptitude']).map((subject, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <BookOpen className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 sticky top-28">
              <h3 className="text-xl font-bold font-poppins text-navy-900 mb-4">Course Highlights</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-10 h-10 bg-blue-50 text-navy-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Faculty</h4>
                    <p className="text-sm text-gray-500">Learn from top educators</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 bg-blue-50 text-navy-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Study Material</h4>
                    <p className="text-sm text-gray-500">Comprehensive printed notes</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 bg-blue-50 text-navy-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Test Series</h4>
                    <p className="text-sm text-gray-500">Regular assessment</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <Link to="/contact" className="btn-primary w-full text-center mb-4">
                  Talk to a Counsellor
                </Link>
                <p className="text-center text-xs text-gray-500">
                  Got questions? We're here to help you choose the right path.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
