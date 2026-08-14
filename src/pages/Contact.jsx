import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { courses, optionalSubjects } from '../data/courses';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', course: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Have questions about our courses or want to book a free counseling session? Reach out to us.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-5 sm:p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-navy-900" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-600 hover:text-gold transition-colors break-all">{contactInfo.phone}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-navy-900" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-gold transition-colors break-all">{contactInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-navy-900" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <p className="text-gray-600">{contactInfo.officeHours}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-navy-900 flex-shrink-0" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-5 sm:p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 relative">
              {isSubmitted && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-xl border border-green-200">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center px-6">Thank you for reaching out. Our counsellor will get back to you shortly.</p>
                </div>
              )}

              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">Send an Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Interested Course *</label>
                    <select 
                      id="course" 
                      name="course" 
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                    >
                      <option value="" disabled>Select a course</option>
                      <optgroup label="Main Courses">
                        {courses.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                      </optgroup>
                      <optgroup label="Optional Subjects">
                        {optionalSubjects.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    placeholder="Tell us about your preparation goals..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full flex justify-center items-center">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-gray-200 rounded-xl h-96 w-full flex items-center justify-center border border-gray-300 overflow-hidden relative">
           <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-semibold bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=New+Delhi&zoom=13&size=1200x400&maptype=roadmap&sensor=false')] bg-cover opacity-50"></div>
           <div className="relative z-10 bg-white px-6 py-3 rounded-md shadow-md text-navy-900 font-semibold border border-gray-100 flex items-center">
             <MapPin className="w-5 h-5 text-gold mr-2" /> Google Maps Integration
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
