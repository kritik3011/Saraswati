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
    const { name, value } = e.target;
    if (name === 'phone') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      if (onlyNums.length <= 10) {
        setFormData({ ...formData, [name]: onlyNums });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the message body
    const messageBody = `New Enquiry from Saraswati IAS Website:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Course: ${formData.course}
Message: ${formData.message}`;

    // Construct URLs
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(messageBody)}`;
    const emailUrl = `mailto:${contactInfo.email}?subject=New Enquiry - ${formData.name}&body=${encodeURIComponent(messageBody)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Open Email client
    window.location.href = emailUrl;

    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', course: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
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
                    <a href={`tel:${contactInfo.phone}`} className="block text-gray-600 hover:text-gold transition-colors break-all">{contactInfo.phone}</a>
                    <a href={`tel:${contactInfo.phone2}`} className="block text-gray-600 hover:text-gold transition-colors break-all">{contactInfo.phone2}</a>
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
                    <a
                      href={contactInfo.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gold transition-colors text-sm leading-relaxed block"
                    >
                      {contactInfo.address}
                    </a>
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
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      minLength="10"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
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
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full flex justify-center items-center">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Live Google Maps */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
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
          <iframe
            title="Saraswati IAS Location"
            src={contactInfo.mapsEmbed}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          />
          <div className="bg-white px-6 py-3 border-t border-gray-100">
            <p className="text-sm text-gray-500 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              {contactInfo.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
